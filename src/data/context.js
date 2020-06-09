import React, { useEffect, createContext, useState } from "react";
import { getCategories, getDataTypes, getDatasets } from "./client";

const AppState = createContext(null);
const { Provider } = AppState;

const StateProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [dataTypes, setDataTypes] = useState([]);
  const [query, setQuery] = useState("");
  const [datasets, setDatasets] = useState([]);

  const setSearch = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    getCategories(setCategories);
    getDataTypes(setDataTypes);
    getDatasets(setDatasets);
  }, []);

  const api = { categories, dataTypes, setSearch, query, datasets };
  return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };
