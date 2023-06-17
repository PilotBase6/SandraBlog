import NavBar from "../components/navbar1.jsx";
import Banner from "../components/banner.jsx";
// import FadeIn from "../components/FadeIn.jsx";

export default function Header(){

    return (
        <header className="w-full relative h-auto">
        <NavBar/>
        <Banner/>
        </header>
    );

}