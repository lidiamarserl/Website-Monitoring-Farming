import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";

const datasoil = [

	//SM
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "kemaraur1",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "hujanr1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "manualr1",
	},

	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61305378590b802f53935e9a",
		elementId: "kemaraur2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61305378590b802f53935e9a",
		elementId: "hujanr2",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61305378590b802f53935e9a",
		elementId: "manualr2",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "6130523e590b802f53935e99",
		elementId: "kemaraur3",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6130523e590b802f53935e99",
		elementId: "hujanr3",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6130523e590b802f53935e99",
		elementId: "manualr3",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618f89476941b53a5d35606f",
		elementId: "kemaraur4",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618f89476941b53a5d35606f",
		elementId: "hujanr4",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618f89476941b53a5d35606f",
		elementId: "manualr4",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "kemaraur5",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "hujanr5",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "manualr5",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "kemaraur6",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "hujanr6",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "manualr6",
	},

	//sensor lainnya
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork2",
	},
	{
		device_id: "D8fRCvhyRWUNtzfWuhbdb9q5azNkrE4g",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph1",
		sensor_name: "PH1"
	},
	{
		device_id: "lWwWZ7RHI5HToRocg122mLHgmqKsT7F7",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph2",
		sensor_name: "PH2"
	},
	{
		device_id: "BngyuCFVukyQakpJyBug4WubAdpnt2g5",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst1",
		sensor_name: "ST1"
	},
	{
		device_id: "J3c6xgg64gyL8pJ5uCZw69Ec4FJBj97R",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst2",
		sensor_name: "ST1"
	},
	{
		device_id: "AMJ6RHSdwf4XMv2dhPRh8hxnE92exg7U",
		index_id: "638d8677245a8f9cc00b4bcc",
		elementId: "sensordht",
		sensor_name: "DHT"
	},
	{
		device_id: "fPMkkgECQndBCs7eFtha09uy57Qv8Xks",
		index_id: "6129bfebdb963d1d1eaac307",
		elementId: "sensortds1",
		sensor_name: "tds1"
	},
	{
		device_id: "wqZeXsBhFSL6CLzfaUjJsnavudV3WvL7",
		index_id: "6129bfebdb963d1d1eaac307",
		elementId: "sensortds2",
		sensor_name: "tds2"
	},
];

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

