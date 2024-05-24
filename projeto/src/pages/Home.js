import NavBar from "@/components/layout/NavbarComponent";
import { RedirectStatusCode } from "next/dist/client/components/redirect-status-code";
import { ProfileInfo } from "../components/home/profileInfo";
import { RiHome3Line } from "react-icons/ri";
import SuggestedDestinations from "@/components/home/sugestedDest";
import CategorySelector from "@/components/home/categories";

const Home = () => {
  return (
    <div>
      <h1>Who roams the world? </h1>
      <h2>Girls!</h2>
      <CategorySelector />
      <SuggestedDestinations />
      <NavBar />
    </div>
  );
};

export default Home;
