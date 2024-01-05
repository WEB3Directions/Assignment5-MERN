import React from 'react'
import { Link } from 'react-router-dom'
// import Router from './Router'
import "./App.css";
import Cards3 from './components/Cards3';
import Fifth_Container from './Fifth_Container';
import TableWithBorders from './TableWithBorder';



const Second_chair = () => {
  return (
    <div>
       <div style={{ background: "url(https://media.istockphoto.com/id/1387999856/photo/abstract-white-background-with-connected-dots-and-lines-medical-background-background-for.jpg?s=2048x2048&w=is&k=20&c=q_Pbb0MAy9KSvmLgXqsYK7DSVXeDOa1FdQDF_pOBk7Q=", width: "100%", height: "50vh" }}>

<div className="NavContainer2">
  <img src="./logox.pg.png" width="40" />

  <h1>Daxone</h1>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

  <div className='button2' >

    <button className='button2'>Home</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button className='button2'>Shop</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button className='button2'>Mens</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button className='button2'>Pages</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button className='button2'>Blog</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button className='button2'>Contact</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

    &#x1F50E;&#xFE0E;


  </div>


</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<div className="ChairContainer">


  <h1>Product Detail Page</h1>
</div>
<div className="ChairContainer">
  <p> Home / Product Detail</p>
</div>

</div>

<br />
<br />
<br />
<br />
<br />

<div className="second_path_chairs">


<Link to="/First_chair"><Cards3 title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg" /></Link>
<div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div> 
<h1> <p style={{fontSize:"5"}}></p>Life Style <br/><br/><br/><h2> LaaVista Depro, FX 829 v1 <br/><br/><br/></h2> <img src="./stars.JPG"></img>  <p style={{fontSize:"5"}}> <br/>Size: </p><p  style={{fontSize:"5"}}> S &nbsp;  M &nbsp;  XL &nbsp;  XXL</p><button className='button1'> SHOP NOW</button> <br/><br/><h1>$200.00 &nbsp; &nbsp; <s style={{fontSize:"2"}}>$230.00</s></h1></h1>


</div>
<div>

<TableWithBorders/>

</div>
<div>

<Fifth_Container/>
</div>

    </div>
  )
}

export default Second_chair
