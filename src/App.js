import './App.css';
import {Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Layout} from './components/Layout'
import { Homepage } from './components/headerRoute/Homepage';
import { About } from './components/headerRoute/About';
import { Post,postLoader } from './components/headerRoute/Post';
import {PostContent} from './components/PostContent'
import {Choice} from './components/Choice'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />}/>
      <Route path='about' element={<About />}/>
      <Route path='posts' element={<Post />} loader={postLoader}/>
      <Route path='posts/:id' element={<PostContent/>}/>
      {/*loader={tiketLoder} */}
      <Route path="posts/:id/buy_tickets" element={<Choice/>} /> 
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
