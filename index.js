const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors())



app.get("/webhook", (req, res) => {
    const body = req.body;

    return res.json({ message: "Ok" })
})

app.post("/webhook", (req,res) => {
    const body = req.body;
    return res.json({message: "OK"})
})

app.listen(5000, () => console.log(5000))


// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/webhook", async (req, res) => {
//     try {
//         const renderResponse = await axios.get('https://ingestion-nyxi.onrender.com');
//         const data = renderResponse.data;
//         console.log(data)
//         return res.json({ message: "Ok", data: data });
//     } catch (error) {
//         console.error('Error fetching data from Render:', error);
//         return res.status(500).json({ message: "Error fetching data", error: error.message });
//     }
// });

// app.listen(5000, () => console.log('Server is running on port 5000'));
