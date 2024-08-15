import PostItem from "./PostItem";
import '../../styles/App.css'

function PostList({posts, title, remove}) {

  if(!posts.length){
    return(
      <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
    )
  } else {
    return(
      <div>
        <h1 style={{textAlign:'center'}}>
          {title}
        </h1>
          {posts.map((post)=>(
            <PostItem post={post} remove={remove} key={post.id}/>
          ))}
      </div>
    )
  }
}

export default PostList;