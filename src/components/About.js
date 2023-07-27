import React from "react";
import './About.css';
import './About2.css';
import VanillaTilt from './vanilla';
import image from './image2.png';

function About(){
    setTimeout(function() {
        VanillaTilt.init(document.querySelectorAll(".Card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    }, 2000); 


    setTimeout(function() {
        VanillaTilt.init(document.querySelectorAll(".Card2"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    }, 2000); 

    setTimeout(function() {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 0,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });
    }, 2000); 

        VanillaTilt.init(document.querySelectorAll(".Card"), {
		max: 25,
		speed: 400,
        glare: true,
        "max-glare": 0.5,
	});

      
    return(
        
        <div className="About gradient"  id="About">

            <h1 id="heading">About</h1>
            <div className="About-compo ">
            <div className="Card">
            <img class="framed" src={image} alt="random"/>
            </div>


            <div className="About-components">

            <div className="Card">
            <div className="content">
                <p>As a motivated and detail-oriented individual with practical experience in Software development through my Internship, I am well-equipped to apply my skills in a professional setting for a Software Engineer. With strong verbal and written communication skills, as well as a commitment to professional ethics, I am eager to contribute to an organization’s success. I am proficient in various programming languages such as JavaScript, SQL, C++, HTML5, CSS3, JAVA, Python, and have a good understanding of Git Version Control, Agile/Scrum workplace, and object-oriented programming. Looking for an opportunity to continue learning and growing in a challenging environment.
                </p>
            </div>

            
        </div>

        {/* <div className="Card">
            <div className="content">
            <h2>Experience:</h2>                
            <p>HelloHelloHelloHello</p>
            </div>
        </div> */}
        </div>



        <div className="About-components">

        <div className="Card2">
        <div className="content">
            <h3 id="education-heading">Education:</h3>
            <p>&nbsp;</p>
            <p id="course-name">COMPUTER PROGRAMMING </p> 
            <p id="college-name"> Seneca College</p>
            <p id="college-gpa">GPA: 3.7/4</p>
            <p>&nbsp;</p>
            <p id="course-description">Object-Oriented Software Development, Data Structures and Algorithms, Database Services, Web Programming Tools and Frameworks, Software Testing, IT Project Mgmt., Microsoft Cloud Technologies</p>
        </div>
        </div>

        <div className="Card2">
        <div className="content">
            <h3 id="education-heading">Education:</h3>
            <p>&nbsp;</p>
            <p id="course-name">COMPUTER ENGINEERING </p> 
            <p id="college-name">TAPI DIPLOMA ENGINEERING COLLEGE</p>
            <p id="college-gpa">GPA: 3.7/4</p>
            <p>&nbsp;</p>
            <p id="course-description">Programming in C++, Database Management System, Data Structure, .NET Programming, JAVA Programming, Computer and Network Security, Network management, Network operations</p>
        </div>
        </div>


        </div>
        

        <div className="About-components">

        <div className="Card2">
        <div className="content">
            <h3 id="education-heading">Experience:</h3>
            <p>&nbsp;</p>
            <p id="course-name">WEB DESIGNER – DEVELOPER</p> 
            <p id="college-name"> J&D EXECUTIVE RECRUITMENT (TORONTO, CANADA)</p>
            <p id="college-gpa">July 2022 - July 2023</p>
            <p>&nbsp;</p>
            <p id="course-description">·	Designed and developed visually appealing and user-friendly and responsive websites for the company, resulting in a 95% increase in website traffic and a 80% increase in conversion rates.
·	Implemented responsive design techniques, optimizing websites for seamless viewing across multiple devices and screen sizes, resulting in a 25% decrease in bounce rates.
·	Conducted regular website maintenance and updates, ensuring optimal performance and functionality, and resolving any technical issues promptly to minimize downtime and improve user experience.
</p>
        </div>
        </div>

        <div className="Card2">
        <div className="content">
            <h3 id="education-heading">Experience:</h3>
            <p>&nbsp;</p>
            <p id="course-name">SOFTWARE DEVELOPER INTERN</p> 
            <p id="college-name">RED & WHITE MULTIMEDIA EDUCATION (SURAT, INDIA)</p>
            <p id="college-gpa">JULY 2019 - JUNE 2020</p>
            <p>&nbsp;</p>
            <p id="course-description">·	Developed and implemented innovative web application features utilizing JavaScript, HTML, and CSS, resulting in a 40% increase in user engagement and a 25% improvement in overall user experience.
·	Collaborated with cross-functional teams to identify and troubleshoot software defects, resulting in a 20% reduction in overall application bugs.
·	Interacted with clients, and successfully translated business requirements into comprehensive technical design specifications by collecting user feedback and solving different software needs.
·	Worked effectively with colleagues at various levels. Participated in reviewing and debugging complex codes, which helped to learn basics of testing in a software development Lifecycle (SDLC) environment.
</p>
        </div>
        </div>


        </div>
        
        
        </div>
        </div>
    )
}
export default About;