import React from 'react'
import { Button } from 'react-bootstrap'
import { CiFilter } from 'react-icons/ci'

function AllLanguages() {
    return (
        <div className='row'>
            <div className='col-lg-12'>
                <div className='card p-5'>
                    <p className='bg-primary p-2 text-white rounded'><i>Complete the fields of a language with the default language</i></p>
                    <div className='d-flex align-items-center'>
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                        <span className="ms-2">हिंदी</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                        <span className="ms-2">ENGLISH</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                        <span className="ms-2">عربي</span>
                    </div>

                    <div className='my-2'>
                        <button className='btn btn-outline-primary btn-sm'>
                            <span className='fs-5'><CiFilter />
                            </span>
                            <span>Apply The Default Language</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllLanguages
