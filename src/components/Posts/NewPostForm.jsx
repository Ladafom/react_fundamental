import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

function NewPostForm({create}) {

  const [post, setPost] = useState({
    title:'',
    body:'',
  })
  function addNewPost(e){
    e.preventDefault()
    const newPost={
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title:'', body:''})
  }

  return (
    <form action="">
      <MyInput
      type="text"
      placeholder="Название поста"
      value={post.title}
      onChange={e=>setPost({...post, title:e.target.value})}
      />
      <MyInput
      type="text"
      placeholder="Описание поста"
      value={post.body}
      onChange={e=>setPost({...post, body:e.target.value})}
      />
      <MyButton onClick={addNewPost}>
        Создать пост
      </MyButton>
    </form>
  );
}

export default NewPostForm;