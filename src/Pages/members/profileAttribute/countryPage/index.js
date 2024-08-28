import React from 'react'
import AllCountries from '../../../../Components/members/profileAttribute/country/AllCountries';
import Country from '../../../../Components/members/profileAttribute/country/Country';

const heading = "Countries";

function CountryPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <Country data={heading} />
                    <AllCountries />
                </div>
            </div>
        </>
    )
}
export default CountryPage;