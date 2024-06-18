import React,{useState} from 'react'

export default function ({id, image, price, city,description, removeTourHandler}) {
    const [readmore,setReadmore] = useState(false);
    const discription = readmore ? description : `${description.substring(0,50)}....` 
    function  readmoreHandler(){
        setReadmore(!readmore);
    }
    
    return (
    <div className='card'>  
      <img src={image} className='image' />
      <div>
       <div className='tour-details'>
          <h4 className='tour-price'>{price}</h4>
          <h4 className='tour-name'>{city}</h4>
       </div>
       <div className='tour-description'>
             {discription}
             <span className='read-more' onClick={readmoreHandler}>
                {readmore ? 'Show Less': 'Read More'}
             </span>
       </div>
      </div>
     
      <button className='btn-red' onClick={()=>removeTourHandler(id)}>
         Not Interested
      </button>
    </div>
  )
}
