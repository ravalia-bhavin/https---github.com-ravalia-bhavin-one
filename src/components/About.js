import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code beautiful things, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/bhavin_squaree_800x800.png"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a final year computer engineering student with a focus on
              React development. Quick learner, eager to apply my skills to
              boost company success and advance my career.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Bhavin
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Ravalia
                  </h6>
                </li>
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>21 june
                    1990
                  </h6>
                </li> */}
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>7 years
                  </h6>
                </li> */}
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Bilimora, Gujarat
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Indian
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    English,Hindi,Gujarati
                  </h6>
                </li>

                {/* <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li> */}
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    English,Hindi,Gujarati
                  </h6>
                </li> */}
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+91 7575852639
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    ravaliabhavin01@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Linkedin</span>
                    linkedin.com/in/bhavinravalia/
                  </h6>
                </li>
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Dribbble</span>
                    taylor.dribbble
                  </h6>
                </li> */}
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a
                href="https://docs.google.com/uc?id=1acGeiVcNM_FOHg0T-X6y0gSyNCrBaFVx"
                target="_blank" rel="noreferrer"
                className="btn btn-resume"
              >
                <span>
                  <i className="fa fa-download" />
                  download my resume
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                internship
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        25/07/2023 - 25/08/2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        web designing with react
                        <span className="separator" />
                        <span className="font-weight-700">
                          BrainyBeam Info-Tech
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        I&apos;m currently doing a 30-day summer internship at
                        BrainyBeam Info-Tech in Ahmedabad, where I&apos;m learning
                        web designing with React. As part of the internship,
                        I&apos;ve created a car rental project using React.
                      </p>
                      <p style={{ color: "#334dff" }}>live : RentuhHub</p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        25/07/2023 - 10/08/2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Dynamic Web Page Designing Using React
                        <span className="separator" />
                        <span className="font-weight-700">
                          INFOLABZ IT SERVICES
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        I finished a 15-day internship at INFOLABZ IT SERVICES
                        PVT. LTD. in Ahmedabad, where I learned about ES6 and
                        React. During the internship, I built a news app using
                        React. This app retrieves data from an API and displays
                        it on the app.
                      </p>
                      <p style={{ color: "#334dff" }}>live : News App</p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                {/* <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2010 - 2014
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Consultant
                        <span className="separator" />
                        <span className="font-weight-700">Google</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        BACHELOR DEGREE
                        <span className="separator" />
                        <span className="font-weight-700">
                          Gujarat Technological University
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        I&apos;m pursuing a Bachelor&apos;s in Computer Engineering from
                        S. S. Agrawal Institute of Engineering & Technology,
                        Navsari, affiliated with GTU, with a Cumulative GPA of
                        9.04.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Higher Secondary Education
                        <span className="separator" />
                        <span className="font-weight-700">AB SCHOOL</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Completed 12<sup>th</sup> science [PCM] from AB School,
                        Chikhli, with a 66%.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2001 - 2005
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Secondary Education
                        <span className="separator" />
                        <span className="font-weight-700">AB SCHOOL</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Completed 10<sup>th</sup> standard from AB School,
                        Chikhli, with a 81%.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 4px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">c</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 4px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">react js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">java</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 4px)" }}>
                  {/* right: "calc(35% - 21px)" */}
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">DSA</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">MS OFFICE</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">CANVA</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 4px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
