# 📋 Complete Command Reference

## 🎯 Quick Navigation
- [Download Commands](#-download-commands)
- [Search Commands](#-search-commands)
- [Tool Commands](#-tool-commands)
- [Sticker Commands](#-sticker-commands)
- [Media Commands](#-media-commands)
- [Fun Commands](#-fun-commands)
- [Admin Commands](#-admin-commands)
- [Owner Commands](#-owner-commands)
- [Info Commands](#-info-commands)
- [User Commands](#-user-commands)

---

## 📥 Download Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.ytmp3` | `.ytmp3 <URL>` | Download YouTube video as MP3 | `.ytmp3 https://youtube.com/watch?v=...` |
| `.ytmp4` | `.ytmp4 <URL>` | Download YouTube video as MP4 | `.ytmp4 https://youtube.com/watch?v=...` |
| `.tiktok` | `.tiktok <URL>` | Download TikTok video | `.tiktok https://tiktok.com/@.../video/...` |
| `.instagram` | `.instagram <URL>` | Download Instagram post/video | `.instagram https://instagram.com/p/...` |
| `.facebook` | `.facebook <URL>` | Download Facebook video | `.facebook https://facebook.com/.../videos/...` |
| `.twitter` | `.twitter <URL>` | Download Twitter media | `.twitter https://twitter.com/.../status/...` |

**Tips:**
- Paste full video URL
- Wait for download to complete
- Works with direct share links

---

## 🔍 Search Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.google` | `.google <query>` | Search on Google | `.google how to learn coding` |
| `.youtube` | `.youtube <query>` | Search YouTube videos | `.youtube javascript tutorial` |
| `.image` | `.image <query>` | Search images online | `.image cute cats` |
| `.pinterest` | `.pinterest <query>` | Search Pinterest images | `.pinterest interior design` |
| `.weather` | `.weather <city>` | Get weather information | `.weather Jakarta` |
| `.news` | `.news` | Get latest news | `.news` |

**Tips:**
- Use specific search terms
- Search results open in browser
- Weather shows forecast

---

## 🛠️ Tool Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.translate` | `.translate <text>` | Translate text (default: English) | `.translate Halo` |
| `.qr` | `.qr <text>` | Generate QR code | `.qr https://github.com` |
| `.base64` | `.base64 <text>` | Encode to Base64 | `.base64 Hello World` |
| `.decode64` | `.decode64 <text>` | Decode from Base64 | `.decode64 SGVsbG8gV29ybGQ=` |
| `.hash` | `.hash <text>` | Generate SHA256 hash | `.hash password123` |
| `.calc` | `.calc <expression>` | Calculate expression | `.calc 2+2*5` |

**Tips:**
- Calc supports: +, -, *, /, ()
- Base64 useful for encoding data
- Hash for security verification

---

## 🎨 Sticker Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.sticker` | Reply to image/video | Convert to sticker | Reply: `.sticker` |
| `.wm` | `.wm <pack>|<author>` | Add watermark to sticker | `.wm Elaina\|syah-p` |
| `.smeme` | `.smeme <top text>` | Create meme sticker | `.smeme When you find bugs` |
| `.tovideo` | Reply to sticker | Convert sticker to video | Reply: `.tovideo` |
| `.toimage` | Reply to sticker | Convert sticker to image | Reply: `.toimage` |

**Tips:**
- Reply to media when needed
- Watermark shows in sticker pack
- Meme stickers are funny

---

## 📸 Media Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.tourl` | Reply to image | Convert image to URL | Reply: `.tourl` |
| `.compress` | Reply to image | Compress image size | Reply: `.compress` |
| `.remini` | Reply to image | Enhance image quality | Reply: `.remini` |
| `.colorize` | Reply to B&W image | Add color to B&W photo | Reply: `.colorize` |

**Tips:**
- Works with images only
- Remini upscales resolution
- Colorize for old photos

---

## 🎮 Fun Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.jokes` | `.jokes` | Get random joke | `.jokes` |
| `.meme` | `.meme` | Get random meme | `.meme` |
| `.quote` | `.quote` | Get inspirational quote | `.quote` |
| `.anime` | `.anime` | Random anime character | `.anime` |
| `.waifu` | `.waifu` | Random anime girl | `.waifu` |
| `.dice` | `.dice` | Roll a dice (1-6) | `.dice` |
| `.rps` | `.rps <choice>` | Rock-Paper-Scissors game | `.rps rock` |

**Tips:**
- RPS choices: rock, paper, scissors
- No arguments needed for most
- Fun for entertainment

---

## ⚙️ Admin Commands

**Requirements: Group admin role**

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.close` | `.close` | Close group (only admins post) | `.close` |
| `.open` | `.open` | Open group (everyone can post) | `.open` |
| `.mute` | `.mute` | Mute group notifications | `.mute` |
| `.unmute` | `.unmute` | Unmute group notifications | `.unmute` |
| `.kick` | `.kick @user` | Remove member from group | `.kick @username` |
| `.promote` | `.promote @user` | Make member group admin | `.promote @username` |
| `.demote` | `.demote @user` | Remove admin privileges | `.demote @username` |
| `.hidetag` | `.hidetag <text>` | Send hidden tag message | `.hidetag hello everyone` |
| `.gc` | `.gc` | Get group information | `.gc` |

**Tips:**
- Admin commands work in groups only
- Use @mention or reply to user
- Hidetag sends anonymously

---

## 👑 Owner Commands

**Requirements: Bot owner only**

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.owner` | `.owner` | Display owner information | `.owner` |
| `.join` | `.join <link>` | Bot joins group from link | `.join https://chat.whatsapp.com/...` |
| `.leave` | `.leave` | Bot leaves current group | `.leave` |
| `.broadcast` | `.broadcast <text>` | Send message to all chats | `.broadcast Hello everyone` |
| `.restart` | `.restart` | Restart bot | `.restart` |
| `.update` | `.update` | Update bot | `.update` |

**Tips:**
- Owner commands restricted
- Broadcast reaches all users
- Restart may need re-connection

---

## ℹ️ Info Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.menu` | `.menu` | Show full command menu | `.menu` |
| `.help` | `.help` | Show help menu | `.help` |
| `.quickmenu` | `.quickmenu` | Show quick menu | `.quickmenu` |
| `.ping` | `.ping` | Check bot response time | `.ping` |
| `.uptime` | `.uptime` | Check bot running time | `.uptime` |
| `.status` | `.status` | Get bot status | `.status` |
| `.botinfo` | `.botinfo` | Display bot information | `.botinfo` |

**Tips:**
- Ping shows response milliseconds
- Uptime shows hours:minutes:seconds
- Botinfo shows version & details

---

## 👤 User Commands

| Command | Usage | Description | Example |
|---------|-------|-------------|---------|
| `.user` | `.user` | Get your profile info | `.user` |
| `.profile` | `.profile` | Get your profile picture | `.profile` |
| `.hello` | `.hello` | Bot greets you | `.hello` |
| `.repeat` | `.repeat <text>` | Bot repeats your text | `.repeat Hello Bot` |
| `.ok` | `.ok` | Bot says "ok" | `.ok` |

**Tips:**
- User commands for fun
- Profile shows your picture
- Works in DM and groups

---

## 🔤 Command Syntax

### Basic Format
```
<PREFIX><COMMAND> [ARGUMENTS]
```

### Argument Types
- `<text>` - Text input required
- `<URL>` - Link required
- `<query>` - Search query
- `@mention` - Tag someone
- `|` - Separator between arguments

### Examples
```
.base64 Hello World        → Text argument
.ytmp3 https://youtube...  → URL argument
.google coding tutorial    → Query argument
.wm Elaina|syah-p         → Multiple arguments
```

---

## ⚡ Pro Tips

### Command Shortcuts
- Use short queries for faster results
- Most commands support multiple variations
- Reply to messages instead of typing full command

### Efficiency
- Use `.quickmenu` for fast command reference
- Combine commands for workflows
- Use filters in search commands

### Troubleshooting
- Ensure valid URLs for downloads
- Check internet connection for searches
- Verify group admin status for admin commands
- Make sure file sizes are reasonable

---

## 🚫 Restrictions

### Admin Commands
- Only group administrators can use
- Works in groups only
- Cannot affect bot itself

### Owner Commands
- Only bot owner can execute
- Full bot control
- System-level operations

### Download Commands
- Respect copyright laws
- Large files may take time
- Some formats may not be supported

---

## 📞 Need Help?

If you encounter issues:

1. **Check .menu** - View all available commands
2. **Use .help** - Get feature information
3. **Try .ping** - Check bot responsiveness
4. **Contact owner** - Use `.owner` command

---

## 🎓 Learning Resources

- Check README.md for setup guide
- Review examples in each section
- Test commands in private chat first
- Read error messages carefully

---

Last Updated: April 2026
Made by syah-p | Elaina MD Bot
