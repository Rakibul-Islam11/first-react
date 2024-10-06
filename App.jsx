
import Header from './assets/components/header/Header';
import BlogsResponse from './assets/components/blogs/BlogsResponse';
import Bookmarks from './assets/components/bookmarks/Bookmarks';
import { useState } from 'react';



function App() {
  const [bkmarclick, setBkmarclick] = useState([]);
  // যদি আপনি নতুন ব্লগটি সরাসরি bkmarclick-এ যোগ করেন, তাহলে আগের বুকমার্ক করা ব্লগগুলো হারিয়ে যেতে পারে। তাই আমরা স্প্রেড অপারেটর (...) ব্যবহার করে পুরোনো ব্লগগুলোকে একটি নতুন অ্যারেতে কপি করি, এবং তারপর নতুনটি সেই অ্যারেতে যোগ করি।
  const handleclickbokmark = clicked => {
    const addEach = [...bkmarclick, clicked];
    setBkmarclick(addEach)
    
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto gap-4'>
        <BlogsResponse handleclickbokmark= {handleclickbokmark}></BlogsResponse>
        <Bookmarks bkmarclick={bkmarclick}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
