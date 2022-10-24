const Inicio = () => {
	return (
		<main className="min-h-[calc(100vh-80px)] bg-hero-pattern bg-no-repeat bg-cover bg-center hero pt-24">
			<h1 className="text-center text-7xl lg:text-8xl pt-20 font-bold sonda">
				Sonda SRL
			</h1>

			<section className="text-white mt-20 container mx-auto flex flex-col lg:flex-row lg:justify-between items-center space-y-10 lg:space-y-0">
				<div className="space-y-5 lg:space-y-0 lg:pt-10">
					<h2 className="text-xl lg:text-2xl font-bold sponsors">
						Representantes oficiales de:
					</h2>
					<img
						src="/emerson.png"
						alt="Emerson"
						className="w-64 aspect-square lg:w-72 mx-auto object-contain"
					/>
				</div>

				<div className="space-y-5 lg:space-y-0 lg:pt-10">
					<h2 className="text-xl text-center lg:text-2xl font-bold  sponsors">
						Distribuidor oficial en la Republica Argentina de:
					</h2>
					<img
						src="/fitok.png"
						alt="Fitok"
						className="w-64 aspect-square lg:w-72 mx-auto object-contain"
					/>
				</div>
			</section>
		</main>
	);
};

export default Inicio;
