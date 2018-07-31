import React from "react";
import scrollToComponent from "react-scroll-to-component";
import home from "../img/homeDark.png"
import github from "../img/githubDark.png"
import codepen from "../img/codepenDark.png"
import twitter from "../img/twitterDark.png"
import linkedin from "../img/linkedinDark.png"
import Footer from './footer';
import {Link} from "react-router-dom"
import state from "../state"


const footerIconsList = [
    {icon: home, link: 'https://codepen.io/kkannen/'},
    {icon: github, link: 'https://github.com/kkannen'},
    {icon: codepen, link: 'https://codepen.io/kkannen/'},
    {icon: twitter, link: 'https://twitter.com/kkannencoding/'},
    {icon: linkedin, link: 'https://www.linkedin.com/in/krista-kannen-6b1a4498/'}
  ]
export default class Resume extends React.Component {

    componentDidMount = () => {
        scrollToComponent(this.header, { offset: 0, align: 'top', duration: 400})
    }

    renderTiles = () => {
        return state.portfolioProjects.map((project, index) => {
          return(
            <div className={`tile tile${index + 1}`}>
              <div className='overlay'>
                <p className='title'>{project.title}</p>
                <i className='fa fa-caret-up' aria-hidden='true'></i>
                <p className='description'>{project.description}</p>
                <a href={project.link} target="blank"><button>VIEW ON {project.location}</button></a>
              </div>
            </div>
        )})
      }
    
      renderFooter = () => {
        return footerIconsList.map((obj, key) => {
          return(
            <Footer
              key = {key}
              icon = {obj.icon}
              link = {obj.link}/>)})
      }

    render() {
        return (
            <div className="PortPage">
                <header ref={(section) => { this.header = section; }}>
                    <div className='headerStrip'>
                      <div className='nameContainer'>
                        <hr/>

                            <h1>Krista Kannen</h1>

                          <hr/>
                      </div>
                      <h3>MERN stack developer | Retired Biologist | Anteater Enthusiast</h3>
                    </div>
                    <i className='fa fa-chevron-down' aria-hidden='true' onClick={() => scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 400})}/>
                </header>
                <h1 ref={(section) => { this.Portfolio = section; }}>Portfolio</h1>
                <p>My Resume can be viewed <Link to="/resume">here</Link></p>
                <div className='gridWrapper'>
                    {this.renderTiles()}
                </div>
                <div className="footer">
                    {this.renderFooter()}
                </div>
            </div>
        )
    }
}