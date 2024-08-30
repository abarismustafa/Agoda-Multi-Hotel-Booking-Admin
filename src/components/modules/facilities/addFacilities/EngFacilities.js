
function EngFacilities() {
    
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
                                    <label htmlFor="title" className="form-label eng-services-form-label"><b>MEDIAS  0/1 - 1 Remaining</b></label>
                                    <div className='row'>
                                        <div className='col-xl-6'>
                                            <input type="file" className="form-control eng-services-input" id="title" placeholder="Title" />
                                        </div>
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

export default EngFacilities;
