import axios from "axios"

export async function getAll(limit, page){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts',{
    params:{
      _limt:limit,
      _page:page,
    }
  })
  return res
}

export async function getById(id){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  return res
}

export async function getCommentsByPostId(id){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
  return res
}