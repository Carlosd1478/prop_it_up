import { useState } from 'react';

// 2 Requirements for Functional Components
// PascalCase Name
// Return JSX

function UserCard(props) {
    const [age, setAge] = useState(props.age);
    const { firstName, lastName, hairColor} = props;

    const clickHandler = () => {
        setAge(age + 1);
    }

    return (
        <fieldset>
            <legend>UserCard</legend>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={clickHandler}>Birthday Button for {firstName} {lastName}</button>
        </fieldset>
    );
}

export default UserCard;