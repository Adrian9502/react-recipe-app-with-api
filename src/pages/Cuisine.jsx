import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]); // Initialize as an empty array
  let params = useParams();

  const getCuisine = async (name) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setCuisine(data.meals || []); // Set meals or empty array if data.meals is undefined
    } catch (error) {
      console.error("Error fetching data:", error);
      setCuisine([]); // Optionally clear the cuisine state on error
    }
  };

  useEffect(() => {
    if (params.type) {
      getCuisine(params.type);
    }
  }, [params.type]);

  return (
    <motion.div
      className="container mt-5 p-3 text-center glass"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {cuisine.length > 0 ? (
          cuisine.map((item) => (
            <div key={item.idMeal} className="col mb-1">
              <Link to={"/recipe/" + item.idMeal}>
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
            </div>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </motion.div>
  );
}

export default Cuisine;
