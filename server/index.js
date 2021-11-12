const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db2.js')
const pool2 = require('./db.js')
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

function authenticateToken(req, res, next){
    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

const users = [];

const noticeApi = require("./routes/notice");
const complainApi = require("./routes/complain");
const leaveApi = require("./routes/leave");
const facultyApi = require("./routes/faculty");
const profileApi = require("./routes/profile");
const attendanceApi = require("./routes/attendance");

app.use('/api/notice', authenticateToken,noticeApi);
app.use('/api/complain', authenticateToken,complainApi);
app.use('/api/leave', authenticateToken,leaveApi);
app.use('/api/faculty', authenticateToken,facultyApi);
app.use('/api/profile', authenticateToken,profileApi);
app.use('/api/attendance', authenticateToken,attendanceApi);

app.get('/api/users',  async(req, res) => {
    try {
        const users = await pool.query('SELECT * FROM userInfo');
        res.json(users.rows);
    } catch (error) {
        res.json(error);
    }
})

app.get('/api/posts', authenticateToken, (req, res) => {
    console.log(posts);
    res.json(posts.filter(post => post.username === req.user.name))
});

app.post('/api/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {enrollment_no: req.body.enrollment_no, password : hashedPassword };
        const newUser = await pool.query("INSERT INTO userInfo VALUES($1, $2)", [user.enrollment_no, user.password]);
        res.json(newUser.rows).status(201);
        
    } catch (error) {
        res.json(error).status(500);
    }
})

app.post('/api/users/login', async (req, res) => {
    const user = await pool.query('SELECT * FROM userInfo WHERE enrollment_no = $1',[req.body.Enrollment_no]);
    if(user.rows == null) {
        return res.status(400).send("Cannot find user");
    }
    try {
        if(await bcrypt.compare(req.body.Password, user.rows[0].password)){
            const userData = {enrollment_no:req.body.Enrollment_no};
            const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET);
            res.json({accessToken: accessToken});
        }else{
            // res.json(user); 
            res.send({'error':'Wrong password'});
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(PORT, ()=>{
    console.log(`listening ${PORT}`);
});
