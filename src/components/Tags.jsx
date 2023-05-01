import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Tags = ({ posts, searchParams, setSelectedCategory, selectedCategory, setSearchParams, setFilteredData }) => {
  const navigate = useNavigate();
  const selectedTag = (e) => {
    setSelectedCategory(e.target.innerText)
    setSearchParams({ category: e.target.innerText });
    navigate(`/?category=${e.target.innerText}`)
  }

  const tagDataArray = ["Photos", "Programming", "Beauty", "Blog", "Tech", "Trend", "World", "Creative", "Nature"]

  return (
    <div className="tag-container">
      <div className="tag-header">
        <h2 className='recent-post-title'>Tags</h2>
      </div>

      <div className="all-tags">
        {tagDataArray.map((item) => (
        <button className='tag' onClick={(e) => selectedTag(e)}>{item}</button>
        ))}
      </div>
    </div>
  )
}

export default Tags