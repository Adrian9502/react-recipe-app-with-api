import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import American from "../components/American";
import Filipino from "../components/Filipino";
import Canadian from "../components/Canadian";
import Chinese from "../components/Chinese";
function Recipe() {
  // useParams = get the parameter from
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`
    );
    const detailData = await data.json();
    setDetails(detailData.meals[0]);
    console.log("Recipe ID: ", params.name, "---", detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  if (!details) return <div>Loading...</div>; // Display loading state while fetching data

  // Function to filter and render ingredients
  const renderIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      let ingredientKey = `strIngredient${i}`;
      let measureKey = `strMeasure${i}`;
      if (details[ingredientKey] && details[ingredientKey] !== "") {
        ingredients.push(
          <li key={i}>
            {details[ingredientKey]}: {details[measureKey]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <div className="glass p-2 mb-5">
        <div className="row p-5">
          {/* Image container */}
          <div className="col-md-5 align-items-center row ">
            <h2 className="p-3 text-center category fs-2">{details.strMeal}</h2>
            <img
              className="rounded"
              src={details.strMealThumb}
              alt={details.strMeal}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
              }}
            />
          </div>
          {/* Instructions/ingredients container */}
          <div className="col-md-7 container fs-5 d-flex flex-column justify-content-center align-items-center">
            <div className="mb-3 p-3 d-flex gap-5">
              <button
                className={`btn btn-dark ${
                  activeTab === "instructions" ? "active" : ""
                }`}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </button>
              <button
                className={`btn btn-dark ${
                  activeTab === "ingredients" ? "active" : ""
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
            </div>
            {activeTab === "instructions" && (
              <div className="p-3 text-center mx-auto">
                <p
                  dangerouslySetInnerHTML={{
                    __html: details.strInstructions,
                  }}
                ></p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div className="text-start mx-auto p-3">
                <ol>{renderIngredients()}</ol>
              </div>
            )}
          </div>
        </div>
      </div>
      <American />
      <Canadian />
      <Chinese />
      <Filipino />
    </>
  );
}

export default Recipe;
