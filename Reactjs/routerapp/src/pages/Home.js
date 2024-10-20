import c1 from './images/c1.jpeg';
import c2 from './images/c2.jpeg';
import c3 from './images/c3.jpeg';
import j1 from './images/j1.jpeg';
import j2 from './images/j2.jpeg';
import j3 from './images/j3.jpeg';
const Home=()=>{
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src={c1} class="d-block" alt="..."/>
   </div>
   <div class="carousel-item">
     <img src={c2} class="d-block " alt="..."/>
   </div>
   <div class="carousel-item">
     <img src={c3} class="d-block " alt="..."/>
   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
<br></br>
<br></br>
<hr></hr>
<center><h3>Products</h3></center>
<div className='container'>
  <div className='row'>
     <div className='col-md-4'>
     <div class="card" style={{width:400}}>
    <img class="card-img-top" src={j1} alt="Card image"/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>

     </div>
     <div className='col-md-4'>
     <div className='col-md-4'>
     <div class="card" style={{width:400}}>
    <img class="card-img-top" src={j2} alt="Card image"/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
     </div>
     </div>
     <div className='col-md-4'>
     <div className='col-md-4'>
     <div class="card" style={{width:400}}>
    <img class="card-img-top" src={j3} alt="Card image"/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
     </div>
     </div>
  </div>
</div>


       </>

    )
};
export default Home;