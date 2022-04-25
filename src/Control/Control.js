import React from "react";
import CarAccessories from "../Accessories/CarAccessories";
import Circulargraph from "../Circular-graph/Circulargraph";
import Menu from "../Menu/Menu";
import MenuOptions from "../MenuOptions/MenuOptions";
import Service from "../Servicebooking/Service";
import Statics from "../Statics/Statics";
import Topbar from "../Topbar/Topbar";
import Wash from "../Wash/Wash";


export default function Control(){
    return (
        <div className="col-sm-10">
         <Topbar></Topbar>
         <Menu></Menu>
         <div className="row">
         <Statics></Statics>
         <Circulargraph></Circulargraph>
         </div>
          <MenuOptions></MenuOptions>
        
          <Service></Service>
          <Wash></Wash>
          <div className="row">
          <CarAccessories></CarAccessories>
          <CarAccessories></CarAccessories>
          </div>
        </div>
    )
}