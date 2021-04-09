import React from 'react'
import { Link } from 'react-scroll'
import './Arrow.css'

function Arrow() {
    return (
        <Link to="recipe" smooth={true} duration={1000}>
        <div class="spinner scroll-down"> <a class="animate"></a> </div> </Link>
    )
}

export default Arrow
