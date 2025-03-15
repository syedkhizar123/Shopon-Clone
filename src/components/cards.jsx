import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';


function MyCustomCard({ productSrc, height, width }) {
    return (
        <div>
            <div style={{ width: 'max-content', height: "max-content", margin: "0px auto" }}>
                <img height={height} width={width} variant="top" src={productSrc} />
            </div>
        </div>
    );
}
export default MyCustomCard;

export function Show({src, hei, wid}) {
    <div>
        <img src={src} height={hei} width={wid} alt="Slide" />
    </div>
}


export function ProductsCards({imgSrc , title , price , divWid , divHeit} ) {
    return (
        <div style={{height:"330px" , width: "220px" , backgroundColor: "white" , textAlign: "center"  , margin: "0px auto" ,  marginTop: "15px", marginBottom: "15px" } }>
            <img style={{margin: "0px auto" , marginTop: "15px" , paddingTop: "10px"}} src={imgSrc} height="220" width="200"  />
            <p style={{fontSize: "14px" , fontFamily: "Aerial" , marginBottom: "15px" , marginTop: "20px"}}>{title}</p>
        <p style={{color: "grey" , marginTop: "15px"}}>{price}</p>
        </div>
    )
}

export function PopularVid({imgSrc}){
    return(
        <div style={{height:"200px" , width: "170px" , backgroundColor: "white" , textAlign: "center"  , margin: "0px auto" ,  marginTop: "15px", marginBottom: "15px" } }>
        <img style={{margin: "0px auto" , marginTop: "15px" , paddingTop: "10px"}} src={imgSrc} height="180" width="160"  />
    </div>
    )
}


