import { useState } from "react";
import { dataTravel } from './dataTravel';

function ImageTravel() {
    const [img, setImg] = useState(0);
    const {image} = dataTravel[img];

    const backImg = () => {
        setImg((img => {
            img --;
            if(img < 0) {
                return dataTravel.length -1;
            }
            return img;
        }))
    }

    const nextImg = () => {
        setImg((img => {
            img ++;
            if(img > dataTravel.length -1){
                img = 0;
            }
            return img;
        }))
    }

    return(
        <div>
            <div className="containerImg">
                <img src={image} alt='Work' width='400px' />
            </div>

            <div className="containerBtn">
                <button onClick={backImg}>Back</button>
                <button onClick={nextImg}>Next</button>
            </div>

        </div>
    )

}

export default ImageTravel;