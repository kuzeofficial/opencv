import React,{ useRef } from 'react'
import "./switch.css"
function Switch() {
    const ref = useRef('null')
    function handleChange(){
        if (ref.current.checked){
            document.body.classList.remove('light-mode')
            document.body.classList.add('dark-mode')
        }   
        else{
            document.body.classList.remove('dark-mode')
            document.body.classList.add('light-mode')
        }
    }
    return (
        <div className="dark-mode" >
            <p className="dark-mode-title"></p>
            <input ref={ref} onChange={handleChange} type="checkbox" className="checkbox" id="checkbox"/>
            <label className="label" htmlFor="checkbox"><i className="fas fa-moon" /><i className="fas fa-sun" /><div className="ball" /></label>            
        </div>
    )
}

export default Switch