import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContextProvider } from '../context/ProductsContext';
import DetalleProducto from '../components/DetalleProducto';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Inicio from '../containers/Inicio';
import Productos from '../containers/Productos';
import Somos from '../containers/Somos';
import ProductosProveedor from '../components/ProductosProveedor';
import Capacitaciones from '../containers/Capacitaciones';

function App() {
	return (
		<BrowserRouter>
			<ProductsContextProvider>
				<Header />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/productos" element={<Productos />} />
					<Route path="/productos/:prov" element={<ProductosProveedor />} />
					<Route path="/detalle/:itemId" element={<DetalleProducto />} />
					<Route path="/somos" element={<Somos />} />
					<Route path="/cursos-y-capacitaciones" element={<Capacitaciones />} />
				</Routes>
				<Footer />
			</ProductsContextProvider>
		</BrowserRouter>
	);
}

export default App;
