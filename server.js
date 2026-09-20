const express = require('express');
const noblox = require('noblox.js');
const app = express();

app.use(express.json());

// 2. Adımda kopyaladığın .ROBLOSECURITY kodunu tırnak arasına yapıştır
const COOKIE = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CAEQAhoEEAQYASIbCgRkdWlkEhM2MjE2ODM0NTkwNTM3MDk5NjkyIhIKBXVuYW1lEglkYXJrX3Z0bjEiEgoDdWlkEgsxMTY5MzY5NTM1NygD.wPIdcNr2x6UDaOYNBQANMv5ZzJkvaesTg0xxtS1OhvmaYiSTRTA476THgJ5FeAJeihfOMdzAtodgZox4k-XkSf0aMpVgTV8RUoo-NYCV5yaVrJwlhNcOfiJ3Wmr2nwy9DNFRd_M1LMKKWoFLLRa2Zyb3H9HhUQDRqDms-UWaUNbEM7eli43Y6AcHMt1wP97bi-wm9CgDt4pGvlTOhh4w5HIIR49Q9SCbwbv4X1vgFkAAC88dG9IYcDdc37Hd5GBfXuXIMByh5yPFyeeUxW_SaaZReP93TzA9vuGErpVNOvRQ8MVVgfXuT1w7BMqFlNumPjNx-f8GDLB-Q6o7QAsZPtoX8o2RXEKjL-1oz9zdjiFG95PmWgfoiagSgKoSIFGgvJWQwCJ38fOXtYRKsbjtqYWnwuprIrDGIpgnSo6wpqAsTvVGSkFApXCdOsFOP5TAG5C1iwE7t0J1plQmXI4RMx_XNNuF_dUeuDDKWP7J4FVggdSg1hDpaz397vcxsOnqV2HiwNITtN0JuStV-68NsG2Xnqyp6_70l45jeX7kwjNGaV7EsigtKuksKCATotCYKuAU7pVBJRRsHgDm-Ma8H3uouFtBHJZ2prazbSQ0WE3RKtrZUTych1Bcnc0vu91uCyZ8NPY0PTQIUZWOHnNdv5XRQPEsnGpQxjnnJRxBx1uZ8pM2vmP_fD3bxzs3bPjZZXAil_AjGeiLZGnkKxmgAIq0F-MPYxoFarvZKB3FmehUGVlomCaagaGV-BYEXqZ-OMlWPphQ6a5N5nPWKDhPGNAdnnIR-wv9p7Mol2Slnc758qD5qBxRpnoKBAcVSPVQuxgsxz5u_FoYi4yitrSG450rhlUHjrZ8hsUmKbm6Co3x4sVaO3RLmpFDSaHmi5l1.fhgEUO2kvvBkWMw1u7CcoH06LX0";
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
