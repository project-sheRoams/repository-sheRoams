//import React from 'react';
import posts from '../../../posts.json';
//import Tweet  from '../home/tweet.child';

// export default function ListPosts() {
//   return (
//     <div className="comments">
//       {posts.map((post) => (
//         <Tweet key={post.id}>
//           <img src={`/images/${posts.imageName}`} alt={posts.title} />
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <p>{post.date}</p>
//         </Tweet>

        
//       ))}
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../pages/data/usersData';
//import Post from './Post';

export default function ListPosts() {

const PostList = () => {
const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts?.map((post) => (
        //  <Post key={post._id} post={post} />
        <h1>{post.title}</h1>
        ))
      ) : (
        <p>Loading posts...</p> 
      )}
    </div>
  );
}};

