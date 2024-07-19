import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../index.css";
import { Link } from "react-router-dom";
// component in the home page to display different recipes

function Filipino() {
  const [filipino, setFilipino] = useState([]);

  useEffect(() => {
    getFilipino();
  }, []);

  // fetch the data of american and store it in american state. meaning the fetched data stored in american state variable

  const getFilipino = async () => {
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Filipino`
      );
      const data = await api.json();
      setFilipino(data.meals);
    } catch (error) {
      console.error("Error fetching or parsing data", error);
    }
  };

  return (
    <div className="card-con p-3 mb-5 glass">
      <h3 className="text-center fs-2 mt-2 mb-2 category">Filipino Recipes</h3>
      <Splide
        options={{
          perPage: 5,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "10px",
        }}
      >
        {/* .map() lets you loop through an array and create a new array with modified items based on what you specify in the function inside .map().  */}

        {filipino.map((recipe) => {
          return (
            <SplideSlide key={recipe.idMeal}>
              <Link to={"/recipe/" + recipe.idMeal}>
                <div
                  className="card mt-4"
                  style={{ width: "15rem", height: "15rem" }}
                >
                  <img
                    className="card-img"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                  />
                  <div className="card-img-overlay ">
                    <p className="card-title text-center text-light bg-dark rounded">
                      {recipe.strMeal}
                    </p>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Filipino;
