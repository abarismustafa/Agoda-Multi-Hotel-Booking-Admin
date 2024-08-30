import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react'

function ArbiServices() {
    const [content, setContent] = useState('');
    const editor = useRef(null);
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
                            <div className='row'>
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label eng-services-form-label">Description</label>
                                        <textarea className="form-control eng-services-textarea" id="description" placeholder="Description"></textarea>
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
            </div>
        </>
    )
}

export default ArbiServices
