import React from "react";


function Order(){
    return(
        <>
        <center className="orderBox">
            <img className="orderImg" src="/img/gt3rs.jpeg" alt="img"/>
            <div className="orderDetail">
                <p className="orderName">this is product</p>
                <p className="orderDetailFull">this product is awesome and i m liking this product</p>
                <div className="priceStock">
                    <p className="priceNameStock"><span className="priceNameStock_price" > price: </span>1200</p>
                    <p className="priceNameStock"><span className="priceNameStock_price" > Coustomer Name: </span>Abhishek</p>
                    <p className="priceNameStock"><span className="priceNameStock_price" > stock: </span>13 pices</p>
                </div>
                <div className="orderButtonBox">
                    <button className="orderButton">Order Again</button>
                    <button className="orderButton">view deatail</button>
                </div>
            </div>
        </center>
        
        </>
        
    )
}
export default Order;