import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Recipe = ({title, image, calories, ingredients}) => {
    
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);


    return(
        <div data-aos="fade-up" className="w-[400px] border-2 border-transparent shadow-md shadow-black rounded-xl my-6 bg-white">
            <h1 className="w-fit text-2xl block m-auto pt-2 border-b-4 border-cyan-800">{title}</h1>
            <p className="text-center">Calories: {calories}</p>
            <img className="block mx-auto my-2 border-2 border-black rounded-md h-64" src={image} alt=""/>
            <ul className="w-[80%] block m-auto pl-8 text-sm pb-2">
            {ingredients.map((ingredient, idx) => (
                <li className="pt-2" key={idx}>{ingredient.text}</li>
            ))}
            </ul>
        </div>
    );
}

export default Recipe;