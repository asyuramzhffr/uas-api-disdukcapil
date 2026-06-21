const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 1. Endpoint Login
app.post('/auth/login', (req, res) => {
    // Di sini kamu bisa ambil data yang dikirim user dari req.body
    res.json({
        message: "Login berhasil (Mock Data UAS)",
        status: "success"
    });
});

// 2. Endpoint Daftar Antrian
app.post('/antrian/daftar', (req, res) => {
    res.json({
        message: "Pendaftaran antrian KK berhasil",
        status: "success"
    });
});

// 3. Endpoint Cek Kuota
app.get('/antrian/kuota', (req, res) => {
    res.json({
        kuota_harian: 100,
        sisa_kuota: 45,
        status: "available"
    });
});

// Cek Server Hidup
app.get('/', (req, res) => {
    res.send("API Layanan Disdukcapil UAS Online!");
});

app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
});