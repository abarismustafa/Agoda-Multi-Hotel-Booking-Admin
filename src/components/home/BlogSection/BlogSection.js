import { Link } from "react-router-dom";
import Slider from "react-slick"

function BlogSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <section className="py-7 bg-white text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 col-xxl-6 mx-auto">
                            <div className="text-center section-title mb-5">
                                <h2 className="fw-600 mb-3 text-dark">Blog Section</h2>
                            </div>
                        </div>
                    </div>
                    <div className="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider slick-dotted">
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{}}>
                                <Slider {...settings}>
                                    <div className="slick-slide" data-slick-index={0} aria-hidden="true" style={{ width: 348 }} tabIndex={-1}><div><div className="caorusel-box p-1" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card mb-3 overflow-hidden shadow-sm text-dark">
                                            <a href="https://demo.activeitzone.com/matrimonial/blog/what-do-successful-relationships-and-successful-businesses-have-in-common" className="text-reset d-block" tabIndex={-1}>
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uBDARQfJpAEFuUlutaNEZbg6cIU3QabJo32hTh01.png" alt="What do successful relationships and successful businesses have in common?" className="h-200px img-fit" />
                                            </a>
                                            <div className="p-4">
                                                <h2 className="fs-18 fw-600 mb-1">
                                                    <a href="https://demo.activeitzone.com/matrimonial/blog/what-do-successful-relationships-and-successful-businesses-have-in-common" className="text-reset" tabIndex={-1}>
                                                        What do successful relationships and successful businesses have in common?
                                                    </a>
                                                </h2>
                                                <div className="mb-2 opacity-50">
                                                    <i>Weeding Tips</i>
                                                </div>
                                                <p className="opacity-70 mb-4">The leaders have a vision for the future and meet regularly to plan how to achieve their goals. Most couples stop thinking critically about their relationship after the initial honeymoon stage.</p>
                                                <a href="https://demo.activeitzone.com/matrimonial/blog/what-do-successful-relationships-and-successful-businesses-have-in-common" className="btn btn-soft-primary" tabIndex={-1}>View More</a>
                                            </div>
                                        </div>
                                    </div></div></div>

                                    <div className="slick-slide slick-current slick-active" data-slick-index={1} aria-hidden="false" style={{ width: 348 }}><div><div className="caorusel-box p-1" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card mb-3 overflow-hidden shadow-sm text-dark">
                                            <a href="https://demo.activeitzone.com/matrimonial/blog/what-does-a-good-relationship-look-like" className="text-reset d-block" tabIndex={0}>
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/NbGjsZSmGSEOm25ZAG9RCJv9dYeP94Z2z0Dunwwj.png" alt="What Does a Good Relationship Look Like?" className="h-200px img-fit" />
                                            </a>
                                            <div className="p-4">
                                                <h2 className="fs-18 fw-600 mb-1">
                                                    <a href="https://demo.activeitzone.com/matrimonial/blog/what-does-a-good-relationship-look-like" className="text-reset" tabIndex={0}>
                                                        What Does a Good Relationship Look Like?
                                                    </a>
                                                </h2>
                                                <div className="mb-2 opacity-50">
                                                    <i>Weeding Tips</i>
                                                </div>
                                                <p className="opacity-70 mb-4">What does a good relationship look like?  In this post, we’ll take a look at what makes a good relationship.</p>
                                                <a href="https://demo.activeitzone.com/matrimonial/blog/what-does-a-good-relationship-look-like" className="btn btn-soft-primary" tabIndex={0}>View More</a>
                                            </div>
                                        </div>
                                    </div></div></div>

                                    <div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{ width: 348 }}><div><div className="caorusel-box p-1" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card mb-3 overflow-hidden shadow-sm text-dark">
                                            <a href="https://demo.activeitzone.com/matrimonial/blog/5-things-you-can-do-to-improve-your-relationship-now" className="text-reset d-block" tabIndex={0}>
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ChVoOrArnZDuuTsd6VUkR7P8L15D4pKMzuiL9TQ0.png" alt="5 Things You Can do to Improve your Relationship Now" className="h-200px img-fit" />
                                            </a>
                                            <div className="p-4">
                                                <h2 className="fs-18 fw-600 mb-1">
                                                    <a href="https://demo.activeitzone.com/matrimonial/blog/5-things-you-can-do-to-improve-your-relationship-now" className="text-reset" tabIndex={0}>
                                                        5 Things You Can do to Improve your Relationship Now
                                                    </a>
                                                </h2>
                                                <div className="mb-2 opacity-50">
                                                    <i>Weeding Tips</i>
                                                </div>
                                                <p className="opacity-70 mb-4">Change is possible in any relationship. But, it does require dedication and persistence.</p>
                                                <a href="https://demo.activeitzone.com/matrimonial/blog/5-things-you-can-do-to-improve-your-relationship-now" className="btn btn-soft-primary" tabIndex={0}>View More</a>
                                            </div>
                                        </div>
                                    </div></div></div>

                                    <div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" style={{ width: 348 }}><div><div className="caorusel-box p-1" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card mb-3 overflow-hidden shadow-sm text-dark">
                                            <a href="https://demo.activeitzone.com/matrimonial/blog/marriage-advice-for-newlyweds" className="text-reset d-block" tabIndex={0}>
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/tJAsCSW4HdIkyOs6Ny34OntGa8t9NaNgmOlNLPXU.png" alt="Marriage Advice for Newlyweds" className="h-200px img-fit" />
                                            </a>
                                            <div className="p-4">
                                                <h2 className="fs-18 fw-600 mb-1">
                                                    <a href="https://demo.activeitzone.com/matrimonial/blog/marriage-advice-for-newlyweds" className="text-reset" tabIndex={0}>
                                                        Marriage Advice for Newlyweds
                                                    </a>
                                                </h2>
                                                <div className="mb-2 opacity-50">
                                                    <i>Life Partner</i>
                                                </div>
                                                <p className="opacity-70 mb-4">Getting married is an exciting time! What marriage advice for newlyweds will help keep your relationship strong over time?</p>
                                                <a href="https://demo.activeitzone.com/matrimonial/blog/marriage-advice-for-newlyweds" className="btn btn-soft-primary" tabIndex={0}>View More</a>
                                            </div>
                                        </div>
                                    </div></div></div>

                                    <div className="slick-slide slick-active" data-slick-index={4} aria-hidden="false" style={{ width: 348 }}><div><div className="caorusel-box p-1" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card mb-3 overflow-hidden shadow-sm text-dark">
                                            <a href="https://demo.activeitzone.com/matrimonial/blog/give-and-take" className="text-reset d-block" tabIndex={0}>
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/c8Nq9cfMecTVbcBW7K0HxsH7Zqw65choZnCu1pRg.png" alt="Give and Take" className="h-200px img-fit" />
                                            </a>
                                            <div className="p-4">
                                                <h2 className="fs-18 fw-600 mb-1">
                                                    <a href="https://demo.activeitzone.com/matrimonial/blog/give-and-take" className="text-reset" tabIndex={0}>
                                                        Give and Take
                                                    </a>
                                                </h2>
                                                <div className="mb-2 opacity-50">
                                                    <i>Life Partner</i>
                                                </div>
                                                <p className="opacity-70 mb-4">Relationships often require give and take. We’ve been learning that during our engagement and now in marriage.</p>
                                                <a href="https://demo.activeitzone.com/matrimonial/blog/give-and-take" className="btn btn-soft-primary" tabIndex={0}>View More</a>
                                            </div>
                                        </div>
                                    </div></div></div>

                                    <div className="slick-slide" data-slick-index={5} aria-hidden="true" style={{ width: 348 }} tabIndex={-1}><div><div className="caorusel-box p-1" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="card mb-3 overflow-hidden shadow-sm text-dark">
                                            <a href="https://demo.activeitzone.com/matrimonial/blog/what-does-a-good-relationship-look-like" className="text-reset d-block" tabIndex={-1}>
                                                <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/14Q4NZoCYMxIc33sY0ayS9SYH5Kf3fdCCGD59pB1.png" alt="What Does a Good Relationship Look Like?" className="h-200px img-fit" />
                                            </a>
                                            <div className="p-4">
                                                <h2 className="fs-18 fw-600 mb-1">
                                                    <a href="https://demo.activeitzone.com/matrimonial/blog/what-does-a-good-relationship-look-like" className="text-reset" tabIndex={-1}>
                                                        What Does a Good Relationship Look Like?
                                                    </a>
                                                </h2>
                                                <div className="mb-2 opacity-50">
                                                    <i>Weeding Tips</i>
                                                </div>
                                                <p className="opacity-70 mb-4">What does a good relationship look like? In this post, we’ll take a look at what makes a good relationship.</p>
                                                <a href="https://demo.activeitzone.com/matrimonial/blog/what-does-a-good-relationship-look-like" className="btn btn-soft-primary" tabIndex={-1}>View More</a>
                                            </div>
                                        </div>
                                    </div></div></div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/blog" className="btn btn-primary">View More</Link>
                    </div>
                </div>
            </section>

        </>
    )
}
export default BlogSection