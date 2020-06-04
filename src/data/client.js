export const getCategories = async (callback) => {
  const response = await fetch('https://nodi-backend.herokuapp.com/api/categories')
  const data = await response.json();
  console.log(data)
  return callback(data);
}

export const getDataTypes = async (callback) => {
  const response = await fetch('https://nodi-backend.herokuapp.com/api/datatypes')
  const data = await response.json();
  console.log(data)
  return callback(data);
}

export const getDatasets = async (callback) => {
  const response = await fetch('https://nodi-backend.herokuapp.com/api/datatypes')
  const data = await response.json();
  console.log(data);
};