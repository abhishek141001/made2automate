import React from "react";
// import { Outlet } from "react-router-dom";
import Navi from "../components/nav";
import Header from "../components/header";


function TotalDetails(){
     return(
        <>
        
        <div className="totalDetail">
        <div className="detailsBrief">
            <div className="detailsBriefBox"><p className="detailValue">112</p><p className="detailName">Total orders</p></div>
            <div className="detailsBriefBox"><p className="detailValue">112</p><p className="detailName">Total orders</p></div>
            <div className="detailsBriefBox"><p className="detailValue">112</p><p className="detailName">Total orders</p></div>
            <div className="detailsBriefBox"><p className="detailValue">112</p><p className="detailName">Total orders</p></div>
            <div className="detailsBriefBox"><p className="detailValue">112</p><p className="detailName">Total orders</p></div>
        </div>
        <div>
        <p className="totalOrders">Total Orders</p>

        <div className="orderedProductBox"><h4 className="productName">IR sensors</h4>
        <p className="productDetail">this product is awesome</p>
        </div>
        <p className="totalOrders">Total leads</p>
        <div className="orderedProductBox">
            <p className="personName">ramesh</p>
            <p className="personDetail">this product is awesome</p>
        </div>
        </div>
        </div>
        </>
     )
}
export default TotalDetails;