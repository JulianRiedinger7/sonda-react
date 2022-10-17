import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContextProvider } from '../context/ProductsContext';
import DetalleProducto from '../components/DetalleProducto';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Inicio from '../containers/Inicio';
import Productos from '../containers/Productos';
import Somos from '../containers/Somos';
import ProductosEmerson from '../components/ProductosEmerson';
import ProductosFitok from '../components/ProductosFitok';

function App() {
	return (
		<BrowserRouter>
			<ProductsContextProvider>
				<Header />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/productos" element={<Productos />} />
					<Route path="/productos/emerson" element={<ProductosEmerson />} />
					<Route path="/productos/fitok" element={<ProductosFitok />} />
					<Route path="/detalle/:itemId" element={<DetalleProducto />} />
					<Route path="/somos" element={<Somos />} />
				</Routes>
				<Footer />
			</ProductsContextProvider>
		</BrowserRouter>
	);
}

export default App;
