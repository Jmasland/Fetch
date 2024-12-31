import footerLogo from "../../../src/assets/footer-logo.png";
import Dog1 from "../../../src/assets/SadieAndBlanquita.png";
import Dog2 from "../../../src/assets/Bronco.png";
import { FaPhoneVolume, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="p-80 pb-0 green-bg" id="AboutUs">
      <div className="container pb-3">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="mb-3 mb-lg-5 wow fadeInUp animated heading" data-wow-duration="1000ms" data-wow-delay="600ms">About Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 overflow-hidden">
            <div className="footer-wrap">
              <h5 className="poppins-font mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Jonathan Masland</h5>
              <span className="small-text mb-2 d-flex">Owner</span>
              <p className="mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaPhoneVolume />(603) 486 1711</p>
              <p className="mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaEnvelope />jonathan@fetchpetservice.com</p>
              <ul className="list-style-disc mt-2">
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Owner of Sadie and Blanquita, rescues adopted by my two dog loving daughters</li>
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">Dog rescue volunteer</li>
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">Upper Valley trail runner & Lyme resident</li>
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms">Decade+ working at Dartmouth</li>
                <li className="listing blank wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms">Decade+ working at Dartmouth</li>
              </ul>
              <div className="img-wrap mt-4 gradient-border primary-gradient">
                <img className="img-fluid" alt="banner" src={Dog1} />
              </div>
              <span className="small-text mb-2 d-flex"><b>Sadie and Blanquita</b> </span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4 mt-lg-0 overflow-hidden">
            <div className="footer-wrap">
              <h5 className="poppins-font mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Skye Lilley</h5>
              <span className="small-text mb-2 d-flex">Chief Dog Whisperer </span>
              <p className="mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaPhoneVolume />(802) 324 9502</p>
              <p className="mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaEnvelope />skye@fetchpetservice.com</p>
              <ul className="list-style-disc mt-2">
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Pet owner of 50+ dogs including Bronco</li>
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">Sled dog & horse trainer and riding instructor</li>
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">Specialization in natural horsemanship and rehabilitating animals that have suffered trauma</li>
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms">Experience working for veterinarians</li>
                <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1600ms">Degrees in equine science and business</li>
              </ul>
              <div className="img-wrap mt-4 gradient-border primary-gradient">
                <img className="img-fluid" alt="banner" src={Dog2} />
              </div>
              <span className="small-text mb-2 d-flex"><b>Bronco</b> </span>
            </div>
          </div>
        </div>
      </div>
      <div className="orange-bg mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright text-white d-flex align-items-center">
                <img className="img-fluid" alt="footer-logo" src={footerLogo} />
                <p className="mb-0"><i className="text-white mb-0 mt-0 ms-4">Helping your pets live their best lives</i></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="copyright align-items-center justify-content-end h-100 text-white d-flex">
                <a href="https://www.instagram.com/dogsandmushrooms?igsh=ZjAxbThneTdsYmxh&utm_source=qr" target="_blank">
                <FaInstagram />
                </a>
                <a href="#hh" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
