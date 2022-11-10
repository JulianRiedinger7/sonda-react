import { useProductsContext } from '../context/ProductsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Producto from './Producto';
import Footer from './Footer';

const ProductosProveedor = () => {
	const { products } = useProductsContext();
	const { prov } = useParams();

	const productsToShow = products.filter((product) => product.prov === prov);

	const navigate = useNavigate();

	return (
		<>
			<main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24">
				<BsFillArrowLeftCircleFill
					size={48}
					className="cursor-pointer text-cyan-900 ml-5"
					onClick={() => navigate(-1)}
				/>
				<img
					src={prov === 'emerson' ? '/emerson.png' : '/fitok.png'}
					alt="emerson"
					className="mx-auto"
				/>
				<div className="flex flex-wrap gap-20 container mx-auto justify-center py-10">
					{productsToShow.map((producto) => (
						<Producto key={producto.id} {...producto} />
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ProductosProveedor;
