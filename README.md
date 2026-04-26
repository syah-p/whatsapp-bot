# 🤖 EVERLAND MD - WhatsApp Bot

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)

## 📋 Overview

**EVERLAND MD** is a feature-rich WhatsApp bot built with Baileys and Node.js. It includes **100+ commands** across multiple categories including downloads, search, tools, stickers, media editing, fun, admin controls, and more.

**Owner**: byRaffW!thYou

### ✨ Key Features

- ✅ **100+ Commands** - Extensive command library
- 📥 **Download Commands** - YouTube, TikTok, Instagram, etc.
- 🔍 **Search Features** - Google, YouTube, Weather, News
- 🛠️ **Utility Tools** - QR codes, Base64, Hash, Calculator
- 🎨 **Sticker Maker** - Create stickers from images
- 📸 **Media Editor** - Compress, enhance, colorize images
- 🎮 **Fun Commands** - Jokes, memes, games, quotes
- ⚙️ **Admin Tools** - Group management, moderation
- 👑 **Owner Commands** - Bot control and broadcast
- 📊 **Info Commands** - Bot status, statistics
- 🔒 **Rate Limiting** - Prevent abuse
- 📱 **Works Everywhere** - DMs and Groups

---

## 🚀 Installation

### Prerequisites

- Node.js v16.0.0 or higher
- npm or yarn
- WhatsApp account

### Step 1: Clone Repository

```bash
git clone https://github.com/syah-p/whatsapp-bot.git
cd whatsapp-bot
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
BOT_NAME=EVERLAND MD
BOT_OWNER=byRaffW!thYou
BOT_PREFIX=.
BOT_OWNER_NUMBER=628xxx
RATE_LIMIT=30
DEBUG=false
```

### Step 4: Start Bot

```bash
npm start
```

You'll see a QR code in your terminal. Scan it with WhatsApp on your phone.

---

## 📚 Command Categories

### 📥 Download Commands (12 commands)

```
.ytmp3 - YouTube to MP3
.ytmp4 - YouTube to MP4
.tiktok - TikTok Download
.instagram - Instagram Download
.facebook - Facebook Video
.twitter - Twitter Media
.spotify - Spotify Track
.soundcloud - SoundCloud Track
.apk - APK Download
.play - Music Play
.mediafire - MediaFire Download
.twitch - Twitch Stream
```

### 🔍 Search Commands (12 commands)

```
.google - Google Search
.youtube - YouTube Search
.image - Image Search
.pinterest - Pinterest Search
.weather - Weather Info
.news - Latest News
.anime - Anime Search
.manga - Manga Search
.movie - Movie Search
.wiki - Wikipedia Search
.lyrics - Song Lyrics
.shopee - Shopee Products
```

### 🛠️ Tool Commands (12 commands)

```
.translate - Translate Text
.qr - Generate QR Code
.base64 - Encode Base64
.decode64 - Decode Base64
.hash - SHA256 Hash
.calc - Calculator
.shorturl - Shorten URL
.whois - WHOIS Lookup
.ipinfo - IP Information
.carbon - Code Screenshot
.timer - Set Timer
```

### 🎨 Sticker Commands (8 commands)

```
.sticker - Image to Sticker
.wm - Add Watermark
.smeme - Sticker Meme
.tovideo - Sticker to Video
.toimage - Sticker to Image
.stickerinfo - Sticker Info
.glow - Glow Effect
.blur - Blur Effect
```

### 📸 Media Commands (9 commands)

```
.tourl - Image to URL
.compress - Compress Image
.remini - Enhance Quality
.colorize - Colorize B&W
.invert - Invert Colors
.rotate - Rotate Image
.resize - Resize Image
.upscale - Upscale Image
.toedit - Prepare for Edit
```

### 🎮 Fun Commands (12 commands)

```
.jokes - Random Joke
.meme - Random Meme
.quote - Inspirational Quote
.anime - Anime Character
.waifu - Anime Girl
.dice - Roll Dice
.rps - Rock Paper Scissors
.coin - Coin Flip
.trivia - Trivia Question
.8ball - Magic 8 Ball
.roast - Roast Someone
.compliment - Compliment
```

### ⚙️ Admin Commands (15 commands)

```
.close - Close Group
.open - Open Group
.mute - Mute Group
.unmute - Unmute Group
.kick - Remove Member
.promote - Make Admin
.demote - Remove Admin
.hidetag - Hidden Tag
.gc - Group Info
.setname - Change Group Name
.setdesc - Change Description
.setpp - Change Group Picture
.delete - Delete Message
.pin - Pin Message
.lock - Lock Settings
.unlock - Unlock Settings
```

