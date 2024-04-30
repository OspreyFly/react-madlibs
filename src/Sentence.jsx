import React from 'react'

function Sentence({ noun1, noun2, adjective, color, reset}){
    return(
        <div>
            <h3>The {noun1} was faster than the {noun2}! The {adjective} speedster glowed {color} as they vanished in the distance!</h3>
            <button onClick={reset}>Back</button>
        </div>
    )
}

export default Sentence;