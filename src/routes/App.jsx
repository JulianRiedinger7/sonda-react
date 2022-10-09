import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Inicio from '../containers/Inicio';
import Productos from '../containers/Productos';
import Somos from '../containers/Somos';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/productos" element={<Productos />} />
				<Route path="/somos" element={<Somos />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
