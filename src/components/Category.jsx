import { FaFish } from "react-icons/fa";
import { LuBeef, LuDessert, LuVegan } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdFreeBreakfast } from "react-icons/md";
import { GiPlantWatering, GiChickenOven } from "react-icons/gi";
import { SiPorkbun } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { GiGoat } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "../category.css";

// Component for displaying food categories with icons and links
// This compone
function Category() {
  return (
    <div className="d-flex mt-3 mb-3 justify-content-center gap-3">
      {/* chicken */}
      <NavLink
        className="category-link px-3 rounded-circle"
        to={"/cuisine/chicken"}
      >
        <GiChickenOven className="category-icon" />
        <h6 className="category-text category">Chicken</h6>
      </NavLink>
      {/* beef */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/beef"}
      >
        <LuBeef className="category-icon" />
        <h6 className="category-text category">Beef</h6>
      </NavLink>
      {/* breakfast */}
      <NavLink
        className="category-link px-2 rounded-circle"
        to={"/cuisine/breakfast"}
      >
        <MdFreeBreakfast className="category-icon" />
        <h6 className="category-text category">Breakfast</h6>
      </NavLink>
      {/* dessert */}
      <NavLink
        className="category-link px-3 rounded-circle"
        to={"/cuisine/dessert"}
      >
        <LuDessert className="category-icon" />
        <h6 className="category-text category">Dessert</h6>
      </NavLink>
      {/* goat */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/goat"}
      >
        <GiGoat className="category-icon" />
        <h6 className="category-text category">Goat</h6>
      </NavLink>
      {/* lamb */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/lamb"}
      >
        <TbMeat className="category-icon" />
        <h6 className="category-text category">Lamb</h6>
      </NavLink>
      {/* miscellaneous */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/miscellaneous"}
      >
        <IoFastFood className="category-icon" />
        <h6 className="category-text category">Miscellaneous</h6>
      </NavLink>
      {/* pasta */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/pasta"}
      >
        <CiBowlNoodles className="category-icon" />
        <h6 className="category-text category">Pasta</h6>
      </NavLink>
      {/* pork */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/pork"}
      >
        <SiPorkbun className="category-icon" />
        <h6 className="category-text category">Pork</h6>
      </NavLink>
      {/* seafood */}
      <NavLink
        className="category-link px-3 rounded-circle"
        to={"/cuisine/seafood"}
      >
        <FaFish className="category-icon" />
        <h6 className="category-text category">Seafood</h6>
      </NavLink>
      {/* side */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/side"}
      >
        <FaBowlFood className="category-icon" />
        <h6 className="category-text category">Side</h6>
      </NavLink>
      {/* vegetarian */}
      <NavLink
        className="category-link px-3 rounded-circle"
        to={"/cuisine/vegetarian"}
      >
        <GiPlantWatering className="category-icon" />
        <h6 className="category-text category">Vegetarian</h6>
      </NavLink>
      {/* vegan */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/vegan"}
      >
        <LuVegan className="category-icon" />
        <h6 className="category-text category">Vegan</h6>
      </NavLink>
      {/* starter */}
      <NavLink
        className="category-link px-4 rounded-circle"
        to={"/cuisine/starter"}
      >
        <MdFastfood className="category-icon" />
        <h6 className="category-text category">Starter</h6>
      </NavLink>
    </div>
  );
}

export default Category;
