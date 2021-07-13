import React from 'react';
//button
const Button = (props) =>{
    return(
        <div>
<button onClick={props.buttonSubmit}>{props.buttonName}</button>
</div>
    )
}
export default Button;