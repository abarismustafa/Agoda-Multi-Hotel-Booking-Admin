import React from 'react'
import AddNewOnBehalfs from '../../../../Components/members/profileAttribute/onBehalf/AddNewOnBehalfs'
import OnAllBehalfs from '../../../../Components/members/profileAttribute/onBehalf/OnAllBehalfs'
import OnBehalf from '../../../../Components/members/profileAttribute/onBehalf/OnBehalf';

const onBehalfData = {
    heading: "Marital Statuses",
    allData: {
        title: "All Marital Status",
        tabularData: [
            { id: '1', name: 'Widowed' },
            { id: '2', name: 'Separated' },
            { id: '3', name: 'Divorced' },
            { id: '4', name: 'Never Married' },
            { id: '5', name: 'Married' },
        ]
    },
    addNewData: {
        title: "Add New Marital Status",
        placeHolderData: "Name"
    },
    modalData: {
        title: "Edit Marital Status Info"
    }
}

function MaritalStatusPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <OnBehalf data={onBehalfData} />
                    <div className="row">
                        <OnAllBehalfs data={onBehalfData} />
                        <AddNewOnBehalfs data={onBehalfData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MaritalStatusPage