import React from "react"
import Timer from "./Timer";
function C(props) {
    return (

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div className="card shadow">

                <div style={{backgroundColor:props.backgroundColor}}className="card-body">
                    <h2 className="card-title">Flat 30% off</h2>
                    
                    <Timer session={props.session}/>
                </div>
                <div className="card-body card-p cardinside">
                    <h6><span style={{ backgroundColor: "21649E", fontSize: "12px" }} className="badge bg-primary">Weekly Plan</span></h6>
                    <h4> {props.planId}</h4>
                    <ul>✔ {props.list1}</ul>
                    <ul>✔ {props.list2}</ul>
                    <ul>✔ {props.list3}</ul>
                    <ul>✔ {props.list4}</ul>
                    <ul>✔ {props.list5}</ul>
                    <center><p>{props.suit}</p></center>
                </div>
                <p className="referral">Flat 30% Off for being reffered by Sourabh</p>
                <underline></underline>
                <p style={{ fontSize: "16px", fontWeight: "400", paddingRight: "2px" }}>₹1399 <span style={{ color: "red" }}>Save {props.save}</span>   <span style={{ textDecoration: "line-through", fontSize: "16px", fontWeight: "400", float: "right", paddingRight: "3px" }}>₹{props.originalPrice}</span></p>
                <button>Buy Now</button>
            </div>

        </div>)





    
}
export default C;