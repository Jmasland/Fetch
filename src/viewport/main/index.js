import React, { useState } from 'react';
import Popup from "../../components/Popup";
import Banner from "../../../src/assets/banner-img.png";
import logo from "../../../src/assets/logo.png";
import servicesImg from "../../../src/assets/services-img.png";
import Walking from "../../../src/assets/walking.png";
import Sitting from "../../../src/assets/sitting.png";
import Training from "../../../src/assets/training.png";
import Visits from "../../../src/assets/vet-visits.png";
import Grooming from "../../../src/assets/Grooming.png";
import Pawn from "../../../src/assets/pawn.png"
import { ButtonIcon } from "../../svgIcon/svg";
// import { FaArrowCircleUp } from 'react-icons/fa';

const Main = () => {
  const [isOpen, setIsOpen,] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="inner-wrap">
      <div className="banner light-bg" id="home">
        <div className="container d-flex align-items-center">
          <div className="row mt-5">
            <div className="col-lg-6 col-6 wow pulse animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="left-wrap justify-content-center">
                <div className="img-wrap">
                  <img className="img-fluid" alt="logo" src={logo} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-6" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="img-wrap justify-content-center gradient-border">
                <div className="border-wrap border-white">
                  <img className="img-fluid border-white" alt="banner" src={Banner} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-0 mt-md-3">
              <p className='text-center green-text mt-5 mb-5'><img className="pawn me-2"src={Pawn} />Helping your pets live their best lives<img className='pawn ms-2' src={Pawn} /></p>
            </div>
          </div>
        </div>
      </div>

      <div className="services p-80 green-bg" id="services">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading" data-wow-duration="1000ms" data-wow-delay="600ms">Our Canine Services</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-lg-4 mb-lg-0 mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="common-wrap">
                <div className="img-wrap justify-content-center gradient-border">
                  <div className="border-wrap border-green">
                    <img className="img-fluid" alt="banner" src={Banner} />
                  </div>
                </div>
                <h4 className="mt-4">Running</h4>
                <ul>
                  <li>Small group</li>
                  <li>Off leash & on trail</li>
                  <li>Pickup & dropoff</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-lg-0 mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="common-wrap">
                <div className="img-wrap justify-content-center gradient-border primary-gradient">
                  <div className="border-wrap border-green">
                    <img className="img-fluid" alt="banner" src={Walking} />
                  </div>
                </div>
                <h4 className="mt-4">Walking</h4>
                <ul>
                  <li>1 on 1 & small group</li>
                  <li>On leash</li>
                  <li>Pickup & dropoff</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-lg-0 mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="common-wrap">
                <div className="img-wrap justify-content-center gradient-border primary-gradient">
                  <div className="border-wrap border-green">
                    <img className="img-fluid" alt="banner" src={Sitting} />
                  </div>
                </div>
                <h4 className="mt-4">Sitting</h4>
                <ul>
                  <li>Overnight</li>
                  <li>Feeding </li>
                  <li>Exercize</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-lg-0 mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="common-wrap">
                <div className="img-wrap justify-content-center gradient-border primary-gradient">
                  <div className="border-wrap border-green">
                    <img className="img-fluid" alt="banner" src={Training} />
                  </div>
                </div>
                <h4 className="mt-4">Training</h4>
                <ul>
                  <li>1 on 1 & small group</li>
                  <li>Dog-specific</li>
                  <li>Owner education</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-lg-0 mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="common-wrap">
                <div className="img-wrap justify-content-center gradient-border primary-gradient">
                  <div className="border-wrap border-green">
                    <img className="img-fluid" alt="banner" src={Grooming} />
                  </div>
                </div>
                <h4 className="mt-4">Grooming</h4>
                <ul>
                  <li>Hair cuts</li>
                  <li>Bathe and clean</li>
                  <li>Nail clips</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-lg-0 mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="common-wrap">
                <div className="img-wrap justify-content-center gradient-border primary-gradient">
                  <div className="border-wrap border-green">
                    <img className="img-fluid" alt="banner" src={Visits} />
                  </div>
                </div>
                <h4 className="mt-4">Vet Visits</h4>
                <ul>
                  <li>Pickup & dropoff</li>
                  <li>Vet communication</li>
                  <li>Health reports</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="col-md-12">

              <button className="btn common-btn" target="blank" onClick={togglePopup}>
                <ButtonIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="serviceArea p-80 light-bg" id="serviceArea">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="service-left">
                <img alt="blank" className="img-fluid" src={servicesImg} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-lg-0 mt-4 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <div className="area-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="mb-3 wow fadeInUp animated heading" data-wow-duration="1000ms" data-wow-delay="600ms">Our Service Areas</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="poppins-font">New Hampshire</h5>
                    <ul className="list-style-disc">
                      <li className="listing">Hanover</li>
                      <li className="listing">Lyme</li>
                      <li className="listing">Lebanon</li>
                      <li className="listing">Claremont</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="poppins-font">Vermont</h5>
                    <ul className="list-style-disc">
                      <li className="listing">Norwich</li>
                      <li className="listing">Hartford</li>
                      <li className="listing">Hartland</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center justify-content-center mt-5">
                  <button className="btn common-btn" target="blank" onClick={togglePopup}>
                    <ButtonIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="scroll" type="submit">
        <FaArrowCircleUp onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }} />
      </button> */}
      {isOpen && < Popup
        handleClose={togglePopup}
      />}
    </div>
  );
};

export default Main;
