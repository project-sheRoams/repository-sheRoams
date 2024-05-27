import { Header } from "@/components/layout/Header";
import { NavBar } from "@/components/layout/NavbarComponent";
import { Search } from "@/components/layout/SearchForm";
import Loading from "@/components/layout/Loading";
import { useState, useEffect } from "react";

const LoginPage = () => {
  // const [currentSearch, setCurrentSearch] = useState("");
  // function resetButton() {
  //   setRandomB(false)
  //   fetchRecipes()
  //   setCurrentFilter("todas")
  //   setSelectedOption("todas")
  //   setCurrentSearch('')
  // }
  return (
    <>
      <div>
        <Header title={"Home"} />;
      </div>
      {/* <div>
        <Search setCurrentSearch={setCurrentSearch} CurrentSearch={currentSearch} />
      </div> */}
      <div>
        <Loading />
      </div>
      <div>
        <NavBar />
      </div>
    </>
  );
};

export default LoginPage;
