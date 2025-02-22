const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Sample music data
const musicData = [
    {
        id: 1,
        title: "Baptized in Fear",
        url: "https://drive.google.com/file/d/1S5gfFebPO_GsSVEuj3G3PaEHmhvAywxk/view?usp=drive_link"
    },
    {
        id: 2,
        title: "Open Hearts",
        url: "https://drive.google.com/file/d/1qagb3TVjQ8AVKptUvJEvb0FVEpf0JnuZ/view?usp=drive_link"
    },
    {
        id: 3,
        title: "Enjoy The Show",
        url: "https://drive.google.com/file/d/1bpi0kpmEf8YF4c7EpLc8abI26uubWLA2/view?usp=drive_link"
    },
    {
        id: 4,
        title: "Niagara Falls",
        url: "https://drive.google.com/file/d/1ZC28Jp_elKGmrZ7NPhCfKqKgckxVolh-/view?usp=drive_link"
    },
    {
        id: 5,
        title: "Take Me Back to LA",
        url: "https://drive.google.com/file/d/1Pya76nMGwTcD2Dw4t1rVVAYemIXM7bPI/view?usp=drive_link"
    }
];

// ✅ Export the API function for Vercel (No need to start server manually)
module.exports = (req, res) => {
    res.status(200).json(musicData);
};
