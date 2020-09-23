import React from 'react';
import './Card2.css';
import CardItem from './Card2Item';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Date: September 22, 2020'
              text2='AM Blood Pressure: 88/62'
              text3='AM Pulse: 138'
              text4='PM Blood Presure: 94/68'
              text5='PM Pulse: 121'
              text6='73 - 101 - 102 - 113'
            />
            <CardItem
              text='Date: September 21, 2020'
              text2='AM Blood Pressure: 88/62'
              text3='AM Pulse: 138'
              text4='PM Blood Presure: 94/68'
              text5='PM Pulse: 121'
              text6='94 - 104 - 156 - 176'
            />
            <CardItem
              text='Date: September 20, 2020'
              text2='AM Blood Pressure: 95/62'
              text3='AM Pulse: 138'
              text4='PM Blood Presure: 94/68'
              text5='PM Pulse: 121'
              text6='65 - 91 - 115 - 176'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text='Date: September 22, 2020'
              text2='AM Blood Pressure: 88/62'
              text3='AM Pulse: 138'
              text4='PM Blood Presure: 94/68'
              text5='PM Pulse: 121'
              text6='73 - 101 - 102 - 113'
            />
            <CardItem
              text='Date: September 21, 2020'
              text2='AM Blood Pressure: 88/62'
              text3='AM Pulse: 138'
              text4='PM Blood Presure: 94/68'
              text5='PM Pulse: 121'
              text6='94 - 104 - 156 - 176'
            />
            <CardItem
              text='Date: September 20, 2020'
              text2='AM Blood Pressure: 95/62'
              text3='AM Pulse: 138'
              text4='PM Blood Presure: 94/68'
              text5='PM Pulse: 121'
              text6='65 - 91 - 115 - 155'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text='Date: September 19, 2020'
              text2='AM Blood Pressure: 88/62'
              text3='AM Pulse: 138'
              text4='PM Blood Presure: 92/68'
              text5='PM Pulse: 125'
              text6='57 - 84 - 69 - 118'
            />
            <CardItem
              text='Date: September 18, 2020'
              text2='AM Blood Pressure: 95/69'
              text3='AM Pulse: 133'
              text4='PM Blood Presure: 94/68'
              text5='PM Pulse: 121'
              text6='105 - 117 - 106 - 89'
            />
            <CardItem
              text='Date: September 17, 2020'
              text2='AM Blood Pressure: 99/59'
              text3='AM Pulse: 120'
              text4='PM Blood Presure: 95/69'
              text5='PM Pulse: 118'
              text6='67 - 94 - 129 - 212'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;