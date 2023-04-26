import React,{useState,useEffect} from 'react';

const MonoPost = () => {
  const [monoData, setMonoData] = useState([]);
    const getSinglePostData = ()=>{
      fetch('monopost.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setMonoData(myJson)
        });
    }
    useEffect(()=>{
      getSinglePostData()
    },[])
  return (
    <div className="mono-blog">
      <img className='mono-blog-img' src="https://images.unsplash.com/photo-1672625603114-441290cf121f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="MonoBlog_Img" />
      <div className="blog-data">
        <h2>{monoData.title}</h2>
        <p>{monoData.desc}</p>
      </div>
    </div>
  )
}

export default MonoPost