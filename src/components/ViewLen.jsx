import React, { useState } from 'react'
import NavBarlen from './NavBarlen'

const ViewLen = () => {

    const[data,changedata]=useState(

        [

            {"brandname":"rayban","price":3456,"power":2},
            {"brandname":"Boss","price":5656,"power":1},
            {"brandname":"Oxydo","price":2456,"power":2},

        ]




    )

    return (
        <div>
            <NavBarlen/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>

                    <div className="row g-3">
                        


                            {

                                data.map(

                                    (value,index) => {

                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"> 
                                        <div class="card">
                                        <img src="https://www.honestbrandreviews.com/wp-content/uploads/2021/08/Lenskart-Review-5-1024x1024.jpg" class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.brandname}</h5>
                                                <p class="card-text">{value.price}</p>
                                                <p class="card-text">{value.power}</p>
                                                <a href="#" class="btn btn-primary">BUy</a>
                                            </div>
                                    </div>
                                    </div>
                                    }





                                )
                            }


                        </div>

                    </div>
                </div>
            </div>


        
    )
}

export default ViewLen