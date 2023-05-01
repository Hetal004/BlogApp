import React, { useState, useEffect } from 'react';

const RecentPost = () => {
  const [recentData, setRecentData] = useState([]);
  const getRecentPostData = () => {
    fetch('recentposts.json',
      {
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
        setRecentData(myJson)
      });
  }
  useEffect(() => {
    getRecentPostData()
  }, [])
  return (
    <>
      {recentData && recentData.length > 0 &&
        <div className="recent-posts">
          <div className="post-header">
            <h2 className='recent-post-title'>Recent Posts</h2>
          </div>
          {recentData.map((item) => (
            <div className="recent-post-data">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <hr />
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default RecentPost