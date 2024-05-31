import React from 'react';
import posts from '../../../posts.json';
import Tweet  from '../home/tweet.child';

export default function ListPosts() {
  return (
    <div className="comments">
      {posts.map((post) => (
        <Tweet key={post.id}>
          <img src={`/images/${posts.imageName}`} alt={posts.title} />
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </Tweet>

        
      ))}
    </div>
  );
}

// // ENDPOINT:

// export default async function handler(req, res) {
//   const db = await connectDB();

//   // GET para buscar todos os posts
//   if (req.method === 'GET') {
//     const posts = await getAllPosts(db);
//     res.status(200).json(posts);
//   }
// }



// import React, { useState, useEffect } from 'react';
// import { getAllPosts } from '../utils/db';
// import Post from './Post';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const postsData = await getAllPosts();
//       setPosts(postsData);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div className="post-list">
//       {posts.map((post) => (
//         <Post key={post._id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default PostList;
