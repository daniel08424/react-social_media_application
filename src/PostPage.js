import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const PostPage = (/*{post,handleDelete}*/) => {
  const {post,handleDelete} = useContext(DataContext)
  const {id} = useParams();
  const posting = post.find(posts => (posts.id).toString() === id);
   return (
    <main className='PostPage'>
        <div className='post'>
          {posting && 
           <>
            <h2>{posting.title}</h2>
            <p className='postDate'>{posting.datetime}</p>
            <p className='postBody'>{posting.body}</p>
            <Link to ={`/edit/${posting.id}`}><button>Edit Post</button></Link>
            <button onClick = {()=> handleDelete(posting.id)}>Delete Post</button>
           </>
          }
          {!posting && 
            <>
              <h2>Post Not Found</h2>
              <p>
                  <Link to ='/'>Visit our Home Page</Link>
              </p>
            </>
          }
        </div>
    </main>
  )
}

export default PostPage