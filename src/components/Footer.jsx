import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className="p-2 h-20 bg-slate-700 flex items-center  text-white">
			<div className="flex flex-col space-y-2 lg:flex-row items-center justify-between container mx-auto">
				<div className="flex items-center space-x-2">
					<ImLocation2 size={30} />
					<span>Calle 23 # 2044, La Plata, Buenos Aires, Argentina</span>
				</div>

				<div className="flex justify-center space-x-20">
					<a
						href="https://www.linkedin.com/company/sonda-srl/"
						target="_BLANK"
						className="flex items-center space-x-2"
					>
						<AiFillLinkedin size={30} />
						<span>LinkedIn</span>
					</a>

					<div className="flex items-center space-x-2">
						<BsFillTelephoneFill size={30} />
						<span>(111) 111 111</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
