import React from 'react'
import AddNewReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AddNewReligionsAndCaste'
import AllReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/AllReligionsAndCaste'
import ReligionsAndCaste from '../../../../Components/members/profileAttribute/religionsAndCaste/ReligionsAndCaste'

function ReligionsPage() {
  const religionsTitle = "Religions";

  const allReligionsData = {
    title: "All Religions",
    tabularData: [
      { id: '1', name: 'ertt', religion: 'Judaismm' },
      { id: '2', name: 'Aitheism', religion: 'Judaismm' },
      { id: '3', name: 'Confucianism', religion: 'Judaismm' },
      { id: '4', name: 'Buddhism', religion: 'Judaismm' },
      { id: '5', name: 'Hinduism', religion: 'Judaismm' },
      { id: '6', name: 'Christanity', religion: 'Judaismm' },
      { id: '7', name: 'Islam', religion: 'Judaismm' },
      { id: '8', name: 'Judaismm', religion: 'Judaismm' },
    ],
    modalData: {
      title: "Edit Religion Info",
      casteName: "Religion Name"
  }
  };
  const addNewReligiondata = {
    heading: 'Add New Religion',
    title: 'Religion Name',
    placeHolderData: 'Choose Religion Name'
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

export default ReligionsPage