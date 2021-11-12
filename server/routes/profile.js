const express = require('express');
const pool = require("../db.js");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        // const {id} = req.params;
        const id = req.user.enrollment_no; 
        const resident = await pool.query("SELECT * FROM hostel_resident WHERE enrollment_no = $1", [id]);
        // console.log(resident.rows);
        res.json(resident.rows);
        
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;