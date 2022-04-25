import React from "react";
import "./Statics.css"


export default function Statics() {


    const menu = [
        {
            title: "MG Coins",
            count: 100,
            sub1: "Earned",
            sub2: "Reedemed"
        },
        {
            title: "MG Coins",
            count: 100,
            sub1: "Earned",
            sub2: "Reedemed"
        },
        {
            title: "MG Coins",
            count: 100,
            sub1: "Earned",
            sub2: "Reedemed"
        },
    ]
    return (
        <div className="col-sm-8 mt-1">
            <div className=" card col-sm-12" id="graph">
                <div className="col-sm-12">
                    <div className="d-flex justify-content-between p-2">
                        <div className="">
                            <h5>Sales Growth</h5>
                        </div>
                        <div className="">
                            <small>Last 12 months</small>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="d-flex justify-content-center">
                        <h3>  Chart js</h3>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 bg-white mt-1" id="graph">
                {
                    menu.map((obj) => {
                        return <div className="col-sm-4 p-0">
                            <div className="card shadow p-2" id="menu-items">
                                <table className="mt-3">
                                    <tr>
                                        <th><h5>{obj.title}</h5></th>
                                        <th style={{ color: "blue" }}><h5>{obj.count}</h5></th>
                                    </tr>
                                </table>
                              
                                <table className="mt-4">
                                    <tr>
                                        <td>{obj.sub1}</td>
                                        <td style={{ color: "orange" }}>{obj.count}</td>
                                    </tr>
                                    <tr>
                                        <td>{obj.sub2}</td>
                                        <td style={{ color: "red" }}>{obj.count}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}