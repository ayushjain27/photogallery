import React from 'react';
import styles from './Heading.module.css';

const Heading = () => {
  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className={`${styles.col} col-md-4 p-2 text-white`}>
                    <h1>Library</h1>
                </div>
                <div className="col-md-8 p-2">
                <form className="d-flex justify-content-end">
        <input className={`${styles.input} form-control me-2 w-25`} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Heading
