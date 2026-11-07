import React, { useState } from 'react'
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";


const LightBulbToggle = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: isOn ? "#fff8dc" : "#222",
                transition: "background-color 0.3s",

            }}
        > {
                isOn ? (
                    < FaLightbulb size="100px" color="gold" />
                ) : (
                    < FaRegLightbulb size="100px" color="gray" />
                )
            }

            <button
                onClick={() => setIsOn((prev) => !prev)}
                style={{ marginTop: "20px", padding: "10px 20px" }} 
            >
                {isOn ? "Turn Off" : "Turn On"}
            </button>

        </div>
    )
}

export default LightBulbToggle