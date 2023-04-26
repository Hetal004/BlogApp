import './App.css';
import './styles/component.css'
import { useState, useSearchParams } from 'react';

import MainPosts from './components/MainPosts';
import MonoPost from './components/MonoPost';
import RecentPost from './components/RecentPost';
import Tags from './components/Tags';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  return (
    <>
      <div className='App-header'>
        <h2 className='App-title'>MY BLOG</h2>
        <p>Welcome to the blog of <span className='bloger-name'>HETAL</span></p>
      </div>

      <section className='blog-container'>
        <div className='main-section'>
          <MainPosts posts={posts} setPosts={setPosts}/>
        </div>

        <aside>
          <div className='side-section'>
            <MonoPost />
            <RecentPost />
            <Tags posts={posts} setPosts={setPosts} searchParams={searchParams} setSearchParams={setSearchParams}/>
          </div>
        </aside>
      </section>

    </>
  );
}

export default App;