import React,{useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTask=()=>
{
    const tname=useRef("");
    const priority=useRef("");
    const date=useRef("");
    const Navigate=useNavigate();

    
    const addData=(e)=>{
        e.preventDefault();
    var insert={
        tname:tname.current.value,
        priority:priority.current.value,
        date:date.current.value
    }

    axios.post(`http://localhost:5000/posts`,insert).then(()=>{

            Navigate('/');
    });

    e.target.reset();
    }
    return(
        <>
        <div>
        <div className="modal fade" role="dialog" id="add-task">
        <div className="modal-dialog">
            <div className="modal-content p-5 bg-white">
                <h2>Add Task</h2>
                <hr/>

                <form onSubmit={addData}>
                    <div className="form-group mt-2">
                        <input type="text" placeholder="Name *" ref={tname} className="form-control"/>
                    </div>

                    <div className="form-group mt-4">
                        <select type="text" placeholder="Priority *" ref={priority} className="form-control">
                        <option value="">---select priority--- </option>
                        <option value="Top">Top </option>
                        <option value="Low">Low </option>
                        </select>
                    </div>

                    <div className="form-group mt-4">
                        <input type="date" placeholder="enter date *" ref={date} className="form-control"/>
                    </div>

                    <div className="from-group mt-3">
                        <input type="submit" className='btn btn-dark text-white' value="AddTask"/>
                    </div>
                </form>
            </div>
        </div>
        </div>

        </div>
        </>
    )
}
export default AddTask


// import React, { useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AddTask = () => {
//   const tname = useRef("");
//   const priority = useRef("");
//   const date = useRef("");
//   const navigate = useNavigate();

//   const addData = (e) => {
//     e.preventDefault(); // Fixed typo here
//     const insert = {
//       tname: tname.current.value,
//       priority: priority.current.value,
//       date: date.current.value,
//     };

//     axios.post(`http://localhost:5000/posts`, insert).then(() => {
//       navigate('/');
//     });

//     // Optionally clear the form
//     // e.target.reset();
//   };

//   return (
//     <>
//       <div>
//         <div className="modal fade" role="dialog" id="add-task">
//           <div className="modal-dialog">
//             <div className="modal-content p-5 bg-white">
//               <h2>Add Task</h2>
//               <hr />

//               <form onSubmit={addData}>
//                 <div className="form-group mt-2">
//                   <input
//                     type="text"
//                     placeholder="Name *"
//                     ref={tname}
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="form-group mt-4">
//                   <select
//                     ref={priority}
//                     className="form-control"
//                   >
//                     <option value="">---select priority---</option>
//                     <option value="Top">Top</option>
//                     <option value="Low">Low</option>
//                   </select>
//                 </div>

//                 <div className="form-group mt-4">
//                   <input
//                     type="date"
//                     ref={date}
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="form-group mt-3"> {/* Corrected the typo here */}
//                   <input
//                     type="submit"
//                     className="btn btn-dark text-white"
//                     value="Add Task"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddTask;
