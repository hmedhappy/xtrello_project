import React from 'react'


export default function Footer() {
  const  today = new Date();
  const year = today.getFullYear();

  return (
      <div>
          {/* Main Footer */}
          <footer className="main-footer" style={{position:'fixed',bottom:'0',width:'100%'}}>
              <strong>Copyright © {year} <a href="https://www.facebook.com/ahmed.jackson.180/" target="_blanc">Ahmed Ferah</a>. </strong>
                All rights reserved.
              <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 1.0.0
              </div>
          </footer>
      </div>
  )
}