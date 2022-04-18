import React from 'react';

const App = () => {
    return(
        <>
            <h1 className="text-center">Cameron Davis</h1>
            <p className="text-center">205-396-9911 | camrdavis.biz@gmail.com | CamDavi5 · GitHub</p>
            
            <h3><u>Objective</u></h3>
            <p>A reliable and diligent worker with knowledge in programming languages, software development, and web 
            development looking to obtain an entry level position as a Software Engineer or Full Stack Developer</p>

            <h3><u>Skills and Abilities</u></h3>
            <h4>Computer Science Skills</h4>
            <ul>
                <li>Proficient in Python, Java, and C, Microsoft Office Suite and Windows Operating System</li>
                <li>Experienced in JavaScript, HTML, CSS, React, APIs, MySQL, Bash, and AWS</li>
                <li>Familiar with configuring PC hardware, software, drivers, and peripherals</li>
            </ul>
            <h4>Other</h4>
            <ul>
                <li>Soft Skills: Teamwork, Problem Solving, Communication, Time Management, Flexibility</li>
                <li>AIDT Leadership Skills 1 Certification, January 2022</li>
            </ul>

            <h3><u>Education</u></h3>
            <h4 className="text-dc-color">Full-Stack Web Development | April 2022</h4>
            <h4>Innovate Birmingham, Birmingham, AL</h4>
            <p> </p>
            <h4 className="text-dc-color">Bachelor of Arts in Computer Science (Magna Cum Laude, GPA 3.72) | Graduated 2021</h4>
            <h4>The University of Alabama at Birmingham, Birmingham, AL</h4>
            <ul>
                <li>Relevant Coursework: Object-Oriented Programming, Discrete Structures, Algorithms & Data 
                Structures, Systems Programming, Operating Systems, Computer Security, Cloud Security, Network 
                Security</li>
            </ul>

            <h3><u>Technical Projects</u></h3>
            <h4 className="text-dc-color">Recall.it Web App - JavaScript / NodeJS / React / mySQL</h4>
            <h4>Innovate Birmingham Final Project | April 2022</h4>
            <ul>
                <li>Front-end and Back-end Developer for a website catalog that focuses on recalled vehicles and applicances. 
                The data was pulled using the CPSC API and NTHSA API and organizing the data with a category pages. User 
                data was stored and retrieved from a local mySQL database that included user info and saved items.
                </li>
            </ul>
            <h4 className="text-dc-color">Smart Home Simulation - Java / PostgreSQL</h4>
            <h4>UAB Capstone Project | January 2021 - April 2021</h4>
            <ul>
                <li>Front-end Developer for a simulation of an IoT household that can be controlled from a desktop. The 
                simulation could be controlled with three screens: a home page for IoT toggles and temperature, a 
                usage page for data tracking and predictions, and a diagnostics screen for preconfigured simulations.
                </li>
            </ul>
            <h4 className="text-dc-color">BVAC - A Cloud-Based Anti-Virus Scanner - Python / AWS</h4>
            <h4>UAB Cloud Security | September 2020 - December 2020</h4>
            <ul>
                <li>Co-lead and Front-end/Back-end Developer for an automated antivirus software that uploads new files 
                to the cloud for inspection. Two anti-virus scanners are hosted on EC2 servers, and the results are 
                transmitted and stored via S3 buckets. SQS queues used for EC2 and S3 communication.</li>
            </ul>

            <h3><u>Job History</u></h3>
            <h4 className="text-dc-color">Vulcan Industrial Supply, Birmingham, AL</h4>
            <h4>Warehouse Clerk | July 2021 - January 2022</h4>
            <ul>
                <li>Responsible for organizing and stocking item inventory</li>
                <li>Cleaned the warehouse floors, shelves, and boxes containing parts</li>
                <li>Gained knowledge of specific part sizes, grades, and terminology</li>
            </ul>
            <h4 className="text-dc-color">UAB Hill Student Center, Birmingham, AL</h4>
            <h4>Game Room Attendant | May 2019 - May 2021</h4>
            <ul>
                <li>Managed the game room facility by recording/limiting attendees and monitoring gamers</li>
                <li>Maintained the consoles and games along with general cleaning and vacuuming at shift end</li>
                <li>Collaborated with team members to organize shifts and brainstorm updates to the facility</li>
            </ul>
        </>
    );
};

export default App;