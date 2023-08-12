import React from 'react'
import "./style.css";

const Container = ({ children, nospaces}) => {
  return (
    <div className={`container ${nospaces ? "container--padding" : ""}`}>
      {children}
    </div>
  )
}

export default Container;