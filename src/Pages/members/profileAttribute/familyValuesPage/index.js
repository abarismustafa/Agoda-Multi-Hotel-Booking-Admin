import React from 'react'
import AddNewOnBehalfs from '../../../../Components/members/profileAttribute/onBehalf/AddNewOnBehalfs'
import OnAllBehalfs from '../../../../Components/members/profileAttribute/onBehalf/OnAllBehalfs'
import OnBehalf from '../../../../Components/members/profileAttribute/onBehalf/OnBehalf';

const familyValuesfData = {
    heading: "Family Values",
    allData: {
        title: "All Family Values",
        tabularData: [
            { id: '1', name: 'Xanthus Collins' },
            { id: '2', name: 'Traditional' },
            { id: '3', name: 'Moderate' },
            { id: '4', name: 'Liberall' },
        ]
    },
    addNewData: {
        title: "Add New Family Value",
        placeHolderData: "Family Value Name"
    },
    modalData: {
        title: "Edit family value Info"
    }
}

function FamilyValuesPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <OnBehalf data={familyValuesfData} />
                    <div className="row">
                        <OnAllBehalfs data={familyValuesfData} />
                        <AddNewOnBehalfs data={familyValuesfData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FamilyValuesPage