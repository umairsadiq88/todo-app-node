const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.get('/' , (req, res) => {
    res.json({success: true})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log ("Server is running on 127.0.0.1:$[PORT]"));

