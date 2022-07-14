import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/home/home';
import Navbar from "../components/navbar/navbar";
import EditArticle from "../components/articles/editArticle";
import Creator from "../components/creator/creator";

export default function Routing() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/creator" exact element={<Creator/>} />
        <Route path="/editarticle/:id" exact element={<EditArticle/>} />
      </Routes>
    </BrowserRouter>
  );
}