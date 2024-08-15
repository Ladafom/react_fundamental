import { useState, useEffect} from 'react'
import '../styles/App.css'
import NewPostForm from '../components/Posts/NewPostForm'
import PostList from '../components/Posts/PostList'
import PostFilter from '../components/Posts/PostFilter'
import MyButton from '../components/UI/button/MyButton'
import MyModal from '../components/UI/MyModal/MyModal'
import { usePosts } from '../hook/usePosts'
import { getAll } from '../api/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hook/useFetching'
import { getPageCount } from '../utils/pages'
import Pagination from '../components/Pagination'

function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort:'', query:''})
  const [modal,setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostLoading, postError] = useFetching(async()=>{
    const response = await getAll(limit, page)
    setPosts(response.data)
    setTotalPages(getPageCount(response.headers['x-total-count'],limit))
  })

  useEffect(()=>{
  fetchPosts()
  },[page])


  function createPost(newPost){
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post){
    setPosts(posts.filter(p =>p.id !== post.id))
  }

  function switchPage(page){
    setPage(page)
  }

  return (
    <div className='App'>
      <MyButton  className='hr' onClick={()=>setModal(true)}>
        Создать пост
      </MyButton>
      <hr className='hr'/>
      <MyModal visible={modal} setVisible={setModal}>
        <NewPostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostLoading ?
        <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
          <Loader/>
        </div>
        :
        <PostList posts={sortedAndSearchedPosts} title={'Список постов'} remove={removePost}/>
      }
      <Pagination totalPages={totalPages} activePage={page} switchPage={switchPage}/>
    </div>
  )
}

export default Posts
