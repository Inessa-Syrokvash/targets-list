import { useState } from "react";
import { dataWork } from './dataWork';

function ImageWork() {
    const [img, setImg] = useState(0);
    const {image} = dataWork[img];

    const backImg = () => {
        setImg((img => {
            img --;
            if(img < 0) {
                return dataWork.length -1;
            }
            return img;
        }))
    }

    const nextImg = () => {
        setImg((img => {
            img ++;
            if(img > dataWork.length -1){
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

export default ImageWork;