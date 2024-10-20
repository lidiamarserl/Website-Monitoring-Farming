import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import * as React from "react";
import { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Chart from "react-apexcharts"; // Import ApexCharts untuk React
import { Link } from "react-router-dom";


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

];


const datasetsC = [
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


const datasetsD = [
    { name: "A1", elementId: "A1" },
    { name: "A2", elementId: "A2" },
    { name: "A3", elementId: "A3" },
    { name: "A4", elementId: "A4" },
    { name: "A5", elementId: "A5" },
    { name: "A6", elementId: "A6" },
    { name: "B1", elementId: "B1" },
    { name: "B2", elementId: "B2" },
    { name: "B3", elementId: "B3" },
    { name: "B4", elementId: "B4" },
    { name: "B5", elementId: "B5" },
    { name: "B6", elementId: "B6" },
    { name: "C1", elementId: "C1" },
    { name: "C2", elementId: "C2" },
    { name: "C3", elementId: "C3" },
    { name: "C4", elementId: "C4" },
    { name: "C5", elementId: "C5" },
    { name: "C6", elementId: "C6" },
];

const calculateSoilMoisture = (value, max, min) => {
    return value !== undefined ? ((max - value) / (max - min) * 100).toFixed(1) : "Data bernilai 0";
};

const sensorMoistureRanges = {
    "SM C1 R1": { max: 400, min: 162 },
    "SM C1 R2": { max: 340, min: 120 },
    "SM C1 R3": { max: 375, min: 221 },
    "SM C1 R4": { max: 345, min: 119 },
    "SM C1 R5": { max: 310, min: 110 },
    "SM C1 R6": { max: 260, min: 100 },
    "SM C2 R1": { max: 350, min: 88 },
    "SM C2 R2": { max: 345, min: 120 },
    "SM C2 R3": { max: 351, min: 30 },
    "SM C2 R4": { max: 250, min: 91 },
    "SM C2 R5": { max: 325, min: 90 },
    "SM C2 R6": { max: 285, min: 95 },
    "SM C3 R1": { max: 700, min: 280 },
    "SM C3 R2": { max: 400, min: 162 },
    "SM C3 R3": { max: 425, min: 50 },
    "SM C3 R4": { max: 320, min: 70 },
    "SM C3 R5": { max: 320, min: 98 },
    "SM C3 R6": { max: 295, min: 90 }
};

// Fungsi untuk mendapatkan nilai display
const getDisplayValue = (sensorName, value) => {
    // Jika value kurang dari atau sama dengan 0, kembalikan nilai langsung
    if (value <= 0) {
        return { display: value, isRed: true };
    }
    
    // Check if sensorName contains "SM"
    if (sensorName.includes("SM")) {
        const range = sensorMoistureRanges[sensorName];
        if (range) {
            return { display: calculateSoilMoisture(value, range.max, range.min) + "%", isRed: false };
        }
    }
    
    // Check if sensorName contains "PH" or "pH"
    if (sensorName.includes("PH") || sensorName.includes("pH")) {
        return { display: (value * 10).toFixed(1), isRed: false };
    }
    
    // Default value
    return { display: parseFloat(value).toFixed(1), isRed: false };
};

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
	});
	

	const [dataC, setDataC] = React.useState({

		irynan1: [],
		irynap1: [],
		irynak1: [],
		irynan2: [],
		irynap2: [],
		irynak2: [],

	});

	
    const [dataD, setDataD] = useState({
        A1: [], A2: [], A3: [], A4: [], A5: [], A6: [],
        B1: [], B2: [], B3: [], B4: [], B5: [], B6: [],
        C1: [], C2: [], C3: [], C4: [], C5: [], C6: [],
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDataset, setSelectedDataset] = useState(""); // Updated state to include "Rata-rata"
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requests = datasetsD.map((datasetD) =>
                    axios.get("https://api-sf2.vercel.app/plant", {
                        params: { name: datasetD.name },
                    }).then((res) => ({
                        id: datasetD.elementId,
                        data: Array.isArray(res.data) ? res.data : [],
                    }))
                );

                const results = await Promise.all(requests);
                const newData = results.reduce((acc, result) => {
                    acc[result.id] = result.data;
                    return acc;
                }, {});
                setDataD(newData);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data", err);
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
        
        
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
		
		
		datasetsC.forEach((datasetC) => {
			console.log("datasetC", datasetC);
			axios
				.get("https://api-sf2.vercel.app/forecast", {
					params: {
						device_id: datasetC.device_id,
						index_id: datasetC.index_id,
					},
				})
				.then((res) => {
					setDataC((prevState) => ({
						...prevState,
						[datasetC.elementId]: res.data || [],
					}));

				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});
            
        
    }, []);
    
       
	React.useEffect(() => {
		if (dataC.irynan1.length && dataB.musan1.length) {
			let nAnalysis = "Pemberian Natrium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let pAnalysis = "Pemberian Fosfor sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let kAnalysis = "Pemberian Kalium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";

			const irynan1 = dataC.irynan1[0]?.predicted_value || 0;
			const musan1 = dataB.musan1[0]?.value || 0;
			const irynap1 = dataC.irynap1[0]?.predicted_value || 0;
			const musap1 = dataB.musap1[0]?.value || 0;
			const irynak1 = dataC.irynak1[0]?.predicted_value || 0;
			const musak1 = dataB.musak1[0]?.value || 0;

			if (irynan1 !== musan1) {
				if (irynan1 < musan1) {
					nAnalysis = `Natrium yang diberikan lebih sebanyak ${musan1 - irynan1}`;
				} else {
					nAnalysis = `Natrium yang diberikan kurang sebanyak ${irynan1 - musan1}`;
				}
			}

			if (irynap1 !== musap1) {
				if (irynap1 < musap1) {
					pAnalysis = `Fosfor  yang diberikan lebih sebanyak ${musap1 - irynap1}`;
				} else {
					pAnalysis = `Fosfor  yang diberikan kurang sebanyak ${irynap1 - musap1}`;
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
		if (dataC.irynan2.length && dataB.musan2.length) {
			let nAnalysis1 = "Pemberian Natrium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let pAnalysis1 = "Pemberian Fosfor sudah sesuai dengan jumlah nutrisi yang dibutuhkan";
			let kAnalysis1 = "Pemberian Kalium sudah sesuai dengan jumlah nutrisi yang dibutuhkan";

			const irynan2 = dataC.irynan2[0]?.predicted_value || 0;
			const musan2 = dataB.musan2[0]?.value || 0;
			const irynap2 = dataC.irynap2[0]?.predicted_value || 0;
			const musap2 = dataB.musap2[0]?.value || 0;
			const irynak2 = dataC.irynak2[0]?.predicted_value || 0;
			const musak2 = dataB.musak2[0]?.value || 0;

			if (irynan2 !== musan2) {
				if (irynan2 < musan2) {
					nAnalysis1 = `Natrium yang diberikan lebih sebanyak ${musan2 - irynan2} bagian`;
				} else {
					nAnalysis1 = `Natrium yang diberikan kurang sebanyak ${irynan2 - musan2} bagian`;
				}
			}

			if (irynap2 !== musap2) {
				if (irynap2 < musap2) {
					pAnalysis1 = `Fosfor  yang diberikan lebih sebanyak ${musap2 - irynap2} bagian`;
				} else {
					pAnalysis1 = `Fosfor  yang diberikan kurang sebanyak ${irynap2 - musap2} bagian`;
				}
			}

			if (irynak2 !== musak2) {
				if (irynak2 < musak2) {
					kAnalysis1 = `Kalium  yang diberikan lebih sebanyak ${musak2 - irynak2} bagian`;
				} else {
					kAnalysis1 = `Kalium  yang diberikan kurang sebanyak ${irynak2 - musak2} bagian`;
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
        if (!selectedDataset || selectedDataset === "Rata-rata") {
            const allData = Object.values(dataD).flat();
            const averagedData = {};
            allData.forEach(item => {
                const date = new Date(item.createdAt).toLocaleDateString();
                if (!averagedData[date]) averagedData[date] = { total: 0, count: 0 };
                averagedData[date].total += item[type];
                averagedData[date].count += 1;
            });
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
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        return sortedData;
    };

    const buahData = getChartData('buah') || [];
    const bungaData = getChartData('flower') || [];
    const tinggiData = getChartData('height') || [];
    const daunData = getChartData('leaf') || [];
    
    const combinedChart = {
        labels: buahData.map(item => item.date || ""),
        datasets: [
            {
                label: selectedDataset ? `Tinggi ${selectedDataset}` : "Tinggi",
                data: tinggiData.map(item => item.value || 0),
                borderColor: "#1A56DB",
                backgroundColor: "rgba(26, 86, 219, 0.5)",
                fill: false,
            },
            {
                label: selectedDataset ? `Daun ${selectedDataset}` : "Daun",
                data: daunData.map(item => item.value || 0),
                borderColor: "#7E3BF2",
                backgroundColor: "rgba(126, 59, 242, 0.5)",
                fill: false,
            },
            {
                label: selectedDataset ? `Bunga ${selectedDataset}` : "Bunga",
                data: bungaData.map(item => item.value || 0),
                borderColor: "#FF6384",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                fill: false,
            },
            {
                label: selectedDataset ? `Buah ${selectedDataset}` : "Buah",
                data: buahData.map(item => item.value || 0),
                borderColor: "#FFCE56",
                backgroundColor: "rgba(255, 206, 86, 0.5)",
                fill: false,
            }
        ]
    };

    const combinedChartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Tanggal Pengukuran",
                },
                ticks: {
                    font: {
                        family: "Poppins, sans-serif",
                        size: 10,
                        weight: 'normal',
                        color: "#6B7280"
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Nilai",
                },
                ticks: {
                    font: {
                        family: "Poppins, sans-serif",
                        size: 10,
                        weight: 'normal',
                        color: "#6B7280"
                    },
                    stepSize: 1,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#6B7280",
                    font: {
                        family: "Poppins, sans-serif",
                        size: 8,
                    },
                    usePointStyle: true, // Use circular legend symbols
                    pointStyle: "circle",
                }
            }
        },
        maintainAspectRatio: false // Memungkinkan grafik mengisi ruang yang lebih tinggi
    };

    return (
        <Template userName="Fikri Rida P" title="Dashboard" page={Pages.Dashboard}>
            <div className="container-fluid p-4 font-sans">
                        {/* Menggunakan grid dengan gap yang minimal dan tinggi otomatis */}
                        <div className="grid gap-1 h-auto">
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-auto pb-4">
                                {/* Konten Kolom 1 */}
                                <div className="col-span-1 w-full bg-white rounded-[30px] shadow dark:bg-gray-800 h-auto">
                                    <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
                                        <div>
                                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Data Pertumbuhan Tanaman</p>
                                        </div>
                                    </div>
                                    <div id="labels-chart" className="px-2.5" style={{ height: '250px' }}> {/* Meningkatkan tinggi grafik */}
                                        <Line data={combinedChart} options={combinedChartOptions} />
                                    </div>
                                    <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-0 p-2 md:p-4 pt-0 md:pt-0">
                                        <div className="flex justify-between items-center pt-2">
                                            {/* Dropdown Button */}
                                            <button
                                                id="dropdownDefaultButton"
                                                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            >
                                                {selectedDataset ? (selectedDataset === "Rata-rata" ? "Rata-rata" : `Dataset ${selectedDataset}`) : "Pilih Dataset"}
                                                <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                                </svg>
                                            </button>
                                            {/* Dropdown Content */}
                                            {isDropdownOpen && (
                                            <div id="lastDaysdropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <a
                                                            onClick={() => {
                                                                setSelectedDataset("Rata-rata");
                                                                setIsDropdownOpen(false); // Tutup dropdown setelah memilih item
                                                            }}
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                                        >
                                                        Rata-rata
                                                        </a>
                                                        </li>
                                                        {datasetsD.map((dataset) => (
                                                        <li key={dataset.elementId}>
                                                            <a
                                                                onClick={() => {
                                                                    setSelectedDataset(dataset.elementId);
                                                                    setIsDropdownOpen(false); // Tutup dropdown setelah memilih item
                                                                }}
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                                            >
                                                                {dataset.name}
                                                            </a>
                                                        </li>
                                                        ))}
                                                </ul>
                                            </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tabel Content - Kolom 2 */}
                                <div className="col-span-2 bg-white shadow rounded-[30px] p-4 sm:p-6 xl:p-8 h-auto">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Kandungan NPK</h3>
                                            <span className="text-base font-normal text-gray-500">Jumlah NPK pada tanah dan keterangan pemberian sesuai prediksi kebutuhan nutrisi</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-0">
                                        <div className="overflow-x-auto rounded-lg">
                                            <div className="align-middle inline-block min-w-full">
                                                <div className="shadow overflow-hidden sm:rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-50">
                                                            <tr className="py-0.5">
                                                                <th scope="col" className="p-1 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                                    Nama
                                                                </th>
                                                                <th scope="col" className="p-1 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                                    Nilai
                                                                </th>
                                                                <th scope="col" className="p-1 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                                    Keterangan
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white">
                                                            {/* Konten tabel */}
                                                            <tr className="py-0.5">
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">Natrium 1</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-500">{dataB.musan1[0]?.value}</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">{analysis.nAnalysis}</td>
                                                            </tr>
                                                            <tr className="bg-gray-50 py-0.5">
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">Natrium 2</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-500">{dataB.musan2[0]?.value}</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">{analysis1.nAnalysis1}</td>
                                                            </tr>
                                                            <tr className="py-0.5">
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">Fosfor 1</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-500">{dataB.musap1[0]?.value}</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">{analysis.pAnalysis}</td>
                                                            </tr>
                                                            <tr className="bg-gray-50 py-0.5">
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">Fosfor 2</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-500">{dataB.musap2[0]?.value}</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">{analysis1.pAnalysis1}</td>
                                                            </tr>
                                                            <tr className="py-0.5">
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">Kalium 1</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-500">{dataB.musap1[0]?.value}</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">{analysis.pAnalysis}</td>
                                                            </tr>
                                                            <tr className="bg-gray-50 py-0.5">
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">Kalium 2</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-500">{dataB.musap2[0]?.value}</td>
                                                                <td className="p-1 whitespace-nowrap text-sm font-normal text-gray-900">{analysis1.pAnalysis1}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Row 2 */}
                            <div className="mt-1 p-1 rounded-[30px] container mx-auto">
                                {/* Sort anomalyData based on sensorName */}
                                 {/* Pengelompokan anomalyData berdasarkan kata pertama dari sensorName */}
                                {(() => {
                                    const groupedData = anomalyData.reduce((groups, item) => {
                                        const device = devicesData.find(d => d.token === item.device_id);
                                        const deviceName = device ? device.name : '';
                                        const datasetIndex = datasetIndexData.find(d => d._id === item.index_id);
                                        const datasetIndexName = datasetIndex ? datasetIndex.name : '';
        
                                        let sensorName = `${deviceName} ${datasetIndexName}`.trim();
                                        const commonPrefix = deviceName.split(' ')[0]; // Ambil kata pertama dari deviceName
        
                                        if (datasetIndexName.startsWith(commonPrefix)) {
                                            sensorName = deviceName + datasetIndexName.replace(commonPrefix, '');
                                        }
        
                                        // Ambil kata pertama dari sensorName
                                        const firstWord = sensorName.split(' ')[0];
        
                                        // Kelompokkan berdasarkan kata pertama
                                        if (!groups[firstWord]) {
                                            groups[firstWord] = [];
                                        }
                                        groups[firstWord].push({ ...item, sensorName });
        
                                        return groups;
                                    }, {});
        
                                    // Render kelompok data
                                    return Object.keys(groupedData).map((group, groupIndex) => (
                                        // Setiap kelompok ada di row baru
                                        <div key={groupIndex} className="mb-6 w-full">
                                            {/* Nama kelompok */}
                                            <div className="text-lg font-bold mb-2">{group}</div>
                                            {/* Tampilan item untuk kelompok tersebut */}
                                            <div className="flex flex-wrap gap-2 justify-start w-full">
                                                {groupedData[group].map((item, index) => {
                                                    const datalistItem = datalistData.find(d => d.device_id === item.device_id && d.index_id === item.index_id);
                                                    const value = datalistItem ? datalistItem.value : item.value;
        
                                                    // Tentukan keterangan berdasarkan sensorName
                                                    let keterangan = "Device tidak berlabel";
                                                    if (item.sensorName.includes("SM")) {
                                                        keterangan = "Kelembaban tanah";
                                                    } else if (item.sensorName.includes("ST") || item.sensorName.includes("Suhu Tanah")) {
                                                        keterangan = "Suhu tanah";
                                                    } else if (item.sensorName.includes("PH") || item.sensorName.includes("pH")) {
                                                        keterangan = "pH tanah";
                                                    } else if (item.sensorName.includes("NPK")) {
                                                        keterangan = "NPK tanah";
                                                    } else if (item.sensorName.includes("DHT")) {
                                                        keterangan = "Suhu dan Kelembaban udara";
                                                    } else if (item.sensorName.includes("EC") || item.sensorName.includes("TDS")) {
                                                        keterangan = "Kekentalan larutan";
                                                    }
        
                                                    const detailUrl = `/dashboard/${item.device_id}/${item.index_id}`;
        
                                                    return (
                                                        <Link to={detailUrl} key={index} className="w-full md:w-[45%] lg:w-[30%] block hover:bg-slate-100">
                                                            <div className="w-full bg-white p-1 rounded-[30px] shadow justify-center justify-items-center hover:bg-slate-200 transition duration-300 ease-in-out">
                                                                <div className="w-full flex flex-col px-2 py-3 items-center justify-center">
                                                                    <p className="text-teal-500 text-center mt-0">{item.sensorName}</p>
                                                                    {(() => {
                                                                        const { display, isRed } = getDisplayValue(item.sensorName, value);
                                                                        return (
                                                                            <p className={`text-center text-2xl ${isRed ? 'text-red' : ''} mb-0`}>
                                                                                {display}
                                                                            </p>
                                                                        );
                                                                    })()}
                                                                    <div className="font-light text-center text-xs mt-0">{keterangan}</div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ));
                                })()}
                        
                        
                            </div>

</div>
            </div>
        </Template>
    );

}



