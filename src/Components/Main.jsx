import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Main.module.css';

const Main = () => {
  return (
    <>
              <style jsx="true">
        {`
          .active {
            color: #ffc107 !important;
            font-weight: bold !important;
            border-bottom: 3px solid #ffc107 !important;
          }
        `}
      </style>
        <div className="container-fluid">
          <div className='d-flex justify-content-between'>
            <ul className={`${styles.ul} mx-2 mb-2 mb-lg-0 d-flex justify-content-between w-75`}>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}
                  to="/"
                >
                  All photos
                </NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}
                  activeclassname="active"
                  aria-current="page"
                  to="/architecture"
                >
                  Architecture
                </NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}
                  activeclassname="active"
                  aria-current="page"
                  to="/kashmir"
                >
                  Kashmir
                </NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}
                  activeclassname="active"
                  aria-current="page"
                  to="/seaside"
                >
                  Seaside
                </NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}
                  activeclassname="active"
                  aria-current="page"
                  to="/lake view"
                >
                  Lake view
                </NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}
                  activeclassname="active"
                  aria-current="page"
                  to="/italy"
                >
                  Italy
                </NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}                  
                  activeclassname="active"
                  aria-current="page"
                  to="/china"
                >
                  China
                </NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration: 'none', color:'white', cursor: 'pointer'}}
                  activeclassname="active"
                  aria-current="page"
                  to="/argentina"
                >
                  Argentina
                </NavLink>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button style={{cursor: 'pointer'}} className="btn btn-outline-warning rounded-pill p-2">+New category</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Main
