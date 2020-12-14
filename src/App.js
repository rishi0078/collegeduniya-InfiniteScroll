import React,{useState,useEffect} from "react"
import './App.css';
import CollegeCard from "./Components/CollegeCard";
import colleges from "./colleges.json";


function App() {

const[list,setList]=useState(colleges);
console.log(list);
const [data, setData] = useState(null);


const [isBottom, setIsBottom] = useState(false);
console.log(isBottom);


useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  
}, []);

useEffect(() => {
  if (isBottom) {
    
    addItems();
    setIsBottom(false); 
  }
   
}, [isBottom]);

    function handleScroll() {
        const scrollTop = (document.documentElement
        && document.documentElement.scrollTop)
         || document.body.scrollTop;

         const scrollHeight = (document.documentElement
           && document.documentElement.scrollHeight)
             || document.body.scrollHeight;

            if (scrollTop + window.innerHeight + 50 >= scrollHeight){
              
               setIsBottom(true);
               
               
         }

         
       }


       const addItems=()=>{
           
        fetch('./colleges.json')
        .then(response=>response.json())
       
        .then((result)=>{
          
               result=result.colleges.slice(10,50);
               setData(result);
            
        
               
        })
      
             
       }
       
       
       //console.log(data);
                
       
 
 




return (
    <div  id="list" className='App'>
           
    
      
     { 

       list?.colleges.slice(0,10).map(items=>(

         <div className="top_page">
        <CollegeCard 
           className="collegeCard"
           image="https://upload.wikimedia.org/wikipedia/commons/5/54/Hans_Raj_College.jpg"
           name={items.college_name}
           tags={items.tags}
           nearest_place={items.nearest_place}
           offertext={items.offertext}
           amenties={items.amenties}
           feecycle={items.fees_cycle}
           original_fees={items.original_fees}
           rating={items.rating}
           />


         </div>
       ))

          }
      {
       
        data?.map(items=>(

         <div className="bottom_page">

             


         <CollegeCard 
           className="collegeCard"
           image="https://upload.wikimedia.org/wikipedia/commons/5/54/Hans_Raj_College.jpg"
           name={items.college_name}
           tags={items.tags}
           nearest_place={items.nearest_place}
           offertext={items.offertext}
           amenties={items.amenties}
           rating={items.rating}
           feecycle={items.fees_cycle}
           original_fees={items.original_fees}
         />
         </div>
         
       ))
       
     
      }
        
      
      
    </div>
   
  );
};

export default App;
