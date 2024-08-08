// import React,{useState,useEffect} from "react";
// import { Container } from "react-bootstrap";
// import AddTask from "./AddTask";
// import axios from "axios";
// import 'bootstrap-icons/font/bootstrap-icons.css'
// const Layouts=()=>
// {

//     const[data,setdata]=useState([]);
//     useEffect(()=> {
//     axios.get(`http://localhost:5000/posts`).then((response)=>{
//         setdata(response.data);
//     })
//     },[data]);


//     return(
//         <>
//         <Container className="p-5 bg-white mt-5 border border-5 border-success w-50 ">

//             <AddTask/>

//             <h1>
//                 To do List
//                 <button type="button" className="btn btn-lg bg-dark text-white ms-5">Total Task <span className="badge badge-danger text-white bg-dark">{data.length}</span></button>
//                 <button type="button" className="btn btn-lg bg-dark text-white ms-5" data-bs-target="#add-task" 
//                 data-bs-toggle="modal">Add Task</button>
//             </h1>

//         {data && data.map((row)=>{
//             return(
//         <Container className="shadow mt-5 p-4">
//             <div className="table">
//                 <tr>
//                     <td>{row.id}</td>
//                     <td>{row.tname}</td>
//                     <td>{row.priority}</td>
//                     <td>{row.date}</td>
//                     <td><button type="button" className="btn bg-danger text-white btn-sm"><span className="bi bi-trash"></span>
//                     </button> | <button type="button" className="btn btn-primary bg-primary text-white btn-sm ms-2"><span className="bi bi-pencil"></span>
//                     </button></td>
//                 </tr>
//             </div>
//         </Container>
//             )
//         }
//         )}

//         </Container>
//         </>
//     )
// }
// export default Layouts


import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddTask from "./AddTask";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layouts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/posts`).then((response) => {
            setData(response.data);
        });
    }, []);  // Empty array so it only runs once after the initial render.

    return (
        <>
            <Container className="p-5 bg-white mt-5 border border-5 border-success w-50 ">
                <AddTask />
                <h1>
                    To do List
                    <button type="button" className="btn btn-lg bg-dark text-white ms-5">
                        Total Task <span className="badge badge-danger text-white bg-dark">{data.length}</span>
                    </button>
                    <button type="button" className="btn btn-lg bg-dark text-white ms-5" data-bs-target="#add-task" data-bs-toggle="modal">
                        Add Task
                    </button>
                </h1>
                <table className="table mt-5">
                    <tbody>
                        {data && data.map((row) => (
                            <tr key={row.id} className="shadow p-4">
                                <td>{row.id}</td>
                                <td>{row.tname}</td>
                                <td>{row.priority}</td>
                                <td>{row.date}</td>
                                <td>
                                    <button type="button" className="btn bg-danger text-white btn-sm">
                                        <span className="bi bi-trash"></span>
                                    </button> 
                                    <button type="button" className="btn btn-primary bg-primary text-white btn-sm ms-2">
                                        <span className="bi bi-pencil"></span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default Layouts;
