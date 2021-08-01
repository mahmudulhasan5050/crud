import React, { useState, useEffect } from 'react';
import './App.css';
import movieServices from './services/movieServices';
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
    movieServices.getAll().then(response => {
      setMovieList(response.data);
    });
  }, []);

  const submitReview = () => {
    const obj = {
      movieName: movieName,
      movieReview: review,
      movieRating: rateMovie
    }
    movieServices.createReview(obj);

    setMovieList([...movieList,
    { mname: movieName, mreview: review, rating: rateMovie }
    ]);
    setMovieName("");
    setReview("");
    setRateMovie(null);

    setResetFormMovie(resetFormMovie + 1);
    setResetFormReview(resetFormReview + 1);
    setResetStar(resetStar + 1);
  };

  const deleteReview = (movie) => {
    movieServices.deleteMovie(movie);
  }

  const updateReview = (movie) => {
    if (newReview !== "") {
      const objUpdate = {
        movieName: movie,
        movieReview: newReview
      }
      movieServices.updateReview(objUpdate);
    }
    setNewReview("");
  }

  const ratingClicked = (rate) => {
    setRateMovie(rate);
  };
  const getValue = (e) => e.target.value;
  const nameHandle = (e) => setMovieName(getValue(e));

  const reviewHandle = (e) => setReview(getValue(e));

  const reviewChangeHandle = (e) => setNewReview(getValue(e));

  return (
    <div className="App">
      <h1>Movie Rating application</h1>

      <MovieInput
        nameHandle={nameHandle}
        reviewHandle={reviewHandle}
        ratingClicked={ratingClicked}
        submitReview={submitReview}
        resetFormMovie={resetFormMovie}
        resetFormReview={resetFormReview}
        resetStar={resetStar} />

      <div>
        {movieList.map((val, i) => {
          console.log("movies:  ", i)
          return (
            <div className="card" key={val.mname+Math.random()}>
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
