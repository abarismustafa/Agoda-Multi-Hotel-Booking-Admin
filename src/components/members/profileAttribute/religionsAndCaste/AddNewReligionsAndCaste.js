import React from 'react'

function AddNewReligionsAndCaste({data}) {
    return (
        <>
            <div className="col-lg-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">{data.heading}</h5>
                    </div>
                    <div className="card-body">
                        <form action="https://weddemoadmin.abaris.in/admin/religions" method="POST">
                            <input type="hidden" name="_token" defaultValue="DV6opNN5kN1eIp2BeSIuwMD7o1uf8dvUUYLEEtTq" />                        <div className="form-group mb-3">
                                <label htmlFor="name">{data.title}</label>
                                <input type="text" id="name" name="name" placeholder={data.placeHolderData} className="form-control" required fdprocessedid="bz0c2" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="apybab">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewReligionsAndCaste