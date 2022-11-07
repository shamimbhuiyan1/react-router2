import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Countries from "./Components/Countries/Countries";
import CountryDetail from "./Components/CountryDetail/CountryDetail";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Post from "./Components/Post/Post";
import PostDetail from "./Components/PostDetail/PostDetail";
import FriendDetail from "./FriendDetail/FriendDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Welcome to My react router project.</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        {/* Nested routing  */}
        <Route
          path="/friend/:friendId"
          element={<FriendDetail></FriendDetail>}
        ></Route>

        <Route path="/post" element={<Post></Post>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route
          path="/country/:countryName"
          element={<CountryDetail></CountryDetail>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
