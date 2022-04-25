import React from "react";
import './Wash.css'

export default function Wash(){

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
        {
            title:"Active Users",
            count:100,
            color:"black"
        },
        {
            title:"Appstore Downloads",
            count:100,
            color:"blue"
        },
        {
            title:"Playstore",
            count:100,
            color:"green"
        },
        {
            title:" Active Users",
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
        <div className="d-flex"><h4 className="card p-1"> Wash & Details Bookings </h4></div>
        <div className="card " id="wash-history">
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
    )
}