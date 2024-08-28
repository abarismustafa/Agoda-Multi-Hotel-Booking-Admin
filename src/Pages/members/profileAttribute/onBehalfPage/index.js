import React from 'react'
import AddNewOnBehalfs from '../../../../Components/members/profileAttribute/onBehalf/AddNewOnBehalfs'
import OnAllBehalfs from '../../../../Components/members/profileAttribute/onBehalf/OnAllBehalfs'
import OnBehalf from '../../../../Components/members/profileAttribute/onBehalf/OnBehalf';

const onBehalfData = {
    heading: "On Behalves",
    allData: {
        title: "All On Behalves",
        tabularData: [
            { id: '1', name: 'ertt' },
            { id: '2', name: 'Aitheism' },
            { id: '3', name: 'Confucianism' },
            { id: '4', name: 'Buddhism' },
            { id: '5', name: 'Hinduism' },
            { id: '6', name: 'Christanity' },
            { id: '7', name: 'Islam' },
            { id: '8', name: 'Judaismm' }
        ],
    },
    addNewData: {
        title: "Add New On Behalf",
        placeHolderData: "On Behalf Name"
    },
    modalData: {
        title: "Edit On Behalf Info"
    }
}

function OnBehalfPage() {
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

export default OnBehalfPage