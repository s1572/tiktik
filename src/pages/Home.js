
import React, {useState,useEffect} from 'react';
import Loader from '../pages/Loder.js';


 function Home(){
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=> {
      setIsLoading(true);
      setTimeout (async()=>
      {
        try{
             const jsonData = await fetch("https://jsonplaceholder.typicode.com/todos");
             const data = await jsonData.json();
             setData(data);
             setIsLoading(false);
           }
        catch(err){
            console.log(err);
            throw new Error("Incorrect API Request");
        }   

      },2000);


    },[])
    
  return(
          <div>
             {isLoading && <Loader/>}

          
             
                 {data.map((datum)=>(
                     <h4 key= {datum.id}>
                         {datum.title}</h4>

                 ))}

            
          </div>
  )
}
export default Home;