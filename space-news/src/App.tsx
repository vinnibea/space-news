import React from "react";
import { Home } from "./Pages/Home";
import { Routes, Route} from "react-router-dom";
import { ArticlePage } from "./components/Article/Article";
import { MyContext } from "./components/Context";
import { useAPI } from "./hooks/useApi";

import "./App.scss";
const App: React.FC = () => {
  const articles = useAPI();

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
