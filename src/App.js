import logo from './logo.svg';
import './App.css';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Nav from './Nav';
import {Routes , Route/*,Link, useNavigate*/} from 'react-router-dom'
import Post from './Post';
//import { useEffect, useState } from 'react';
//import { format } from 'date-fns'
//import api from "./api/post"
import EditPost from './Editpost';
//import useWindowSize from './Hooks/useWindowSize';
//import useAxiosFetch from './Hooks/useAxiosFetch';
import { DataProvider } from './context/DataContext';



function App() {

  //THE BELOW LOGIC ARE IN THE DataContext.js File
  
  // const [post,setPost] = useState([])
  // const [search,setSearch] = useState('')
  // const [searchResult,setSearchResult] = useState([])
  // const [postTitle,setPostTitle] = useState('')
  // const [postBody,setPostBody] = useState('')
  // const [editTitle,setEditTitle] = useState('')
  // const [editBody,setEditBody] = useState('')
  // const navigate = useNavigate()
  // const {width} = useWindowSize();
  // const {data,fetchError,isLoading} = useAxiosFetch("http://localhost:3500/posts")

  // useEffect(()=>{
  //   const fetchPost = async() =>{
  //     try{
  //       const response = await api.get('/posts');
  //       setPost(response.data);
  //     }
  //     catch(err){
  //       if(err.response){
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.header);
  //       }
  //       else{
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchPost();
  // },[])

  // useEffect(()=>{
  //   setPost(data);
  // },[data])

  // useEffect(() => {
  //   const filteredResult = post.filter(posts =>((posts.body).toLowerCase()).includes(search.toLowerCase()) || ((posts.title).toLowerCase()).includes(search.toLowerCase()));

  //   setSearchResult(filteredResult.reverse());
  //  } , [post,search])

  // const handleSubmit = async(e)=>{
  //   e.preventDefault();

  //   const id = post.length ? post[post.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //   try{
  //     const newPost = {id ,title : postTitle, datetime , body:postBody};
  //     const response = await api.post('/posts',newPost)
  //     const allposts = [...post,response.data];

  //     setPost(allposts)
  //     setPostTitle('');
  //     setPostBody('')
  //     navigate('/')
  //   }
  //   catch(err){
  //     if(err.response){
  //       console.log(err.response.data);
  //       console.log(err.response.status);
  //       console.log(err.response.header);
  //     }
  //     else{
  //       console.log(`Error: ${err.message}`);
  //     }
  //   }
  // }

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //       const response = await api.put(`/posts/${id}`, updatedPost);
  //       setPost(post.map(post => post.id === id ? {...response.data } : post));
  //       setEditTitle('');
  //       setEditBody('');
  //       alert("post has been edited")
  //       navigate('/')
  //     } 
  //   catch (err) {
  //       console.log(`Error: ${err.message}`);
  //       console.log(id)
  //     }
  //   }
   
  // const handleDelete = async(id) => {
  //   try{
  //     await api.delete(`posts/${id}`)
  //     const postList = post.filter(posts => posts.id !== id);
  //     setPost(postList)
  //     navigate('/')
  //   }
  //   catch(err){
  //     if(err.response){
  //       console.log(err.response.data);
  //       console.log(err.response.status);
  //       console.log(err.response.header);
  //     }
  //     else{
  //       console.log(`Error: ${err.message}`);
  //     }
  //   }
  // }

  return (
    <div className="App">  
    <DataProvider> 
      <Header 
        title="InstaGram" 
        //width = {width}
      />
      <Nav
        //search = {search}
        //setSearch = {setSearch}
      />
      <Routes>
      <Route path="/" element = {<Home 
        //  post={searchResult}
        //  fetchError = {fetchError}
        //  isLoading = {isLoading}
      />} />
      <Route path = "post">
          <Route index element = {<NewPost 
            // postTitle={postTitle}
            // setPostTitle={setPostTitle}
            // postBody={postBody}
            // setPostBody={setPostBody}
            // handleSubmit={handleSubmit}
          />} />
          <Route path=":id" element={<PostPage 
          // post={post} 
          // handleDelete={handleDelete}
          /> }/>
      </Route>
      <Route path = "/edit/:id" element = {<EditPost
            // post={post}
            // handleEdit={handleEdit}
            // editBody={editBody}
            // setEditBody={setEditBody}
            // editTitle={editTitle}
            // setEditTitle={setEditTitle}
          />}/>
      <Route path = "about" element = {<About />}/>
      <Route path = "*" element = {<Missing />}/>
      </Routes>

      <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
