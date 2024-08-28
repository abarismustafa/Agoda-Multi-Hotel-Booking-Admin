import { Link } from "react-router-dom"

function HappyStories() {
  const dataHappy = [
    {
      id:'1',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'2',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'3',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'4',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'5',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/mRiuKrMm3kYkRoxUEP97HrnzbNiYJHietGUjBNNN.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'6',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'7',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'8',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'9',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'10',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'11',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'12',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
    {
      id:'13',
      img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg',
      textPrimary:'Alex Dolorita Prieto',
      textTruncate:'If I had a flower every time I thought of you, I could walk in my garden forever.'
    },
  ]
    return(
        <>
        <section className="py-7 bg-dark text-white">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-8 col-xxl-6 mx-auto">
        <div className="text-center section-title mb-5">
          <h2 className="fw-600 mb-3">Happy Stories</h2>
        </div>
      </div>
    </div>
    <div className="card-columns column-gap-10 card-columns-xxl-4 card-columns-lg-3 card-columns-md-2 card-columns-1">
      {dataHappy && dataHappy.map((item) => {
        return <div className="card border-gray-800 overflow-hidden mb-2" key={item.id}>
        <Link to={`/story_details/${item.id}`} className="text-reset d-block position-relative">
          <img src={item.img} className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                {item.textPrimary}</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                {item.textTruncate}
              </h2>
            </div>
          </div>
        </Link>
      </div>
      })}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/14" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Alex Dolorita Prieto</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                If I had a flower every time I thought of you, I could walk in my garden forever.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/13" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Robert &amp; Dolorita&nbsp;&nbsp;Prieto</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                Relationship are always stronger when you are best friends first, and a couple second.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/12" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/HbCefrFWcM1eZa7TsbyOhltQQd10MTY42HCQ40QP.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Derrick &amp; Gregory&nbsp;J&nbsp;Luton</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                Sometimes I look at you and I woder hoe i got to be so damn lucky.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/11" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/v7t6fMIBFCeasUf3KDfKPpEhuSc4XVabW5yqYni8.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Kathy &amp; Kimberley Lang</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                Me &amp; You we could make the whole world jealous.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/10" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Sylvia &amp; Kimberley Lang</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                Life has become more beautiful from the day you enter in my life.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/9" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/KKAjbpd6nEFmOu8ULpdVb2nibGIll2phdSFreg0k.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Nicole &amp; Dolorita&nbsp;&nbsp;Prieto</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                You are my faborite place to go to when my mind searches for place.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/8" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/WmgVsQxylbGHstOU69Vm75Ufb7XtuNu2o6Qn6zSO.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Ramona &amp; Gregory&nbsp;J&nbsp;Luton</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                I don't care how many people are in this world I want you end Of story.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/7" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/BvZIgmLAshq3ZyDe12xoIKYTNq1TbdxJyrjgGLin.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Donna &amp; Gregory&nbsp;J&nbsp;Luton</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                A love story Could begin Anywhere.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/6" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/HWFGoAxHu85MrB7Ajzw6MONqzhazCaiSrG9iJVc7.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Tate &amp; Gregory&nbsp;J&nbsp;Luton</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                The love we give away is the only love we keep
              </h2>
            </div>
          </div>
        </a>
      </div> */}
      {/* <div className="card border-gray-800 overflow-hidden mb-2">
        <a href="https://demo.activeitzone.com/matrimonial/story_details/5" className="text-reset d-block position-relative">
          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/mRiuKrMm3kYkRoxUEP97HrnzbNiYJHietGUjBNNN.jpg" className="img-fluid" />
          <div className="absolute-bottom-left p-3">
            <div className="position-relative z-1 p-3">
              <div className="absolute-full z--1 bg-dark opacity-60" />
              <div className="text-primary text-truncate">
                Jane R &amp; Dolorita&nbsp;&nbsp;Prieto</div>
              <h2 className="h5 mb-0 fs-14 fw-400 lh-1-5 text-truncate-3">
                Love is the ultimate expression of the will to live.
              </h2>
            </div>
          </div>
        </a>
      </div> */}
    </div>
    <div className="text-center mt-4">
      <Link to="/happy-stories" className="btn btn-primary">View More</Link>
    </div>
  </div>
</section>

        </>
    )
}
export default HappyStories