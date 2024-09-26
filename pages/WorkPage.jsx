import React from 'react'

const WorkPage = () => {
  return (
   
    <>
    <style jsx="true">

        {`
 
body{
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    background: rgba( 71, 147, 227, 1);
}
h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
}

/* Table Styles */

.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    width:85%
}

.fl-table {
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 80%;
    max-width: 90%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 15px;
}
tr{
            height:50px
    }
.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 13px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 18px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}

        `}
    </style>
    <h2>Click Resume For More info </h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Institution</th>
            <th>Period</th>
            <th>Position</th>
            <th>Main Task</th>
            
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Warp Driver Logistics LLC |3415 Northridge Drive North</td>
            <td>October 2023 - Now</td>
            <td>Amazon Delivery Driver Associate</td>
            <td> Ensures that products are delivered on time and in the proper condition</td>
           
        </tr>
        <tr>
            <td>Rusororo Institute /APAER-RWanda</td>
            <td>January 2011-April 2023</td>
            <td>Information Technology System Manager Full Time</td>
            <td>Develop the school information management system<br/>
             Database development and implementation for the entire IT infrastructure</td>
          
            
        </tr>
        <tr>
            <td>APPROACH PEOPLE COMPANY LTD | KIGALI - RWANDA</td>
            <td>January 2012 - April 2023</td>
            <td>Information Technology Manager Party Time</td>
            <td> Manage IT initiatives and collaborate with in-house technical staff
            <br/>Design IT systems and networks ensuring the right architecture and functionality </td>
            
        </tr>
        <tr>
            <td>Gishari Integrated Polytechnic | RWAMAGANA - R</td>
            <td>Jan 2011 - Sept 2013</td>
            <td>Information Technology Consultant</td>
            <td>Manage IT initiatives and collaborate with in-house technical staff
            <br/>Design IT systems and networks ensuring the right architecture and functionality</td>
           
        </tr>
        <tr>
            <td>Jun - Sept 2009</td>
            <td>National Electoral Commission (NEC)| Rwanda</td>
            <td>Data Entry Clerk</td>
            <td>Entering data and retyping identification of ID Card and Election Card
            <br/>Transfer data from paper formats into database systems using keyboards</td>
          
        </tr>
      
        </tbody>
    </table>
</div>


    
    </>

  )
}

export default WorkPage