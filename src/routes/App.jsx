import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetalleProducto from '../components/DetalleProducto';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Inicio from '../containers/Inicio';
import Productos from '../containers/Productos';
import Somos from '../containers/Somos';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/productos" element={<Productos />} />
				<Route path="/detalle/:itemId" element={<DetalleProducto />} />
				<Route path="/somos" element={<Somos />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
