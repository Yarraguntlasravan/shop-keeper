import React, { useEffect, useState } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Navbar from './Nav';
import Navbar from './Components/Navbar';

import "./Style.css"
// import Footer from './Footer';

let App = () => {
    let [api, setApi] = useState([]);
    let [search, searchTerm] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setApi(data))
            .then(err => console.log("Failed to fetch", err));
    }, []);

    let change = (e) => {
        searchTerm(e.target.value.toLowerCase());
    };

    let[x,y]=useState(0);
    let add=()=>{
        y(x+1);
    }
    let redo=()=>{
        y(x-1);
    }

    return (
        <>
        <Navbar/>
            <div className='home-main'>
                <div class="scrolling-container">
                    <div class="scrolling-text">
                        <span> 😊 Flat 50% off on all products! | Buy 1 Get 1 Free on select items! | Free shipping on orders over $50! 😊</span>
                    </div>    </div>
                    <img id="buy-more" src="https://m.media-amazon.com/images/G/31/img21/MA2024/AUGART24/SD/Headers/PC/BXGY-logo.CB566468967.gif" alt="" />

                </div>
                <h2></h2> 
                <div id='sear'>
                <input type="search" onChange={change} style={{display:"inline-block"}} className='search-item' placeholder="Search for products..." />
                <button  onClick={change} id='search-btn' style={{width:"400px", position: "relative", top:"20px", backgroundColor:"#29aab9"}}>Search</button>
                </div>

                <div className='cards-container'>
                    {
                        api.filter(x => x.title.toLowerCase().includes(search))
                            .map(data => {
                                return (
                                    <>
                                    
                                    <div className='card' key={data.id}>
                                        <img src={data.image} alt={data.title} className='images' />
                                        <h3>{data.title}</h3>
                                        <p>Rating: {data.rating.rate}</p>
                                        <p>Price: ${data.price}</p>
                                        <button className='btn1' style={{backgroundColor: ""}}>Buy Now</button>
                                        <button className='btn1' onClick={add}>Add Cart ({x})</button>
                                    </div>
                                    

                                    </>
                                    
                                );
                     })
                    }
                </div>   
        {/* <Footer/> */}
        </>
    );
};

export default App;