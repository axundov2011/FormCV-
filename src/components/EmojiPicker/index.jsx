import { useState } from 'react'

const EmojiPicker = () => {
  const [emoji, setEmoji] = useState("😀")

  return (
    <div>
      <label htmlFor="emoji-select">Choose an emoji: </label>
      <select
        id="emoji-select"
        value={emoji}
        onChange={(event) => setEmoji(event.target.value)}
      >
        <option value="😀">😀 Grinning</option>
        <option value="😍">😍 Heart eyes</option>
        <option value="😂">😂 Laughing</option>
        <option value="😎">😎 Cool</option>
        <option value="😢">😢 Sad</option>
        <option value="🎉">🎉 Party</option>
      </select>
      <p aria-live="polite">Selected emoji: {emoji}</p>
    </div>
  )
}

export default EmojiPicker