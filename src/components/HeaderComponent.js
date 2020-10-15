import React from 'react'
import "./header-img.svg"
import "../css/HeaderComponent.css";
function HeaderComponent(props) {
    
    return (
        <div className="img-container">
            <img src="header-img.svg" alt="Taking notes"/>
            <div className="header-title" onClick={()=> props.toggle()}>Git workshop Notes</div>
        </div>
    )
}

export default HeaderComponent
