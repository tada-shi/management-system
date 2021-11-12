const express = require('express');
const pool = require("../db.js");

const router = express.Router();

router.post("/", async(req, res) => {
    try {
        const enrollment_no = req.user.enrollment_no;
        // console.log(enrollment_no);
        const { Reason, Address, Leave, Arrival } = req.body;
        const postleave = await pool.query(
            "insert into leave_application(enrollment_no,address_,reason,leave_date,arrival_date) values($1, $2, $3, $4, $5) RETURNING *",
        [enrollment_no,Reason, Address, Leave, Arrival]);
        res.json(postleave.rows);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router