import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Teams";

function App() {
	return (
		<>
			<Navbar />
			<Services />
			<Contact />
		</>
	);
}

export default App;
