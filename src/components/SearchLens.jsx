import React from 'react'
import NavBarlen from './NavBarlen'

const SearchLens = () => {
  return (
    <div>
        <NavBarlen/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">search lens</label>
                    <input type="text" className="form-control" />
                    <button className="btn btn-success">search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchLens