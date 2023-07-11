import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Teams";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Services />
			<Team />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
