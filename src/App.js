import "./App.css";
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Homepage } from "./components/headerRoute/Homepage";
import { About } from "./components/headerRoute/About";
import { Post, postLoader } from "./components/headerRoute/Post";
import { PostContent } from "./components/PostContent";
import { Choice } from "./components/Choice";
import { InfoTicket } from "./components/InfoTicket";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="posts" element={<Post />} loader={postLoader} />
      <Route path="posts/:id" element={<PostContent />} />
      <Route path="posts/:id/info_tickets" element={<Choice />} />
      <Route path="posts/:id/buy_tickets" element={<InfoTicket />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
