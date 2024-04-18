import { useState } from "react";
import { dataTextWork } from "./dataTextWork";

function TextWork() {
    const [text] = useState(dataTextWork);
    const [showText, setShowText] = useState(false);

    const showTextClick = (element) => {
        element.showMore = !element.showMore;
        setShowText(!showText)
    }

    return(<div>
        {text.map((element) => {
            const {id, text, showMore} = element;
            return(
                <div key={id} className="containerShow">
                    <p>{showText === true ? text : text.substring(0, 150) + '...'}
                        <button className="showBtn" onClick={() => showTextClick(element)}>
                        {showMore === false ? 'Show more' : 'Show less'}
                        </button>
                    </p>
                </div>
            )
        })}
        
    </div>
        
    )
}

export default TextWork;