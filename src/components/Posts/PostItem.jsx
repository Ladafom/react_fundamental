import '../../styles/post.css'
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

function PostItem({post, remove}) {

  const navigate = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <h3>{post.id}. {post.title} </h3>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={()=>navigate(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={()=>remove(post)}>Удалить</MyButton>
      </div>
  </div>
  );
}

export default PostItem;