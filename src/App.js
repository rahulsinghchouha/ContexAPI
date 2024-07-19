import { useContext, useEffect } from 'react';
import './App.css';
import Blog from './component/Blog';
import Header from './component/Header';
import Pagination from './component/Pagination';
import { AppContext } from './contextAPI/AppContext';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);//ek se jyada context bana sakte hai isliye 
  //hmoko use Context ke andar konsa context use krna define krna hoga

  useEffect(()=>{
    fetchBlogPosts();
  },[])

  return (
    <div className="">
        <Header/>
        <Blog/>
        <Pagination/>
    </div>
  );
}

export default App;
