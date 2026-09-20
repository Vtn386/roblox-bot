const express = require('express');
const noblox = require('noblox.js');
const app = express();

app.use(express.json());

// 2. Adımda kopyaladığın .ROBLOSECURITY kodunu tırnak arasına yapıştır
const COOKIE = "BURAYA_ROBLOSECURITY_KODUNU_YAPISTIR";
const API_KEY = "VtN59Pnel58Rnq"; // Güvenlik şifren

async function startBot() {
    try {
        await noblox.setCookie(COOKIE);
        console.log("Bot hesabı Roblox'a başarıyla giriş yaptı!");
    } catch (err) {
        console.log("Giriş hatası: " + err.message);
    }
}
startBot();

app.post('/setrank', async (req, res) => {
    const { groupId, userId, rank, apiKey } = req.body;

    if (apiKey !== API_KEY) {
        return res.status(403).send("Yetkisiz Erişim!");
    }

    try {
        await noblox.setRank(groupId, userId, rank);
        res.send("Rütbe Başarıyla Değiştirildi!");
    } catch (err) {
        res.status(500).send("Hata: " + err.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Bot sunucusu aktif, Port: " + PORT);
});
