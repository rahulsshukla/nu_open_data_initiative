export const getCategories = async (callback) => {
  const response = await fetch('api/categories')
  const data = await response.json();
  console.log(data)
  return callback(data);
}

export const getDataTypes = async (callback) => {
  const response = await fetch('api/datatypes')
  const data = await response.json();
  console.log(data)
  return callback(data);
}

export const getDatasets = async (callback, query, categories, datatypes) => {
  const cat = categories == "\"\""? "" : categories
  const dat = (datatypes == "\"\"" || datatypes == undefined)? "" : datatypes
  const response = await fetch(`api/datasets/search?query=${query}&categories=${cat}&datatypes=${dat}`)
  const data = await response.json();
  console.log(data);
  return callback(data);
};

export const uploadDataset = async (s3Params, file, request, confirmUpload) => {
  let response = { s3Data: false };

  if(s3Params) {
    try {
      var s3Data = await fetch('api/datasets/s3_upload_url',
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(s3Params)
        }
      );

      s3Data = await s3Data.json();
      response.s3Data = s3Data
    } catch(error) {
      response.failedOnStep = "get S3 URL";
      response.error = error;
      console.log(response);
    };

    try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", s3Data.data.url);

      var postData = new FormData();
      for(var key in s3Data.data.fields) {
        postData.append(key, s3Data.data.fields[key]);
      }
      postData.append('file', file);
      xhr.send(postData);
    } catch(error) {
      response.failedOnStep = "s3 Upload";
      response.error = error;
      console.log(response);
    };
  };

  try {
    const dataset = request;
    dataset.key = response.s3Data.key;
    dataset.submitted_at = new Date();
    console.log(JSON.stringify(dataset))
    var Data = await fetch('api/datasets', 
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataset)
      }
    );
    Data = await Data.json()
    confirmUpload(true);
  } catch(error) {
    response.failedOnStep = "/datasets Upload";
    response.error = error;
    console.log(response);
  }
};