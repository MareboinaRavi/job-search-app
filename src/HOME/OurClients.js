import React from 'react'
import OwlCarousel from 'react-owl-carousel';
 const OurClients = () => {
    const options ={
        loop: true,
             margin: 10,
             nav: true,
             autoplay: true,
             loop: true,
             autoplayTimeout:1500,
             responsive: {
                 0: {
                     items: 1,
                 },
                 530: {
                     items: 2,
                 },
                 768 : {
                     items: 3,
                 },
                 1000: {
                     items: 5,
                 }
              }
           }
    return (
        <div>
            
<section id="clients" className="clients">
    <div className="container">
        <header className="section-header clients_header">
            <h2 className="clients_heading text-center">Top Recruiters</h2>

        </header>
        <div className="item">
        <OwlCarousel className="owl-theme" {...options}>
            

            <div className="item text-center">
                <img src="images/Logos/logos7z-01.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-02.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-03.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-04.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-05.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-06.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-07.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-08.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-09.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-10.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-11.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-12.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-13.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-14.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-15.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-16.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-17.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-18.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-19.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-20.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-21.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-22.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-23.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-24.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-25.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-26.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-27.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-28.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-29.png" className="img-fluid" alt="" />
            </div>


            </OwlCarousel>
        </div>
    </div>
</section>

        </div>
    )
}

export default OurClients