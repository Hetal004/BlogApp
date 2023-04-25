import React from 'react'

const RecentPost = () => {
  return (
    <div className="recent-posts">
      <div className="post-header">
        <h2 className='recent-post-title'>Recent Posts</h2>
      </div>
      <div className="recent-post-data">
        <h4>Post 1</h4>
        <h4>Post 2</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <hr />
        <h4>Post 3</h4>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <hr />
        <h4>Post 4</h4>
        <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
  )
}

export default RecentPost