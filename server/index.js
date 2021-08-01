const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const app = express();


const PORT = 3001;
//to relax cross-origin HTTP request
app.use(cors());
// to recognize JSON object
app.use(express.json());
//to recognize incoming request
app.use(express.urlencoded({extended:true}));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM movies;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);

    });
});
app.post("/api/insert", (req, res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const movieRating = req.body.movieRating;

    const sqlInsert = "INSERT INTO movies (mname, mreview, rating) VALUES (?, ?, ?);";
    db.query(sqlInsert, [movieName, movieReview, movieRating], (err, result) => {
        console.log(result);
    });
});

app.delete('/api/delete/:movieName', (req, res) => {
    const name = req.params.movieName;
    
    const sqlDelete = "DELETE FROM movies WHERE mname = ?";
    db.query(sqlDelete, name, (err, result) =>{
       if(err) console.log(err)
    });
});

app.put('/api/update', (req, res) => {
    const name = req.body.movieName;
    const review = req.body.movieReview;
    
    const sqlUpdate = "UPDATE movies SET mreview = ? WHERE mname = ?";
    db.query(sqlUpdate, [review, name], (err, result) =>{
       if(err) console.log(err)
    });
});

/*app.listen(3001, () => {
    console.log("running 3001");
});*/

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});