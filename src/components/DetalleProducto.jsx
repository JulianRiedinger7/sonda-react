import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productos from '../data/productos';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const DetalleProducto = () => {
	const { itemId } = useParams();
	const navigate = useNavigate();

	const itemToShow = productos.find(
		(producto) => producto.id === parseInt(itemId)
	);

	const { nombre, descripcion, img, catalogo } = itemToShow;

	return (
		<section className="min-h-[calc(100vh-160px)] container mx-auto px-5 lg:px-0 py-5">
			<BsFillArrowLeftCircleFill
				size={64}
				className="cursor-pointer text-cyan-900"
				onClick={() => navigate(-1)}
			/>
			<div className="flex flex-col justify-center items-center space-y-6">
				<h2 className="text-4xl font-bold">{nombre}</h2>
				<img
					src={img}
					alt={nombre}
					className="w-96 aspect-square object-contain"
				/>
				<p className="leading-7 font-semibold text-center w-3/5">
					{descripcion}
				</p>
				<div className="self-start">
					<h3 className="text-2xl font-semibold pb-5">Catalogo:</h3>
					<p className="font-semibold">
						Haz click{' '}
						<a
							href={catalogo}
							className="text-cyan-600 font-bold"
							target="_BLANK"
						>
							Aqui
						</a>{' '}
						para obtener mas informacion acerca de {nombre}
					</p>
				</div>
			</div>
		</section>
	);
};

export default DetalleProducto;
