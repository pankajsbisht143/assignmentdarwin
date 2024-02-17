import React from 'react'

const Badges = ({userHist,setClickBadge,setShowmodel}) => {
  
  return (
    <div className=' grid grid-cols-3 gap-1  overflow-y-scroll h-[180px] '>

    {
        userHist?.badgesData?.map((elem)=>
        <img src={elem.imageUrl}  width="60%" className='m-auto cursor-pointer' onClick={()=> {
            
            setClickBadge(elem)
            setShowmodel(true)
        }}/>
        )
    }
      
    </div>
  )
}

export default Badges
