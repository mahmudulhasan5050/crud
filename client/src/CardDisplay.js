import Button from './Button';
import StarView from './StarView';

const CardDisplay = (props) => {
  console.log("val", props.val)
  return (
    <div key={props.val.id} className='cardDisplayCss'>
      <h1>{props.val.mname}</h1>
      <p>{props.val.mreview}</p>
      <input className="updateInput" key={props.i} type="text" onChange={props.reviewChangeHandle} />
      <Button buttonName='Update Review'
        buttonSubmit={() => { props.updateReview(props.val.mname) }} />

      <div className="rateView">
        <StarView key={props.i} ratingRead={props.val.rating} />
      </div>
      <div>
        <Button buttonName='Delete'
          buttonSubmit={() => { props.deleteReview(props.val.mname) }} />
      </div>
    </div>
  )
}
export default CardDisplay;