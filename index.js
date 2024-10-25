const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8620aa62",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }

  // console.log(response.data);
  return response.data.Search;
};

const input = document.querySelector("input");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  for (const movie of movies) {
    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${movie.Poster}"/>
      <h1>${movie.Title}</h1>
    `;

    document.querySelector("#target").appendChild(div);
  }
};

input.addEventListener("input", debounce(onInput, 800));
