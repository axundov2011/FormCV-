import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div className="color-changer"
      style={{ backgroundColor: color, minHeight: "100vh" }}>
      <Button  onClick={onClick}>{label}</Button>
    </div>
  )
}

export default Button