### 👑 Owner Commands (10 commands)

```
.owner - Owner Info
.join - Join Group
.leave - Leave Group
.broadcast - Send to All
.restart - Restart Bot
.update - Update Bot
.eval - Execute Code
.shell - Execute Shell
.cleardb - Clear Database
.logs - View Logs
```

### ℹ️ Info Commands (10 commands)

```
.menu - Full Menu
.help - Help Menu
.quickmenu - Quick Menu
.ping - Bot Ping
.uptime - Bot Uptime
.status - Bot Status
.botinfo - Bot Info
.version - Version Info
.stats - Bot Statistics
.runtime - Runtime Info
```

### 👤 User Commands (10 commands)

```
.user - Your Profile
.profile - Profile Picture
.hello - Greet
.repeat - Echo Text
.ok - Acknowledgment
.alay - Alay Text
.randomname - Random Name
.id - Your ID
.gid - Group ID
.date - Current Date
```

### 👥 Group Commands (8 commands)

```
.members - Member List
.membercount - Count Members
.admins - Admin List
.gicon - Group Icon
.gdesc - Group Desc
.gname - Group Name
.reset - Reset Link
.linksettings - Link Settings
```

### ⭐ Other Commands (5 commands)

```
.owner - Contact Owner
.script - Get Script
.donate - Donation Info
.socmed - Social Media
.github - GitHub Profile
.invite - Bot Invite
```

---

## 💡 Usage Examples

### Download Music

```
.ytmp3 https://youtube.com/watch?v=dQw4w9WgXcQ
```

### Search Google

```
.google how to learn programming
```

### Create Sticker

```
1. Send an image
2. Reply with: .sticker
```

### Generate QR Code

```
.qr https://github.com/syah-p
```

### Play Game

```
.rps rock
```

### Admin Command

```
.kick @username
```

---

## ⚙️ Configuration

Edit `config.js` to customize:

```javascript
export const config = {
  botName: 'EVERLAND MD',           // Bot name
  ownerName: 'byRaffW!thYou',       // Owner name
  ownerNumber: '628xxx',             // Owner number
  prefix: '.',                       // Command prefix
  rateLimit: 30,                     // Commands per second
  debug: false,                      // Debug mode
};
```

---

## 📁 Project Structure

```
whatsapp-bot/
├── main.js                 # Main bot entry point
├── config.js              # Configuration file
├── package.json           # Dependencies
├── .env.example           # Environment template
├── .gitignore            # Git ignore rules
├── README.md             # This file
├── COMMANDS.md           # Detailed command guide
└── lib/
    ├── menu.js           # Menu generator
    ├── commands.js       # Command handlers
    └── baileys-handler.js # Baileys connection
```

---

## 🔒 Security

- **Rate Limiting**: Prevents spam and abuse
- **Owner Only**: Sensitive commands restricted
- **No Data Logging**: Messages not stored
- **Encrypted Session**: WhatsApp authentication secure

---

## 🐛 Troubleshooting

### Bot Won't Connect

1. Check internet connection
2. Delete `session/` folder
3. Restart bot and scan QR again

### Commands Not Working

1. Check prefix (default: `.`)
2. Use `.menu` to see available commands
3. Verify command syntax

### API Errors

1. Check API keys in `.env`
2. Verify internet connection
3. Check API service status

---

## 📦 Dependencies

- `@whiskeysockets/baileys` - WhatsApp API
- `pino` - Logging
- `qrcode-terminal` - QR code display
- `axios` - HTTP requests
- `cheerio` - Web scraping

---

## 📝 License

MIT License - Feel free to use and modify

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

- **GitHub Issues**: Report bugs
- **Contact Owner**: Use `.owner` command in bot
- **Discussions**: Share ideas and feedback

---

## 🎓 Learning Resources

- [Baileys Documentation](https://github.com/WhiskeySockets/Baileys)
- [Node.js Guide](https://nodejs.org/en/docs/)
- [WhatsApp API](https://www.whatsapp.com/business/api/)

---

## 🎉 Credits

- **Bot Author**: byRaffW!thYou
- **Base Framework**: Baileys
- **Contributors**: Community

---

## ⚡ Quick Commands

| Command | What it does |
|---------|-------------|
| `npm start` | Start the bot |
| `npm install` | Install dependencies |
| `.menu` | Show all commands |
| `.help` | Show help menu |
| `.ping` | Check bot response |
| `.owner` | Contact owner |

---

**Made with ❤️ by byRaffW!thYou**

*EVERLAND MD - April 2026*
