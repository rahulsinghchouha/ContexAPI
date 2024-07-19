import React, { useContext } from 'react'
import { AppContext } from '../contextAPI/AppContext'
import Spinner from './Spinner';

const Blog = () => {
 //here we are actually consuming the data 
 const {loading,posts} = useContext(AppContext); //konsa vala context use krna hai same name likhna 
 //hoga const ke aage  
 console.log("post",posts);
 
  return (
    <div>
     {
        loading ? (<Spinner/>):(
            posts.length === 0 ? (<div>No Post Found</div>):(
                posts.map((post,index)=>(
                  <div key={index}>
                    <p>{post.title}</p>
                    <p>
                      By <span>{post.author} </span> On <span>{post.category}</span>
                    </p>
                    <p>Posted on {post.date}</p>
                    <p>{post.content}</p>
                    <div>
                      {
                      post.tags.map((tag,index)=>(
                       <span key={index}>{`#${tag}`}</span>
                      ))
                      }
                      </div>
                  </div>
                ))
            )
        )
     }
    </div>
  )
}

export default Blog;
