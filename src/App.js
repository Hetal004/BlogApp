import './App.css';
import './styles/component.css'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainPosts from './components/MainPosts';
import MonoPost from './components/MonoPost';
import RecentPost from './components/RecentPost';
import Tags from './components/Tags';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState();
  const [posts, setPosts] = useState([]);
  
  return (
    <>
      <div className='App-header'>
        <h2 className='App-title'>MY BLOG</h2>
        <p>Welcome to the blog of <span className='bloger-name'>HETAL</span></p>
        {!selectedCategory? <h3>All Blogs</h3> : <h3>Blog with {selectedCategory} Category</h3>}
      </div> 

      <section className='blog-container'>
        <div className='main-section'>
          <MainPosts posts={posts} setPosts={setPosts} selectedCategory={selectedCategory} />
        </div>

        <aside>
          <div className='side-section'>
            <MonoPost />
            <RecentPost />
            <Tags setSelectedCategory={setSelectedCategory} setSearchParams={setSearchParams}/>
          </div>
        </aside>
      </section>
    </>
  );
}
export default App;