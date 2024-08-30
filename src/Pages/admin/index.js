import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../../components/aside/Aside'
import Header from '../../components/commonComponents/header/Header'


function AdminPage() {
    return (
        <>
            <div className="aiz-main-wrapper">
                <Aside/>
                <div className="aiz-content-wrapper aiz-main-wrapper-2">
                    <Header/>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default AdminPage