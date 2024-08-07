const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors())



app.get("/webhook", (req, res) => {
    const body = req.body;
    return res.json({ message: "Ok" })
})

app.listen(5000, () => console.log(5000))