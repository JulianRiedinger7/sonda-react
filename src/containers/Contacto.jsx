import { MdEmail } from 'react-icons/md';
import Footer from '../components/Footer';

const Contacto = () => {
	return (
		<>
			<main className="min-h-[calc(100vh-80px)] pt-24 bg-gray-300 flex flex-col lg:flex-row justify-center">
				<div className="px-4 lg:px-20 mb-10">
					<h1 className="text-6xl text-center lg:text-left text-white py-10 text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
						Contacto
					</h1>

					<div>
						<h2 className="text-lg font-medium">
							Puede enviar su consulta en los siguientes mails respectivos!
						</h2>

						<a
							href="mailto:julianriedinger27@gmail.com"
							target="_BLANK"
							className="flex w-fit items-center space-x-2 hover:border-b hover:border-b-cyan-300 transition-all ease-in-out"
						>
							<MdEmail size={30} />
							<span className="text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
								Ventas
							</span>
						</a>
						<a
							href="mailto:julianriedinger27@gmail.com"
							target="_BLANK"
							className="flex items-center space-x-2 w-fit hover:border-b hover:border-b-cyan-300 transition-all ease-in-out"
						>
							<MdEmail size={30} />
							<span className="text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
								Capacitaciones
							</span>
						</a>
						<a
							href="mailto:julianriedinger27@gmail.com"
							target="_BLANK"
							className="flex items-center space-x-2 w-fit hover:border-b hover:border-b-cyan-300 transition-all ease-in-out"
						>
							<MdEmail size={30} />
							<span className="text-white text-transparent bg-clip-text bg-gradient-to-t from-cyan-900 to-cyan-300 font-semibold">
								Servicios
							</span>
						</a>
					</div>
				</div>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.8638258890023!2d-57.93896268255615!3d-34.93495199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e8bd2d6abc6d%3A0xc360247ed89ef072!2sCRI%2C%20Av.%2013%201845%2C%20B1904%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1667755477658!5m2!1ses-419!2sar"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="mx-auto w-[300px] h-[200px] lg:w-[600px] lg:h-[400px] rounded-lg shadow-xl mb-20 lg:mb-0"
				></iframe>
			</main>
			<Footer>
				<a
					href="mailto:julianriedinger27@gmail.com"
					target="_BLANK"
					className="flex items-center space-x-2"
				>
					<MdEmail size={30} />
					<span>sonda@gmail.com</span>
				</a>
			</Footer>
		</>
	);
};

export default Contacto;
