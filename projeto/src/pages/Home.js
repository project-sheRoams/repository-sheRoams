import { NavBar } from "@/components/layout/NavBarComponent";
import { RedirectStatusCode } from "next/dist/client/components/redirect-status-code";

const Home = () => {
    return (
      <div>
        <h1>Who roams the world? </h1>
        <h2>Girls!</h2>
        <NavBar/>
      </div>
    );

}

export default Home;
