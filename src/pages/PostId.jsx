import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hook/useFetching";
import { getById, getCommentsByPostId } from '../api/PostService'
import Loader from "../components/UI/Loader/Loader";
import '../styles/App.css'
import CommentsList from "../components/Comments/CommentsList";

function PostId() {

  const params = useParams()
  const [post,setPost] = useState(null)
  const [comments,setComments] = useState(null)
  const [fetchPostById,isLoading,error] = useFetching( async()=> {
      const response = await getById(params.postId)
      setPost(response.data)
    }
  )
  const [fetchComments,isComLoading,comError] = useFetching( async()=> {
    const response = await getCommentsByPostId(params.postId)
    setComments(response.data)
  }
)

  useEffect(()=>{
    fetchPostById()
    fetchComments()
  }, [])

  return (
    <div className="App">
        <h1 className="margin-top-bottom">
        Пост {params.postId}:
      </h1>
      { isLoading ?
        <Loader/> :
          <>
            <h3>{post?.title} </h3>
            <div>{post?.body}</div>
          </>
      }
      <h1 className="margin-top-bottom">Комментарии:</h1>
      {
        isComLoading ?
        <Loader/> :
        <CommentsList comments={comments}/>
      }
    </div>
  );
}

export default PostId;