import { createContext } from "react";
import { ContextInterface } from "../types/types";
import { useAPI } from "../hooks/useApi";

export const MyContext = createContext<ContextInterface>({
    articles: [],
    useAPI,
  });