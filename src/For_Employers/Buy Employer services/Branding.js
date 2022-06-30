import React from "react";
import { useState, useCallback } from "react";
import Modal from "react-modal";

const Branding = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // second moadl

  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const openSecondModal = useCallback(() => setIsOpenSecond(true), []);
  const closeSecondModal = useCallback(() => setIsOpenSecond(false), []);

  // third modal
  const [isOpenThird, setIsOpenThird] = useState(false);
  const openThirdModal = useCallback(() => setIsOpenThird(true), []);
  const closeThirdModal = useCallback(() => setIsOpenThird(false), []);

  // Fourth-modal
  const [isOpenFourth, setIsOpenFourth] = useState(false);
  const openFourthModal = useCallback(() => setIsOpenFourth(true), []);
  const closeFourthModal = useCallback(() => setIsOpenFourth(false), []);

  // Fifth modal
  const [isOpenFifth, setIsOpenFifth] = useState(false);
  const openFifthModal = useCallback(() => setIsOpenFifth(true), []);
  const closeFifthModal = useCallback(() => setIsOpenFifth(false), []);

  // Sixth modal
  const [isOpenSixth, setIsOpenSixth] = useState(false);
  const openSixthModal = useCallback(() => setIsOpenSixth(true), []);
  const closeSixthModal = useCallback(() => setIsOpenSixth(false), []);

    // Enquire modal
    const [isEnquire, setEnquire] = useState(false);
    const openEnquire = useCallback(() => setEnquire(true), []);
    const closeEnquire = useCallback(() => setEnquire(false), []);

  return (
    <>
      <div
        className="container ">
        <div className="branding_main">
          <div className="branding_heading">
            <h3>BRANDING SOLUTIONS</h3>
            <p>
              PABJobs brings you the top in the industry branding solutions
              for your specialized hiring needs. Pull the most desired audience
              to attention with our carefully devised Visibility Services based
              on Candidates and Enterprise branding.
            </p>
          </div>
          <div className="branding_content">
            <div className="branding_content_top mt-3">
              <div className="row">
                <div className="col-md-8">
                  <h3>STRATEGIC BRAND SOLUTIONS</h3>
                  <p>
                    <span>
                      <i class="fas fa-arrow-right pr-3" aria-hidden="true"></i>
                    </span>
                    Special communication options for specific needs
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-arrow-right pr-3" aria-hidden="true"></i>
                    </span>
                    Distinctive presence of company for targeted audience
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-arrow-right pr-3" aria-hidden="true"></i>
                    </span>
                    Higher quality of response with higher brand recall value
                  </p>
                </div>
                <div className="col-md-4 text-center buy_branding">
                  <button className="enquire_now " onClick={openEnquire}>Enquire Now</button>
      
                    <Modal
                      contentLabel="My dialog"
                      className="Brand-modal"
                      overlayClassName="Brand-modal-overlay"
                      closeTimeoutMS={500}
                      isOpen={isEnquire}
                      onRequestClose={closeEnquire}
                    >
                      <i className="fas fa-times Brand-modal-Button" onClick={closeEnquire}></i>
                      {/* <img className="Brand-modal-img" src="images/NewAds.1.png" /> */}
                      <div className="Enquiry_modal">
                        Toll-Free Number : 1800 833 9448
                      </div>
                    </Modal>
                </div>
              </div>
            </div>
            <p className="font-weight-bold mt-4">
              Take your pick from the following :
            </p>
            <div className="brand_media">
              <div className="row">
                <div className="col-md-4 mb-3 ">
                  <div className="media_img text-center">
                    <img
                      class="align-self-center img-fluid"
                      src="https://hire.timesjobs.com/images_corp/savage/buy-services/bcz-logo.jpg "
                      alt="Generic placeholder image"
                    />
                  </div>
                </div>
                <div className="col-md-8  mb-3">
                  <div class="brand_media mt-0">
                    <h5 class="mt-0">BEST CONSULT ZONE</h5>
                    <p>
                      Place your brand in focus under top locations in the
                      country, attracting the traffic directly from the home
                      page to your Recruitment Microsite
                    </p>
                  </div>
                  <div className="text-left ml-3">
                    <button className="buy_now_branding btn" onClick={openModal} >
                      View Sample
                    </button>
                    <Modal
                      contentLabel="My dialog"
                      className="Brand-modal Brand-modal-color"
                      overlayClassName="Brand-modal-overlay"
                      closeTimeoutMS={500}
                      isOpen={isOpen}
                      onRequestClose={closeModal}
                    >
                      <i className="fas fa-times Brand-modal-Button Button_color" onClick={closeModal}></i>
                      <img className="Brand-modal-img" src="images/BrandAd.1.1.jpeg" />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>

            <div className="brand_media brand_media_right">
              <div className="row">
                <div className="col-md-8  mb-3">
                  <div class="brand_media brand_media_right mt-0">
                    <h5 class="mt-0">WALK-IN ZONE</h5>
                    <p>
                      Inform our active jobseekers about your upcoming Walk-Ins
                      directly. Attract interested candidates to your interviews
                    </p>
                  </div>
                  <div className="text-center ml-3">
                    <button className="buy_now_branding btn" onClick={openSecondModal}>
                      View Sample
                    </button>
                    <Modal
                      contentLabel="My dialog"
                      className="Brand-modal"
                      overlayClassName="Brand-modal-overlay"
                      closeTimeoutMS={500}
                      isOpen={isOpenSecond}
                      onRequestClose={closeSecondModal}
                    >
                      <i className="fas fa-times Brand-modal-Button" onClick={closeSecondModal}></i>
                      <img className="Brand-modal-img" src="images/NewAds.1.png" />
                    </Modal>
                  </div>
                </div>

                <div className="col-md-4 mb-3 ">
                  <div className="media_img text-center">
                    <img
                      class="align-self-center img-fluid"
                      src="https://hire.timesjobs.com/images_corp/savage/buy-services/walk-in-zone1.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="brand_media">
              <div className="row">
                <div className="col-md-4 mb-3 ">
                  <div className="media_img text-center">
                    <img
                      class="align-self-center img-fluid"
                      src="	https://hire.timesjobs.com/images_corp/savage/buy-services/campus-direct1.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                </div>
                <div className="col-md-8  mb-3">
                  <div class="brand_media mt-0">
                    <h5 class="mt-0">CAMPUS DIRECT</h5>
                    <p>
                      Communicate what your institution has to offer for its
                      audience, such as Courses Offered and much more.
                    </p>
                  </div>
                  <div className="text-left ml-3">
                    <button className="buy_now_branding btn" onClick={openThirdModal}>
                      View Sample
                    </button>
                    <Modal
                      contentLabel="My dialog"
                      className="Brand-modal Brand-modal-color3"
                      overlayClassName="Brand-modal-overlay"
                      closeTimeoutMS={500}
                      isOpen={isOpenThird}
                      onRequestClose={closeThirdModal}
                    >
                      <i className="fas fa-times Brand-modal-Button Button_color" onClick={closeThirdModal}></i>
                      <img className="Brand-modal-img" src="images/BrandAd.3.1.png" />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="branding_content">
            <div className="branding_content_top mt-3">
              <div className="row">
                <div className="col-md-8">
                  <h3>BRAND VISIBILITY SERVICES</h3>
                  <p>
                    <span>
                      <i class="fas fa-arrow-right pr-3" aria-hidden="true"></i>
                    </span>
                    Exclusive Microsite designed in line with your branding
                    philosophy
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-arrow-right pr-3" aria-hidden="true"></i>
                    </span>
                    Ensure an increase in the responses to the Job Postings
                  </p>
                  <p>
                    <span>
                      <i class="fas fa-arrow-right pr-3" aria-hidden="true"></i>
                    </span>
                    Witness a higher Brand Recall with our best branding options
                  </p>
                </div>
                <div className="col-md-4 text-center buy_branding">
                  <button className="enquire_now " onClick={openEnquire}>Enquire Now</button>
                </div>
              </div>
            </div>
            <p className="font-weight-bold mt-4">
              Take your pick from the following :
            </p>
            <div className="brand_media">
              <div className="row">
                <div className="col-md-4 mb-3 ">
                  <div className="media_img text-center">
                    <img
                      class="align-self-center img-fluid"
                      src="https://hire.timesjobs.com/images_corp/savage/buy-services/banner1.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                </div>
                <div className="col-md-8  mb-3">
                  <div class="brand_media mt-0">
                    <h5 class="mt-0">BANNERS</h5>
                    <p>
                      Display your company banners on Homepage and Job Search
                      Pages of TimesJobs, and build a powerful employer brand
                      for those thousands of job seekers who visit the site
                      daily.
                    </p>
                  </div>
                  <div className="text-left ml-3">
                    <button className="buy_now_branding btn" onClick={openFourthModal} >
                      View Sample
                    </button>
                    <Modal
                      contentLabel="My dialog"
                      className="Brand-modal Brand-modal-color1"
                      overlayClassName="Brand-modal-overlay"
                      closeTimeoutMS={500}
                      isOpen={isOpenFourth}
                      onRequestClose={closeFourthModal}
                    >
                      <i className="fas fa-times Brand-modal-Button Button_color" onClick={closeFourthModal}></i>
                      <img className="Brand-modal-img" src="images/BrandAd.2.png" />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>

            <div className="brand_media brand_media_right">
              <div className="row">
                <div className="col-md-8  mb-3">
                  <div class="brand_media brand_media_right mt-0">
                    <h5 class="mt-0">NAME LINKS</h5>
                    <p>
                      Reach your target audience with exclusive location on the
                      website and gain recognition.
                    </p>
                  </div>
                  <div className="text-center ml-3">
                    <button className="buy_now_branding btn" onClick={openFifthModal} >
                      View Sample
                    </button>
                    <Modal
                      contentLabel="My dialog"
                      className="Brand-modal  Brand-modal-color2"
                      overlayClassName="Brand-modal-overlay"
                      closeTimeoutMS={500}
                      isOpen={isOpenFifth}
                      onRequestClose={closeFifthModal}
                    >
                      <i className="fas fa-times Brand-modal-Button Button_color" onClick={closeFifthModal}></i>
                      <img className="Brand-modal-img" src="images/BrandAd.5.png" />
                    </Modal>
                  </div>
                </div>

                <div className="col-md-4 mb-3 ">
                  <div className="media_img text-center">
                    <img
                      class="align-self-center img-fluid"
                      src="	https://hire.timesjobs.com/images_corp/savage/buy-services/name-links1.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="brand_media">
              <div className="row">
                <div className="col-md-4 mb-3 ">
                  <div className="media_img text-center">
                    <img
                      class="align-self-center img-fluid"
                      src="https://hire.timesjobs.com/images_corp/savage/buy-services/exclusive-logo-space.jpg"
                      alt="Generic placeholder image"
                    />
                  </div>
                </div>
                <div className="col-md-8  mb-3">
                  <div class="brand_media mt-0">
                    <h5 class="mt-0">EXCLUSIVE LOGO SPACE</h5>
                    <p>
                      Take advantage of the prime spot on the website and
                      increase your brand recognition with our daily website
                      visitors.
                    </p>
                  </div>
                  <div className="text-left ml-3">
                    <button className="buy_now_branding btn" onClick={openSixthModal} >
                      View Sample
                    </button>
                    <Modal
                      contentLabel="My dialog"
                      className="Brand-modal"
                      overlayClassName="Brand-modal-overlay"
                      closeTimeoutMS={500}
                      isOpen={isOpenSixth}
                      onRequestClose={closeSixthModal}
                    >
                      <i className="fas fa-times Brand-modal-Button" onClick={closeSixthModal}></i>
                      <img className="Brand-modal-img" src="images/BrandAd.3.png" />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_details">
            <div className="heading_details">
              <h5>FOR ENQUIRIES CALL</h5>
            </div>
            <div className="contact_phone">
              <span>TOLL FREE NUMBER : 1800 833 9448</span>
              <span>EMAIL : pabsolutions09@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
