const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const config = require('../settings');
const { lite } = require('../lite');

lite({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about this GitHub repository.",
    react: "📂",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/XdKing2/LITE-XD';

    try {
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data = await res.json();

        const caption = `
╭━━〔 🔎 *Repository Info* 〕━━⬣
┃ 📦 *Bot Name:* ${data.name}
┃ 👑 *Owner:* ${data.owner.login}
┃ ⭐ *Stars:* ${data.stargazers_count}
┃ 🍴 *Forks:* ${data.forks_count}
┃ 🔗 *Link:* ${data.html_url}
┃ 📝 *Description:* ${data.description || 'No description'}
╰━━━━━━━━━━━━━━━━━━━━⬣
✨ *Don't forget to ★ and fork!*
🔧 ${config.DESCRIPTION}
        `.trim();

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363402507750390@newsletter',
                newsletterName: 'Malvin Tech',
                serverMessageId: 143
            }
        };

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption,
            contextInfo
        }, { quoted: mek });

        const audioPath = path.join(__dirname, '../all/menu.m4a');
        await conn.sendMessage(from, {
            audio: fs.readFileSync(audioPath),
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo
        }, { quoted: mek });

    } catch (error) {
        console.error("Repo Command Error:", error);
        reply("❌ *Failed to fetch repository info.*\nPlease try again later.")
