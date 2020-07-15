import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-sorwar-nav-toggle sorwar-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="sorwar-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="sorwar-logo"><b><a href="index.html">Sorwar Hossain</a></b></h1>
              <span className="email"><i className="icon-mail"></i> sorwar.dev@gmail.com</span>
            </div>
            <nav id="sorwar-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><b><a href="#home" data-nav-section="home">Introduction</a></b></li>
                  <li><b><a href="#about" data-nav-section="about">About</a></b></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><b><a href="#timeline" data-nav-section="timeline">Timeline</a></b></li>
                </ul>
              </div>
            </nav>
            <div align="center" >
               <strong> <a href="https://www.facebook.com/ssorwar" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a> </strong>
               <strong> <a href="https://twitter.com/thesorwar" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a> </strong>
               <strong> <a href="https://www.instagram.com/thesorwarhossain/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a> </strong>
               <strong> <a href="https://www.linkedin.com/in/sorwar/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a> </strong>
               <strong> <a href="https://github.com/sorwaar" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a> </strong>
            </div>  
          </aside>
        </div>
      </div>
    )
  }
}