import React from 'react'
import AddNewOnBehalfs from '../../../../Components/members/profileAttribute/onBehalf/AddNewOnBehalfs';
import OnAllBehalfs from '../../../../Components/members/profileAttribute/onBehalf/OnAllBehalfs';
import OnBehalf from '../../../../Components/members/profileAttribute/onBehalf/OnBehalf';

const onBehalfData = {
    heading: "Family Status",
    allData: {
        title: "All Family Status",
        tabularData: [
            { id: '1', name: 'High Class' },
            { id: '2', name: 'Middle Class' },
            { id: '3', name: 'Low Class' },
            { id: '4', name: 'Upper Middle Class' },
        ]
    },
    addNewData: {
        title: "Add New Family Status",
        placeHolderData: "Family Status Name"
    },
    modalData: {
        title: "Edit Family Status Info"
    }
}

function FamilyStatusPage() {
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

export default FamilyStatusPage;