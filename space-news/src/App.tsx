import React, { createContext, Provider, useState, useEffect } from "react";
import { Home } from "./Pages/Home";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import "./App.scss";
import { ArticlePage } from "./components/Article/Article";

interface Article {
  summary: string;
  publishedAt: string;
  title: string;
  imageUrl: string;
  id: number;
}

const baseURL = "https://api.spaceflightnewsapi.net/v3/articles";

const useAPI = (endPoint: string = ""): Article[] => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promise = await fetch(`${baseURL}${endPoint}`);
      const data = await promise.json();
      setTimeout(() => setData(data), 1500);
    };

    fetchData();
  }, []);

  return data;
};

interface Article {
  summary: string;
  publishedAt: string;
  title: string;
  imageUrl: string;
  id: number;
  timesSelectedTitle: number;
  timesSelectedSummary: number;
}

interface ContextInterface {
  articles: Article[];
  useAPI: Function;
}

export const MyContext = createContext<ContextInterface>({
  articles: [],
  useAPI,
});

const App: React.FC = () => {
  const articles = useAPI();
  const location = useLocation();
  console.log(location);

  console.log(window.outerWidth)
  const store = {
    useAPI,
    articles,
  };
  return (
    <MyContext.Provider value={store}>
      <div
        className="App"
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<ArticlePage></ArticlePage>}></Route>
        </Routes>
      </div>
    </MyContext.Provider>
  );
};

export default App;
