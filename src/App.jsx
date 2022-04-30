import "./header.css";
import "./home.css";
import "./about-us.css";
import "./services.css";
import "./top.css";
import "./foot.css";
import logo from "./images/home/home-logo.png";
import { GrInstagram } from "react-icons/gr";
const App = () => {
  return (
    <body>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="navbar-logo">
              <img className="navlogo" src={logo} alt="" />
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-us" className="nav-link">
                  ABOUT US
                </a>
              </li>

              <li className="nav-item">
                <a href="#services" className="nav-link">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact-us" className="nav-link">
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="home" className="home">
          <div className="container">
            <h3 className="home__title">
              ACCOUNTING SERVICESFOR YOUR BUSINESS
            </h3>
            <h2 className="home__descr"> </h2>
          </div>
        </section>
        <section id="about-us" className="about-us">
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="about-us__ttext">ABOUT US</h4>
                <h5 className="about-us__text">“Eight Company” LLC</h5>
                <p className="about-us__btext">
                  “Eight Company” LLC was founded in 2018 in Kyrgyzstan from a
                  new generation of professional accountants. Provides a full
                  range of accounting services for medium and small businesses.
                  One of the main directions of our company is to create an
                  optimal accounting and management accounting system for young
                  companies that are just entering the market.This allows you to
                  immediately create effective accounting and reporting systems
                  so that you can track the real financial condition of the
                  business at any stage. Regardless of your company's ambitions
                  and level, we are ready to take on all the burden of
                  compliance with regulatory requirements and accounting. Thanks
                  to our comprehensive support, you will be able to focus
                  directly on important business tasks to achieve the best
                  results of your activities..
                </p>
              </div>
              <div className="col">
                <img
                  src="https://i.pinimg.com/originals/d1/b9/36/d1b936441d5d56e0da7f541c6f048198.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container-2">
            <div className="d-flex ">
              <p className="services__butitle">SERVICE PRICES</p>
              <h2 className="services__title">
                CHOOSE YOUR TARIFF FOR THE FINANCIAL REPORT
              </h2>
            </div>
            <div className="row-row">
              <div className="col-col">
                <h3>ZERO </h3>
                <h3>6000 SOM</h3>
                <p4>
                  PRICE PER MONTH -Documents -Reports Tax Service -Salary
                  calculation -Internet banking -Record keeping in 1C
                  -consulting 1 hour
                </p4>
              </div>
              <div className="col-col-col">
                <h4>BASIC </h4>
                <h4>11000 som</h4>
                <p2>
                  Price per month -Documents up to 10 pcs. -Reports Tax Service
                  -Salary calculation up to 5 pcs. -Internet banking -Record
                  keeping in 1C -consulting 5 hours
                </p2>
              </div>
              <div className="col-col-col-col">
                <h5>STANDARD</h5>
                <h5> 22000 SOM</h5>
                <p3>
                  Price per month -Documents up to 20 pcs. -Reports Tax Service
                  -Salary calculation up to 10 pcs. -Internet banking -Record
                  keeping in 1C -consulting 16 hours
                </p3>
              </div>
            </div>
          </div>
        </section>
        <article className="top">
          <div className="container-3">
            <h2 className="title">OUTSTAFFING SERVICES</h2>
            <row className="top">
              <div className="col">
                <h2 className="all_title">8000 som</h2>
                <p className="pro">
                  OUTSTAFFING SERVICES FROM 8000 SOM PER MONTH FOR ONE EMPLOYEE
                </p>
              </div>
              <div className="col-img"></div>
            </row>
          </div>
        </article>
      </main>
      <footer id="contact-us" className="box">
        <div className="container-4">
          <div className="row">
            <div className="col">
              <h2 className="logo">Eight Company</h2>
              <p className="_box">Mon - Fri: 9:00 - 19:00 Closed on Weekends</p>
            </div>
            <div className="col">
              <h2 className="logo">Contact Us</h2>
              <p className="_foo">+996 700 280 600 </p>
              <p className="_foo">Info@eightcom.kg</p>
              <a className="instagram" href="https://inlnk.ru/kXmY1Z">
                <GrInstagram fontSize={32} />
                instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default App;
