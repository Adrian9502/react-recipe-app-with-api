import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {
  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSearchRecipes(data.meals || []); // Set meals or empty array if data.meals is undefined
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchRecipes([]); // Optionally clear the searchRecipes state on error
    }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
      {searchRecipes.length > 0 ? (
        searchRecipes.map((item) => (
          <Link key={item.idMeal} to={"/recipe/" + item.idMeal}>
            <div
              className="card mt-1"
              style={{ width: "15rem", height: "15rem" }}
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="img-fluid rounded"
                style={{ maxHeight: "300px" }}
              />
              <div className="card-img-overlay ">
                <p className="card-title text-center text-light bg-dark rounded">
                  {item.strMeal}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1>Fetching data...</h1>
      )}
    </div>
  );
}

export default Searched;
