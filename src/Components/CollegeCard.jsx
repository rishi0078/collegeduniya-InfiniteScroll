import React from 'react'
import "./CollegeCard.css"
function CollegeCard({
    image,
    name,
    tags,
    nearest_place,
    offertext,
    feecycle,
    original_fees,
    rating,
    amenties}) 

{
    return (
        <div className="college_card">
        
         <img className="college_image" src={image} />
           <div className="college_info">

           <div className="college_text_left">
           <h4 className="collegeName_text">{name}</h4>
           <div className="rating">
           {Array(rating)
              .fill()
              .map((_)=>(
                  <p>⭐</p>
              ))

              }
           </div>

           <p>{nearest_place}</p>
           <div className="discount">
             <p>{offertext}</p>
           </div>
           </div>

           <div className="college_text_right">
            <h5> ₹{original_fees}</h5>
            <p>{feecycle}</p>
            <p className="amenties">{amenties}</p>
           </div>
               
           </div>
         
           
            

        </div>
    )
}

export default CollegeCard
