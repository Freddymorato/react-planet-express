import React from 'react';


const AstroBodyFilter = (props) => {
  return (
    <div className="filter">
      <span className="filter-label bold-text">Filter destinations by astronomic body:</span>
      <span className="filter-label"><label htmlFor='all'>All</label>&nbsp;
      <input type="radio" name='astroFilter' id='all' value='All' onChange={props.handleChange} /></span>
      <span className="filter-label"><label htmlFor='planet'> Planet</label>&nbsp;
      <input type="radio" name='astroFilter' id='planet' value='Planet' onChange={props.handleChange} /></span>
      <span className="filter-label"><label htmlFor='moon'> Moon</label>&nbsp;
      <input type="radio" name='astroFilter' id='moon' value='Moon' onChange={props.handleChange} /></span>
      <span className="filter-label"><label htmlFor='asteroid'> Asteroid</label>&nbsp;
      <input type="radio" name='astroFilter' id='asteroid' value='Asteroid' onChange={props.handleChange} /></span>
      <span className="filter-label"><label htmlFor='star'> Star</label>&nbsp;
      <input type="radio" name='astroFilter' id='star' value='Star' onChange={props.handleChange} /></span>
    </div>
  )
};


export default AstroBodyFilter;
