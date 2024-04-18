import ImageWork from "./work/ImageWork";
import ImageTravel from "./travel/ImageTravel";
import ImageHouse from "./house/ImageHouse";
import ImageDevelopment from "./development/ImageDevelopment";
import TextWork from "./work/TextWork";
import TextTravel from "./travel/TextTravel";
import TextDevelopment from "./development/TextDevelopment";
import TextHouse from "./house/TextHouse";

export const data = [
    {id: 'First',
    target: 'Work.',
    image: <ImageWork />,
    description: <TextWork />,
    term: 'July 2024' },

    {id: 'Second',
    target: 'Travel.',
    image: <ImageTravel />,
    description: <TextTravel /> ,
    term: 'October 2024' },

    { id: 'Third',
    target: 'Development.',
    image: <ImageDevelopment />,
    description: <TextDevelopment />,
    term: 'August 2024' },

    { id: 'Fourth',
    target: 'A house of my own and a dog.',
    image: <ImageHouse />,
    description: <TextHouse />,
    term: 'December 2025' }
]