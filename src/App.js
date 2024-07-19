import "./index.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav>
            <Logo to={"/"}>
              <GiKnifeFork></GiKnifeFork>
              Taste Bites
            </Logo>
            <Search />
          </Nav>

          <Category />
          <Pages />
        </BrowserRouter>
      </div>
    </>
  );
}
// style for <Link/>
const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 400;
  text-wrap: no-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Playwrite AU SA", cursive;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 3rem;
  }
`;

export default App;
