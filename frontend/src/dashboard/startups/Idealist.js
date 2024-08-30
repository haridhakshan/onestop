import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Idealist = (props) => {
    const ideas=props.ideas;
    console.log(props,ideas);
  return (
    <div className='Journels'>
        {ideas.map((ideas) =>(
           <div key={ideas.id} className='state'>
            <Link to={`/way/${ideas.id}`} className="Link">
            <h1>{ideas.Title}</h1>
            <p>{ideas.Name}</p>
            </Link>
           </div>
        ))}
        <div className='state1'>
          <br/>
        <button className='state1'><Link to="/addideas" className="Link">Add ideas</Link></button>
    </div>
    </div>
  )
}

export default Idealist