import React from 'react';

const CharacterCard = (props) => {
    const name = props.char.name;
    const films = props.char.films;
    const height = props.char.height;
    const mass = props.char.mass;


    const getMovieNum = () => {
        let output = '';
        films.map(film => {
            output += ` ${film.slice(film.length-2, film.length-1)},`;
        })
        return output;
    }

    const calculateBMI = () => {
        return (Math.round((mass / (height*height)*703)*10));
    }

    return (
        <div>
            <h2>{name}</h2>
            <h3>
                Has Starred in {films.length} Movies:<br />
                Episodes:{ getMovieNum()};
            </h3>
            <h3>He/She/It weighs {mass} lbs and is {height} cm tall.
            This means its BMI is { calculateBMI() }
            </h3> 
        </div>
    );
}

export default CharacterCard;
