import Footer from '../components/Footer';

const Inicio = () => {
	return (
		<>
			<main className="min-h-[calc(100vh-80px)] bg-hero-pattern bg-no-repeat bg-cover bg-center hero pt-24">
				<h1 className="text-center text-6xl lg:text-8xl pt-5 font-bold text-cyan-700 sonda">
					SONDA SRL
				</h1>

				<section className="text-white mt-20  container mx-auto flex flex-col lg:flex-row lg:justify-between items-center space-y-10 lg:space-y-0">
					<div className="space-y-5 lg:space-y-0 lg:pt-5 ">
						<h2 className="text-xl lg:text-2xl font-bold sponsors lg:pb-2">
							Representantes oficiales de:
						</h2>
						<img
							src="/emerson.png"
							alt="Emerson"
							className="w-64 aspect-square lg:w-72 mx-auto object-contain bg-white bg-opacity-80 rounded-xl shadow-md px-2 lg:px-4"
						/>
					</div>

					<div className="space-y-5 lg:space-y-0 lg:pt-5 pb-10 lg:pb-0">
						<h2 className="text-xl text-center lg:text-2xl font-bold sponsors lg:pb-2">
							Distribuidor oficial en la Republica Argentina de:
						</h2>
						<img
							src="/fitok.png"
							alt="Fitok"
							className="w-64 aspect-square lg:w-72 mx-auto object-contain bg-white rounded-xl bg-opacity-80 lg:bg-opacity-60 shadow-md px-2 lg:px-4"
						/>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Inicio;
