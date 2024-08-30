import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./AddFacilities.css"

import EngFacilities from './EngFacilities';
import HindiFacilities from './HindiFacilities';
import ArbiFacilities from './ArbiFacilities';
function AddFacilities() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar mt-2 mb-4">
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className=" custom-tabs"
                        >
                            <Tab eventKey="home" title="English (Default)">
                                <EngFacilities />
                            </Tab>
                            <Tab eventKey="profile" title="हिंदी">
                                <HindiFacilities />
                            </Tab>
                            <Tab eventKey="contact" title="عربي" >
                                <ArbiFacilities />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFacilities
