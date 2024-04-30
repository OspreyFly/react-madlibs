import { useState } from 'react'
import Sentence from './Sentence'
import WordForm from './WordForm'

function Content(){
    const [sentStruc, setSentStruc] = useState({});
    const addMadLib = (newWords) => {
        setSentStruc({ ...newWords });
    }
    const reset = () => {
        setSentStruc({});
    }

    if(Object.keys(sentStruc).length === 0){
        return (
            <div className="flex-container">
                <h1>MadLibs!</h1>
                <WordForm addMadLib={addMadLib} />
            </div>
        )
    }else{
        return (
            <div className="flex-container">
                <h1>MadLibs!</h1>
                <Sentence
                    reset={reset}
                    noun1={sentStruc.noun1}
                    noun2={sentStruc.noun2}
                    adjective={sentStruc.adjective}
                    color={sentStruc.color}
                />
            </div>
        )
    }
}
export default Content;