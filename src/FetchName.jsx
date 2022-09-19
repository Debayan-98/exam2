import React, { useEffect, useState } from 'react'

export const FetchName = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    console.log(result);
    setData(result);
  }
  useEffect(() => {
    getUser();
  }, [])

  return (
    <div>
      <h1>List Of Api Data</h1>
      <div className="container">
        <div className="row ">
          {
            data.map((user => {
              return (
                <div className="col-md-4" key={user.id}>
                  <div className="card carrd">
                    <div className="card-body">
                      <h2 className="">Name:{user.name}</h2>
                      <h3 className="">Email:{user.email}</h3>
                      <h3 className="">Street:{user.address.street}</h3>
                      <h3 className="">Suite:{user.address.suite}</h3>
                      <h3 className="">City:{user.address.city}</h3>
                      <h4 className="">Zipcode:{user.address.zipcode}</h4>
                      <h4 className="">Lat:{user.address.geo.lat}</h4>
                      <h4 className="">Lng:{user.address.geo.lng}</h4>
                      <h4 className="">Phone:{user.phone}</h4>
                      <h5 className="">Website:{user.website}</h5>
                      <h5 className="">Companyname:{user.company.name}</h5>
                      <h5 className="">CatchPhrase:{user.company.catchPhrase}</h5>
                      <h5 className="">Bs:{user.company.bs}</h5>

                    </div>

                  </div>

                </div>
              )

            }))

          }

        </div>
      </div>
    </div>
  )
}
