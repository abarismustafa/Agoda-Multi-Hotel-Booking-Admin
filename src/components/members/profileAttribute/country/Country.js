import React from 'react'

function Country({ data }) {
    return (
        <>
            <div className="aiz-titlebar mt-2 mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">{data}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Country;