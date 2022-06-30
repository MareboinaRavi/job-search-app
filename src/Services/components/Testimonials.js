import React from "react";
import OwlCarousel from "react-owl-carousel";
const Testimonials = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout:4000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  return (
    <div>

      <header className="section-header clients_header">
        
      </header>
      <section className="hire_clients">

        <div className="container">

          <div className="item  ">
          <h2 className="clients_heading">Testimonials</h2>
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item text-center ">
                {/* <div className="corousal_item">
                  <img src="/images/balaji.jpeg" className="img-fluid testimonial_image_avatar  mx-auto" alt="image"></img>
                  <p>
                    I joined the Train and Hire at Hyderabad. Everything was
                    perfect, be it teaching, lab facilities and attitude of
                    trainers. Loved it! I am working with a top tech Company at the
                    moment and I believe its all because of the trainer who
                    explained things interestingly. I would definitely recommend
                    PabJob's for anyone who aims to become an IT professional.
                  </p>
                  <h4>Balaji</h4>
                </div> */}
                <div>
                  <img src="images/Ashok-Kumar (1).gif" alt='image' className="hireandtrain_testimonials" />
                </div>

                {/* <video  className="corousal_item" width="520" height="440" controls>
  <source src="images/Comp 1_1.mp4"/>

</video> */}

              </div>
              <div className="item text-center testimonial_item">
                {/* <div className="corousal_item testimonial_item">
                  <img src='/images/rohith.jpeg' className="img-fluid testimonial_image_avatar mx-auto " alt='image'></img>
                  <p>
                    Being a fresher, I started looking for a job in the IT field
                    from June 2019. I attended 13 interviews including Top Company's
                    like, TCS, Accenture & Cognizant. But no luck. Finally, I
                    heard about PabJob's Train and Hire model through one of my
                    friends. I got through the interview and completed 3.5
                    months of PabJob's training in Chennai and cleared the Top Company
                    interview. Now, I am working as a Programmer in one of
                    India's top Company. The job Guarantee and excellent trainers
                    encouraged me to join the program. Thanks to PabJobs! Rohith
                  </p>
                  <h4>Rohith</h4>
                </div> */}
                <div>
                  <img src="images/Rohith (2).gif" alt='image' className="hireandtrain_testimonials" />
                </div>
              </div>
              <div className="item text-center testimonial_item">
                {/* <div className="corousal_item testimonial_item">
                  <img src='/images/ashok.jpeg' className="img-fluid mx-auto testimonial_image_avatar" alt='image'></img>
                  <p>
                    PabJobs is a place where you will get equipped with the
                    latest technologies and provides an environment to showcase
                    them. It is a good place to start your software career here,
                    especially for freshers. All the employees who work there
                    are friendly in nature that helps us learn new things while
                    working here.
                  </p>
                  <h4>Ashok</h4>
                </div> */}

                <div>
                  <img src="images/balaji(1)1.gif" alt='image' className="hireandtrain_testimonials" />
                </div>


              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
