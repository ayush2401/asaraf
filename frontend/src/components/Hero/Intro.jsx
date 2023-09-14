import { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import "./Intro.css";
import axios from "axios";

const Intro = () => {

  const [homeDetails, setHomeDetails] = useState();
  const [contacts1Details, setContact2Details] = useState();

  useEffect(() => {

    axios
      .get("https://ayushsaraf.vercel.app/api/home-api/")
      .then((res) => {
        setHomeDetails(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("nahi hua");
      });

    axios
      .get("https://ayushsaraf.vercel.app/api/links-api/")
      .then((res) => {
        setContact2Details(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("nahi hua");
      }, []);
  }, []);

  const get = (text) => {
    text = text.split(".");
    return text[0];

  }

  //   if (isFetching) return "loading";

  return (
    <>
      {homeDetails &&
        homeDetails.map((detail) => (
          <section className=" intro-page" id="home" key={detail.id}>
            <div className="decorations">
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>

              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3 className="hello" data-aos="fade-down" data-aos-duration="1500">
                      {detail.job_title}
                    </h3>
                    <h3 className="name" data-aos="fade-down" data-aos-duration="1600">
                      Hey! I am
                    </h3>
                    <h3 className="job  text-animate" data-aos="fade-down" data-aos-duration="1700">
                      {get(detail.name)}
                    </h3>
                    <p className="myinfo" data-aos="fade-down" data-aos-duration="1800">
                      {detail.par_inro}
                    </p>
                  </div>
                  <div className="intro-btns" data-aos="fade-up" data-aos-duration="1900">
                    <a href={`mailto:${detail.hireMe_link}`} className="contactMe">
                      <button className="contact-me">
                        Hire me <i class="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div class="intro-contact" data-aos="fade-up" data-aos-duration="1800">
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                        {contacts1Details &&
                          contacts1Details.map((data1) => (
                            <a href={data1.link} className="icon-link" target="_blank" rel="noopener noreferrer" key={data1.id}>
                              <i className={data1.social_icon}></i>
                            </a>
                          ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 left-img " data-aos="fade-down-left">
                  <div className="ff">
                    <img className="intro-img" src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Intro;
