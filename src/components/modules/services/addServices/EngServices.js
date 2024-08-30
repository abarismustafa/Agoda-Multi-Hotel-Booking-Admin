import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';
import './AddService.css';
import { IoMdSwap } from 'react-icons/io';

function EngServices() {
    const [content, setContent] = useState('');
    const editor = useRef(null);
    const [content1, setContent1] = useState("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.");
    const [content2, setContent2] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

    const swapContent = () => {
        setContent1(prevContent1 => {
            setContent2(prevContent1);
            return content2;
        });
    };
    return (
        <>
            <div className="aiz-main-content card eng-services-card">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4 eng-services-titlebar">
                        <div className='row'>
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label eng-services-form-label">Title *</label>
                                    <input type="text" className="form-control eng-services-input" id="title" placeholder="Title" />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="priceType" className="form-label eng-services-form-label">Price type *</label>
                                    <select className="form-control eng-services-select" id="priceType">
                                        <option value="" selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label eng-services-form-label">Price *</label>
                                    <input type="text" className="form-control eng-services-input" id="price" placeholder="Price" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="p-4 card">
                                    <label htmlFor="price" className="form-label eng-services-form-label">Room
                                    </label>
                                    <div className='row align-items-center'>
                                        <div className='col-lg-5'>
                                            <div className="mb-3 card">
                                                <div className='p-2' style={{ height: "150px", overflowY: "scroll" }}>
                                                    <p>{content1}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-2 text-center'>
                                            <button className='btn btn-outline-secondary btn-lg' onClick={swapContent}>
                                                <IoMdSwap />
                                            </button>
                                        </div>
                                        <div className='col-lg-5'>
                                            <div className="mb-3 card">
                                                <div className='p-2' style={{ height: "150px", overflowY: "scroll" }}>
                                                    <p>{content2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="includedTax" className="form-label eng-services-form-label">Included tax *</label>
                                    <select className="form-control eng-services-select" id="includedTax">
                                        <option value="" selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label eng-services-form-label">Start date *</label>
                                    <input type="date" className="form-control eng-services-input" id="price" placeholder="Start date" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label eng-services-form-label">End date *</label>
                                    <input type="date" className="form-control eng-services-input" id="price" placeholder="End date" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label htmlFor="price" className="form-label eng-services-form-label">Mandatory *
                                </label>
                                <div className='d-flex align-items-center'>
                                    <div className="mb-3 eng-services-radio-group">
                                        <div className="d-flex align-items-center">
                                            <input type="radio" id="taxYes" name="includedTax" value="yes" />
                                            <label htmlFor="taxYes" className="eng-services-form-label">Yes</label>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <input type="radio" id="taxNo" name="includedTax" value="no" />
                                            <label htmlFor="taxNo" className="eng-services-form-label">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label eng-services-form-label">Description</label>
                                        <textarea className="form-control eng-services-textarea" id="description" placeholder="Description"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="price" className="form-label eng-services-form-label">Release
                                    </label>
                                    <div className='d-flex align-items-center'>
                                        <div className="mb-3 eng-services-radio-group">
                                            <div className="d-flex align-items-center">
                                                <input type="radio" id="Published" name="includedTax" value="Published" />
                                                <label htmlFor="Published" className="eng-services-form-label">Published</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input type="radio" id="Not published" name="includedTax" value="Not published" />
                                                <label htmlFor="Not published" className="eng-services-form-label">Not published</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input type="radio" id="Awaiting" name="includedTax" value="Awaiting" />
                                                <label htmlFor="Awaiting" className="eng-services-form-label">Awaiting</label>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <input type="radio" id="Archived" name="includedTax" value="Archived" />
                                                <label htmlFor="Archived" className="eng-services-form-label">Archived</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3 eng-services-jodit-editor">
                                        <label htmlFor="editor" className="form-label eng-services-form-label">Description <span style={{ color: 'red' }}>*</span></label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            onChange={newContent => setContent(newContent)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EngServices;
