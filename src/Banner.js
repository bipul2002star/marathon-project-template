import React, { useState } from 'react'
import './Banner.css'
import Arrow from './Arrow'
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__info gradient'>
                <h1>Hungry?</h1>
                <h1>Work Marathon?</h1>
                <h1 style={{color:"black", marginTop:"10px"}}>Order Healthy</h1>
                <h1 style={{color:"black"}}>Order Online</h1>
                <h5 style={{ marginTop:"16px"}}>
                    Get personalized group meals
                </h5>
                <h5>
                    Schedule your group meals
                </h5>
                <h5>
                    Know the nutrients in your favourite dish
                </h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore and Order</Button>
            </div>

            
            <Arrow/>
        </div>

        
    )
}

export default Banner
