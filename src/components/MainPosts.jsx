import React, { useState, useEffect } from 'react';

const MainPosts = ({posts, setPosts}) => {
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
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setPosts(myJson)
        // console.log(data[0])
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
    <>
      {posts && posts.length > 0 && posts.map((item) => {
        return (
          <div className='main-blogs'>
            <div className="blog">
              <img className='img1' src={item.img_src} alt="Blog1_Img1" />
              <div className="blog-data">
                <h2>{item.title}</h2>
                <p>{item.subtitle}, <span className='span-date'>{item.date}</span></p>
                <ReadMoreLess limit={253}>
                  {item.desc}
                </ReadMoreLess>
              </div>
            </div>
          </div>
        )
      })
      }
    </>
  );
}

export default MainPosts