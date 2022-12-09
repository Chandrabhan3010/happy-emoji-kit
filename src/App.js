import React, { useState } from 'react'
import "./App.css"

function App() {

  const [emoji, setEmoji] = useState("🤓")
  const [emojiColor, setEmojicolor] = useState("")
  const [emojiSize, setEmojiSize] = useState(40)
  const [emojiDeg, setEmojiDeg] = useState(0)
  return (
    <div className="container">
      <div className='navbar'>
        <div className="app-title-container">
          <h1 className="app-title">(:❤️Smiley Emoji Kit❤️(:</h1>
        </div>
        <div className='smile-text'>"Let us always meet each other with smile, for the smile is the beginning of love."<strong>— Mother Teresa</strong></div>
      </div>
      <div className='down-section'>
        <div className='emoji-editor-container'>
          <div>
            <div className="main-emoji-container" style={{ backgroundColor: emojiColor, transform: `rotate(${emojiDeg * 3.6}deg)` }} >
              <div className="main-emoji" style={{ fontSize: `${emojiSize * 2}px` }}>
                {emoji}
              </div>
            </div>

            <div className="emoji-list-container">
              <div className="emoji-item" onClick={() => { setEmoji('🙂') }}>🙂</div>
              <div className="emoji-item" onClick={() => { setEmoji('😁') }}>😁</div>
              <div className="emoji-item" onClick={() => { setEmoji('🫠') }}>🫠</div>
              <div className="emoji-item" onClick={() => { setEmoji('😀') }}>😀</div>
              <div className="emoji-item" onClick={() => { setEmoji('😊') }}>😊</div>
            </div>
          </div>

          <div>
            <h1></h1>
            <div className='colors-container'>
              <div className='color-item bg-1' onClick={() => { setEmojicolor('#404258') }}></div>
              <div className='color-item bg-2' onClick={() => { setEmojicolor('#474E68') }}></div>
              <div className='color-item bg-3' onClick={() => { setEmojicolor('#182747') }}></div>
              <div className='color-item bg-4' onClick={() => { setEmojicolor('#1B2430') }}></div>
              <div className='color-item bg-5' onClick={() => { setEmojicolor('#16003B') }}></div>
            </div>

            <div className='size-container'>
              <input type="range" className='size-slide' onChange={(e) => { setEmojiSize(e.target.value) }} />
            </div>

            <div className='size-container'>
              <input type="range" className='size-slide' onChange={(e) => { setEmojiDeg(e.target.value) }} />
            </div>

          </div>
        </div>
        <div className='footer'> <i >This is made with by <strong>CHANDRABHAN</strong> </i></div>
      </div>
    </div>
  )
}
export default App;
