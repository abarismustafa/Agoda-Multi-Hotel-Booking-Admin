import React from 'react'
import AddNewReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AddNewReligionsAndCaste'
import AllReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AllReligionsAndCaste'
import ReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/ReligionsAndCaste'

function CastePage() {
    const religionsTitle = "Castes";

    const allReligionsData = {
        title: "All Castes",
        tabularData: [
            { id: '1', name: 'Vaishyas', religion: 'Judaismm' },
            { id: '2', name: 'Shudras', religion: 'Judaismm' },
            { id: '3', name: 'Kshatriyas', religion: 'Judaismm' },
            { id: '4', name: 'Brahmin', religion: 'Judaismm' },
            { id: '5', name: 'Sunni', religion: 'Judaismm' },
            { id: '6', name: 'Shia', religion: 'Judaismm' },
            { id: '7', name: 'Israelites (Yisraelim)', religion: 'Judaismm' },
            { id: '8', name: 'bediya', religion: 'Judaismm' },
        ],
        modalData: {
            title: "Edit Caste Info",
            casteName: "Caste Name"
        }
    };
    const addNewReligiondata = {
        heading: 'Add New Caste',
        title: 'Cate Name',
        placeHolderData: 'Choose Caste Name'
    }

    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <ReligionsAndCaste data={religionsTitle} />
                    <div className="row">
                        <AllReligionsAndCaste data={allReligionsData} />
                        <AddNewReligionsAndCaste data={addNewReligiondata} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CastePage