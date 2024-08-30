import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Start = () => {
    return (
        <body>
            <div>
            <nav className="navcls" >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAACUCAMAAACqYkXNAAAAaVBMVEX39/dBQUMrKy6WlpdycnM2Njjm5ub7+/n6+vr////Q0NAhISRKSkvBwcE7Oz0+PkCmpqbw8PDf399mZmcwMDNWVlexsbHZ2dm6urrKysp8fH1cXF2fn5+Ojo5sbG1QUFIUFBgAAAAYFh4W1GKNAAAEmElEQVR4nO2a6ZKrNhCFBVjQAiOx2YANJsn7P2QQmzcwys3cGaVyvvk1robSUQupFzEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/2fopwfwndCH/375NZZBmuch9v/rn9/NrBayA1Hql/U58Z5pznWZpewujVia1efG2yO0dTIEyyovV27kvhHx0yUJUzENPasux2jF7JVE/KyiDUiUXi4L6awjC95dYjaMPW1drjbsnjhb6VWReh3nHwcui+OlHBwbXrdm5Al1ts+rxER54/vDV7x3VL9pifBo4lUbpTKK1WePLqOPWm0vaiNzC6VSpR5cqqTkT8hHF0YXRgETjeu8WK1gn1QRy0mpcpTrHq+3wxP5qXDvXnRbfezS1c0Pe8S2bUsicxafurKtwsx/Jivr5hotNjLRUsPq1eyd9KelvXGbXcZdz9eBkCAKZnRUJARLq86dpXZDaEAi6HeoYJP+LZYFhiSSSani11KrHH59MdKhkldMWotLOqkIdt/+O4b8qwTZdEgqfkk/bSMkzlPgoLh1H6ERwVkuvtrZMHv/q9n0ewb3pZB/Gdcv7/aU9sbzGpYfA3lLXU5z4BOF+4cg+fk0Lzdb9XyAqnFjdT2TsdN5cmvRMqEh8Yze1qydhHaQqo6ZSWRDWT5/2UcvDtfJUivlUnrgo5fMNhpq5jNYutEGrnNLytQ6seSfBjfxymxolO3nb0px12lr275m8h29K6nOtDYi4mJP6uDzwmmYXcE++YOTZG70qeoHqPrDqALRRyS+VVrJH5wkb5nxcgtq193TOTDEj/YwSVV99Gv6SCCYd1R9ErvFonVM92xhWsDm3yqxPtcRfnLJT91xlT5ln7NfZVOsPG1Lxjsw89MxgWN+WMerVEl7KiyMlefDxk3MTn1RTUVD9honPZCWzZjsq8J8C/jtLCGE4RYivKhrptL31gNB/1eNkXWU2CO1DwzHfUmWRoFhPzNKHttwZ2GSaMbI5GDRebOE+62RdSx1ra34s9nxFpWnITQ5WuTVJYlzTZK4abk7fG/DJnYb3WqT1CU1Py3dp01EMkaF/Lb3Zc9Siy8b6BfwWHDZGb+Ip+I33+s70ZwW2ORV8zLavTLOc39PqjgPkyKvVkl9KY7qNsXKBYH+2G2mnEY5lWBvNtPbdL2UAjH16orWJqn6s3ooeWcpBU8l77HmzdL4Gk3RLR87GURr9e7h6bQ+jdMS1VZJNWhkhHWSL40Mfu2TM2KbbYysjC9Ti0d2eyv9u7m3p3Qst9ae4vf2lFQ62BDxZnMq74o5e3ebn5b2xk7T8fE2AOf6/CW/K7Y6jfdp47lFIfCMcSu5UDp4IHYxMJdObFFYOGF6QUDygy6iEGsNlHIblWpMrn3wU9KfvEGQNvtKZXGt7VR6v8yzXiNTsuBXb0hV+0nZMLpb8+LUmhbmfoLtK1pRJPO2yoaggbLDX58vZkWRc0hKm8pKK2xevItLP517zOf28207fU0vtVzowMo1yeerk5+7/sNdTCtbNpv8i7H+p3QCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Of8DWerSJjV9KhiAAAAAElFTkSuQmCC" className="logo"></img>
          <div className="navdiv1">
          <Link to="/home" className="linkcls" >Home </Link>
          <Link to="/journel"  className="linkcls" >Journel </Link>
          <Link to="/start"  className="linkcls" >Start-ups </Link>
          <Link to="/ipr"  className="linkcls" >IPr management</Link>
          <Link to="/feed" className="linkcls">Feedback</Link>
          </div>
          <div className="navdiv2">
            <Link to="/profile"  className="linkcls">Profile </Link>
          </div>
        </nav>
         
            <div className="coldiv">
            <div>
              
              <Link to="/chat" className="colbut" ><li>Collabration</li></Link>
              <br/>
              <Link to="/progress" className="colbut"><li>TO_DO'S</li></Link>
              <br/>
              <Link to="invest" className="colbut"><li>Investors</li></Link>
              <br/>
              <Link  to="/ideas" className="colbut"><li>Ideas</li></Link>
             
              </div>
              <div>
    
              <div style={{width:"400px",height:"300px",marginRight:"20px",marginLeft:"10%",marginTop:"100px"}}>
                 <img src={"https://tse4.mm.bing.net/th?id=OIP.efTRBDWBElYUiW4npemuUgHaE3&pid=Api&P=0&h=180" } className='image'></img>
              <br></br><br></br>
              
                    <h5 style={{color:"black",fontSize:"20px",marginTop:"10px",marginLeft:"55px"}}>Startups aim to build on ideas very quickly. <br></br>They often do this through a process called iteration in which they continuously improve products through feedback and usage data.</h5>
                    </div>   
              </div>
                  
            
                  

</div>
</div>
        </body>
      )
}

export default Start