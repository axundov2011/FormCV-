import React from 'react'
import PropTypes from "prop-types";

const Greeting = () => {
  const [greeting, setGreeting] = React.useState("");

  const hour = new Date().getHours();

 const showGreeting = () => {
   if (hour < 12) {
    setGreeting("Good morning");
  } else if (hour < 18) {
    setGreeting("Good afternoon");
  } else {
    setGreeting("Good evening");
  }
 }
  return (
    <div className="greeting">
      <button onClick={showGreeting}>Show Greeting</button>
      <h3>{greeting}</h3>
    </div>
  )
}


export default Greeting 
