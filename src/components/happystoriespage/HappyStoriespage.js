import { Link } from "react-router-dom";

function HappyStoriespage() {
  const happyStories = [
    {
      id: "1",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "2",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "3",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "4",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "5",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "6",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/HWFGoAxHu85MrB7Ajzw6MONqzhazCaiSrG9iJVc7.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "7",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "8",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "9",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },

    {
      id: "10",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "11",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "12",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
    {
      id: "13",
      img: "https://demo.activeitzone.com/matrimonial/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg",
      heading:
        "If I had a flower every time I thought of you, I could walk in my garden forever.",
      opacity: "Posted By:",
      modle: "Alex Reynolds",
      opacityOn: "On:",
      opacityDate: "12 April, 2021",
    },
  ];
  return (
    <>
      <section className="pt-6 pb-4 bg-white text-center pt-8 pt-lg-10">
        <div className="container">
          <h1 className="fw-600 text-dark">Happy Stories</h1>
        </div>
      </section>
      <section className="pt-5 pb-4 bg-white">
        <div className="container">
          <div className="card-columns column-gap-10 card-columns-xl-3 card-columns-md-2 card-columns-1">
            {happyStories &&
              happyStories.map((item) => {
                return (
                  <div className="card mb-3 shadow-none" key={item.id}>
                    <Link
                      to={`/story_details/${item.id}`}
                      className="text-reset d-block mb-4"
                    >
                      <img src={item.img} className="img-fluid" />
                    </Link>
                    <div className="p-3">
                      <h2 className="h5">
                        <Link
                          to={`/story_details/${item.id}`}
                          className="text-dark"
                        >
                          {item.heading}
                        </Link>
                      </h2>
                      <div className="mb-3">
                        <span className="opacity-40">Posted By:</span>
                        <a
                          onclick="loginModal()"
                          className="c-pointer text-primary"
                        >
                          {item.modle}
                        </a>
                        <span className="opacity-40">{item.opacityOn}</span>
                        <span className="opacity-70">{item.opacityDate}</span>
                      </div>
                      <Link
                        to={`/story_details/${item.id}`}
                        className="btn btn-primary mt-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="aiz-pagination aiz-pagination-center mt-4"></div>
        </div>
      </section>
    </>
  );
}
export default HappyStoriespage;
