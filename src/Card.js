import React from "react";

const Card = ({title="aTitle", img_src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  cardText="Some quick example text to build on the card title and make up\n" +
                  "                    the bulk of the card's content.", buttonText="aButton"}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img
                src={img_src}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {cardText}
                </p>
                <a href="#" className="btn btn-success">{buttonText}</a>
            </div>
        </div>
    )
}

export default Card;
