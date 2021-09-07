import React from 'react';
import crud1 from '../img/crud1.png';
import crud2 from '../img/crud2.webp';
import crud3 from '../img/crud3.png';

const Carrousel = () => {
   return (
      <div
         id='carouselExampleControls'
         className='carousel slide bg-primary'
         data-bs-ride='carousel'
      >
         <div className='carousel-inner'>
            <div className='carousel-item active'>
               <img src={crud1} className='d-block w-100 w-25' alt='crud1' height='300px' />
            </div>
            <div className='carousel-item'>
               <img src={crud2} className='d-block w-100 w-25' alt='crud 2' height='300px' />
            </div>
            <div className='carousel-item'>
               <img src={crud3} className='d-block w-100 w-25' height='300px' alt='crud 3' />
            </div>
         </div>
         <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
         >
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
         </button>
         <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
         >
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
         </button>
      </div>
   );
};

export default Carrousel;
