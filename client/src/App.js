import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import MovieInput from './MovieInput';
import CardDisplay from './CardDisplay';

function App() {

  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rateMovie, setRateMovie] = useState(null);

  const [resetFormMovie, setResetFormMovie] = useState(10);
  const [resetFormReview, setResetFormReview] = useState(20);
  const [resetStar, setResetStar] = useState(30);




  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
      movieRating: rateMovie

    });

    setMovieList([...movieList,
    { mname: movieName, mreview: review, rating: rateMovie }
    ]);
    setMovieName("");
    setReview("");
    setRateMovie(null);
    
    setResetFormMovie(resetFormMovie + 1);
    setResetFormReview(resetFormReview+1);
    setResetStar(resetStar + 1);
  };

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  }

  const updateReview = (movie) => {
    if (newReview !== "") {
      Axios.put("http://localhost:3001/api/update", {
        movieName: movie,
        movieReview: newReview
      });
    }
    setNewReview("");
  }

  const ratingClicked = (rate) => {
    setRateMovie(rate);
  };

  const nameHandle = (e) => setMovieName(e.target.value);

  const reviewHandle = (e) => setReview(e.target.value);

  const reviewChangeHandle = (e) => setNewReview(e.target.value)

  return (
    <div className="App">
      <h1>Movie Rating application</h1>

      <MovieInput
        nameHandle={nameHandle}
        reviewHandle={reviewHandle}
        ratingClicked={ratingClicked}
        submitReview={submitReview}
        resetFormMovie ={resetFormMovie}
        resetFormReview = {resetFormReview}
        resetStar ={resetStar} />

      <div>
        {movieList.map((val, i) => {
          return (
            <div className="card">
              <CardDisplay val={val}
                i={i}
                updateReview={updateReview} reviewChangeHandle={reviewChangeHandle}
                deleteReview={deleteReview}
              />
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
