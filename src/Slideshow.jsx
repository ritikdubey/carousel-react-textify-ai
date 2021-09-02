import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Slide from './Slide';
// let dat = [];
function Slideshow() {


    const [data, changedata] = useState([]);

    useEffect(() => {

        async function gd() {
            const response = await axios.get("https://testimonialapi.toolcarton.com/api");
            // console.log(response.data);
            changedata(response.data);
        }

        gd();

    }, [])





    return (


        <>


            {/* {
                data.map((ele) => {
                    return <h1>{ele.name}</h1>
                })
            } */}


            <center><h1 style={{ fontSize: "3rem", fontFamily: "Quicksand", fontWeight: "bolder", marginTop: "-10px" }}>Testimonials</h1> </center>

            <Splide>
                {
                    data.map((ele) => {
                        return <Slide imgsrc={ele.avatar} message={ele.message} name={ele.name} location={ele.location} />
                    })
                }
            </Splide>

            {/* <Splide>
                <SplideSlide>
                    <img src="https://picsum.photos/1100/400" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://picsum.photos/1100/400" alt="Image 2" />
                </SplideSlide>
            </Splide> */}





        </>
    )
}

export default Slideshow;