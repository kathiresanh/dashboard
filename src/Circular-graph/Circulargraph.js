import React from "react";
import "./Circulargraph.css"


export default function Circulargraph(){
    return(
        <div className="col-sm-4">
            <div className="card shadow mt-2" id="circular-graph">
              <div className="d-flex p-2">
                 <h4>
                 Sales Breakdown <br></br>
                  by Product
                 </h4>
              </div>
              <div className="d-flex justify-content-center">
                 <h3>  Chart js</h3>
              </div>
            </div>
        </div>
    )
}