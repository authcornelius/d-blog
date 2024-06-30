import React from 'react';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { RiShareForwardLine } from "react-icons/ri";

const Card = ({ image, heading, paragraph, date, time }) => {
  return (
    <div className="d-flex border-top mt-2 pt-3 cards">
      <div className='col-3 col-lg-1 mx-1'>
        <img src={image} alt="Card" className="card-image w-100" />
      </div>

      <div className="card-content col-8 col-lg-7 mx-lg-3">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-paragraph col-lg-6">{paragraph}</p>

        <div className="d-flex align-items-center">
          <time className="card-time">{date}</time>
          <span className="mx-2">•</span>
          <time className="card-time">{time}</time>
          <span className="mx-2">•</span>
          <RiShareForwardLine className="ms-2" />
        </div>
      </div>

      <div className='d-none d-lg-block col-lg-3'>
        <ul className="nav d-flex justify-content-between my-5">
          <li className="nav-item text-center">
            <h1>14</h1>
            <p>Opened</p>
          </li>

          <li className="nav-item text-center">
            <h1>10</h1>
            <p>Reads</p>
          </li>

          <li className="nav-item text-center">
            <h1>2</h1>
            <p>New Subs</p>
          </li>
        </ul>
      </div>

      <div className='col-1 d-flex justify-content-center my-auto'>
        <PiDotsThreeOutlineFill />
      </div>
    </div>
  );
};

export default Card;
