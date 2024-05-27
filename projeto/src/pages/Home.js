import CountryList from "@/components/home/countryList";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavbarComponent";

const LoginPage = () => {
  return (
    <>
      <div>
        <Header title={"Home"} />;
      </div>
      <div>
        <h1>Suggested Destinations</h1>
        <CountryList />
      </div>
      <div>
        <NavBar />
      </div>
    </>
  );
};

export default LoginPage;
