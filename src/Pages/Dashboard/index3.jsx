import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import * as React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "chart.js/auto";


const datasetsB = [
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khaliwaktu",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khalipersen",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "musan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "musap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "musak1",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8465a0c89673d266101",
		elementId: "musan2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8275a0c89673d266100",
		elementId: "musap2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8505a0c89673d266102",
		elementId: "musak2",
	},

	//iryna
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak1",
	},

	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak2",
	},
];

//tanaman
const datasetsD = [
	{
		name: "A1",
		elementId: "A1",
	},
	{
		name: "A2",
		elementId: "A2",
	},
	{
		name: "A3",
		elementId: "A3",
	},
	{
		name: "A4",
		elementId: "A4",
	},
	{
		name: "A5",
		elementId: "A5",
	},
	{
		name: "A6",
		elementId: "A6",
	},

	{
		name: "B1",
		elementId: "B1",
	},
	{
		name: "B2",
		elementId: "B2",
	},
	{
		name: "B3",
		elementId: "B3",
	},
	{
		name: "B4",
		elementId: "B4",
	},
	{
		name: "B5",
		elementId: "B5",
	},
	{
		name: "B6",
		elementId: "B6",
	},
	{
		name: "C1",
		elementId: "C1",
	},
	{
		name: "C2",
		elementId: "C2",
	},
	{
		name: "C3",
		elementId: "C3",
	},
	{
		name: "C4",
		elementId: "C4",
	},
	{
		name: "C5",
		elementId: "C5",
	},
	{
		name: "C6",
		elementId: "C6",
	},
];

