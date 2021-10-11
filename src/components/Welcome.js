// write code for Welcome component here
import React from "react";
function greeting_message(props){
return (
    <React.Fragment>
        <h1>Hey {props.name}!</h1>
        <h2>Welcome to Newton School.</h2>
    </React.Fragment>
)

}

export default greeting_message;
