import React,{useState,useEffect} from 'react';

const MainPosts = () => {
    const [data,setData]=useState([]);
    const getData= ()=>{
      fetch('mainposts.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
          console.log(data[0])
        });
    }
    useEffect(()=>{
      getData()
    },[])
    return (
      <>
       {data && data.length>0 && 
       <div className='main-blogs'>
        <div className="blog">
            <img className='img1' src="https://images.unsplash.com/photo-1679199691622-d98bc7d01904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Blog1_Img1" />
            <div className="blog-data">
            <h2>{data[0].title}</h2>
            <p>{data[0].subtitle}, <span className='span-date'>{data[0].date}</span></p>
            <p>{data[0].desc}</p>
            <button className='button'>Read more</button>
            </div>
        </div>
        <div className="blog">
            <img className='img1' src="https://images.unsplash.com/photo-1679199691622-d98bc7d01904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Blog1_Img1" />
            <div className="blog-data">
            <h2>{data[1].title}</h2>
            <p>{data[1].subtitle}, <span className='span-date'>{data[1].date}</span></p>
            <p>{data[1].desc}</p>
            <button className='button'>Read more</button>
            </div>
        </div>
        <div className="blog">
            <img className='img1' src="https://images.unsplash.com/photo-1679199691622-d98bc7d01904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Blog1_Img1" />
            <div className="blog-data">
            <h2>{data[2].title}</h2>
            <p>{data[2].subtitle}, <span className='span-date'>{data[2].date}</span></p>
            <p>{data[2].desc}</p>
            <button className='button'>Read more</button>
            </div>
        </div>
       </div>
       }
      </>
    );
}

export default MainPosts