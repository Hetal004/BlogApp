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
          <div className="recent-post-data">
            <h4>{recentData[0].title}</h4>
            <p>{recentData[0].desc}</p>
            <hr />
            <h4>{recentData[1].title}</h4>
            <p>{recentData[1].desc}</p>
            <hr />
            <h4>{recentData[2].title}</h4>
            <p>{recentData[2].desc}</p>
            <hr />
            <h4>{recentData[3].title}</h4>
            <p>{recentData[3].desc}</p>
          </div>
        </div>
      }
    </>
  )
}

export default RecentPost