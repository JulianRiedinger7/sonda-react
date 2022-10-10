import Producto from '../components/Producto';
import productos from '../data/productos';

const Productos = () => {
	return (
		<main className="min-h-[calc(100vh-160px)] bg-hero-pattern bg-no-repeat bg-cover bg-center">
			<h1 className="text-center text-4xl text-white py-10">
				Nuestros Productos
			</h1>
			<div className="flex flex-wrap gap-20 container mx-auto justify-center py-10">
				{productos.map((producto) => (
					<Producto key={producto.id} {...producto} />
				))}
			</div>
		</main>
	);
};

export default Productos;
