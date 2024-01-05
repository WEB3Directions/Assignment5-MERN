import React from 'react';

const TableWithBorders = () => {
  return (

    <div className="ChairContainer"> 

   
   
    

    <table style={{ borderCollapse: 'collapse', width: '50%' }}>
      <thead>
      <br/>
    <br/>
    <br/>
    <br/>
    <p> Specification</p>
        <tr>
            
          <th style={cellStyle}>Name / Model</th>
          <th style={cellStyle}>LaaVista Depro, FX 829 v1 <br/>  <br/></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>Type</td>
          <td style={cellStyle}>Categories<br/>  <br/></td>
          
        </tr>
        <tr>
          <td style={cellStyle}>Models</td>
          <td style={cellStyle}>FX 829 v1<br/>  <br/></td>
         
        </tr>
        <tr>
          <td style={cellStyle}>Categories</td>
          <td style={cellStyle}>Product Type<br/>  <br/></td>
         
        </tr>
        <tr>
          <td style={cellStyle}>Size</td>
          <td style={cellStyle}>60 x 40<br/>  <br/></td>
         
        </tr>
        <tr>
          <td style={cellStyle}>Display Port</td>
          <td style={cellStyle}>Multi <br/>  <br/></td>
         
        </tr>
        <tr>
          <td style={cellStyle}>Media</td>
          <td style={cellStyle}>Brightside<br/>  <br/></td>
         
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
    </div>
  );
};

const cellStyle = {
  border: '1px solid #ddd', // Border style
  padding: '8px', // Cell padding
  textAlign: 'left', // Cell text alignment
};

export default TableWithBorders;