import './App.css';
import './styles/component.css'

import MainPosts from './components/MainPosts';
import MonoPost from './components/MonoPost';
import RecentPost from './components/RecentPost';
import Tags from './components/Tags';

function App() {
  return (
    <>
      <div className='App-header'>
        <h2 className='App-title'>MY BLOG</h2>
        <p>Welcome to the blog of <span className='bloger-name'>HETAL</span></p>
      </div>

      <section className='blog-container'>
        <div className='main-section'>
          <MainPosts />
        </div>

        <aside>
          <div className='side-section'>
            <MonoPost />
            <RecentPost />
            <Tags />
          </div>
        </aside>
      </section>

    </>
  );
}

export default App;