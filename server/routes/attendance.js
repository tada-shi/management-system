const express = require('express');
const pool = require("../db.js");

const router = express.Router();

router.post("/", async(req, res) => {
    try {
        const enrollment_no = req.user.enrollment_no;
        // console.log(enrollment_no);
        const dailyAttendance = await pool.query("INSERT INTO attendance(enrollment_no) VALUES($1) RETURNING *",[enrollment_no]);
        // console.log(dailyAttendance.rows);
        res.json(dailyAttendance.rows);
    } catch (error) {
        console.log(error.message);
    }
});

router.get("/", async(req,res) => {
    try {
        const enrollment_no = req.user.enrollment_no;
        // console.log(enrollment_no);
        const dailyAttendance = await pool.query("SELECT * FROM attendance WHERE enrollment_no = $1",[enrollment_no]);
        res.json(dailyAttendance.rows);
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = router;