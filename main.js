import makeWASocket, { DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import pino from 'pino';
import qrcodeTerminal from 'qrcode-terminal';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config, symbols } from './config.js';
import { generateMenu, generateQuickMenu, generateHelpMenu } from './lib/menu.js';
import { commands, executeCommand } from './lib/commands.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: false,
    },
  },
});

let sock = null;
const userRateLimit = new Map();

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('session');

  sock = makeWASocket({
    auth: state,
    logger,
    printQRInTerminal: false,
  });

  // QR Code Handler
  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.clear();
      console.log('\n╔════════════════════════════════════╗');
      console.log('║  ${symbols.rocket} ELAINA MD BOT - QR CODE  ${symbols.rocket}');
      console.log('╚════════════════════════════════════╝\n');
      qrcodeTerminal.generate(qr, { small: true });
      console.log('\nScan the QR code above with WhatsApp\n');
    }

    if (connection === 'connecting') {
      console.log(`${symbols.wait} Connecting to WhatsApp...`);
    }

    if (connection === 'open') {
      console.log(`${symbols.success} Bot connected successfully!`);
      console.log(`${symbols.rocket} Elaina MD Bot is running`);
      console.log(`${symbols.prefix} Prefix: ${config.prefix}`);
      console.log(`${symbols.fire} Type: ${config.prefix}menu for commands\n`);
    }

    if (connection === 'close') {
      const shouldReconnect = new Boom(lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
      if (shouldReconnect) {
        console.log(`${symbols.error} Disconnected. Reconnecting...`);
        setTimeout(connectToWhatsApp, 3000);
      } else {
        console.log(`${symbols.error} Bot logged out`);
      }
    }
  });

  // Credentials Update
  sock.ev.on('creds.update', saveCreds);

  // Message Handler
  sock.ev.on('messages.upsert', async (m) => {
    const message = m.messages[0];

    if (!message.message) return;

    const jid = message.key.remoteJid;
    const isGroup = jid.endsWith('@g.us');
    const sender = message.key.participant || jid;
    const msg = message.message.conversation || message.message.extendedTextMessage?.text || '';

    if (!msg.startsWith(config.prefix)) return;

    // Rate Limiting
    const now = Date.now();
    const userLimit = userRateLimit.get(sender) || [];
    const recentMessages = userLimit.filter((t) => now - t < 1000);

    if (recentMessages.length >= config.rateLimit) {
      await sock.sendMessage(jid, {
        text: `${symbols.error} Rate limit exceeded. Please wait a moment.`,
      });
      return;
    }

    userRateLimit.set(sender, [...recentMessages, now]);

    // Command Parsing
    const parts = msg.slice(config.prefix.length).split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    console.log(`\n${symbols.info} Command: ${cmd}`);
    console.log(`${symbols.info} From: ${sender}`);
    console.log(`${symbols.info} Chat: ${isGroup ? 'Group' : 'Private'}`);

    try {
      let response = '';

      // Menu Commands
      if (cmd === 'menu') {
        response = generateMenu();
      } else if (cmd === 'quickmenu') {
        response = generateQuickMenu();
      } else if (cmd === 'help') {
        response = generateHelpMenu();
      } else {
        // Execute Command
        response = await executeCommand(cmd, args);

        if (!response) {
          response = `${symbols.error} Command not found! Type: ${config.prefix}menu`;
        }
      }

      // Send Response
      await sock.sendMessage(jid, {
        text: response,
      });

      console.log(`${symbols.success} Response sent`);
    } catch (error) {
      console.error(`${symbols.error} Error:`, error.message);
      await sock.sendMessage(jid, {
        text: `${symbols.error} An error occurred. Please try again later.`,
      });
    }
  });

  // Group Notification Handler
  sock.ev.on('group-participants.update', async (update) => {
    console.log(`${symbols.info} Group notification: ${update.action}`);
  });
}

// Start Bot
console.log('\n╔════════════════════════════════════╗');
console.log('║  ${symbols.rocket} ELAINA MD BOT - STARTING  ${symbols.rocket}');
console.log('╚════════════════════════════════════╝\n');

connectToWhatsApp();

process.on('uncaughtException', (error) => {
  console.error(`${symbols.error} Uncaught Exception:`, error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(`${symbols.error} Unhandled Rejection at:`, promise, `reason:`, reason);
});
