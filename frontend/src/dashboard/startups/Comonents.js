import React from 'react'

const Comonents = () => {
  return (
    <div>
         const {data: journels , isPending ,error} = Reuse("http://localhost:8000/Journels")
   
   return (
     <div>
      {error && <div>{error}</div>}
       {isPending && <div>Loading...</div>}
      {journels && <Journleslist journels={journels} />}
     </div>
   )
  }
   
export default Comonents