import React, {useState,useEffect} from 'react';

const Followup=()=>
{

    const[customer,updateCustomer]=useState([]);

    const getData=()=>
    {
        fetch("http://firstenquiry.com/api/react/todaycall.php")
        .then(response=>response.json())
        .then(result=>updateCustomer(result))
    }

    useEffect(()=>{
        getData();
    },[true])


    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-primary">Todays Follow Up Customers-{customer.length}</h2>
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr className="bg-secondary text-white">
                                <td>Name</td>
                                <td>Mobile No</td>
                                <td>Email</td>
                                <td>Service</td>
                                <td>Feedback</td>
                                <td>Remarks</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customer.map((xcustomer,index)=>{
                                    return(
                                    <tr key={index}>
                                        <td>{xcustomer.name}</td>
                                        <td>{xcustomer.mobile}</td>
                                        <td>{xcustomer.email}</td>
                                        <td>{xcustomer.service}</td>
                                        <td>{xcustomer.feedback}</td>
                                        <td>{xcustomer.remarks}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Followup;