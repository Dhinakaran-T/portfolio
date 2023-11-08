import React from "react";
import "./style.css";
import {
  photo,
  linkedin,
  education,
  github,
  instagram,
  arrow,

  checkmark,
 
  email,
} from "./assets/index.js";
import resumePDF from "./assets/Resume.pdf";
function Nav() {
  return (
    <div>
      <nav id="desktop-nav">
        <div class="logo">DHINAKARAN T</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            {/* <li>
              <a href="#projects">Projects</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo">DHINAKARAN T</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#about" onclick="toggleMenu()">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Experience
              </a>
            </li>
            {/* <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li> */}
            <li>
              <a href="#contact" onclick="toggleMenu()">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
}

function Profile() {
  const openPdf = () => {
    window.open(resumePDF, "_blank");
  };
  return (
    <section id="profile">
      <div class="section__pic-container">
        <img class="profileimage" src={photo} alt="DHINAKARAN Profile Photo" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">DHINAKARAN T</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
          <button class="btn btn-color-2" onClick={openPdf}>
            Resume
          </button>
          <a href="#contact">
            <button class="btn btn-color-1">Contact Info</button>{" "}
          </a>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/dhinakaran-t-961a94215">
            {" "}
            <img src={linkedin} alt="My LinkedIn profile" class="icon" />
          </a>
          <a href="https://github.com/Dhinakaran-T">
            <img src={github} alt="My Github profile" class="icon" />
          </a>
          <a href="https://instagram.com/dhina_mahil?igshid=OWR1cXM0eno4d25j">
            <img src={instagram} alt="My Instagram profile" class="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        {/* <!-- <div class="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile picture"
            class="about-pic"
          />
        </div> --> */}
        <div class="about-details-container">
          <div class="about-containers">
            {/*  <div class="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div> */}
            <div class="details-container">
              <img src={education} alt="Education icon" class="icon" />
              <h3>Education</h3>
              <p>B.E. Computer Science and Engineering</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            I'm an innovative and flexible engineer that is ready to share my knowledge and keep learning new things.
                 I work well in team-based settings where I can effectively collaborate to tackle challenging problems because 
                 I have a strong foundation in problem-solving. My desire to work for a forward-thinking company 
                 where I can use my knowledge and experience to help the company reach its objectives stems from my passion for innovation. 
                 With my devotion and creative thinking, I'm determined to have a significant influence and help the organisation succeed..
        
            </p>
          </div>
        </div>
      </div>

      <a href="#experience">
        <img src={arrow} alt="Arrow icon" class="icon arrow" />
      </a>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>UI/UX</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>ReactJS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <a href="#projects">
        <img src={arrow} alt="Arrow icon" class="icon arrow" />
      </a>
    </section>
  );
}

// function Projects() {
//   return (
//     <section id="projects">
//       <p class="section__text__p1">Browse My Recent</p>
//       <h1 class="title">Projects</h1>
//       <div class="experience-details-container">
//         <div class="about-containers">
//           <div class="details-container color-container">
//             <div class="article-container">
//               <img src={ITG} alt="Project 1" class="project-img" />
//             </div>
//             <h2 class="experience-sub-title project-title">ITG</h2>
//             <div class="btn-container">
//               <a href="https://github.com/Gokul0616/ITG">
//                 <button class="btn btn-color-2 project-btn">Github</button>
//               </a>
//               <a href="https://gokul0616.github.io/ITG/">
//                 <button class="btn btn-color-2 project-btn">Live Demo</button>
//               </a>
//             </div>
//           </div>
//           {/* <!-- <div class="details-container color-container">
//             <div class="article-container">
//               <img
//                 src="./assets/project-2.png"
//                 alt="Project 2"
//                 class="project-img"
//               />
//             </div>
//             <h2 class="experience-sub-title project-title">Project Two</h2>
//             <div class="btn-container">
//               <button
//                 class="btn btn-color-2 project-btn"
//                 onclick="location.href='https://github.com/'"
//               >
//                 Github
//               </button>
//               <button
//                 class="btn btn-color-2 project-btn"
//                 onclick="location.href='https://github.com/'"
//               >
//                 Live Demo
//               </button>
//             </div>
//           </div> --> */}
//           <div class="details-container color-container">
//             <div class="article-container">
//               <img src={buddypro} alt="Project 3" class="project-img" />
//             </div>
//             <h2 class="experience-sub-title project-title">BuddyPro</h2>
//             <div class="btn-container">
//               <a href="https://github.com/Gokul0616/BuddyPro-client">
//                 {" "}
//                 <button class="btn btn-color-2 project-btn">Github</button>
//               </a>
//               <a href="https://buddypro.netlify.app/">
//                 <button
//                   class="btn btn-color-2 project-btn"
//                   // onclick="location.href='https://buddypro.netlify.app/'"
//                 >
//                   Live Demo
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <a href="#contact">
//         <img src={arrow} alt="Arrow icon" class="icon arrow" />
//       </a>
//     </section>
//   );
// }

function Contact() {
  return (
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:dhina15003@gmail.com">dhina15003@gmail.com</a>
          </p>
        </div>
        <div class="contact-info-container">
          <img src={linkedin} alt="LinkedIn icon" class="icon contact-icon" />
          <p>
            <a href="https://www.linkedin.com/in/dhinakaran-t-961a94215">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            {/* <li>
              <a href="#projects">Projects</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 DHINAKARAN T. All Rights Reserved.</p>
    </footer>
  );
}

export { Nav, Profile, About, Experience, Contact, Footer };
