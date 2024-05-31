import CategorySelector from "@/components/home/categories";
import ListPosts from '../components/home/tweet'


const Community = () => {
  return (
    <div>
      <h1>Community</h1>
      <CategorySelector />
      <ListPosts />
    </div>
  );
};

export default Community;