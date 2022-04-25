import React from "react";


export default function CarAccessories(){

    const options = [ 
        {
            title:"All Bookings",
            count:100,
            color:"black"
        },
        {
            title:"Website Visitors",
            count:100,
            color:"blue"
        },
        {
            title:"Appstore Downloads",
            count:100,
            color:"green"
        },
        {
            title:"Playstore Downloads",
            count:100,
            color:"orange"
        },
           ]

    const submenu = [
        {
            title:"Service & Service",
            count:100
        },
        {
            title:"car Track",
            count:100
        },
        {
            title:"FastTag",
            count:100
        },
        {
            title:"Accessories",
            count:100
        },
        {
            title:"Insurance",
            count:100
        },
     
    ]
    return(
        <div className="col-sm-6">
        <div className="d-flex"><h4 className="card p-2">Car Accessories  </h4></div>
       <div className="col-sm-12">
       <div className="card" id="service-history">
        <div class="d-flex justify-content-between p-1">
            {
                options.map((item)=>{
                    return <div className="p-2">
                        <h6 style={{color:item.color}}>{item.title}</h6>
                        <h6 style={{color:"blue"}}>{item.count}</h6>
                    </div>
                })
            }
            
        </div>
        <div class="d-flex justify-content-between p-1">
            {
                submenu.map((item)=>{
                    return <div className="p-2">
                        <p>{item.title}</p>
                        <p style={{color:"blue"}}>{item.count}</p>
                    </div>
                })
            }
            
        </div>
       </div>

   
        </div>
    </div>
    )
}