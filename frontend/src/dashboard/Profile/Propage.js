import React from 'react'
const Propage = (Props) => {
  return (
    <div>
        <div className='div1Profile'></div>
        <img src='human.jpeg' className='imgpro'></img>
        <div className='ditpro'>
            <div style={{display:"flex",marginLeft:"-50px",}}>
            <h4 className='det'>UserName</h4>
            <div className='detbox'>{Props.name}</div>
            </div>
            <div style={{display:"flex",marginLeft:"-50px"}}>
            <h4 className='det'>Gmail</h4>
            <div className='detbox'></div>
            </div>
            <div style={{display:"flex",marginLeft:"-50px"}}>
            <h4 className='det'>Password</h4>
            <div className='detbox'></div>
            </div>
            <div style={{display:"flex",marginLeft:"-50px"}}>
            <h4 className='det'>DateOfBirth</h4>
            <div className='detbox'></div>
            </div>
            <div style={{display:"flex",marginLeft:"-50px"}}>
            <h4 className='det'>RoleOfUser</h4>
            <div className='detbox'></div>
            </div>
            
        </div>
    </div>
  )
}

export default Propage