//ini buat nampilin anomali di setiap tabel
const datasoilA = [
	{
		sensor_name: "SM_C3R1",
		elementId: "SM_C3R1_1",
	},
	{
		sensor_name: "SM_C2R1",
		elementId: "SM_C2R1_1",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R1_1",
	},
	{
		sensor_name: "SM_C3R2",
		elementId: "SM_C3R2_1",
	},
	{
		sensor_name: "SM_C2R2",
		elementId: "SM_C2R2_1",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R2_1",
	},
	{
		sensor_name: "SM_C3R3",
		elementId: "SM_C3R3_1",
	},
	{
		sensor_name: "SM_C2R3",
		elementId: "SM_C2R3_1",
	},
	{
		sensor_name: "SM_C1R3",
		elementId: "SM_C1R3_1",
	},
	{
		sensor_name: "SM_C3R4",
		elementId: "SM_C3R4_1",
	},
	{
		sensor_name: "SM_C2R4",
		elementId: "SM_C2R4_1",
	},
	{
		sensor_name: "SM_C1R4",
		elementId: "SM_C1R4_1",
	},
	{
		sensor_name: "SM_C3R5",
		elementId: "SM_C3R5_1",
	},
	{
		sensor_name: "SM_C2R5",
		elementId: "SM_C2R5_1",
	},
	{
		sensor_name: "SM_C1R5",
		elementId: "SM_C1R5_1",
	},
	{
		sensor_name: "SM_C3R6",
		elementId: "SM_C3R6_1",
	},
	{
		sensor_name: "SM_C2R6",
		elementId: "SM_C2R6_1",
	},
	{
		sensor_name: "SM_C1R6",
		elementId: "SM_C1R6_1",
	},

	//sensor lainnya
	{
		sensor_name: "NPK1",
		elementId: "NPK1_1",
	},
	{
		sensor_name: "NPK2",
		elementId: "NPK2_1",
	},
	{
		sensor_name: "PH1",
		elementId: "PH1A_1",
	},
	{
		sensor_name: "PH2",
		elementId: "PH2A_1",
	},
	{
		sensor_name: "ST1",
		elementId: "ST1A_1",
	},
	{
		sensor_name: "ST2",
		elementId: "ST2A_1",
	},
	{
		sensor_name: "DHT",
		elementId: "DHTA_1",
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
//

const calculateSoilMoisture = (value, max, min) => {
	return value !== undefined ? ((max - value) / (max - min) * 100).toFixed(2) : "Data bernilai 0";
};

// Function to evaluate soil moisture condition
const evaluateSoilMoisture = (value) => {
	if (value < 0 || value > 100) {
		return "Periksa sensor";
	} else if (value < 50) {
		return "Tanah terlalu kering";
	} else if (value >= 50 && value <= 90) {
		return "Kelembaban tanah sesuai";
	} else if (value > 90) {
		return "Tanah terlalu lembab";
	}
	return "Data tidak valid"; // Jika tidak ada kondisi yang cocok
};

const evaluatePH = (value) => {
	if (value < 0 || value > 1) {
		return "Periksa sensor";
	} else if (value < 0.5) {
		return "Tanah terlalu asam";
	} else if (value >= 0.5 && value <= 0.7) {
		return "PH tanah sesuai";
	} else if (value > 0.7) {
		return "Tanah terlalu basa";
	}
	return "Data tidak valid"; // Jika tidak ada kondisi yang cocok
};

const evaluateST = (value) => {
	if (value < 0 || value > 100) {
		return "Periksa sensor";
	} else if (value < 22) {
		return "Tanah terlalu dingin";
	} else if (value >= 22 && value <= 30) {
		return "Suhu tanah sesuai";
	} else if (value > 30) {
		return "Tanah terlalu panas";
	}
	return "Data tidak valid"; // Jika tidak ada kondisi yang cocok
};

export default function Dashboard() {

	const [soil, setSoil] = React.useState({
		kemaraur1: null,
		hujanr1: null,
		manualr1: null,
		kemaraur2: null,
		hujanr2: null,
		manualr2: null,
		kemaraur3: null,
		hujanr3: null,
		manualr3: null,
		kemaraur4: null,
		hujanr4: null,
		manualr4: null,
		kemaraur5: null,
		hujanr5: null,
		manualr5: null,
		kemaraur6: null,
		hujanr6: null,
		manualr6: null,

		//sensor lain
		sensorn1: null,
		sensorn2: null,
		sensorp1: null,
		sensorp2: null,
		sensork1: null,
		sensork2: null,
		sensorph1: null,
		sensorph2: null,
		sensorst1: null,
		sensorst2: null,
		sensordht: null,
		sensortds1: null,
		sensortds2: null,

	});

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

	//ini nanti buat anomaly tiap tabel
	const [soilA, setSoilA] = React.useState({
		SM_C3R1_1: null,
		SM_C2R1_1: null,
		SM_C1R1_1: null,
		SM_C3R2_1: null,
		SM_C2R2_1: null,
		SM_C1R2_1: null,
		SM_C3R3_1: null,
		SM_C2R3_1: null,
		SM_C1R3_1: null,
		SM_C3R4_1: null,
		SM_C2R4_1: null,
		SM_C1R4_1: null,
		SM_C3R5_1: null,
		SM_C2R5_1: null,
		SM_C1R5_1: null,
		SM_C3R6_1: null,
		SM_C2R6_1: null,
		SM_C1R6_1: null,
		//sensor lain
		NPK1_1: null,
		NPK2_1: null,
		PH1A_1: null,
		PH2A_1: null,
		ST1A_1: null,
		ST2A_1: null,
		DHTA_1: null,
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

	const soilMoistureCalculations = {
		kemaraur1: calculateSoilMoisture(soil.kemaraur1?.value, 450, 280),
		hujanr1: calculateSoilMoisture(soil.hujanr1?.value, 350, 88),
		manualr1: calculateSoilMoisture(soil.manualr1?.value, 400, 162),

		kemaraur2: calculateSoilMoisture(soil.kemaraur2?.value, 400, 162),
		hujanr2: calculateSoilMoisture(soil.hujanr2?.value, 345, 120),
		manualr2: calculateSoilMoisture(soil.manualr2?.value, 340, 120),


		kemaraur3: calculateSoilMoisture(soil.kemaraur3?.value, 425, 190),
		hujanr3: calculateSoilMoisture(soil.hujanr3?.value, 351, 114),
		manualr3: calculateSoilMoisture(soil.manualr3?.value, 375, 221),


		kemaraur4: calculateSoilMoisture(soil.kemaraur4?.value, 320, 109),
		hujanr4: calculateSoilMoisture(soil.hujanr4?.value, 250, 91),
		manualr4: calculateSoilMoisture(soil.manualr4?.value, 345, 119),


		kemaraur5: calculateSoilMoisture(soil.kemaraur5?.value, 320, 98),
		hujanr5: calculateSoilMoisture(soil.hujanr5?.value, 325, 105),
		manualr5: calculateSoilMoisture(soil.manualr5?.value, 310, 110),

		kemaraur6: calculateSoilMoisture(soil.kemaraur6?.value, 295, 90),
		hujanr6: calculateSoilMoisture(soil.hujanr6?.value, 285, 95),
		manualr6: calculateSoilMoisture(soil.manualr6?.value, 260, 100),

	};

	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(null);
	const [selectedDataset, setSelectedDataset] = React.useState("");

	React.useEffect(() => {
		datasoil.forEach((dtsoil) => {
			console.log("dtsoil", dtsoil);
			axios
				// .get("https://api.sf2.ctailab.com/datalist", {
				.get("https://api-sf2.vercel.app/datalist", {
					params: {
						device_id: dtsoil.device_id,
						index_id: dtsoil.index_id,
					},
				})
				.then((res) => {
					console.log("res soil", res.data[0]);
					setSoil((prevState) => ({
						...prevState,
						[dtsoil.elementId]: res?.data[0] || "No data",
					}));
				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});

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

		datasoilA.forEach((dtsoilA) => {
			console.log("dtsoilA", dtsoilA);
			axios
				// .get("https://api.sf2.ctailab.com/anomalyDetection", {
				.get("https://api-sf2.vercel.app/anomalyDetection", {
					params: {
						sensor_name: dtsoilA.sensor_name,
					},
				})
				.then((res) => {
					console.log("res soil", res.data[0]);
					setSoilA((prevState) => ({
						...prevState,
						[dtsoilA.elementId]: res?.data[0] || "No data",
					}));
				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});

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

				<div className="row">
					<div className="col-auto">

						{/*
					    <section className="grid grid-cols-4 gap-4 mt-2">
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="text-2xl font-semibold tracking-tight text-black">
									Sensor PH
								</div>
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-2 items-center justify-center w-full">
									    <div className="font-medium text-center">
									        {(soil?.sensorph1?.value * 10).toFixed(2)}
										</div>
										{soilA?.PH1A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
										)}
										<span className="text-teal-500 text-center">
											Nilai PH sesuai
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="text-2xl font-semibold tracking-tight text-black">
									Sensor PH
								</div>
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-2 items-center justify-center w-full">
									    <div className="font-medium text-center">
									        {(soil?.sensorph1?.value * 10).toFixed(2)}
										</div>
										{soilA?.PH1A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
										)}
										<span className="text-teal-500 text-center">
											Nilai PH sesuai
										</span>
									</div>
								</div>
							</div>
						</section>
						
						*/}

						{/*
						<section className="grid grid-cols-1 gap-4 mt-12">
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="text-3xl font-semibold tracking-tight text-black text-center">
									Status Pemberian Air dan Nutrisi
								</div>
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span className="text-teal-500 text-center">
											{analysis}
										</span>
									</div>
								</div>
							</div>
						</section>
						
						*/}

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

						<section className="grid grid-cols-1 gap-5 mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full p-5">
							<div>
								<h2 className="text-2xl font-semibold tracking-tight text-black">
									Pertumbuhan Tanaman
								</h2>
								<div className="text-teal-500">Data Pertumbuhan Tanaman</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mb-5">
								<label className="text-gray-700">Pilih Dataset:</label>
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

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 py-5 w-full font-medium border-b border-solid border-zinc-100">
								<div className="font-medium text-gray-400 text-center">
									<Line data={tinggiChart} options={optionsTinggi} />
								</div>
								<div className="font-medium text-gray-400 text-center">
									<Line data={daunChart} options={optionsDaun} />
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 py-5 w-full font-medium border-b border-solid border-zinc-100">
								<div className="font-medium text-gray-400 text-center">
									<Line data={bungaChart} options={optionsBunga} />
								</div>
								<div className="font-medium text-gray-400 text-center">
									<Line data={buahChart} options={optionsBuah} />
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

						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Nilai Sensor
										</h2>
										<div className="text-teal-500">
											Nilai pada setiap sensor
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Nama Device
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Jenis Sensor
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Nilai
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Kondisi Sensor
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Keterangan
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">

												<Link to="/dashboard/PH1">
													PH1
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor PH
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{(soil?.sensorph1?.value * 10).toFixed(2)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.PH1A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluatePH(soil.sensorph1?.value)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/PH2">
													PH2
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor PH
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{(soil?.sensorph2?.value * 10).toFixed(2)}
												<br />
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">


												{soilA?.PH2A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}

											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluatePH(soil.sensorph2?.value)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/ST1">
													ST1
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Suhu Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.sensorst1?.value}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.ST1A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateST(soil.sensorst1?.value)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/ST2">
													ST2
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Suhu Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.sensorst2?.value}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.ST2A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateST(soil.sensorst2?.value)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC1R1">
													SM C1R1
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.manualr1} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C1R1_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.manualr1)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC2R1">
													SM C2R1
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.hujanr1} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C2R1_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.hujanr1)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC3R1">
													SM C3R1
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.kemaraur1} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C3R1_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.kemaraur1)}
											</div>
										</div>


										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC1R2">
													SM C1R2
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.manualr2} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C1R2_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.manualr2)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC2R2">
													SM C2R2
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.hujanr2} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C2R2_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.hujanr2)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC3R2">
													SM C3R2
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.kemaraur2} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C3R2_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.kemaraur2)}
											</div>
										</div>


										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC1R3">
													SM C1R3
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.manualr3} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C1R3_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.manualr3)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC2R3">
													SM C2R3
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.hujanr3} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C2R3_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.hujanr3)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC3R3">
													SM C3R3
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.kemaraur3} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C3R3_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.kemaraur3)}
											</div>
										</div>


										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC1R4">
													SM C1R4
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.manualr4} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C1R4_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.manualr4)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC2R4">
													SM C2R4
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.hujanr4} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C2R4_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.hujanr4)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC3R4">
													SM C3R4
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.kemaraur4} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C3R4_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.kemaraur4)}
											</div>
										</div>


										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC1R5">
													SM C1R5
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.manualr5} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C1R5_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.manualr5)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC2R5">
													SM C2R5
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.hujanr5} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C2R5_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.hujanr5)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC3R5">
													SM C3R5
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.kemaraur5} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C3R5_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.kemaraur5)}
											</div>
										</div>


										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC1R6">
													SM C1R6
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.manualr6} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C1R6_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.manualr6)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC2R6">
													SM C2R6
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.hujanr6} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C2R6_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.hujanr6)}
											</div>
										</div>

										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												<Link to="/dashboard/SMC3R6">
													SM C3R6
												</Link>
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												Sensor Kelembaban Tanah
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilMoistureCalculations.kemaraur6} %
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.SM_C3R6_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="font-medium w-full text-center justify-center items-center content-center">
												{evaluateSoilMoisture(soilMoistureCalculations.kemaraur6)}
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
