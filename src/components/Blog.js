import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "SAP Code Unnati Innovation Marathon",
    img: "img/blog/blog-post-1.jpg",
    tag: "SAP Code Unnati Innovation Marathon",
    date: { date: "28", month: "Mar", year: "2023" },
    des: [
      "Our team was selected as one of the top 25 teams from 120 across Gujarat for the SAP Code Unnati Innovation Marathon held at Gujarat Technical University.",
      "We built a system that uses facial recognition to take attendance. We used a Python library called face_recognition and combined it with OpenCV. ",
      "When users' faces are recognized, the system checks the Firebase database to match them with their information and updates attendance records accordingly.",
      " ",
      " ",
    ],
  },
  {
    title: "Felicitated at Dewang Mehta IT award",
    img: "img/blog/blog-post-2.jpg",
    tag: "Dewang Mehta IT Award",
    date: { date: "12", month: "Aug", year: "2022" },
    des: [
      "During my first year of engineering, I excelled academically by achieving top positions in both the 1st and 2nd semesters. ",

      "For that, I was honored at the Dewang Mehta IT Award in Ahmedabad.",
      " ",
      " ",
    ],
  },
  {
    title: "1st Place in TechFest",
    img: "img/blog/blog-post-3.jpg",
    tag: "TekXianze#2023",
    date: { date: "18", month: "Apr", year: "2023" },
    des: [
      "Our team won 1st place in the WebTricks competition at the TekXianze national-level tech festival held at SSAIET.",
      "In the event, we made a website about a specific topic and set up the website to talk to a database.",
      "",
      "",
    ],
  },
  {
    title: "1st Place in TechFest",
    img: "img/blog/blog-post-4.jpg",
    tag: "TekXianze#2023",
    date: { date: "19", month: "Apr", year: "2023" },
    des: [
      // "Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      // "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
      "Secured 1st position in the BrainTeaser event at TekXianze national-level tech festival held at SSAIET.",
      "The event is based programming concept and in the last round participants need to print the given pattern in off-desktop screen mode.",
      " ",
      " ",
    ],
  },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "blog" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
          awards &<span>  achievements</span>
          </h2>
          <span className="title-head-subtitle">
          Here are some highlights from the past four-year journey
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                      <span style={{backgroundColor : "#ffb400",fontSize : "16px",
    paddingTop: "1px"}}>{data.date.year}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
