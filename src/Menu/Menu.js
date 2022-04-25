import React from "react";
import "./Menu.css"


export default function Menu(){
  
    const options = [ 
        {
            title:"All Bookings",
            count:100
        },
        {
            title:"Website Visitors",
            count:100
        },
        {
            title:"Appstore Downloads",
            count:100
        },
        {
            title:"Playstore Downloads",
            count:100
        },
        {
            title:"Current Active Users",
            count:100
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
        {
            title:"Parkings",
            count:100
        },
        {
            title:"Car sales",
            count:100
        },
        {
            title:"Buyers",
            count:100
        },
        {
            title:"valuation",
            count:100
        },
    ]

    return(
        <div className="col-sm-12 mt-2">
            <div className="card" id="Menu">
            <div class="d-flex justify-content-between p-1">
                {
                    options.map((item)=>{
                        return <div className="p-2">
                            <h6>{item.title}</h6>
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
    )
}