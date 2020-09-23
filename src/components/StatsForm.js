import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const StatsForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Log Today's Stats Here!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Today's Date</label>
          <input
            className='form-input'
            type='text'
            name='date'
            placeholder='Enter your date'
            value={values.date}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Morning Blood Pressure and Pulse</label>
          <input
            className='form-input'
            type='text'
            name='ambp'
            placeholder='Enter your morning blood pressure'
            value={values.ambp}
            onChange={handleChange}
          />
          <input
            className='form-input'
            type='text'
            name='amp'
            placeholder='Enter your morning pulse'
            value={values.amp}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Evening Blood Pressure and Pulse</label>
          <input
            className='form-input'
            type='text'
            name='pmbp'
            placeholder='Enter your evening blood pressure'
            value={values.pmbp}
            onChange={handleChange}
          />
          <input
            className='form-input'
            type='text'
            name='pmp'
            placeholder='Enter your evening pulse'
            value={values.pmp}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Blood Sugar</label>
          <input
            className='form-input'
            type='number'
            name='bs1'
            placeholder='Breakfast'
            value={values.bs1}
            onChange={handleChange}
          />
          <input
            className='form-input'
            type='number'
            name='bs2'
            placeholder='Lunch'
            value={values.bs2}
            onChange={handleChange}
          />
          <input
            className='form-input'
            type='number'
            name='bs3'
            placeholder='Dinner'
            value={values.bs3}
            onChange={handleChange}
          />
          <input
            className='form-input'
            type='number'
            name='bs4'
            placeholder='Bedtime'
            value={values.bs4}
            onChange={handleChange}
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StatsForm;