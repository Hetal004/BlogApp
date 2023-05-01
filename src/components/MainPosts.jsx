import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const MainPosts = ({ posts, setPosts, selectedCategory, searchParams }) => {
  const navigate = useNavigate();
  const getData = () => {
    fetch('mainposts.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setPosts(myJson)
      });
  }

  const ReadMoreLess = ({ limit, children }) => {
    const text = children;
    const [isReadMoreShown, setReadMoreShown] = useState(false);
    const toggleBtn = () => {
      setReadMoreShown(prevState => !prevState)
    }

    return (
      <>
        <p>
          {isReadMoreShown ? text : text.slice(0, limit) + "..."}
        </p>
        <button className='button' onClick={toggleBtn}> {isReadMoreShown ? 'Read less' : 'Read more'}</button>
      </>
    )
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='main-blogs'>
      {posts.filter(selectedCategory? ((item) => item.category === selectedCategory) : ((item) => item.category)).map((item) => (
        <div className="blog">
          <img className='img1' src={item.img_src} alt="Blog_Img" />
          <div className="blog-data">
            <h2>{item.title}</h2>
            <p>{item.subtitle}, <span className='span-date'>{item.date}</span></p>
            <ReadMoreLess limit={253}>
              {item.desc}
            </ReadMoreLess>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainPosts