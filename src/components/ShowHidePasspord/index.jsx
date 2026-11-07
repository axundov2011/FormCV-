import React, {useState} from 'react'

const ShowHidePassword = () => {
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div>
        <input
            type={showPassword ? "text" : "password"}
            value = {password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <button type="button" onClick={handleTogglePassword}>
            {showPassword ? "Hide" : "Show"} Password
        </button>
    </div>
  )
}

export default ShowHidePassword