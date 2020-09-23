import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='cards__item__text'>{props.text2}</p>
            <p className='cards__item__text'>{props.text3}</p>
            <p className='cards__item__text'>{props.text4}</p>
            <p className='cards__item__text'>{props.text5}</p>
            <p className='cards__item__text'>{props.text6}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;