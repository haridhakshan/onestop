import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Journleslist = (props) => {
  
     const journels=props.journels;
    console.log(props,journels);
  return (
    <div className='Journels'>
        {journels.map((journel) =>(
           <div key={journel.id} className='state'>
            <Link to={`/path/${journel.id}`} className="Link">
            <h1>{journel.title}</h1>
            <p>{journel.name}</p>
            </Link>
           </div>
        ))}
        <div className='state1'>
          <br></br>
        <button className='state1'><Link to="/addjournel" className="Link">Add Journel</Link></button>
    </div>
    </div>
  )
}

export default Journleslist