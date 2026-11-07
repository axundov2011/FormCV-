import { useState } from 'react'

const FormatName = () => {
    const [name, setName] = useState("")
    const [formattedName, setFormattedName] = useState("")

    console.log("name", name)
    console.log("formattedName", formattedName)

    const handleFormatName = () => {
        setFormattedName(name.toUpperCase())
    }

  return (
    <div>
        <h2>Format Name</h2>
        <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
        />
        <button type="button" onClick={handleFormatName}>
            Format Name
        </button>
        <p>Formatted Name: {formattedName}</p>
    </div>
  )
}

export default FormatName