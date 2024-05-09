
import React, { useState } from "react";
import axios from "axios";

function Axios() {

    const [data, setdata] = useState([]);

    const mygetdataaxios = () => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((d) => {
                console.log(d.data);
                setdata(d.data);

            })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <input type='button' value="fetchapi" onClick={mygetdataaxios} />

                        {data.map((obj) => {
                            return (

                                <table className="table  table-bordered border-primary" >
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone-no</th>
                                        </tr>
                                        </thead>
                                    <tbody>
                                        <tr>
                                            {/* <th scope="row">{obj.id}</th> */}
                                            
                                            <td>{obj.id}</td>
                                            <td>{obj.name}</td>
                                            <td>{obj.email}</td>
                                            <td>{obj.phone}</td> 
                                        </tr>
                                    </tbody> 
                                </table>
                            )
                        })}

                    </div>

                </div>

            </div>


        </>
    )
}

export default Axios;