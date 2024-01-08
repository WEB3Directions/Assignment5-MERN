import React, { useState } from 'react'
import "./App.css";
import Cards3 from './components/Cards3.js';
import TableWithBorders from './components/TableWithBorder.js';
import Fifth_Container from './components/Fifth_Container.js';
import Cards2 from './components/Cards2.js';
import Cards from './components/card.js';
import Chair_container from './components/Chair_container.js';
import Second_container from './components/Second_container.js';
import Third_Container from './components/Third_Container.js';
import Fourth_Container from './components/Fourth_Container.js';






const product_arr = [
  {

    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg",


  },
  {

    image:
      "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg",

  },
  {

    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg",

  },
  {

    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg",
  },
  {

    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-5.jpg",

  },
  {

    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg",

  },
  {

    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-7.jpg",

  },
  {

    image: "https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-8.jpg",

  },

];



function App() {

  const [current_data, setCurrent_data] = useState(null);

  const show_details_handle = (data) => {
    setCurrent_data(data);
  };

  const go_back_handle = () => {
    setCurrent_data(null);
  };


  return (

    <div >

      {current_data ? (

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




            <Cards3 go_back_handle={go_back_handle} title="Chair" desc="Golden Easy Spot Chair" imgSrc={current_data.imgSrc} />
            <div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
            <h1> <p style={{ fontSize: "5" }}></p>Life Style <br /><br /><br /><h2> LaaVista Depro, FX 829 v1 <br /><br /><br /></h2> <img src="./stars.JPG"></img>  <p style={{ fontSize: "5" }}> <br />Size: </p><p style={{ fontSize: "5" }}> S &nbsp;  M &nbsp;  XL &nbsp;  XXL</p><button className='button1'> SHOP NOW</button> <br /><br /><h1>$1000.00 &nbsp; &nbsp; <s style={{ fontSize: "2" }}>$1050</s></h1></h1>


          </div>
          <div>

            <TableWithBorders />

          </div>
          <div>

            <Fifth_Container />
          </div>

        </div>

      ) : (

        <div >
          <Chair_container />
          <Second_container />
          <Third_Container />
          <br /> <br />
          <div>
            {product_arr.map((current_object, index) => {
              return (
                <Cards
                  key={index}
                  click_handle={show_details_handle}
                  title="Chair" desc="Golden Easy Spot Chair" imgSrc={current_object.image} price="$250.00" />
              )
            })}

          </div>
          <br /> <br /> <br />
          <Cards2 imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/banner/banner-1.jpg" />
          <Fourth_Container />


          <div>
            {product_arr.map((current_object, index) => {
              return (
                <Cards
                  key={index}
                  click_handle={show_details_handle}
                  title="Chair" desc="Golden Easy Spot Chair" imgSrc={current_object.image} price="$250.00" />



              )
            })}

            <br /> <br /> <br />

          </div>

          <Fifth_Container />

        </div>


      )}


    </div>

  )

};

export default App;




