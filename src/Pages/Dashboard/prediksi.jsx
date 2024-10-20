import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const datasetsB = [

	//iryna
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan1",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap1",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak1",
	},

	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan2",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap2",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak2",
	},
];


export default function Prediksi(props) {


	const [dataB, setDataB] = React.useState({

		irynan1: [],
		irynap1: [],
		irynak1: [],
		irynan2: [],
		irynap2: [],
		irynak2: [],

	});




	React.useEffect(() => {

		datasetsB.forEach((datasetB) => {
			console.log("datasetB", datasetB);
			axios
				.get("https://api-sf2.vercel.app/forecast", {
					params: {
						device_id: datasetB.device_id,
						index_id: datasetB.index_id,
					},
				})
				.then((res) => {
					setDataB((prevState) => ({
						...prevState,
						[datasetB.elementId]: res.data || [],
					}));

				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});
	}, []);


    const combinedChartData = {
        labels: dataB.irynan1.slice().reverse().map(item => new Date(item.timestamp).toLocaleString()),
        datasets: [
            {
                label: "n1",
                data: dataB.irynan1.slice().reverse().map(item => item.predicted_value),
                fill: false,
                backgroundColor: "rgba(153,102,255,1)",
                borderColor: "rgba(153,102,255,1)",
            },
            {
                label: "p1",
                data: dataB.irynap1.slice().reverse().map(item => item.predicted_value),
                fill: false,
                backgroundColor: "rgba(255,159,64,1)",
                borderColor: "rgba(255,159,64,1)",
            },
            {
                label: "k1",
                data: dataB.irynak1.slice().reverse().map(item => item.predicted_value),
                fill: false,
                backgroundColor: "rgba(255,206,86,1)",
                borderColor: "rgba(255,206,86,1)",
            }
        ]
    };

	const combinedChartData1 = {
        labels: dataB.irynan2.slice().reverse().map(item => new Date(item.timestamp).toLocaleString()),
        datasets: [
            {
                label: "n2",
                data: dataB.irynan2.slice().reverse().map(item => item.predicted_value),
                fill: false,
                backgroundColor: "rgba(153,102,255,1)",
                borderColor: "rgba(153,102,255,1)",
            },
            {
                label: "p2",
                data: dataB.irynap2.slice().reverse().map(item => item.predicted_value),
                fill: false,
                backgroundColor: "rgba(255,159,64,1)",
                borderColor: "rgba(255,159,64,1)",
            },
            {
                label: "k2",
                data: dataB.irynak2.slice().reverse().map(item => item.predicted_value),
                fill: false,
                backgroundColor: "rgba(255,206,86,1)",
                borderColor: "rgba(255,206,86,1)",
            }
        ]
    };

    const chartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Value",
                },
                ticks: {
                    stepSize: 10,
                },
            },
        },
    };



	return (
		<Template userName="Fikri Rida P" title="Prediksi NPK dan Kebutuhan Nutrisi" page={Pages.Prediksi}>
			<div className="container-fluid">

				<div className="row">
					<div className="col-auto">


						
					<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
                            <div className="flex flex-col w-full p-5">
                                <div className="flex gap-5 text-sm tracking-normal w-full">
                                    <div className="flex flex-col gap-3 w-full">
                                        <h2 className="text-2xl font-semibold tracking-tight text-black">
                                            Prediksi Nutrisi
                                        </h2>
                                        <div className="text-teal-500">Prediksi kebutuhan nutrisi untuk masa yang akan datang</div>

                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={combinedChartData} options={chartOptions} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={combinedChartData1} options={chartOptions} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


						<section className="grid grid-cols-1 gap-4 mt-12">
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span style={{ color: '#FFFFFF' }} className="text-center">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</span>
									</div>
								</div>
							</div>
						</section>
						
					</div>
				</div>
			</div>
		</Template>
	);
}
