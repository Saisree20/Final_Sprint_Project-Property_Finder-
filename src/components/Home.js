import React, { useState, useEffect} from "react" 
import NavBar from "./Nav";
import imgg1 from "./imgg1.jpg";
import imgg2 from "./imgg2.jpg";
import imgg3 from "./imgg3.jpg";
import imgg4 from "./imgg4.jfif";
const Home = () =>{
    return(
        <>
            <NavBar/>
            <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={imgg1} width="500px" height="700px" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={imgg2} width="500px" height="700px" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={imgg3} width="500px" height="700px" alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={imgg4} width="500px" height="700px" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                {/* <img
                    style={{width:"1699px",height:"715px"}}
                    src={img1}
                    /> */}
            </div>
        </>
    )
}


export default Home;
