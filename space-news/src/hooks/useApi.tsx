import { useEffect, useState } from "react";
import { Article } from "../types/types";

const baseURL = "https://api.spaceflightnewsapi.net/v3/articles";

export const useAPI = (endPoint: string = ""): Article[] => {
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