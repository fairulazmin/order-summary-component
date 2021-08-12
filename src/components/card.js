import React from "react";
//import { ReactComponent as Background } from "../images/illustration-hero.svg";
import Background from "../images/illustration-hero.svg";
import { ReactComponent as Icon } from "../images/icon-music.svg";
import "./card.scss";

export default function Card(props) {
  const { desc, priceAmount, priceTitle } = props.order;

  return (
    <div className="card">
      <div className="card__background">
        {/* <Background /> */}
        <img src={Background} alt="listen to music image" />
      </div>
      <h2 className="card__title">Order Summary</h2>
      <p className="card__description">{desc}</p>
      <div className="card__plan">
        <div className="card__icon">
          <Icon />
        </div>
        <div className="card__price-plan">
          <div className="card__price-title">{priceTitle}</div>
          <div className="card__price-amount">{priceAmount}</div>
        </div>
        <a className="card__change" href="#">
          Change
        </a>
      </div>
      <div className="card__button">Proceed to Payment</div>
      <a className="card__cancel" href="#">
        Cancel Order
      </a>
    </div>
  );
}
