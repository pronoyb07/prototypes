import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>This is JSX</h1>
    //     </div>
    // )

    return React.createElement('div', null, <h1>THis is JSX</h1>)
}

export default Hello