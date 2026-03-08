/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['917384287404'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Dex Shyam Chaudhari'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Dex-mini-bot',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'AS!H4sIAAAAAAAAA5VV25KiOhT9l7xqjYAX0KquOojKTVDAC/apeYgQMMrNJIA45b9PYU93z8OZqT5vySbZe+211g4/QJZjikzUgMkPUBBcQYbaJWsKBCZgWkYRIqALQsggmICL5SKzuA1Zf8pvV1hwo/uUaDZd1BtF7fTEMzRW6aKQ7+rlBTy6oCiPCQ7+kjDPtne9Nyblaqnx64oWxiyYDVCqh76J+r4q9j0aXSy9POcv4NFmhJjgLJ4XJ5QiAhMTNWuIydfgK8uRH8lzvSmHBkpzfbm5Gt5V2J71etopfFUfnbfZ7Whrav41+PfALwIcrffM2EFBu3myZJVwIMebm8BbHf5Oypul7zp5wr3BpzjOUKiHKGOYNV/m3bTvEi/2r56RzwXPu67gZjVbVXVF+KKYV5eOE5xof9Es1fprwCsjoJUpi9rOOhs6M6/NZnfxZe5eBLo/DknDh8djQOfHxvod+Jq8e+Xyf3h37GNa85Kc6TZJin266Hu1tl9VInLZiTuLUfi6nm7C81SQvgZ/vHd5Me7JjeFXfTE3VHO/1rzgDrVqt8ByNeIHu21Ns75Xf8KHrCR/Q9mjxrGY8lmwFOu5C6tlyUu9Qj10bP9gXdzhvDd2q/SS1CF3X47uvLfZsnp26Az6elamyK7XfTu+yZGad4rI1253p1aU+OXZ0QU1eggm/KMLCIoxZQQynGdtbCB0AQwrDwUEsSe7QIx0y6We9erzoi6IfI2bys/opTFXjnUuHS/UDquTWAXC4AV0QUHyAFGKQg1TlpPGQpTCGFEw+fd7F2Toxt50a6tJfL8LIkwo22ZlkeQwfFf14ysMgrzMmNdkgdIuEAET7jOMGMNZTFsiywyS4IQrpJwgo2ASwYSijxYRQSGYMFKij7FV8rBlfjOY276lqqAL0qciOGxF5SV+MBzzQ4GTJkP+H/qtbtPCoviWIQa6IHkeG404keOl0VCU+MHzYBt/fABs84WIQZzQduTXFRkc69nczDALOFWVrVhWYhl8NvRujTfu5Vnl2DOlOCzyJVkJ+3NVHeTLqdpIFIc7d8ErVGeKmImK/PIfScAEwJk3yMeDMEr0EQ7Mudzbuc3C3fEd1z+Mx9K6Ex2KWnJpoMMom9meFWu5P93qwtaJ+KN2Lp1lGuPblhQkDdZ+M7b2U+elrRaiCgfo92KvS07wTeace8sCXky2ngWju8Zv4ltqBqLGbHdZSaOtStbca1KN8ka/GroG15XkaIdCCWKYSb24t6otWtkzqm/2ljGr30z7HJrk12OFn35qpWq3EUbP2c9gK+AfNHnH2zqLe3R/u/rrEfnDIE4dWeRmTn3dT6EyurMkF0VBNvQj11vq2W7rhg5Rlk457NQxeDy+d0GRQBblJG3Zz0KSP4uTvGydqmdR/rd/ghzr8zi224YTSJn86f4NThFlMC3AhBdFYSwO+pLw+Alf9Ob4NAcAAA==',
    newsletterJid: '120363406449026172@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/Dexsam07/Dex-mini-bot/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Dex-mini-bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ DEX-MINI-BOT*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/Dexsam07',
      instagram: 'https://instagram.com/@Dex_shyam_42',
      youtube: 'http://youtube.com/@Dex_shyam_07'
    }
};
  