import { useState } from 'react';
import "./Counter.css"

function Counter2 () {
    const [firstName, setFirstName] = useState("Arsalan");
    const [lastName, setLastName] = useState("Asad");

    function changeName() {
        setFirstName("Mohd.");
        setLastName("Arsalan");
    }

    function checkName() {
        console.log(firstName, lastName);
    }

    return (
        <>
        component2
        <h1>Mr.</h1>
        <p>{`${firstName}`}</p>
        <p>{`${lastName}`}</p>
        <button onClick={changeName}>Change Name</button>
        <button onClick={checkName}>Check Name</button>
        </>
    );
}

function Counter1 () {
    const firstName = "Arsalan";
    const secondName = "Asad";

    return <p>component1 - Pakistan</p>
}

export default Counter1;
export {Counter2};