import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
function MadLib() {
  return (
    <div>
      <Content />  
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MadLib />
  </React.StrictMode>,
)
