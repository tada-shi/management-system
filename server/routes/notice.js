const express = require('express');
const pool = require("../db.js");

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const id = req.user.enrollment_no;
        const _id = await pool.query("SELECT hostel_id FROM hostel_resident WHERE enrollment_no = $1", [id]);
        const {hostel_id }= _id.rows[0];
        const allNotices = await pool.query("SELECT * FROM notice WHERE hostel_id = $1",[hostel_id]);
        res.json(allNotices.rows);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;