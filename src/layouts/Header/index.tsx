import React, { useState } from "react"
import "./header.css";

export default function Header() {

  const [open, setOpen] = useState(false);

  const hanlderMenu = () => {
    
      const elementWrapper = document.getElementById('wrapper') as Element;
      if(!elementWrapper?.classList.contains('menu--is-active')) {
          document.getElementById('menu')?.classList.add('menu--is-active');
          elementWrapper.classList.add('menu--is-active');
      }
      else {
          document.getElementById('menu')?.classList.remove('menu--is-active');
          elementWrapper.classList.remove('menu--is-active');
      }
      
      setOpen(!open);
  }

  return(
      <React.Fragment>
        <div className="menu" id="menu">
          <div className="menu__content">
            <a className="ajax menu__link" href="#about">
              <h3 className="menu__title">About</h3>
              <div className="menu-icon">
                <div className="line mr-1"></div>
                <div className="icon"><i className="far fa-user"></i></div>
                <div className="line ml-1"></div>
              </div>
              <h6 className="menu__subtitle subtitle">
                Read Information
              </h6>
            </a>
            <a className="ajax menu__link" href="#skills">
              <h3 className="menu__title">Skills</h3>
              <div className="menu-icon">
                <div className="line mr-1"></div>
                <div className="icon"><i className="fas fa-tools"></i></div>
                <div className="line ml-1"></div>
              </div>
              <h6 className="menu__subtitle subtitle">
                View skills
              </h6>
            </a>
            <a className="ajax menu__link" href="#experience">
              <h3 className="menu__title">Experience</h3>
              <div className="menu-icon">
                <div className="line mr-1"></div>
                <div className="icon"><i className="fas fa-briefcase"></i></div>
                <div className="line ml-1"></div>
              </div>
              <h6 className="menu__subtitle subtitle">
                View Experience
              </h6>
            </a>
            <a className="ajax menu__link" href="#work">
              <h3 className="menu__title">Works</h3>
              <div className="menu-icon">
                <div className="line mr-1"></div>
                <div className="icon"><i className="fas fa-globe"></i></div>
                <div className="line ml-1"></div>
              </div>
              <h6 className="menu__subtitle subtitle">
                View Case Studies
              </h6>
            </a>
          </div>
          <h6 className="menu__good-people">
            Copy @2021 - built by binhhp
          </h6>
        </div>
        <span 
          onClick={hanlderMenu} 
          className="menu__toggle">
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </span>
      </React.Fragment>
  )  
}