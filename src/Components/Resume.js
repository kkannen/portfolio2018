import React from "react";
import "../resume.css"
import {Link} from "react-router-dom"

export default class Resume extends React.Component {
    render() {
        return (
            <div className='resumeWrapper'>
            <div className="resume">
                <div className='resumeHeader'>
                    <div className='name'>
                        <h1>KRISTA KANNEN</h1>
                        <h2>Javascript Developer</h2>
                    </div>
                    <div className="contactInfo">
                        <p>975 Old Red Ranch Rd<br/>
                        Dripping Springs, Tx 78620</p>
                        <p>(512) 809-5721</p>
                        <p>kmkannen@gmail.com</p>
                        <p>kkannen.com</p>
                    </div>
                </div>
                <hr/>
                <h3>Full Stack Javascript developer and Trinity University Alum looking to contribute MERN stack skillset to a team of developers. </h3>

                {/* SKILLS */}
                <div className="skillsAndEdu">
                    <div className='skillset'>

                    <div className='heading'>
                        <hr style={{width: "25%"}}/>
                        <h2 style={{width: "25%"}}>skillset</h2>
                        <hr style={{width: "25%"}}/>
                    </div>
                    <div className='skills'>
                        <h3>Front End Development</h3>
                        <p>React, Redux, React Router, jQuery <br/>HTML5, CSS3, CSS Grid, Flexbox<br/> Material UI, React-Bootstrap, Bootstrap</p>
                        <h3>Back End Development</h3>
                        <p>Mongodb, Express, Node</p>
                        <h3>Additional Skills</h3>
                        <p>Problem solving, Express, Node</p>
                        
                    </div>
                    </div>

                    {/* EDUCATION */}
                    <div className='education'>

                        <div className='heading'>
                            <hr style={{width: "25%"}}/>
                            <h2 style={{width: "25%"}}>Education</h2>
                            <hr style={{width: "25%"}}/>
                        </div>
                        <div className="edu">
                            <h3>Austin Coding Academy | Austin, Tx</h3>
                            <em> October, 2017 - July, 2018</em>
                            <p> Javascript Full Stack Certification</p>
                        </div> 
                        <div className="edu" >
                            <h3>Trinity University | San Antonio, Tx</h3>
                            <em> August, 2013 - May, 2017</em>
                            <p> Bachelor of Science: Biology</p>
                        </div> 
                    </div>        
                </div>
                {/* WORK EXPERIENCE */}

                <div className='heading'>
                    <hr/>
                    <h2>Experience</h2>
                    <hr/>
                </div>

                <div className='workExperience'>
                    <div className='job'>
                        <h3>Authenticity Analyst | September, 2017 - current</h3>
                        <em>Bazaarvoice - Austin, TX</em>
                        <ul>
                            <li>Use case management system to analyze fraudulent trends in consumer data.</li>
                            <li>Assisted with special project to improve fraud detection algorithm.</li>
                            <li>Ensure transparency between companies and consumers</li>
                        </ul>
                    </div>
                    <div className='job'>
                        <h3>Undergraduate Research Fellow | May, 2016 - May, 2017</h3>
                        <em>Trinity University, Department of Biology - San Antonio, TX</em>
                        <ul>
                            <li>Performed wet-lab assays and experiments including cell culture, cloning and confocal microscopy </li>
                            <li>Analyzed Data from from various experiments to be used in presentations and scientific research papers</li>
                            <li>Drafted and edited scientific protocol to meet the needs of the lab.</li>
                            <li>Co-authored Scientific papers.</li>
                        </ul>
                    </div>
                    <div className='job'>
                        <h3>Assistant Stockroom Manager| August, 2013 - November, 2014</h3>
                        <em>Trinity University, Department of Chemistry - San Antonio, TX</em>
                        <ul>
                            <li>Tested and calibrated laboratory equipment </li>
                            <li>Measured and distributed chemicals and supplies to learning labs</li>
                            <li>Organized and cataloged chemicals and equipment</li>
                            <li>Trained new employees</li>
                        </ul>
                    </div>
                </div>

                {/* PROJECTS */}

                <div className='heading'>
                    <hr/>
                    <h2>Projects</h2>
                    <hr/>
                </div>
                My portfolio site can be viewed <Link to="/">here</Link>
                <div className='projects'>
                    <div className='project'>
                        <h3>Computer Science Study Guide</h3>
                        <em>MERN Stack</em>
                        <p>There are many valuable learning resources on the web, but at times, they can be difficult to navigate. This study guide was created to streamline the process of learning computer science by gathering those resources in one place, and allowing the user to save and track their progress as they learn. 
                        This is a MERN stack app that includes a basic authentication system that uses JWT and bcrypt.</p>
                        <a href="https://github.com/kkannen/cs-study-guide" target="blank">VIEW ON GITHUB</a>
                    </div>
                    <div className='project'>
                        <h3>Authentication</h3>
                        <em>MERN Stack</em>
                        <p>An authentication system built with Mongodb, Express, React, Redux, and Node, JWT and bcrypt and styled using components from Material UI. This system is fairly simple and is meant to be easy to integrate into any application that calls for authentication.</p>
                        <a href="https://github.com/kkannen/authentication-starter" target="blank">VIEW ON GITHUB</a>
                    </div>
                    <div className='project'>
                        <h3>Driftwood</h3>
                        <em>React</em>
                        <p>This application in a remodel of the Driftwood Estate Winery's web page. In this redesign, I have updated styling, embedded a map to the winery, and rearranged the user Interface to make the site easier to navigate. This application was built using React and styled using components from MaterialUI.</p>
                        <a href="https://github.com/kkannen/driftwood-redesign" target="blank">VIEW ON GITHUB</a>
                    </div>               
                </div>
                </div>
            </div>
        )
    }
}

