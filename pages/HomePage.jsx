import React from 'react'

const HomePage = () => {
  return (
    <>
      <style jsx='true'>
{`body{
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    background: rgba( 71, 147, 227, 1);
}
    #about{
    background-color:white;
    }
`}
  </style>
    <section className="About-Me" id="About-Me">
           
            <div className="About-me-content" id='about'>
                <p> I am a male Rwandese living in United States of America in Big Rapids
                    Michigan. I am currently under a K1 Visa (Fiance Visa) waiting for Permanent residence.
                    I completed my undergraduate degree in Bachelor of Science 
                    in Computer Science, National University of Rwanda. I worked as IT Manager 
                    at RUSORORO INSTITUTE / APAER which among other responsibilities involves 
                    maintaining high quality data systems and efficient operation of the entire
                    IT infrastructure in the organization.
                </p>
                <br/>
                <p>
                    My background in ICT is extensive more particularly in Networking, Programming, 
                    Web Design using and managing computer networks, hardware, software, databases 
                    and web based applications. I have gained good experience in working with, troubleshooting 
                    and managing TCP/IP based computer networks in a client-server environment. I have also 
                    developed a good understanding of the operation and maintenance of different computer hardware
                    components and software applications. My career experience has also exposed me to attending to 
                    different problems from the users and also advising them on good practices for maintaining 
                    their computer systems. Experience has also given me the opportunity to develop personal 
                    confidence, good teamwork and communication skills. 
                </p>
            </div>
        </section>
    </>
  )
}

export default HomePage