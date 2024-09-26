import React from 'react'

const Footer = () => {
  return (
    
    <div className='footer'>
      <style jsx='true'> 
        {`
        .social{
        font-size:15px;

        }
        li{
        display:inline;
        padding:5px;
        
        border-bottom:3px solid rgba( 71, 147, 227, 1);
        border-radius:5px;
        margin-left:5px;
       
        }
        a{
        color:white;
        font-size:15px;
        text-decoration:none;
        }
        
        
        `}
      </style>
      <div className='social'>
      Follow @:
      <ul>
        <li><a href="https://github.com/jahdona/">Gitub Repo</a></li>
        <li><a href="mailto:jahdonah@yahoo.com">Mail me at Jahdonah@yahoo.com</a></li>
        <li><a href="https://www.facebook.com/jeandedieu.habiyaremye.71/">Facebook Profile</a></li>
        <li><a href="https://www.linkedin.com/in/jahdonah/">Linkedin Profile</a></li>
      </ul>
    
    <a href=""></a>
      </div>
      <div style={{marginRight:"50px"}}>Designed and Developed by Jean de Dieu Habiyaremye &copy; 2024</div>
    
    </div>
  )
}

export default Footer