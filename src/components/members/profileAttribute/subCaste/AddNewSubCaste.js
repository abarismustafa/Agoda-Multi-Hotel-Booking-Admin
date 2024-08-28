import React from 'react'

function AddNewSubCaste() {
    return (
        <>
            <div className="col-lg-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">Add New Sub Caste</h5>
                    </div>
                    <div className="card-body">
                        <form action="https://weddemoadmin.abaris.in/admin/sub-castes" method="POST">
                            <input type="hidden" name="_token" defaultValue="p8MERQePbRlFGsiuKSKG8cPScHeUINqH8k4Aaw6Z" />                    <div className="form-group mb-3">
                                <label htmlFor="name">Religion</label>
                                <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" id="religion_id" data-live-search="true" name="religion_id" required tabIndex={-98}>
                                    <option value={1}>Islam</option>
                                    <option value={2}>Judaismm</option>
                                    <option value={3}>Hinduism</option>
                                    <option value={4}>Christianity</option>
                                    <option value={5}>Buddhism</option>
                                    <option value={6}>Jainism</option>
                                    <option value={7}>Baha'i</option>
                                    <option value={8}>Sikhism</option>
                                    <option value={9}>Confucianism</option>
                                    <option value={10}>Atheism</option>
                                    <option value={16}>ertt</option>
                                </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="religion_id" title="Islam" fdprocessedid="2663em"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Islam</div></div> </div></button><div className="dropdown-menu " style={{ maxHeight: 251, overflow: 'hidden' }}><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list" aria-activedescendant="bs-select-1-0" /></div><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} style={{ maxHeight: 185, overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={11} aria-posinset={1} aria-selected="true"><span className="text">Islam</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">Judaismm</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0}><span className="text">Hinduism</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-3" tabIndex={0}><span className="text">Christianity</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-4" tabIndex={0}><span className="text">Buddhism</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-5" tabIndex={0}><span className="text">Jainism</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-6" tabIndex={0}><span className="text">Baha'i</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-7" tabIndex={0}><span className="text">Sikhism</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-8" tabIndex={0}><span className="text">Confucianism</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-9" tabIndex={0}><span className="text">Atheism</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-10" tabIndex={0}><span className="text">ertt</span></a></li></ul></div></div></div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Caste</label>
                                <div className="dropdown bootstrap-select form-control aiz-"><select className="form-control aiz-selectpicker" name="caste_id" data-live-search="true" id="caste_id" required tabIndex={-98}><option value={1}>Shia</option><option value={2}>Sunni</option></select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="caste_id" title="Shia" fdprocessedid="nmg4j"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Shia</div></div> </div></button><div className="dropdown-menu " style={{ overflow: 'hidden' }}><div className="bs-searchbox"><input type="search" className="form-control" autoComplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list" aria-activedescendant="bs-select-2-0" /></div><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex={0} aria-setsize={2} aria-posinset={1} aria-selected="true"><span className="text">Shia</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex={0}><span className="text">Sunni</span></a></li></ul></div></div></div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Sub Caste Name</label>
                                <input type="text" id="name" name="name" placeholder="Sub Castes Name" className="form-control" required fdprocessedid="lqduw" />
                            </div>
                            <div className="form-group mb-3 text-right">
                                <button type="submit" className="btn btn-primary" fdprocessedid="07ijkk">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewSubCaste