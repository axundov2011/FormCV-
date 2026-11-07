import { useState } from 'react'

const ChangeInputColor = () => {
  const [color, setColor] = useState('')

  const handleChangeColor = (event) => {
    setColor(event.target.value)
  }

  return (
    <div style={{ backgroundColor: color }}>
      <select value={color} onChange={handleChangeColor}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  )
}

export default ChangeInputColor