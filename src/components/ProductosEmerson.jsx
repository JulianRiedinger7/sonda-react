import { useProductsContext } from '../context/ProductsContext';
import Producto from './Producto';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const ProductosEmerson = () => {
	const { productosEmerson } = useProductsContext();

	const navigate = useNavigate();

	return (
		<main className="min-h-[calc(100vh-80px)] bg-gray-300 pt-24">
			<BsFillArrowLeftCircleFill
				size={48}
				className="cursor-pointer text-cyan-900 ml-5"
				onClick={() => navigate(-1)}
			/>
			<img src="/emerson.png" alt="emerson" className="mx-auto" />
			<div className="flex flex-wrap gap-20 container mx-auto justify-center py-10">
				{productosEmerson.map((producto) => (
					<Producto key={producto.id} {...producto} />
				))}
			</div>
		</main>
	);
};

export default ProductosEmerson;
