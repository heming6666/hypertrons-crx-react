import React  from 'react'
import ReactDOM from 'react-dom'
import './antd-diy.css'
import './content.css'

function Content() {
    return (
        <div className="CRX-content">
            <div
                className="content-entry"></div>
        </div>
    )
}

const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)
ReactDOM.render(<Content />, app)