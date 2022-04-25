import React from "react";
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';


export default function Sidebar() {

    const options = ["Dashboard", "Orders", "list", "cars", "service", "Admin", "Users", "Valuation", "Sell Cars", "Buy Cars"]
    return (
        <div className="col-sm-2 p-0" >
            <div className="card" id="sidebar">

                <div className="d-flex justify-content-center mt-4">
                    <div className="card" id="companylogo">

                    </div>
                </div>
                <div className="card m-3" id="company">
                    <div className="card" id="company-logo1">

                    </div>
                </div>

                {
                  options.map((item)=>{
                      return      <div className="d-flex justify-content-Start">
                      <div className="text-white m-2">
                          <DashboardIcon></DashboardIcon>
                      </div>
                      <div className="mt-2 text-white">{item}</div>
                    </div>
                  })
                }

            </div>
        </div>
    )
}