export default function Dashboard() {
    
	const [dataB, setDataB] = React.useState({
		khaliwaktu: [],
		khalipersen: [],
		musan1: [],
		musap1: [],
		musak1: [],
		musan2: [],
		musap2: [],
		musak2: [],
		irynan1: [],
		irynap1: [],
		irynak1: [],
		irynan2: [],
		irynap2: [],
		irynak2: [],

	});
	
	
	const [dataD, setDataD] = React.useState({
		A1: [],
		A2: [],
		A3: [],
		A4: [],
		A5: [],
		A6: [],
		B1: [],
		B2: [],
		B3: [],
		B4: [],
		B5: [],
		B6: [],
		C1: [],
		C2: [],
		C3: [],
		C4: [],
		C5: [],
		C6: [],
	});
	
    const [anomalyData, setAnomalyData] = useState([]);
    const [devicesData, setDevicesData] = useState([]);
    const [datasetIndexData, setDatasetIndexData] = useState([]);
    const [datalistData, setDatalistData] = useState([]);
    
    
	const [analysis, setAnalysis] = React.useState({
		nAnalysis: "Pemberian Natrium sudah sesuai dengan jumlah nutrisi yang dibutuhkan",
		pAnalysis: "Pemberian Fosfor sudah sesuai dengan jumlah nutrisi yang dibutuhkan",
		kAnalysis: "Pemberian Kalium sudah sesuai dengan jumlah nutrisi yang dibutuhkan"
	});
	const [analysis1, setAnalysis1] = React.useState({
		nAnalysis1: "Pemberian Natrium sudah sesuai dengan jumlah nutrisi yang dibutuhkan",
		pAnalysis1: "Pemberian Fosfor sudah sesuai dengan jumlah nutrisi yang dibutuhkan",
		kAnalysis1: "Pemberian Kalium sudah sesuai dengan jumlah nutrisi yang dibutuhkan"
	});
	
	
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(null);
	const [selectedDataset, setSelectedDataset] = React.useState("");


    useEffect(() => {
        axios.get("https://api-sf2.vercel.app/anomalyDetection2")
            .then((res) => {
                setAnomalyData(res.data);
            })
            .catch((err) => console.log("Error fetching anomaly data:", err));

        axios.get("https://api-sf2.vercel.app/devices")
            .then((res) => {
                setDevicesData(res.data);
            })
            .catch((err) => console.log("Error fetching devices data:", err));

        axios.get("https://api-sf2.vercel.app/datasetindex")
            .then((res) => {
                setDatasetIndexData(res.data);
            })
            .catch((err) => console.log("Error fetching dataset index data:", err));
        
        axios.get("https://api-sf2.vercel.app/datalist2")
            .then((res) => {
                setDatalistData(res.data);
            })
            .catch((err) => console.log("Error fetching datalist data:", err));
            
        
		const fetchData = async () => {
			try {
				// Menggunakan Promise.all untuk melakukan permintaan API paralel untuk datasetsD
				const requests = datasetsD.map((datasetD) =>
					axios.get("https://api-sf2.vercel.app/plant", {
						params: {
							name: datasetD.name,
						},
					}).then((res) => ({
						id: datasetD.elementId,
						data: Array.isArray(res.data) ? res.data : [], // Memastikan data yang dikembalikan valid
					}))
				);

				// Menunggu semua permintaan API selesai
				const results = await Promise.all(requests);

				// Mereduksi hasil menjadi objek yang sesuai dengan state
				const newData = results.reduce((acc, result) => {
					acc[result.id] = result.data;
					return acc;
				}, {});

				// Mengatur state dengan data baru
				setDataD(newData);
				setLoading(false); // Indikator data sudah dimuat
			} catch (err) {
				console.error("Error fetching data", err);
				setError(err);
				setLoading(false); // Tetap mengatur loading ke false meskipun terjadi kesalahan
			}
		};

		fetchData();
		
		datasetsB.forEach((datasetB) => {
			console.log("datasetB", datasetB);
			axios
				// .get("https://api.sf2.ctailab.com/datalist", {
				.get("https://api-sf2.vercel.app/datalist", {
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
    
    
    
	React.useEffect(() => {
		if (dataB.irynan1.length && dataB.musan1.length) {
			let nAnalysis = "Pemberian Natrium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let pAnalysis = "Pemberian Fosfor sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let kAnalysis = "Pemberian Kalium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";

			const irynan1 = dataB.irynan2[0]?.value || 0;
			const musan1 = dataB.musan1[0]?.value || 0;
			const irynap1 = dataB.irynap2[0]?.value || 0;
			const musap1 = dataB.musap1[0]?.value || 0;
			const irynak1 = dataB.irynak1[0]?.value || 0;
			const musak1 = dataB.musak1[0]?.value || 0;

			if (irynan1 !== musan1) {
				if (irynan1 < musan1) {
					nAnalysis = `Natrium yang diberikan kurang sebanyak ${musan1 - irynan1}`;
				} else {
					nAnalysis = `Natrium yang diberikan lebih sebanyak ${irynan1 - musan1}`;
				}
			}

			if (irynap1 !== musap1) {
				if (irynap1 < musap1) {
					pAnalysis = `Fosfor  yang diberikan kurang sebanyak ${musap1 - irynap1}`;
				} else {
					pAnalysis = `Fosfor  yang diberikan lebih sebanyak ${irynap1 - musap1}`;
				}
			}

			if (irynak1 !== musak1) {
				if (irynak1 < musak1) {
					kAnalysis = `Kalium  yang diberikan lebih sebanyak ${musak1 - irynak1}`;
				} else {
					kAnalysis = `Kalium  yang diberikan kurang sebanyak ${irynak1 - musak1}`;
				}
			}

			setAnalysis({
				nAnalysis,
				pAnalysis,
				kAnalysis
			});
		}
	}, [dataB]);

	React.useEffect(() => {
		if (dataB.irynan2.length && dataB.musan2.length) {
			let nAnalysis1 = "Pemberian Natrium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let pAnalysis1 = "Pemberian Fosfor sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let kAnalysis1 = "Pemberian Kalium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";

			const irynan2 = dataB.irynan2[0]?.value || 0;
			const musan2 = dataB.musan2[0]?.value || 0;
			const irynap2 = dataB.irynap2[0]?.value || 0;
			const musap2 = dataB.musap2[0]?.value || 0;
			const irynak2 = dataB.irynak2[0]?.value || 0;
			const musak2 = dataB.musak2[0]?.value || 0;

			if (irynan2 !== musan2) {
				if (irynan2 < musan2) {
					nAnalysis1 = `Natrium yang diberikan kurang sebanyak ${musan2 - irynan2}`;
				} else {
					nAnalysis1 = `Natrium yang diberikan lebih sebanyak ${irynan2 - musan2}`;
				}
			}

			if (irynap2 !== musap2) {
				if (irynap2 < musap2) {
					pAnalysis1 = `Fosfor  yang diberikan kurang sebanyak ${musap2 - irynap2}`;
				} else {
					pAnalysis1 = `Fosfor  yang diberikan lebih sebanyak ${irynap2 - musap2}`;
				}
			}

			if (irynak2 !== musak2) {
				if (irynak2 < musak2) {
					kAnalysis1 = `Kalium  yang diberikan lebih sebanyak ${musak2 - irynak2}`;
				} else {
					kAnalysis1 = `Kalium  yang diberikan kurang sebanyak ${irynak2 - musak2}`;
				}
			}

			setAnalysis1({
				nAnalysis1,
				pAnalysis1,
				kAnalysis1
			});
		}
	}, [dataB]);

	
	const getChartData = (type) => {
		if (!selectedDataset) {
			const allData = Object.values(dataD).flat();
			const averagedData = {};
			allData.forEach(item => {
				const date = new Date(item.createdAt).toLocaleDateString();
				if (!averagedData[date]) averagedData[date] = { total: 0, count: 0 };
				averagedData[date].total += item[type];
				averagedData[date].count += 1;
			});
			// Mengurutkan data berdasarkan tanggal dari paling awal ke paling terbaru
			const sortedAveragedData = Object.entries(averagedData)
				.map(([date, { total, count }]) => ({
					date, value: total / count,
				}))
				.sort((a, b) => new Date(a.date) - new Date(b.date));
	
			return sortedAveragedData;
		}
	
		const sortedData = dataD[selectedDataset]
			.map(item => ({
				date: new Date(item.createdAt).toLocaleDateString(),
				value: item[type]
			}))
			.sort((a, b) => new Date(a.date) - new Date(b.date)); // Urutkan dari yang paling awal ke yang paling terbaru
	
		return sortedData;
	};
	

	const buahData = getChartData('buah');
	const bungaData = getChartData('flower');
	const tinggiData = getChartData('height');
	const daunData = getChartData('leaf');

	const buahChart = {
		labels: buahData.map(item => item.date),
		datasets: [{
			label: selectedDataset ? `buah ${selectedDataset}` : "Rata-rata buah",
			data: buahData.map(item => item.value),
			fill: false,
			backgroundColor: "rgba(54, 162, 235, 0.5)",
			borderColor: "rgba(54, 162, 235, 1)",
		}]
	};

	const bungaChart = {
		labels: bungaData.map(item => item.date),
		datasets: [{
			label: selectedDataset ? `bunga ${selectedDataset}` : "Rata-rata bunga",
			data: bungaData.map(item => item.value),
			fill: false,
			backgroundColor: "rgba(255, 99, 132, 0.5)",
			borderColor: "rgba(255, 99, 132, 1)",
		}]
	};

	const tinggiChart = {
		labels: tinggiData.map(item => item.date),
		datasets: [{
			label: selectedDataset ? `tinggi ${selectedDataset}` : "Rata-rata tinggi",
			data: tinggiData.map(item => item.value),
			fill: false,
			backgroundColor: "rgba(75, 192, 192, 0.5)",
			borderColor: "rgba(75, 192, 192, 1)",
		}]
	};

	const daunChart = {
		labels: daunData.map(item => item.date),
		datasets: [{
			label: selectedDataset ? `daun ${selectedDataset}` : "Rata-rata daun",
			data: daunData.map(item => item.value),
			fill: false,
			backgroundColor: "rgba(153, 102, 255, 0.5)",
			borderColor: "rgba(153, 102, 255, 1)",
		}]
	};

	const optionsBuah = {
		scales: {
			x: {
				title: {
					display: true,
					text: "Tanggal Pengukuran",
				},
			},
			y: {
				title: {
					display: true,
					text: "Jumlah Buah",
				},
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
			}
		}
	};

	const optionsBunga = {
		scales: {
			x: {
				title: {
					display: true,
					text: "Tanggal Pengukuran",
				},
			},
			y: {
				title: {
					display: true,
					text: "Jumlah Bunga",
				},
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
			}
		}
	};

	const optionsTinggi = {
		scales: {
			x: {
				title: {
					display: true,
					text: "Tanggal Pengukuran",
				},
			},
			y: {
				title: {
					display: true,
					text: "Tinggi Tanaman (CM)",
				},
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
			}
		}
	};

	const optionsDaun = {
		scales: {
			x: {
				title: {
					display: true,
					text: "Tanggal Pengukuran",
				},
			},
			y: {
				title: {
					display: true,
					text: "Jumlah Daun",
				},
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
			}
		}
	};


    return (
        <Template userName="Fikri Rida P" title="Dashboard" page={Pages.Dashboard}>
            <div className="container-fluid">
            
            
						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Pertumbuhan Tanaman
										</h2>
										<div className="text-teal-500">Data Pertumbuhan Tanaman</div>

										<div className="flex items-center mb-5">
											<label className="mr-3 text-gray-700">Pilih Dataset:</label>
											<select
												onChange={(e) => setSelectedDataset(e.target.value)}
												className="p-2 border rounded focus:outline-none w-full sm:w-auto"
												style={{
													backgroundColor: 'white',
													borderColor: 'teal',
													color: 'black',
												}}
											>
												<option value="" style={{ color: 'black' }}>Rata-rata</option>
												{datasetsD.map((dataset) => (
													<option
														key={dataset.elementId}
														value={dataset.elementId}
														style={{
															backgroundColor: 'white',
															color: 'black',
															hover: { backgroundColor: 'teal', color: 'white' },
														}}
													>
														{dataset.name}
													</option>
												))}
											</select>
										</div>

										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={tinggiChart} options={optionsTinggi} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={daunChart} options={optionsDaun} />
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={bungaChart} options={optionsBunga} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={buahChart} options={optionsBuah} />
											</div>
										</div>


									</div>
								</div>
							</div>
						</section>
						
						
						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Nilai NPK Pada Tanah
										</h2>
										<div className="text-teal-500">
											Nilai NPK pada tanah berdasarkan hasil prediksi
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Kode
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Nama
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Nilai
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Keterangan
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												N1
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Natrium
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{dataB.musan1[0]?.value}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{analysis.nAnalysis}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												N2
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Natrium
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{dataB.musan2[0]?.value}
												<br />
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{analysis1.nAnalysis1}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												P1
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Fosfor
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{dataB.musap1[0]?.value}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{analysis.pAnalysis}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												P2
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Fosfor
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{dataB.musap1[0]?.value}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{analysis1.pAnalysis1}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												K1
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Kalium
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{dataB.musak1[0]?.value}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{analysis.kAnalysis}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												K2
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Kalium
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{dataB.musak2[0]?.value}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{analysis1.kAnalysis1}
											</div>
										</div>

									</div>
								</div>
							</div>
						</section>



                <div className="mt-6 p-1 container mx-auto grid grid-cols-3 md:grid-cols-6 gap-5 overflow-y-hidden justify-center justify-items-center">
                    {anomalyData.map((item, index) => {
                        const device = devicesData.find(d => d.token === item.device_id);
                        const deviceName = device ? device.name : '';

                        const datasetIndex = datasetIndexData.find(d => d._id === item.index_id);
                        const datasetIndexName = datasetIndex ? datasetIndex.name : '';

                        const sensorName = `${deviceName} - ${datasetIndexName}`.trim();

                        const datalistItem = datalistData.find(d => d.device_id === item.device_id && d.index_id === item.index_id);
                        const value = datalistItem ? datalistItem.value : item.value;

                        // Tentukan keterangan berdasarkan isi sensorName
                        let keterangan = "Device tidak berlabel";
                        if (sensorName.includes("SM")) {
                            keterangan = "Kelembaban pada tanah";
                        } else if (sensorName.includes("ST") || sensorName.includes("Suhu Tanah")) {
                            keterangan = "Suhu pada tanah";
                        } else if (sensorName.includes("PH") || sensorName.includes("pH")) {
                            keterangan = "pH pada tanah";
                        } else if (sensorName.includes("NPK")){
                            keterangan = "NPK pada tanah";
                        } else if (sensorName.includes("DHT")) {
                            keterangan = "Suhu dan Kelembaban udara";
                        } else if (sensorName.includes("EC") || sensorName.includes("TDS")) {
                            keterangan = "Kekentalan larutan";
                        } 
                        
                        // Gunakan index_id dan device_id untuk membentuk URL
                        const detailUrl = `/dashboard/${item.device_id}/${item.index_id}`;

                        return (
                            <Link to={detailUrl} key={index} className="block">
                            <div
                                key={index}
                                className="bg-white p-1 rounded-md rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] justify-center justify-items-center"
                            >
                                <div>
                                    <p className="text-black mt-2">{sensorName}</p>
                                    <p className="text-black mt-2">{keterangan}</p> {/* Menampilkan keterangan */}
                                    <p
                                        className={`text-2xl font-semibold tracking-tight ${
                                            item.anomaly === 1 ? 'text-red-900' : 'text-sky-900'
                                        }`}
                                    >
                                        {item.anomaly === 1 ? 'Anomali' : 'Normal'}
                                    </p>
                                    <p className="text-black mb-2">{value}</p> {/* Menampilkan nilai value */}
                                </div>
                            </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Template>
    );
}
