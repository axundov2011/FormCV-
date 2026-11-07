import React from 'react'

const NumberGeneration = () => {
    const [number, setNumber] = React.useState(0);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100);
        setNumber(randomNum);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

            <div style={{ width: '300px', height: '200px', }}>
                <h1 className="card-text">{number}</h1>
                <button className="btn btn-primary" style={{ margin: '10px' }} onClick={generateRandomNumber}>Generate Number</button>

            </div>

        </div>
    )
}

export default NumberGeneration
