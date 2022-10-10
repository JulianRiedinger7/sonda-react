import fitok from '../../public/fitok.png';
import emerson from '../../public/emerson.png';

const Inicio = () => {
	return (
		<main className="min-h-[calc(100vh-160px)] bg-hero-pattern bg-no-repeat bg-cover bg-center">
			<h1 className="text-center text-7xl lg:text-8xl pt-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-900">
				Sonda SRL
			</h1>

			<section className="text-white mt-20 container mx-auto flex flex-col lg:flex-row lg:justify-between items-center space-y-10">
				<div className="space-y-5 lg:space-y-0">
					<h2 className="text-xl">Representantes oficiales de:</h2>
					<img
						src={emerson}
						alt="Emerson"
						className="w-64 aspect-square lg:w-72 mx-auto object-contain"
					/>
				</div>

				<div className="space-y-5 lg:space-y-">
					<h2 className="text-xl">
						Distribuidor oficial en la Republica Argentina de:
					</h2>
					<img
						src={fitok}
						alt="Fitok"
						className="w-64 aspect-square lg:w-72 mx-auto object-contain"
					/>
				</div>
			</section>
		</main>
	);
};

export default Inicio;
