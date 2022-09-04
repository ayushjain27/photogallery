import React from 'react';
import styles from './Todaypics.module.css';

const Weekpics = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-2">
            <h3 className="text-white">This week</h3>
            <span className="text-white">Monday, 05 September 2022</span>
          </div>
          <div className="col-md-10 d-flex flex-wrap justify-content-center p-2 my-2">
            <div className={`${styles.ImageBox} rounded my-2 mx-2`}>
              <img
                className="w-100 h-100 rounded"
                src="./Images/pixasquare-4ojhpgKpS68-unsplash.jpg"
                alt=""
              />
            </div>
            <div className={`${styles.ImageBox} rounded my-2 mx-2`}>
              <img
                className="w-100 h-100 rounded"
                src="./Images/lefteris-kallergis-ewSBvLSp3Tc-unsplash.jpg"
                alt=""
              />
            </div>
            <div className={`${styles.ImageBox} rounded my-2 mx-2`}>
              <img
                className="w-100 h-100 rounded"
                src="./Images/robin-wersich-Q0IrpWQIMR4-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weekpics
