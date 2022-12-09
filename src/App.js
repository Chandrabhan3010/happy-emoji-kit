import React ,{useState} from 'react'
import "./App.css"

function App() {

 const[emoji,setEmoji] = useState("(^人^)")
 const[emojiColor,setEmojicolor] = useState("white")
 const[emojiSize, setEmojiSize] = useState(20)
 const[emojiDeg, setEmojiDeg] = useState(0)
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
          <div className="main-emoji-container" style={{backgroundColor: emojiColor , transform:`rotate(${emojiDeg * 3.6}deg)`}} >
              <div className="main-emoji" style={{fontSize:`${emojiSize *2}px`}}>
                  {emoji} 
              </div>
          </div>   

          <div className="emoji-list-container">
            <div className="emoji-item" onClick={()=>{setEmoji('🍎')}}>🍎</div>
            <div className="emoji-item" onClick={()=>{setEmoji('🥭')}}>🥭</div>
            <div className="emoji-item" onClick={()=>{setEmoji('🍒')}}>🍒</div>
            <div className="emoji-item" onClick={()=>{setEmoji('🍄')}}>🍄</div>
            <div className="emoji-item" onClick={()=>{setEmoji('🌑')}}>🌑</div>
          </div>  
        </div>

        <div>
          <h1></h1>
          <div className='colors-container'>
            <div className='color-item bg-1' onClick={()=>{setEmojicolor('red')}}></div> 
            <div className='color-item bg-2' onClick={()=>{setEmojicolor('pink')}}></div>
            <div className='color-item bg-3' onClick={()=>{setEmojicolor('blue')}}></div>
            <div className='color-item bg-4' onClick={()=>{setEmojicolor('green')}}></div>
            <div className='color-item bg-5' onClick={()=>{setEmojicolor('purple')}}></div>
          </div>

          <div className='size-container'>
            <input type="range" className='size-slide' onChange={(e)=>{setEmojiSize(e.target.value)}}/>
          </div>

          <div className='size-container'>
            <input type="range" className='size-slide' onChange={(e)=>{setEmojiDeg(e.target.value)}}/>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}
export default App;
