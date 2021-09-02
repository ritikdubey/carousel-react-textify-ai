import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
function Slide(props) {
    return (
        <>

            <SplideSlide>
                <center><img class="pimg" margin-left="auto" src={props.imgsrc} alt="Image 1" /></center>
                <center><h1 class="message">{props.message}</h1></center>
                <center><h1 class="pname">{props.name}</h1></center>
                <center><h1 class="plocation">{props.location}</h1></center>
            </SplideSlide>


        </>
    )
}

export default Slide;