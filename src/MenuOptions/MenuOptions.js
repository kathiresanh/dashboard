import React from "react";
import "./MenuOptions.css"

export default function MenuOptions() {

    const menuOptions = [
        {
          title:"Car Parking",
          count:900,
          sub1:"secured",
          count:200
        },
        {
            title:"Car Insurance",
            count:900,
            sub1:"secured",
            count:200
          },
          {
            title:"Challans Paid",
            count:900,
            sub1:"secured",
            count:200
          },
          {
            title:"Fast Tag",
            count:900,
            sub1:"secured",
            count:200
          },
          {
            title:"Car Data",
            count:900,
            sub1:"secured",
            count:200
          },
    ]
    return (
        <div className="d-flex col-sm-12">
            {
                menuOptions.map((obj) => {
                    return <div className="pt-3" >
                        <div className="card shadow p-2" id="menu-options">
                           <h5>{obj.title}</h5>
                           <h5 style={{color:"blue"}}>{obj.count}</h5>
                           
                         <div className="mt-3" id="menu-options">
                           <h6>{obj.sub1}</h6>
                           <h5 style={{color:"blue"}}>{obj.count}</h5>
                         </div>
                         </div>

                    </div>
                })
            }
        </div>
    )
}