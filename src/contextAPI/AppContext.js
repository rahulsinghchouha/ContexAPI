import { useState } from "react";
import { baseUrl } from "../baseUrl";
import { createContext } from "react";

//first create context
export const AppContext = createContext();

//second provider children jo ki <AppContextProvider> ke andar hai index.js file men
export function AppContextProvider({children}){
  const [loading,setLoading] = useState(false);
  const[posts,setPosts] = useState([]);
  const[page,setPage] = useState(1);
  const[totalPages,setTotalPages] = useState(null);

  //data filling
  async function fetchBlogPosts(page = 1){
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try{
      const result = await fetch (baseUrl);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      }
    catch(error)
    {
     console.log("err in fetching data",error);
     setPage(1);
     setPosts([]);
     setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page)
  {
   setPage(page);
   fetchBlogPosts(page); 
  }

//for required data pass
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
  };

  //return app context provider or value jo ki hmari usState hai children jo ki App vala component
  //hai uske liye app ke andar ye vali value send kr do 

  return <AppContext.Provider value={value}>
        {children}  
  </AppContext.Provider>
// hmne apne children ko ye vali value jo hmne bnayi hai
}

//ab ye sara data hmko pass krna hmare consumer ko jo bhi hmara children hai usk