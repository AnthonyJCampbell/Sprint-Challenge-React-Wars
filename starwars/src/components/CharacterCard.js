import React from 'react';

const CharacterCard = (props) => {
    const name = props.char.name;
    const films = props.char.films;
    const height = props.char.height;
    const mass = props.char.mass;


    const getMovieNum = () => {
        let output = '';
        films.map(film => {
            return (output += ` ${film.slice(film.length-2, film.length-1)},`);
        })
        return output.slice(0, output.length-1);
    }

    const calculateBMI = () => {
        return (Math.round((mass / (height*height)*703)*10));
    }

    return (
        <div className="characterCard">
            <h2>{name}</h2>
            <h3 className="movies">
                Has Starred in <span>{films.length}</span> Movies:<br />
                Episodes:{ getMovieNum()}
            </h3>
            <h3 className="BMI">He/She/It weighs {mass} lbs and is {height} cm tall.
            This means its <span>BMI is { calculateBMI() }</span>
            </h3> 
        </div>
    );
}

export default CharacterCard;
