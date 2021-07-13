import Button from './Button';
import StarRate from './StarRate';

const MovieInput = (props) =>{

    
    return(
        <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movieName" key={props.resetFormMovie} onChange={props.nameHandle}></input>
        <label>Review</label>
        <input type="text" name="review" key={props.resetFormReview} onChange={props.reviewHandle}></input>
        <StarRate ratingClicked={props.ratingClicked} key={props.resetStar} />
        <Button buttonName='Submit' buttonSubmit={props.submitReview}/>

      </div>
    )
}
export default MovieInput;