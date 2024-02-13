import React, { useState, useEffect } from "react";

const KEY = "c04fc617";
export const useMovies = (query, callback) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}
  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movies not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (!query.length) {
      setError("");
      setMovies([]);
      return;
    }
    // handleCloseMovie();

    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
};
