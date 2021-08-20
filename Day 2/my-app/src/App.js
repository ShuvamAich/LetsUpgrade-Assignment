import "./App.css";
import Card from "./Card";

function App() {
	const services = [
		{
			title: "Nike Air Force 1",
			subtitle: "Women",
			desc: "Rs 8195/-",
			image:
				"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6624238-99c1-40ab-8132-07329971d01e/air-force-1-07-essential-shoe-V4G9F0.png",
		},
		{
			title: "Zoom Freak 3",
			subtitle: "Men",
			desc: "Rs 10895/-",
			image:
				"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/df5b92f4-e81d-4b72-8079-9178792ee27c/zoom-freak-3-basketball-shoe-B9NrxN.png",
		},
		{
			title: "Nike Air Zoom GT Run",
			subtitle: "Men",
			desc: "Rs 16595/-",
			image:
				"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/29600c37-6843-46ee-93b6-80434249b9bb/air-zoom-gtrun-basketball-shoes-Ls9vF6.png",
		},
		{
			title: "PG 5 EP",
			subtitle: "Men",
			desc: "Rs 7437/-",
			image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9533b1f-98f7-4908-907d-88c2dc7fb8bf/pg-5-ep-basketball-shoes-Gk5ZV1.png",
		},
		{
			title: "Zoom Freak 2",
			subtitle: "Men",
			desc: "Rs 8237/-",
			image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fc03880-4cfd-447a-9e9f-625e23deae75/zoom-freak-2-basketball-shoe-m37Xsn.png",
		},
		{
			title: "Giannis Immortality",
			subtitle: "Men",
			desc: "Rs 6795/-",
			image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e17c545f-13a3-4839-8789-858b8851c665/giannis-immortality-basketball-shoes-X7QzFT.png",
		},
	];

	return (
		<div className="App">
			<h1 className="title">Nike Shoes</h1>
			<br />
			<br />
			<div className="container">
				{services.map((service, index) => (
					<Card
						key={index}
						title={service.title}
						subtitle={service.subtitle}
						desc={service.desc}
						image={service.image}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
