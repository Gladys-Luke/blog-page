import React, { useState, useEffect } from 'react';
import query from './Hash';
import Post from './post';
import Loader from "./loader"
import "./styles.css"



const Blog = ()=>{
  const [posts, setPosts]= useState([]);
  const [loading, setLoading]= useState(true);

  
  useEffect(() => {
    if(loading){
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    } 
    const  fetchPosts = async () => {
     
      const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
  
      const apiResponse = await response.json();
      const { posts } = apiResponse.data.user.publication;
  
      setPosts(posts)
   } 
   fetchPosts()
  }, [loading]);

  return (
      
          <div className=' h-screen bg-teal-600'>
          {loading ? (  <Loader></Loader>) : 
         
           (
            <>
             <header className=" w-full px-2 md:px-3 lg:px-8 py-5 md:py-8 bg-red-400 mb-4 flex">
              <h1 className="text-2xl font-bold leading-normal text-white">My Blog</h1>
              <div className=' w-[80%] flex gap-4 justify-end text-white'>
              <a href="https://twitter.com/lukegladys3?t=AQtvjEtA2Ym8ReZrFszaYg&s=09">Twitter</a>
              <a href="https://github.com/Gladys-Luke">Github</a>
              </div>
            </header>
           
            <main>
            {posts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
          </main>
          </>
         ) }
          </div>
        );



}




export default Blog



// class Blog extends Component {
//   state = { 
//     posts: [],
//     loading: false
//   };

//   componentDidMount() {
//     this.fetchPosts();
//   }
  
//   fetchPosts = async () => {
//     this.setState({loading:true});
     
//     const response = await fetch('https://api.hashnode.com/', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//     })

//     const apiResponse = await response.json();
//     const { posts } = apiResponse.data.user.publication;
//     this.setState({ posts: posts});
//   };


//   render() { 
//     return (
      
//       <div className=' h-screen bg-teal-600'>
   

//         <header className=" w-full px-2 md:px-3 lg:px-8 py-5 md:py-8 bg-red-400 mb-4 flex">
//           <h1 className="text-2xl font-bold leading-normal text-white">My Blog</h1>
//           <div className=' w-[80%] flex gap-4 justify-end text-white'>
//           <a href="https://twitter.com/lukegladys3?t=AQtvjEtA2Ym8ReZrFszaYg&s=09">Twitter</a>
//           <a href="https://github.com/Gladys-Luke">Github</a>
//           </div>
//         </header>
       
//         <main>
//         {this.state.posts.map((post, index) => (
//             <Post post={post} key={index} />
//         ))}
//       </main>
//       </div>
//     );
//   }
// }

// export default Blog;