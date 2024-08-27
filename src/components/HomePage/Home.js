import React, { useEffect, useState } from "react";
import "../HomePage/Home.css";
import Faqs from "../Content/FaqData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const url = process.env.URL || "https://sparsh01.onrender.com";
export default function Home() {
  const { isAuthenticated, user } = useAuth0();
  const [data, setData] = useState();
  const [donation, setDonation] = useState();
  const [time, setTime] = useState();
  useEffect(() => {
    fetch(`${url}/appointment`)
      .then((data) => data.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
    fetch(`${url}/donation`)
      .then((data) => data.json())
      .then((res) => setDonation(res))
      .catch((err) => console.error(err));

    setTime(new Date().toLocaleDateString());
  }, []);
  // if(data) data.filter((qw) => user.Email === qw.email).map((qw) => console.log(qw));
  //  if(time) console.log(time);
  return (
    <>
        <section class="banner_part">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-5 col-xl-5">
                <div class="banner_text">
                  <div class="banner_text_iner">
                    <h5>We are here for your care</h5>
                    <h1>Best Care &amp; Better Doctor</h1>
                    <p>
                    Discover compassionate care and cutting-edge facilities on our hospital's 
                    website. Book appointments, access health resources, and connect with our 
                    expert team effortlessly. Your well-being is our top priority.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="banner_img">
                  <img src="https://preview.colorlib.com/theme/medico/img/banner_img.png.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      <div className="Home-container">
        <div className="Home-container-2">
          <div className="container">
            <div className="box-container">
              <div className="box" data-aos="fade-up">
                <i className="fas fa-users"></i>
                <span>150+</span>
                <h4>Staffs</h4>
              </div>

              <div className="box" data-aos="fade-up">
                <i className="fas fa-hospital"></i>
                <span>12+</span>
                <h4>Hospitals</h4>
              </div>

              <div className="box" data-aos="fade-up">
                <i className="fas fa-procedures"></i>
                <span>80+</span>
                <h4>Bed Facility</h4>
              </div>

              <div className="box" data-aos="fade-up">
                <i className="fas fa-smile"></i>
                <span>1300+</span>
                <h4>Happy Patients</h4>
              </div>

              <div className="box" data-aos="fade-up">
                <i className="fas fa-ambulance"></i>
                <span>25+</span>
                <h4>Advance Ambulance</h4>
              </div>
            </div>
          </div>
          {isAuthenticated && data && (
            <div className="schedule-dash ">
              <h4 className="schedule-heading">Your Appointment Schedule</h4>
              <ul className="schedule-detail">
                {data
                  .filter((qw) => qw.email === user.email)
                  .map((ok) => (
                    <div className="appointment-content">
                      <li>
                        Name : <span>{ok.name}</span>
                      </li>
                      <li>
                        Email : <span>{ok.email}</span>
                      </li>
                      <li>
                        Phone : <span>{ok.phone}</span>
                      </li>
                      <li>
                        Date : <span>{ok.date}</span>
                      </li>
                    </div>
                  ))}
              </ul>
            </div>
          )}
          {isAuthenticated && donation && (
            <div className="schedule-dash ">
              <h4 className="schedule-heading">Your Blood Donation Schedule</h4>
              <ul className="schedule-detail">
                {donation
                  .filter((qw) => qw.name === user.name)
                  .map((ok) => (
                    <div className="appointment-content">
                      <li>
                        Name : <span>{ok.name}</span>
                      </li>
                      {/* <li>Email : <span>{ok.email}</span></li> */}
                      <li>
                        Phone : <span>{ok.phone}</span>
                      </li>
                      <li>
                        Date : <span>{new Date().toLocaleDateString()}</span>
                      </li>
                      <li>
                        Address : <span>{ok.address}</span>
                      </li>
                    </div>
                  ))}
              </ul>
            </div>
          )}

          <div className="faq-section">
            <div className="faq-heading">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className="accordion mt-4" id="accordionExample">
              {Faqs.map((item) => (
                <Accordion style={{ backgroundColor: "#E1ECC8" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                          xl: "20px",
                        },
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ backgroundColor: "#F7FFE5" }}>
                    <Typography>{item.ans}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>

          <div className="p-4">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.657622579312!2d84.89840587516483!3d22.2530655797206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1689606313416!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <footer
              style={{ backgroundColor: "rgb(181 195 151)" }}
              className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
            >
              <div className="col-md-4 d-flex align-items-center">
                <Link
                  to="/"
                  class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                ></Link>
                <span className="text-muted">
                  © {new Date().getFullYear()} Sparsh, Inc
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
