import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

// component in the home page to display different recipes
function Chinese() {
  const [chinese, setChinese] = useState([]);

  useEffect(() => {
    getChinese();
  }, []);
  // fetch the data of chinese and store it in chinese state. meaning the fetched data stored in chinese state variable

  const getChinese = async () => {
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese`
      );
      const data = await api.json();

      setChinese(data.meals);
    } catch (error) {
      console.error("Error fetching or parsing data", error);
    }
  };

  return (
    <div className="card-con mb-5 p-2 glass">
      <h3 className="text-center fs-2 mt-2 mb-2 category">Chinese Recipes</h3>
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

        {chinese.map((recipe) => {
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

export default Chinese;
