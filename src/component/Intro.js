import React from 'react'
import { Link } from 'react-router-dom'
import "../css/intro.css"
function Intro() {
  return (
    <div>
        <div className="containintro">
            <div className="intro">
                <div className="image">

                </div>
            </div>
        </div>
        <div className="role">
        <div className="mission">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam. Beatae fugiat deleniti natus dolorem. Excepturi, laboriosam inventore! Sequi magnam dolor minima eveniet quasi quas magni. Corrupti ducimus provideno quibusdam. Nostrum, tenetur placeat.</p>
        </div>
        <div className="other">
            <div className="text">
                <h1>Date</h1>
                <h1>16</h1>
            </div>
            <Link to="/day">
            <button>More</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Intro