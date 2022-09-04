import React from 'react';
import styles from "./Todaypics.module.css";

const Todaypics = () => {
  return (
    <>
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-2">
            <h3 className="text-white">Today</h3>
            <span className="text-white">Monday, 05 September 2022</span>
          </div>
          <div className="col-md-10 d-flex flex-wrap justify-content-center p-2 my-2">
            <div className={`${styles.ImageBox} rounded my-2 mx-2`}>
              <img
                className="w-100 h-100 rounded"
                src="./Images/avi-werde-hHz4yrvxwlA-unsplash.jpg"
                alt=""
              />
            </div>
            <div className={`${styles.ImageBox} rounded my-2 mx-2`}>
              <img
                className="w-100 h-100 rounded"
                src="./Images/jason-briscoe-AQl-J19ocWE-unsplash.jpg"
                alt=""
              />
            </div>
            <div className={`${styles.ImageBox} rounded my-2 mx-2`}>
              <img
                className="w-100 h-100 rounded"
                src="./Images/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Todaypics
