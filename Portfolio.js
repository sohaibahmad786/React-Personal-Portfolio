import React from 'react'
import './Porfolio.css'
import { Link } from 'react-router-dom'
import Typical from 'react-typical';
import Picture from '../My Fortfolio/Dp1.pic.jpg'




const Portfolio = () => {
    return (
        <div className='container'>

            <div className='hithere'>
                <h2><i>HEY THERE!</i></h2>
            </div>
            <div className='sohaib'>
                <h1>Hi I Am Sohaib</h1>
            </div>
            <div className='mainbody'>
                <div className='frontend'>
                    {/* <p>I Am Frontend Web-Developer</p> */}
                    <p>
                        I am{' '}
                        <Typical
                            steps={['Frontend Web Developer', 2000, '', 1000]}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </p>
                    <p style={{ color: 'white', marginTop: "10px", fontSize: "large", fontWeight: "400", maxWidth: "700px" }}>Hi everyone! Meet Sohaib Ahmad, a passionate Frontend Web Developer.
                        He has strong command over HTML, CSS, JavaScript, and React.js.
                        Sohaib loves turning creative ideas into clean, responsive websites.
                        He's constantly learning and growing in the world of web development.
                        With dedication and skills, he's building a bright future in tech!
                        He enjoys solving problems and bringing user-friendly designs to life.
                        Always eager to explore new tools and frameworks to level up his craft.
                        Sohaib believes in consistency, creativity, and continuous improvement. </p>
                </div>
                <div className='picture'>
                    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXaG33Bhqe6mWbT_7PqdO2pQ1gfScozTqJA&s' style={{ marginTop: "-100px" }} /> */}
                    <img src={Picture} style={{ marginTop: "-100px", width: "300px", height: "290px", borderRadius: "50%" }} />
                </div>
            </div>
            <div className='icons'>
                <div>
                    <a href='https://www.instagram.com/'>
                        <i className="fa-brands fa-instagram" style={{ backgroundColor: "#E1306C" }}></i>
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com/'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
                <div>
                    <a href="https://pk.linkedin.com/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <div>
                    <a href='https://web.facebook.com/?_rdc=1&_rdr#'>
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>

            </div>
            <div className='btns'>

                <div>
                    <button><a href='https://github.com/sohaibahmad786'><p>Github</p><i class="fa-brands fa-square-github"></i></a></button>
                </div>
                <div>
                    <button><Link to={'/cv'} style={{ textDecoration: "none", color: "white" }}><a><p>Resume</p><i class="fa-solid fa-file-image"></i></a></Link></button>
                </div>

            </div>
        </div>
    )
}

export default Portfolio