import "./Services.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [servicesDetails, setServicesDetails] = useState();

  useEffect(() => {
    axios
    .get("/api/allServices-api/")
    .then((res) => {
      setServicesDetails(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log("nahi hua");
    });
  },[])

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>INTERESTS AND AREAS</h2>

          </div>

          <div className="service-row">
            {servicesDetails &&
              servicesDetails.map((service) => (
                <div
                  className=" my-service"
                  key={service.id}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <div className="ser-back">
                    <img src={`${service.icon_image}`} alt="" />
                  </div>
                  <h4 className="web">{service.service_name}</h4>
                  <p className="service-info">{service.service_description}</p>
                  <div class="shadow-icon">
                    <i class={service.shadow_icon}></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
