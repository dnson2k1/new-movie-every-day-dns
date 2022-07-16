const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "b0cdf19e22714ceb257a79ac753c284a",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
