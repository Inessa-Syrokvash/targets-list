import { useState } from "react";
import { dataTextTravel } from "./dataTextTravel";

function TextTravel() {
    const [text] = useState(dataTextTravel);
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

export default TextTravel;