import Comment from "./Comment";
import '../../styles/comments.css'

function CommentsList({comments}) {
  return (
    <div className="comments">
      {
      comments?.map(comment=>(
        <Comment key={comment.id} comment={comment}/>
      ))
    }
    </div>
  );
}

export default CommentsList;