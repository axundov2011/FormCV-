import { useState } from 'react'
import './temperatur.css'

const TemperaturConvert = () => {
    const [temperature, setTemperature] = useState("")

    const handleChange = (event) => setTemperature(event.target.value)
    const celsius = temperature === "" ? "" : Number(temperature)
    const fahrenheit = temperature === "" ? "" : (celsius * 9 / 5 + 32).toFixed(2)

  return (
    <div className="temperature-card">
      <div className="temperature-card__icon">°</div>
      <h1>Temperature Converter</h1>
      <p className="temperature-card__subtitle">Convert Celsius to Fahrenheit instantly</p>
      <label className="temperature-card__label">
        Celsius:
        <input
          className="temperature-card__input"
          type="number"
          value={temperature}
          onChange={handleChange}
          placeholder="Enter temperature"
        />
      </label>
      <div className="temperature-results">
        <div className="temperature-result temperature-result--fahrenheit">
          <span>Fahrenheit</span>
          <strong>{fahrenheit === "" ? "—" : `${fahrenheit} °F`}</strong>
        </div>
        <div className="temperature-result temperature-result--celsius">
          <span>Celsius</span>
          <strong>{celsius === "" ? "—" : `${celsius} °C`}</strong>
        </div>
      </div>
    </div>
  )
}

export default TemperaturConvert