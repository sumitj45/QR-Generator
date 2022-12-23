const express = require('express');
const ejs = require('ejs');
const qrcode = require('qrcode');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// seting view engine in ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view')) // telling where to find my  index.ejs file

// routing in express js

app.get("/", (req, res) => {
    res.render('index');
});
app.post('/scan', (req, res) => {
    const input_text = req.body.text;
    console.log(input_text);
    // using qrcode to convert the text into qrcode
    qrcode.toDataURL(input_text, (err, src) => {
        res.render('scan', {
            qr_code: src,
        });

    });
});

// listening  at port no.
app.listen(4200, () => {
    console.log("listening at port no. 4200");

})