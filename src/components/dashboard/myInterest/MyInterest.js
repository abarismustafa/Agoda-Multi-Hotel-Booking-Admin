import { SlideshowLightbox } from 'lightbox.js-react';

import { Link } from "react-router-dom"

const myInterest = [
    {
        id: '1',
        image: 'https://demo.activeitzone.com/matrimonial/public/uploads/all/9uC6PPkpVpfOu5FuhF2enDj3Com30pgwnLjWZlR1.png',
        name: 'Mitchell Johnson',
        age: "32",
        Status: "Pending"
    },
    {
        id: '2',
        image: 'https://demo.activeitzone.com/matrimonial/public/uploads/all/ApRvIDurTmGrHYCP8HNrm5gQyfFByvt02JOnxDWg.png',
        name: 'Derrick L. Lavender',
        age: "30",
        Status: "Approved"
    },
    {
        id: '3',
        image: 'https://demo.activeitzone.com/matrimonial/public/uploads/all/9uC6PPkpVpfOu5FuhF2enDj3Com30pgwnLjWZlR1.png',
        name: 'Matthew Ryan',
        age: "31",
        Status: "Pending"
    },
    {
        id: '4',
        image: 'https://demo.activeitzone.com/matrimonial/public/uploads/all/9uC6PPkpVpfOu5FuhF2enDj3Com30pgwnLjWZlR1.png',
        name: 'Matthew Ryan',
        age: "31",
        Status: "Approved"
    },
    {
        id: '5',
        image: 'https://demo.activeitzone.com/matrimonial/public/uploads/all/9uC6PPkpVpfOu5FuhF2enDj3Com30pgwnLjWZlR1.png',
        name: 'Matthew Ryan',
        age: "33",
        Status: "Pending"
    },
]

function MyInterest() {
    return (
        <>
            <div className="aiz-user-panel overflow-hidden">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0 h6">My Interests</h5>
                        <Link to="/dashboard/interest/requests" className="mb-0 h6 btn btn-primary">Interest Requests</Link>
                    </div>
                    <div className="card-body">
                        <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
                            <thead>
                                <tr className="footable-header">
                                    <th className="footable-first-visible" style={{ display: 'table-cell' }}>#</th><th style={{ display: 'table-cell' }}>Image</th><th style={{ display: 'table-cell' }}>Name</th><th style={{ display: 'table-cell' }}>age</th><th className="text-center footable-last-visible" style={{ display: 'table-cell' }}>Status</th></tr>
                            </thead>
                            <tbody>

                                {myInterest && myInterest.map((item) => {
                                    // console.log(item)

                                    return <tr id="interested_member_28" key={item.id}>
                                        <td className="footable-first-visible" style={{ display: 'table-cell' }}>{item.id}</td>

                                        <td style={{ display: 'table-cell' }}>
                                            <a href="https://demo.activeitzone.com/matrimonial/member-profile/28" className="text-reset c-pointer">
                                            
                                            
                                                <img className="img-md" src={item.image} height="45px" alt="photo" />
                                            </a>
                                        </td>

                                        <td style={{ display: 'table-cell' }}>
                                            <a href="https://demo.activeitzone.com/matrimonial/member-profile/28" className="text-reset c-pointer">
                                                {item.name}
                                            </a>
                                        </td>

                                        <td style={{ display: 'table-cell' }}>32</td><td className="text-center footable-last-visible" style={{ display: 'table-cell' }}>
                                            <span className="badge badge-inline badge-info">{item.Status}</span>
                                        </td>


                                    </tr>

                                })}

                            </tbody>
                        </table>
                        <div className="aiz-pagination">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyInterest