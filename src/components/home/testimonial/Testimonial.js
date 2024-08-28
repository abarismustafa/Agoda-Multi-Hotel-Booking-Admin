import Slider from "react-slick";


function Testimonial() {
    var settings = {
        className: "",
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        prevArrow: <button type="button" className="slick-prev slick-arrow slick-arrow-2" style={{display:""}} fdprocessedid="tnev0e"><i className="las la-angle-left" /></button>,
        nextArrow: <button type="button" className="slick-next slick-arrow slick-arrow-2" style={{}} fdprocessedid="8ta8"><i className="las la-angle-right" /></button>
      
    };
    // const next = () => {
    //     slider.slickNext();
    // }
    // const previous = () =>{
    //     this.slider.slickPrev();
    // }
    return (
        <>
            <section className="py-7 bg-cover bg-center text-white" style={{ backgroundImage: 'url("https://demo.activeitzone.com/matrimonial/public/uploads/all/LXbZN69RAoSGbxwxt5gk9IyItmqzHlklA03hsPYO.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 col-xxl-6 mx-auto">
                            <div className="text-center section-title mb-5">
                                <h2 className="fw-600 mb-3" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-10 mx-auto">
                            <div className="aiz-carousel large-arrow slick-initialized slick-slider" data-items={1} data-arrows="true" data-infinite="true" data-autoplay="true">
                                {/* <button type="button" className="slick-prev slick-arrow slick-arrow-2" style={{}} fdprocessedid="tnev0e"><i className="las la-angle-left" /></button> */}
                                <div className="slick-list draggable">
                                    <div className="slick-track">
                                        <Slider {...settings}>
                                            <div className="text-center px-lg-9">
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg" className="size-180px img-fit mx-auto rounded-circle border border-white border-width-5 shadow-lg mb-5" />
                                                <div className="fs-18 fw-300 font-italic">Ceck But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</div>
                                                <i className="las la-quote-right la-10x text-dark opacity-30" />
                                            </div>
                                            <div className="text-center px-lg-9">
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg" className="size-180px img-fit mx-auto rounded-circle border border-white border-width-5 shadow-lg mb-5" />
                                                <div className="fs-18 fw-300 font-italic">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</div>
                                                <i className="las la-quote-right la-10x text-dark opacity-30" />
                                            </div>
                                            <div className="text-center px-lg-9">
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg" className="size-180px img-fit mx-auto rounded-circle border border-white border-width-5 shadow-lg mb-5" />
                                                <div className="fs-18 fw-300 font-italic">Ceck But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</div>
                                                <i className="las la-quote-right la-10x text-dark opacity-30" />
                                            </div>
                                            <div className="text-center px-lg-9">
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/Yu77XFn8brOtsiEiRzQgcqekDk1fBhEIBUd5WzjM.jpg" className="size-180px img-fit mx-auto rounded-circle border border-white border-width-5 shadow-lg mb-5" />
                                                <div className="fs-18 fw-300 font-italic">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</div>
                                                <i className="las la-quote-right la-10x text-dark opacity-30" />
                                            </div>
                                            <div className="text-center px-lg-9">
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/LH0T5CcaRM0dYSiFx1sSrNHQWKje7QtvFrngtGHL.jpg" className="size-180px img-fit mx-auto rounded-circle border border-white border-width-5 shadow-lg mb-5" />
                                                <div className="fs-18 fw-300 font-italic">Ceck But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</div>
                                                <i className="las la-quote-right la-10x text-dark opacity-30" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>

                                {/* <button type="button" className="slick-next slick-arrow slick-arrow-2" style={{}} fdprocessedid="8ta8"><i className="las la-angle-right" /></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
export default Testimonial