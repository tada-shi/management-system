const express = require('express');
const pool = require("../db.js");

const router = express.Router();

router.post("/", async(req, res) => {
    try {
        const enrollment_no = req.user.enrollment_no;
        console.log(enrollment_no);
        const {Reason } = req.body;
        // console.log(req.body);
        const postComplain = await pool.query("insert into complain_applications(enrollment_no,app_reason) values($1, $2) RETURNING *",
        [enrollment_no, Reason]);
        res.json(postComplain.rows);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router