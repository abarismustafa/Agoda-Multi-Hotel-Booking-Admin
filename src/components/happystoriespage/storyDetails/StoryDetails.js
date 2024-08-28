import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const story_details = [
        {
            id: '1',
            heading: 'If I had a flower every time I thought of you, I could walk in my garden forever.',
            opacity: 'Posted By:',
            modle: 'Alex Reynolds',
            opacityOn: 'On:',
            opacityDate: '12 April, 2021',
            insideContent:
                {
                    id:"1",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '2',
            heading: 'Life has become more beautiful from the day you enter in my life.',
            opacity: 'Posted By:',
            modle: 'Sylvia J. Love',
            opacityOn: 'On:',
            opacityDate: '18 April, 2021',
            insideContent:
                {
                    id:"2",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '3',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"3",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '4',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"4",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '5',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"5",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/mRiuKrMm3kYkRoxUEP97HrnzbNiYJHietGUjBNNN.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '6',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"6",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/HWFGoAxHu85MrB7Ajzw6MONqzhazCaiSrG9iJVc7.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '7',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"7",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '8',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"8",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '9',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"9",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '10',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"10",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/QU1tnyXoXhslOG1RJ0acDpZ8CeDotoTodk7vcBYC.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '11',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"11",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '12',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"12",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },
        {
            id: '13',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"13",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/OnMJ1HjOWTgzMDcvQxBGcreDtmqHGXAdFLK0dt5X.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        }, {
            id: '3',
            heading: 'The love we give away is the only love we keep',
            opacity: 'Posted By:',
            modle: 'Tate Kennedy',
            opacityOn: 'On:',
            opacityDate: '06 April, 2021',
            insideContent:
                {
                    id:"1",
                    img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                    paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    iframe:'https://www.youtube.com/embed/active+it+zone'
                },
        },

]
function StoryDetails() {
    const param = useParams()
    const [state , setState]  = useState( {
        id: '1',
        heading: 'If I had a flower every time I thought of you, I could walk in my garden forever.',
        opacity: 'Posted By:',
        modle: 'Alex Reynolds',
        opacityOn: 'On:',
        opacityDate: '12 April, 2021',
        insideContent:
            {
                id:"1",
                img:'https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg" data-src="https://demo.activeitzone.com/matrimonial/public/uploads/all/xgWEO1BKFQFZqT1tizProMFY3oSSO3S6vu8ByfHg.jpg',
                paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,  fugiat quo voluptas nulla pariatur?',
                iframe:'https://www.youtube.com/embed/active+it+zone'
            },
    },)
    // console.log(param.id)
    useEffect(() => {
        const filter = story_details.find((item) =>{
            return +item.id === +param.id
         })
         setState(filter)
    },[param.id])
    // console.log(state);
    return (
        <>
            <section class="py-7 text-center bg-white pt-8 pt-lg-10">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 mx-auto">
                            {/* {story_details.topHeader && story_details.topHeader.map((item) => {
                                console.log(item)
                            })} */}
                            <h1 class="fw-600 h2 lh-1-5 text-dark">{state?.heading}</h1>
                            <div>
                                <span class="opacity-40">{state?.opacity}</span>
                                <a onclick="loginModal()" class="c-pointer text-primary">
                                    {state?.modle}
                                </a>
                                <span class="opacity-40">{state?.opacityOn}</span>
                                <span class="opacity-70">{state?.opacityDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 bg-white pt-8 pt-lg-10">
                <div className="container">
                    <div className="aiz-carousel dots-inside-bottom slick-initialized slick-slider" data-arrows="true" data-dots="true" data-autoplay="true"><div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 1370, transform: 'translate3d(0px, 0px, 0px)' }}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 1370 }}><div><div className="carousel-box" style={{ width: '100%', display: 'inline-block' }}>
                        <img className="d-block img-fluid mx-auto ls-is-cached lazyloaded" src={state.insideContent.img} />
                    </div></div></div></div></div></div>
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="py-4">
                                <div className="overflow-hidden mb-4 lh-1-8"><p><span style={{ fontFamily: '"Open Sans", Arial, sans-serif', fontSize: 14, textAlign: 'justify' }}>{state.insideContent.paragraph}</span><br /></p></div>
                                <div className>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src={state.insideContent.iframe} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default StoryDetails