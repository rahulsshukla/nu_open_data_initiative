import React, { useEffect, createContext, useState } from "react";
import {
  getCategories,
  getDataTypes,
  getDatasets
} from "./client";

const AppState = createContext(null);
const { Provider } = AppState;

const StateProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [dataTypes, setDataTypes] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCats, setSelectedCats] = useState("");
  const [selectedTypes, setSelectedTypes] = useState("");

  const populateDatasets = (query, categories, datatypes) => {
    getDatasets(setDatasets, query, categories, datatypes);
  }
  
  const toggleCategories = value => {
    const cats = selectedCats.includes(value.name) ? selectedCats.filter(x => x !== value.name) : [...selectedCats, value.name];
    const catQuery = cats.length === 0 ? "" : JSON.stringify(cats);
    const typeQuery = selectedTypes.length === 0 ? "" : JSON.stringify(selectedTypes);
    setSelectedCats(cats);
    populateDatasets(query, catQuery, typeQuery);
  };

  const toggleDataTypes = value => {
    const types = selectedTypes.includes(value.name) ? selectedTypes.filter(x => x !== value.name) : [...selectedTypes, value.name];
    const typeQuery = types.length === 0 ? "" : JSON.stringify(types);
    const catQuery = selectedCats.length === 0 ? "" : JSON.stringify(selectedCats);
    setSelectedTypes(types);
    populateDatasets(query, catQuery, typeQuery);
  };
  
  useEffect(() => {
    getCategories(setCategories);
    getDataTypes(setDataTypes);
    populateDatasets(query, categories, dataTypes);
  }, []);

  const api = { 
    categories, 
    dataTypes, 
    setQuery, 
    query, 
    populateDatasets, 
    datasets, 
    selectedCats, 
    selectedTypes, 
    toggleCategories, 
    toggleDataTypes 
  };
  return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };
