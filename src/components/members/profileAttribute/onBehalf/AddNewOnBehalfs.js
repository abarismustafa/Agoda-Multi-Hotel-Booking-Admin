import React from 'react'

function AddNewOnBehalfs({ data }) {
    return (
        <>
            <div className="col-lg-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">{data.addNewData.title}</h5>
                    </div>
                    <div className="card-body">
                        <form action="https://weddemoadmin.abaris.in/admin/on-behalf" method="POST">
                            <input type="hidden" name="_token" defaultValue="cPIRXzSvxbL64b3stO03NULzK4ie7fIhzzG4YNVj" />                    <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder={data.addNewData.placeHolderData} className="form-control" required fdprocessedid="pniqgn" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="6o487s">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewOnBehalfs