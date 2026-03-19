import { useState } from 'react';
import { createPost } from '../api/posts';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content, image });
    onPostCreated();
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div>
      <h2>Criar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Mensagem"
        ></textarea>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Criar Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
