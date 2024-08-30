import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./AddService.css"
import EngServices from './EngServices';
import HindiServices from './HindiServices';
import ArbiServices from './ArbiServices';
function AddServices() {
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
                                <EngServices />
                            </Tab>
                            <Tab eventKey="profile" title="हिंदी">
                                <HindiServices />
                            </Tab>
                            <Tab eventKey="contact" title="عربي" >
                                <ArbiServices />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddServices
