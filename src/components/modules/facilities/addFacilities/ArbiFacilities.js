import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react'

function ArbiFacilities() {
    const [content, setContent] = useState('');
    const editor = useRef(null);
    return (
        <>
            <div className="aiz-main-content card eng-services-card">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4 eng-services-titlebar">
                        <div className='row'>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label eng-services-form-label">Name *</label>
                                    <input type="text" className="form-control eng-services-input" id="title" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label eng-services-form-label"><b>MEDIAS :</b></label>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ArbiFacilities
