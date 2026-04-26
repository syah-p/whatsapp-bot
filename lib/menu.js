import { symbols } from '../config.js';

export function generateMenu() {
  return `
╔════════════════════════════════════╗
║    ${symbols.crown} EVERLAND MD BOT - MAIN MENU ${symbols.crown}
╚════════════════════════════════════╝

${symbols.download} DOWNLOAD COMMANDS:
├ .ytmp3 - YouTube to MP3
├ .ytmp4 - YouTube to MP4
├ .tiktok - TikTok Download
├ .instagram - Instagram Download
├ .facebook - Facebook Video
├ .twitter - Twitter Media
├ .spotify - Spotify Track
├ .soundcloud - SoundCloud Track
├ .apk - APK Download
├ .play - Music Play
└ .mediafire - MediaFire Download

${symbols.search} SEARCH COMMANDS:
├ .google - Google Search
├ .youtube - YouTube Search
├ .image - Image Search
├ .pinterest - Pinterest Search
├ .weather - Weather Info
├ .news - Latest News
├ .anime - Anime Search
├ .manga - Manga Search
├ .movie - Movie Search
├ .wiki - Wikipedia Search
└ .lyrics - Song Lyrics

${symbols.tools} TOOL COMMANDS:
├ .translate - Translate Text
├ .qr - Generate QR Code
├ .base64 - Encode Base64
├ .decode64 - Decode Base64
├ .hash - SHA256 Hash
├ .calc - Calculator
├ .shorturl - Shorten URL
├ .whois - WHOIS Lookup
├ .ipinfo - IP Information
├ .carbon - Code Screenshot
└ .timer - Set Timer

${symbols.sticker} STICKER COMMANDS:
├ .sticker - Image to Sticker
├ .wm - Add Watermark
├ .smeme - Sticker Meme
├ .tovideo - Sticker to Video
├ .toimage - Sticker to Image
├ .stickerinfo - Sticker Info
├ .glow - Glow Effect
└ .blur - Blur Effect

${symbols.media} MEDIA COMMANDS:
├ .tourl - Image to URL
├ .compress - Compress Image
├ .remini - Enhance Quality
├ .colorize - Colorize B&W
├ .invert - Invert Colors
├ .rotate - Rotate Image
├ .resize - Resize Image
├ .upscale - Upscale Image
└ .toedit - Prepare for Edit

${symbols.fun} FUN COMMANDS:
├ .jokes - Random Joke
├ .meme - Random Meme
├ .quote - Inspirational Quote
├ .anime - Anime Character
├ .waifu - Anime Girl
├ .dice - Roll Dice
├ .rps - Rock Paper Scissors
├ .coin - Coin Flip
├ .trivia - Trivia Question
├ .8ball - Magic 8 Ball
├ .roast - Roast Someone
└ .compliment - Compliment

${symbols.admin} ADMIN COMMANDS:
├ .close - Close Group
├ .open - Open Group
├ .mute - Mute Group
├ .unmute - Unmute Group
├ .kick - Remove Member
├ .promote - Make Admin
├ .demote - Remove Admin
├ .hidetag - Hidden Tag
├ .gc - Group Info
├ .setname - Change Group Name
├ .setdesc - Change Description
├ .setpp - Change Group Picture
├ .delete - Delete Message
├ .pin - Pin Message
├ .lock - Lock Settings
└ .unlock - Unlock Settings

${symbols.owner} OWNER COMMANDS:
├ .owner - Owner Info
├ .join - Join Group
├ .leave - Leave Group
├ .broadcast - Send to All
├ .restart - Restart Bot
├ .update - Update Bot
├ .eval - Execute Code
├ .shell - Execute Shell
├ .cleardb - Clear Database
└ .logs - View Logs

${symbols.info} INFO COMMANDS:
├ .menu - Full Menu
├ .help - Help Menu
├ .quickmenu - Quick Menu
├ .ping - Bot Ping
├ .uptime - Bot Uptime
├ .status - Bot Status
├ .botinfo - Bot Info
├ .version - Version Info
├ .stats - Bot Statistics
└ .runtime - Runtime Info

${symbols.user} USER COMMANDS:
├ .user - Your Profile
├ .profile - Profile Picture
├ .hello - Greet
├ .repeat - Echo Text
├ .ok - Acknowledgment
├ .alay - Alay Text
├ .randomname - Random Name
├ .id - Your ID
├ .gid - Group ID
└ .date - Current Date

${symbols.group} GROUP COMMANDS:
├ .members - Member List
├ .membercount - Count Members
├ .admins - Admin List
├ .gicon - Group Icon
├ .gdesc - Group Desc
├ .gname - Group Name
├ .leave - Leave Group
├ .reset - Reset Link
└ .linksettings - Link Settings

${symbols.other} OTHER COMMANDS:
├ .owner - Contact Owner
├ .script - Get Script
├ .donate - Donation Info
├ .socmed - Social Media
├ .github - GitHub Profile
└ .invite - Bot Invite

╔════════════════════════════════════╗
║  ${symbols.star} Total Commands: 100+ ${symbols.star}
║  ${symbols.fire} Type .help for more info ${symbols.fire}
║  ${symbols.crown} Made by byRaffW!thYou ${symbols.crown}
╚════════════════════════════════════╝
`;
}

export function generateQuickMenu() {
  return `
${symbols.rocket} QUICK MENU - EVERLAND MD

${symbols.download} Downloads: .ytmp3 .ytmp4 .tiktok .instagram .facebook
${symbols.search} Search: .google .youtube .image .weather .news
${symbols.tools} Tools: .translate .qr .base64 .hash .calc
${symbols.sticker} Sticker: .sticker .wm .smeme .tovideo .toimage
${symbols.media} Media: .tourl .compress .remini .colorize .invert
${symbols.fun} Fun: .jokes .meme .quote .anime .waifu .rps
${symbols.admin} Admin: .close .open .kick .promote .demote
${symbols.owner} Owner: .join .leave .broadcast .restart
${symbols.info} Info: .menu .help .ping .status .botinfo

Type .menu for full menu!

${symbols.crown} Made by byRaffW!thYou
`;
}

export function generateHelpMenu() {
  return `
${symbols.info} HELP MENU - EVERLAND MD

How to use commands:

1. All commands start with: .
2. Some commands need arguments
3. Use @mention or reply for user targeting
4. Works in private chat & groups

Example:
.ytmp3 <url> - Download music
.google coding - Search something
.sticker - Reply to image with .sticker

For full list, type: .menu
For quick reference: .quickmenu
For specific help: .help <command>

Need more help?
Type: .owner to contact owner

${symbols.crown} Made by byRaffW!thYou
`;
}

export function getCategoryMenu(category) {
  const menus = {
    download: `
${symbols.download} DOWNLOAD COMMANDS

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
    `,
    search: `
${symbols.search} SEARCH COMMANDS

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
    `,
    tools: `
${symbols.tools} TOOL COMMANDS

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
    `,
    fun: `
${symbols.fun} FUN COMMANDS

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
    `,
  };
  return menus[category] || 'Category not found!';
}
