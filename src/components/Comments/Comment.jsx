import '../../styles/comments.css'

function Comment({comment}) {
  return (
    <div className="comment-item">
      <h3 className="comment-item__email">
        {comment.email} пишет:
      </h3>
      <h3>
        {comment.name}
      </h3>
      <p>
        {comment.body}
      </p>
      <hr className="hr"/>
    </div>
  );
}

export default Comment;