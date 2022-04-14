// import React from 'react';
// import './Postview.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header.js';
import Post from './components/Post.js';
import './index.css';



const Postview=()=> {
  const [posts, setPosts] = useState([]);
  const setPostsAsync = async () => {
    const details = await fetch("http://localhost:3004/user"),
      data = await details.json();
    setPosts(data)
  };
  useEffect(() => {
    setPostsAsync()
  }, []);

  return (
    <div className="site-container">
     <Header />
      <div className='postview'>
        {posts.map((post, index) =>
          <Post key={index} config={post} />
        )}
      </div>
    </div>

  );
}

export default Postview;
