import React from 'react'
import '../CSS/App.css'
import '../CSS/flexbox.css'
import '../CSS/Button.css'
import '../CSS/test.css'
export const TestPage = () => {
  return (
    <nav>
      <div className='menu'>
        <div className='menuitem'  id="demo1">
          <button className='menu'>
            <button className='menuitem' >
              <p>About</p>
            </button>
            <div className='menuitem'>
              <p>Setting</p>
              <div className='menu'>
                <div className='menuitem'><p>Test 1</p></div>
                <div className='menuitem'><p>Test 2</p></div>
              </div>
            </div>
          </button>

        </div>
      </div>
      
    </nav>
  )
}
