import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [



  // {
  //   img: "img/projects/project-1.jpg",
  //   name: "Image Format",
  //   format: "img",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   Description: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-2.jpg",
  //   name: "Youtube Format",
  //   format: "youtube",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   Description: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-3.jpg",
  //   name: "Slider Format",
  //   format: "slider",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   Description: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },




  {
    img: "img/projects/project-4.png",
    name: "Facial Recognition Attendance System",
    format: "video",
    project: "Facial Recognition Attendance System",
    // client: "ENVATO",
    Description: "Designed and Implemented during the SAP code unnati innovation marathon in 4-perosn team uisng face_recognition Python library and firebase",
    technologies: ["python", ", firebase"],
    
    budget: "https://1drv.ms/p/s!Ak2s9ngxeKiH8lBA661u6mYVCpD3?e=7ClHT1",
  },
  {
    img: "img/projects/project-5.jpg",
    name: "WCmedicare",
    format: "img",
    project: "WCmedicare - medicine and healthcare website with appointment form",
    client: "ENVATO",
    Description: "Designed and implemented during 3rd year mini project in 4-person team using HTML, PHP & CSS",
    technologies: ["HTML", ", PHP",", CSS",", phpMyAdmin"],
    budget: "https://bhavinminiprojectiot.000webhostapp.com/index.php",
  },
  {
    img: "img/projects/project-6.jpg",
    name: "SJ ENGINEERING",
    format: "img",
    project: "SJ ENGINEERING - mechanical engineering work website with contact form",
    client: "ENVATO",
    Description: "created during 2nd year while exploring web developemt , this site uses firebase in contact form",
    technologies: ["HTML", ", CSS",", FIREBASE"],
    budget: "https://sjengineering20.000webhostapp.com/",
  },
  {
    img: "img/projects/project-7.jpg",
    name: "restaurant card",
    // 1. This React project creates a restaurant card website using basic React components.
// 2. It fetches data from an API and displays it in a neat restaurant card format.
    format: "img",
    project: "restaurant card website",
    client: "ENVATO",
    Description: "created while learning react using basic React components. It fetches data from an API and displays it in a neat restaurant card format.",
    technologies: ["react",", API"],
    budget: "https://react-restaurant-card.netlify.app/",
  },
  {
    img: "img/projects/project-8.jpg",
    name: "movieland",
    format: "img",
    project: "movieland - movies card",
    client: "ENVATO",
    Description: "creeat while learning react using React components and OMDb API. It fetches data from OMDB API and displays it in a movie card format. also have search movie option",
    technologies: ["react", ", OMDB API"],
    budget: "https://react-movie-card-app.netlify.app/",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "todo",
    format: "img",
    project: "todo list app",
    client: "ENVATO",
    Description: "creeat while learning react.Built a To-Do list app using React with features to add, delete, and edit tasks, using `useState` and `useReducer` hooks.",
    technologies: ["react"],
    budget: "https://react-todoslist-app.netlify.app/",
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>projects</span>
            </h2>

            <span className="title-head-subtitle">
              a few recent created web developemt and coding projects
            </span>
            
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>


                  {/* <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li> */}



                  <li>
                    <i className="fa fa-align-justify" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Description{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.Description}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie}</Fragment>
                      ))}
                    </span>
                  </li>


                  {/* <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li> */}


                </ul>
                <a href={work.budget} target="_blank" rel="noreferrer" className="btn">
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
