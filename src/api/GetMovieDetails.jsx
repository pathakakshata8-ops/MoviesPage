export const getMoviesDetails = async ({ params }) => {
  const id = params.movieID;

  if (!id) {
    return {
      Response: "False",
      Error: "Invalid movie ID",
    };
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      return data; // Let MovieDetails handle it
    }

    return data;
  } catch (error) {
    console.error("Loader Error:", error);

    return {
      Response: "False",
      Error: "Something went wrong while fetching movie details.",
    };
  }
};