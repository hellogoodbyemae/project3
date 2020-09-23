import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jim.jpg'
              text='Name: James Kelley'
              label='Age 68'
              path='/profile'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/stats.png'
              text='Log Information for the day'
              label='Daily'
              path='/add-stats'
            />
            <CardItem
              src='images/medication.png'
              text='Keep track of daily medication'
              label='Medication'
              path='/medication'
            />
            <CardItem
              src='images/chart.png'
              text='View Stats'
              label='View'
              path='/chart'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;