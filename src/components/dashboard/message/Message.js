import { Col, Nav, Row, Tab } from "react-bootstrap";


function Message() {
  // const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    var element = document.getElementById("acb");
    element.classList.add("active");
  };
  const handleClose = event => {
    var element = document.getElementById("acb");
    element.classList.remove("active");
  };


  return (
    <>
      <div className="aiz-user-panel overflow-hidden">
        <div className="aiz-chat">
          <div className="row no-gutters">
            {/* <div className="col-lg-4"> */}
            <div className="chat-user-list-wrap ">
              <div
                className="overlay dark c-pointer"
                data-toggle="class-toggle"
                data-target=".chat-user-list-wrap"
                data-same=".aiz-all-chat-toggler"
              />
              <div className="chat-user-list-header d-flex justify-content-between align-items-center bg-white border-bottom border-right h6 mb-0">
                <span className="p-2 m-1">Members</span>
                <button
                  className="btn btn-icon d-lg-none"
                  data-toggle="class-toggle"
                  data-target=".chat-user-list-wrap"
                >
                  <i className="las la-times" />
                </button>
              </div>
              <div className="chat-user-list border-right py-3 c-scrollbar-light" defaultActiveKey="first">
                {/* className="chat-user-item p-3 d-block text-inherit selected-chat bg-soft-primary" */}

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={4}>

                      <div className="chat-user-list border-right py-3 c-scrollbar-light">
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item style={{ "width": "100%" }}>
                            <Nav.Link eventKey="first">
                              <div className="media">
                                <span className="avatar avatar-sm mr-3 flex-shrink-0">
                                  <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                                  <span className="badge badge-dot badge-circle badge-secondary badge-status badge-md" />
                                </span>
                                <div className="media-body minw-0">
                                  <h6 className="mt-0 mb-1 fs-14 text-truncate">Matthew Ryan</h6>
                                  <div className="fs-12 text-truncate opacity-60">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</div>
                                </div>
                                <div className="ml-2 text-right">
                                  <div className="opacity-60 fs-10 mb-1">1 year ago</div>
                                  <span className="badge badge-primary badge-circle flex-shrink-0 ml-4">0</span>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item style={{ "width": "100%" }}>
                            <Nav.Link eventKey="second">
                              <div className="media">
                                <span className="avatar avatar-sm mr-3 flex-shrink-0">
                                  <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                                  <span className="badge badge-dot badge-circle badge-secondary badge-status badge-md" />
                                </span>
                                <div className="media-body minw-0">
                                  <h6 className="mt-0 mb-1 fs-14 text-truncate">Mitchell Johnson</h6>
                                  <div className="fs-12 text-truncate opacity-60">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                                </div>
                                <div className="ml-2 text-right">
                                  <div className="opacity-60 fs-10 mb-1">1 year ago</div>
                                  <span className="badge badge-primary badge-circle flex-shrink-0 ml-4">0</span>
                                </div>
                              </div>

                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="chat-box-wrap h-100">
                            <div className="attached-top bg-white border-bottom chat-header d-flex justify-content-between align-items-center p-3 shadow-sm">
                              <div className="media align-items-center">
                                <span className="avatar avatar-sm mr-3 flex-shrink-0">
                                  <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                                </span>
                                <div className="media-body">
                                  <h6 className="fs-15 mb-1">
                                    Mitchell Johnson
                                    <span className="badge badge-dot badge-secondary badge-circle" />
                                  </h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <button className="aiz-mobile-toggler d-lg-none aiz-all-chat-toggler mr-2" data-toggle="class-toggle" data-target=".chat-user-list-wrap">
                                  <span />
                                </button>
                                <button onClick={handleClick} className="btn btn-icon btn-circle btn-soft-primary chat-info" data-toggle="class-toggle" data-target=".chat-info-wrap" fdprocessedid="1idl4f"><i className="las la-info-circle" /></button>
                              </div>
                            </div>
                            <div className="chat-list-wrap c-scrollbar-light scroll-to-btm" id="parentDiv">
                              <div className="chat-coversation-load text-center">
                                <button className="btn btn-link load-more-btn" data-first={31} type="button">Load More</button>
                              </div>
                              <div className="chat-list px-4" id="chat-messages">
                                <div className="chat-coversation right">
                                  <div className="media">
                                    <div className="media-body">
                                      <div className="text bg-soft-primary text-dark">Hi</div>
                                      <span className="time">1 year ago</span>
                                    </div>
                                    <span className="avatar avatar-xs flex-shrink-0">
                                      <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                                    </span>
                                  </div>
                                </div>
                                <div className="chat-coversation">
                                  <div className="media">
                                    <span className="avatar avatar-xs flex-shrink-0">
                                      <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                                    </span>
                                    <div className="media-body">
                                      <div className="text">Hello</div>
                                      <span className="time">1 year ago</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-coversation right">
                                  <div className="media">
                                    <div className="media-body">
                                      <div className="text bg-soft-primary text-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</div>
                                      <span className="time">1 year ago</span>
                                    </div>
                                    <span className="avatar avatar-xs flex-shrink-0">
                                      <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                                    </span>
                                  </div>
                                </div>
                                <div className="chat-coversation">
                                  <div className="media">
                                    <span className="avatar avatar-xs flex-shrink-0">
                                      <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                                    </span>
                                    <div className="media-body">
                                      <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</div>
                                      <span className="time">1 year ago</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-coversation right">
                                  <div className="media">
                                    <div className="media-body">
                                      <div className="text bg-soft-primary text-dark">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                                      <span className="time">1 year ago</span>
                                    </div>
                                    <span className="avatar avatar-xs flex-shrink-0">
                                      <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                                    </span>
                                  </div>
                                </div>
                                <div className="chat-coversation">
                                  <div className="media">
                                    <span className="avatar avatar-xs flex-shrink-0">
                                      <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                                    </span>
                                    <div className="media-body">
                                      <div className="text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                                      <span className="time">1 year ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-footer border-top p-3 attached-bottom bg-white">
                              <form id="send-mesaage">
                                <div className="input-group">
                                  <input type="hidden" id="chat_thread_id" name="chat_thread_id" defaultValue={14} />
                                  <input type="text" className="form-control" name="message" id="message" placeholder="Your Message.." autoComplete="off" fdprocessedid="0b2jrg" />
                                  <input type="hidden" className name="attachment" id="attachment" />
                                  <div className="input-group-append">
                                    <button className="btn btn-circle btn-icon chat-attachment" type="button" fdprocessedid="jlpzf9">
                                      <i className="las la-paperclip" />
                                    </button>
                                    <button className="btn btn-primary btn-circle btn-icon" onclick="send_reply()" type="button" fdprocessedid="vdeqs">
                                      <i className="las la-paper-plane" />
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="chat-info-wrap" id="acb">
                              <div id="acb" onClick={handleClose} className="overlay dark c-pointer" data-toggle="class-toggle" data-target=".chat-info-wrap" data-same=".chat-info" />
                              <div className="chat-info c-scrollbar-light p-4 z-1">
                                <div className="px-4 text-center mb-3">
                                  <span className="avatar avatar-md mb-3">
                                    <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                                  </span>
                                  <h4 className="h5 mb-2 fw-600">Mitchell Johnson</h4>
                                </div>
                                <div className="text-center">
                                  <h6 className="fs-13">age: 32</h6>
                                  <h6 className="fs-13">
                                    Height :
                                    5
                                  </h6>
                                  <h6 className="fs-13">
                                    Religion :
                                    Judaismm
                                  </h6>
                                  <h6 className="fs-13">
                                    location :
                                    American Samoa
                                  </h6>
                                  <h6 className="fs-13">
                                    mother_tongue :
                                    English
                                  </h6>
                                  <div className="text-center mb-3 px-3 mt-3">
                                    <a href="https://demo.activeitzone.com/matrimonial/member-profile/35" className="btn btn-block btn-soft-primary">View Full Profile
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                       iokoikokok


                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                {/* <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first" >
                      <div className="media">
                        <span className="avatar avatar-sm mr-3 flex-shrink-0">
                          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                          <span className="badge badge-dot badge-circle badge-secondary badge-status badge-md" />
                        </span>
                        <div className="media-body minw-0">
                          <h6 className="mt-0 mb-1 fs-14 text-truncate">Matthew Ryan</h6>
                          <div className="fs-12 text-truncate opacity-60">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</div>
                        </div>
                        <div className="ml-2 text-right">
                          <div className="opacity-60 fs-10 mb-1">1 year ago</div>
                          <span className="badge badge-primary badge-circle flex-shrink-0 ml-4">0</span>
                        </div>
                      </div>

                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <div className="media">
                        <span className="avatar avatar-sm mr-3 flex-shrink-0">
                          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                          <span className="badge badge-dot badge-circle badge-secondary badge-status badge-md" />
                        </span>
                        <div className="media-body minw-0">
                          <h6 className="mt-0 mb-1 fs-14 text-truncate">Mitchell Johnson</h6>
                          <div className="fs-12 text-truncate opacity-60">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                        </div>
                        <div className="ml-2 text-right">
                          <div className="opacity-60 fs-10 mb-1">1 year ago</div>
                          <span className="badge badge-primary badge-circle flex-shrink-0 ml-4">0</span>
                        </div>
                      </div>

                    </Nav.Link>
                  </Nav.Item>
                </Nav> */}
              </div>
            </div>
            {/* </div> */}
            {/* <div className="col-lg-8" id="single_chat"> */}
            {/* <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first" className="chat-box-wrap h-100 chat-box-wrap-2">
                  <div className="chat-box-wrap h-100" eventKey="first">
                    <div className="attached-top bg-white border-bottom chat-header d-flex justify-content-between align-items-center p-3 shadow-sm">
                      <div className="media align-items-center">
                        <span className="avatar avatar-sm mr-3 flex-shrink-0">
                          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                        </span>
                        <div className="media-body">
                          <h6 className="fs-15 mb-1">
                            Matthew Ryan
                            <span className="badge badge-dot badge-secondary badge-circle" />
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button className="aiz-mobile-toggler d-lg-none aiz-all-chat-toggler mr-2" data-toggle="class-toggle" data-target=".chat-user-list-wrap">
                          <span />
                        </button>
                        <button className="btn btn-icon btn-circle btn-soft-primary chat-info" data-toggle="class-toggle" data-target=".chat-info-wrap" fdprocessedid="ffhcuj"><i className="las la-info-circle" /></button>
                      </div>
                    </div>
                    <div className="chat-list-wrap c-scrollbar-light scroll-to-btm" id="parentDiv">
                      <div className="chat-coversation-load text-center">
                        <button className="btn btn-link load-more-btn" data-first={12} type="button">Load More</button>
                      </div>
                      <div className="chat-list px-4" id="chat-messages">
                        <div className="chat-coversation">
                          <div className="media">
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                            </span>
                            <div className="media-body">
                              <div className="text">Hi</div>
                              <span className="time">1 year ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="chat-coversation right">
                          <div className="media">
                            <div className="media-body">
                              <div className="text bg-soft-primary text-dark">Hello</div>
                              <span className="time">1 year ago</span>
                            </div>
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                            </span>
                          </div>
                        </div>
                        <div className="chat-coversation right">
                          <div className="media">
                            <div className="media-body">
                              <div className="text bg-soft-primary text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                              <span className="time">1 year ago</span>
                            </div>
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                            </span>
                          </div>
                        </div>
                        <div className="chat-coversation">
                          <div className="media">
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                            </span>
                            <div className="media-body">
                              <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                              <span className="time">1 year ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="chat-coversation right">
                          <div className="media">
                            <div className="media-body">
                              <div className="text bg-soft-primary text-dark">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</div>
                              <span className="time">1 year ago</span>
                            </div>
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                            </span>
                          </div>
                        </div>
                        <div className="chat-coversation">
                          <div className="media">
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                            </span>
                            <div className="media-body">
                              <div className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</div>
                              <span className="time">1 year ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="chat-coversation right">
                          <div className="media">
                            <div className="media-body">
                              <div className="text bg-soft-primary text-dark">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</div>
                              <span className="time">1 year ago</span>
                            </div>
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                            </span>
                          </div>
                        </div>
                        <div className="chat-coversation">
                          <div className="media">
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                            </span>
                            <div className="media-body">
                              <div className="text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</div>
                              <span className="time">1 year ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-footer border-top p-3 attached-bottom bg-white">
                      <form id="send-mesaage">
                        <div className="input-group">
                          <input type="hidden" id="chat_thread_id" name="chat_thread_id" defaultValue={9} />
                          <input type="text" className="form-control" name="message" id="message" placeholder="Your Message.." autoComplete="off" fdprocessedid="2ccdiv" />
                          <input type="hidden" className name="attachment" id="attachment" />
                          <div className="input-group-append">
                            <button className="btn btn-circle btn-icon chat-attachment" type="button" fdprocessedid="9q64et">
                              <i className="las la-paperclip" />
                            </button>
                            <button className="btn btn-primary btn-circle btn-icon" onclick="send_reply()" type="button" fdprocessedid="9b7239">
                              <i className="las la-paper-plane" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="chat-info-wrap">
                      <div className="overlay dark c-pointer" data-toggle="class-toggle" data-target=".chat-info-wrap" data-same=".chat-info" />
                      <div className="chat-info c-scrollbar-light p-4 z-1">
                        <div className="px-4 text-center mb-3">
                          <span className="avatar avatar-md mb-3">
                            <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/uVl6pf6oqBpZiJuai4iwU4KCRAGe9plsh5wDrnkN.png" />
                          </span>
                          <h4 className="h5 mb-2 fw-600">Matthew Ryan</h4>
                        </div>
                        <div className="text-center">
                          <h6 className="fs-13">age: 32</h6>
                          <h6 className="fs-13">
                            Height :
                            5
                          </h6>
                          <h6 className="fs-13">
                            Religion :
                            Islam
                          </h6>
                          <h6 className="fs-13">
                            location :
                            American Samoa
                          </h6>
                          <h6 className="fs-13">
                            mother_tongue :
                            English
                          </h6>
                          <div className="text-center mb-3 px-3 mt-3">
                            <a href="https://demo.activeitzone.com/matrimonial/member-profile/27" className="btn btn-block btn-soft-primary">View Full Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </Tab.Pane>
                <Tab.Pane eventKey="second" className="chat-box-wrap h-100 chat-box-wrap-2">

                  <div className="chat-box-wrap h-100">
                    <div className="attached-top bg-white border-bottom chat-header d-flex justify-content-between align-items-center p-3 shadow-sm">
                      <div className="media align-items-center">
                        <span className="avatar avatar-sm mr-3 flex-shrink-0">
                          <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                        </span>
                        <div className="media-body">
                          <h6 className="fs-15 mb-1">
                            Mitchell Johnson
                            <span className="badge badge-dot badge-secondary badge-circle" />
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button className="aiz-mobile-toggler d-lg-none aiz-all-chat-toggler mr-2" data-toggle="class-toggle" data-target=".chat-user-list-wrap">
                          <span />
                        </button>
                        <button className="btn btn-icon btn-circle btn-soft-primary chat-info" data-toggle="class-toggle" data-target=".chat-info-wrap" fdprocessedid="phxy4"><i className="las la-info-circle" /></button>
                      </div>
                    </div>
                    <div className="chat-list-wrap c-scrollbar-light scroll-to-btm" id="parentDiv">
                      <div className="chat-coversation-load text-center">
                        <button className="btn btn-link load-more-btn" data-first={31} type="button">Load More</button>
                      </div>
                      <div className="chat-list px-4" id="chat-messages">
                        <div className="chat-coversation right">
                          <div className="media">
                            <div className="media-body">
                              <div className="text bg-soft-primary text-dark">Hi</div>
                              <span className="time">1 year ago</span>
                            </div>
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                            </span>
                          </div>
                        </div>
                        <div className="chat-coversation">
                          <div className="media">
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                            </span>
                            <div className="media-body">
                              <div className="text">Hello</div>
                              <span className="time">1 year ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="chat-coversation right">
                          <div className="media">
                            <div className="media-body">
                              <div className="text bg-soft-primary text-dark">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</div>
                              <span className="time">1 year ago</span>
                            </div>
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                            </span>
                          </div>
                        </div>
                        <div className="chat-coversation">
                          <div className="media">
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                            </span>
                            <div className="media-body">
                              <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</div>
                              <span className="time">1 year ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="chat-coversation right">
                          <div className="media">
                            <div className="media-body">
                              <div className="text bg-soft-primary text-dark">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                              <span className="time">1 year ago</span>
                            </div>
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/AKgrssE0aIV4yzwTzRQsBaNp93KS2PPp5wqMsld9.png" />
                            </span>
                          </div>
                        </div>
                        <div className="chat-coversation">
                          <div className="media">
                            <span className="avatar avatar-xs flex-shrink-0">
                              <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                            </span>
                            <div className="media-body">
                              <div className="text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</div>
                              <span className="time">1 year ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-footer border-top p-3 attached-bottom bg-white">
                      <form id="send-mesaage">
                        <div className="input-group">
                          <input type="hidden" id="chat_thread_id" name="chat_thread_id" defaultValue={14} />
                          <input type="text" className="form-control" name="message" id="message" placeholder="Your Message.." autoComplete="off" fdprocessedid={794127} />
                          <input type="hidden" className name="attachment" id="attachment" />
                          <div className="input-group-append">
                            <button className="btn btn-circle btn-icon chat-attachment" type="button" fdprocessedid="xnds9i">
                              <i className="las la-paperclip" />
                            </button>
                            <button className="btn btn-primary btn-circle btn-icon" onclick="send_reply()" type="button" fdprocessedid="hyao3gi">
                              <i className="las la-paper-plane" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="chat-info-wrap">
                      <div className="overlay dark c-pointer" data-toggle="class-toggle" data-target=".chat-info-wrap" data-same=".chat-info" />
                      <div className="chat-info c-scrollbar-light p-4 z-1">
                        <div className="px-4 text-center mb-3">
                          <span className="avatar avatar-md mb-3">
                            <img src="https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png" />
                          </span>
                          <h4 className="h5 mb-2 fw-600">Mitchell Johnson</h4>
                        </div>
                        <div className="text-center">
                          <h6 className="fs-13">age: 32</h6>
                          <h6 className="fs-13">
                            Height :
                            5
                          </h6>
                          <h6 className="fs-13">
                            Religion :
                            Judaismm
                          </h6>
                          <h6 className="fs-13">
                            location :
                            American Samoa
                          </h6>
                          <h6 className="fs-13">
                            mother_tongue :
                            English
                          </h6>
                          <div className="text-center mb-3 px-3 mt-3">
                            <a href="https://demo.activeitzone.com/matrimonial/member-profile/35" className="btn btn-block btn-soft-primary">View Full Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </Tab.Pane>
              </Tab.Content>
            </Col> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Message;
