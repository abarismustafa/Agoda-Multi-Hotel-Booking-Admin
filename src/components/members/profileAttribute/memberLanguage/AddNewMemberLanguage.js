import React from 'react'

function AddNewMemberLanguage() {
    return (
        <>
            <div className="col-lg-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add New Member Language</h5>
                    </div>
                    <div className="card-body">
                        <form action="https://weddemoadmin.abaris.in/admin/member-languages" method="POST">
                            <input type="hidden" name="_token" defaultValue="p8MERQePbRlFGsiuKSKG8cPScHeUINqH8k4Aaw6Z" />                    <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Language Name" className="form-control" required fdprocessedid="q5svgb" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="jmcmb8">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewMemberLanguage