const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8620aa62",
      s: "avengers",
    },
  });

  console.log(response.data);

};


fetchData();