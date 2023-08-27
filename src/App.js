import React, {useState} from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState({x: 50, y: 50})

  const handleMove = direction => {
    switch (direction) {
      case 'left':
        if (position.x > 50) setPosition({x: position.x - 50, y: position.y})
        break
      case 'right':
        if (position.x < 500) setPosition({x: position.x + 50, y: position.y})
        break
      case 'top':
        if (position.y > 50) setPosition({x: position.x, y: position.y - 50})
        break
      case 'bottom':
        if (position.y < 500) setPosition({x: position.x, y: position.y + 50})
        break
      default:
        break
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <button
          disabled={position.y > 50 ? false : true}
          className="width"
          onClick={() => handleMove('top')}
        >
          Top
        </button>

        <div className="vertical-buttons">
          <div>
            <button
              disabled={position.x > 50 ? false : true}
              className="heigth"
              onClick={() => handleMove('left')}
            >
              Left
            </button>
          </div>
          <div>
            <button
              disabled={position.x < 500 ? false : true}
              className="heigth"
              onClick={() => handleMove('right')}
            >
              Right
            </button>
          </div>
        </div>

        <div
          className="green-block"
          style={{left: position.x, top: position.y}}
        />

        <button
          disabled={position.y < 500 ? false : true}
          className="width"
          onClick={() => handleMove('bottom')}
        >
          Bottom
        </button>
      </div>
    </div>
  )
}

export default App
