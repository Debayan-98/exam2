// import React, { useState, useEffect } from 'react'

// export const FetApi = () => {
//     const [user, setUser] = useState([])
//     const getusers = async () => {
//         const response = await fetch('https://hidden-ocean-72098.herokuapp.com/api/category');
//         const data=await response.json();
//         setUser(data.data);
//          console.log(data);
//     }
//     useEffect(() => {
//         getusers();
//     }, [])
//     return (
//         <div className="container">
//             <div className='row'>

//                 {user.map((CurrentData => {
//                     return (
//                         <div className="card-head">
//                             <p>Success:{CurrentData.success}</p>
//                             <p>Message:{CurrentData.message}</p>
                         
//                             <h5>Data:{CurrentData.data}</h5>
//                          <div className='col-md-3' key={CurrentData.id}>
//                                 <div className="card-body">
//                                     <div className="Card-item">
//                                     <h5>Id:{CurrentData.id}</h5> 
//                                          <h5>Catagory:{CurrentData.category}</h5> 
//                                          <img src= {CurrentData.image}  alt=""  /> 
//                                         <p>creadted_t:{CurrentData.created_at}</p>
//                                         <p>Update_At:{CurrentData.updated_at}</p>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>
                            
//                        )
//                     }
//                 )
//                 )
// }
// </div>
// </div>

//    )}                 

                
                
            
        








    

import React, { useState, useEffect } from 'react'

export const FetApi = () => {
    const [user, setUser] = useState([])
    const getusers = async () => {
        const response = await fetch('https://hidden-ocean-72098.herokuapp.com/api/category');
        const data = await response.json();
        setUser(data.data);
        console.log(data);
    }
    useEffect(() => {
        getusers();
    },)
    return (
        <div>
             <h5>Fetch Api Data</h5>
            <div className="container">
                <div className="row text-center">

                    {

                        user.map((Users) => {


                            return (
                                <div className='card card container '> 
                                    
                                <div className="card " key={Users.id}>
                                <h5>Success:{Users.success}</h5> 
                                <h5>Message:{Users.message}</h5> 
                                 <div className="Card-table items-center">
                                        
                                        <div className="card item row">
                                            <p className='Data'>Data:{user.data}  </p>
                                        </div>
                                        <div>
                                            <p className="Data-Id"> Id:{Users.id}</p>
                                        </div>
                                        <div>
                                            <p className="Data Category">  Category : {Users.category}</p>
                                        </div>
                                         <img src= {Users.image}  alt={Users.image}/>
                                        <div>
                                            <p className="Data created_at">Created_At :{Users.created_at}</p>
                                        </div>

                                        <div>
                                            <p className="Data Updated_at">Updated_At :{Users.updated_at}</p>
                                        </div>

                                    </div>
                                </div>

                                    </div>  


                            )
                           
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}
