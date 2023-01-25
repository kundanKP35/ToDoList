import React from "react";

function DateTime() {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleString("en-Us",options);
    
    return(
        <div>
            <h1 className="DateHeading">{day}</h1>
        </div>
    )
}

export default DateTime;
