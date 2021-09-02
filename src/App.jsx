import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slideshow from './Slideshow';
// let dat = [];
function App() {

    const [data, changedata] = useState([]);

    useEffect(() => {

        async function gd() {
            const response = await axios.get("https://testimonialapi.toolcarton.com/api");
            console.log(response.data);
            changedata(response.data);
        }

        gd();

    }, [])


    return (


        <>

            {/* 
            {
                data.map((ele) => {
                    return <h1>{ele.name}</h1>
                })
            } */}




            <Slideshow />























        </>
    )
}

export default App;