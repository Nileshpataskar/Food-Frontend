const queryString = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};


const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryString;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`
    );
    const response = data.json();
    console.log(response)
    return response;
  } catch (err) {
    console.log(err, "Error fetching something went wrong");
    return err;
  }
};
fetchData()
module.exports={fetchData}