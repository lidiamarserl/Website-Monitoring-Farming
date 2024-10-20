import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

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


//nanti ini buat menampillkan anomaly detection di chart
const datasetsC = [
	{
		sensor_name: "SM_C3R1",
		elementId: "SM_C3R1",
	},
	{
		sensor_name: "SM_C2R1",
		elementId: "SM_C2R1",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R1",
	},
	{
		sensor_name: "SM_C3R2",
		elementId: "SM_C3R2",
	},
	{
		sensor_name: "SM_C2R2",
		elementId: "SM_C2R2",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R2",
	},
	{
		sensor_name: "SM_C3R3",
		elementId: "SM_C3R3",
	},
	{
		sensor_name: "SM_C2R3",
		elementId: "SM_C2R3",
	},
	{
		sensor_name: "SM_C1R3",
		elementId: "SM_C1R3",
	},
	{
		sensor_name: "SM_C3R4",
		elementId: "SM_C3R4",
	},
	{
		sensor_name: "SM_C2R4",
		elementId: "SM_C2R4",
	},
	{
		sensor_name: "SM_C1R4",
		elementId: "SM_C1R4",
	},
	{
		sensor_name: "SM_C3R5",
		elementId: "SM_C3R5",
	},
	{
		sensor_name: "SM_C2R5",
		elementId: "SM_C2R5",
	},
	{
		sensor_name: "SM_C1R5",
		elementId: "SM_C1R5",
	},
	{
		sensor_name: "SM_C3R6",
		elementId: "SM_C3R6",
	},
	{
		sensor_name: "SM_C2R6",
		elementId: "SM_C2R6",
	},
	{
		sensor_name: "SM_C1R6",
		elementId: "SM_C1R6",
	},

	//sensor lainnya
	{
		sensor_name: "NPK1",
		elementId: "NPK1",
	},
	{
		sensor_name: "NPK2",
		elementId: "NPK2",
	},
	{
		sensor_name: "PH1",
		elementId: "PH1A",
	},
	{
		sensor_name: "PH2",
		elementId: "PH2A",
	},
	{
		sensor_name: "ST1",
		elementId: "ST1A",
	},
	{
		sensor_name: "ST2",
		elementId: "ST2A",
	},
	{
		sensor_name: "DHT",
		elementId: "DHTA",
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




export default function Anomaly() {
	// const [sensorsState, setSensorsState] = useState({});

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

	//ini nanti buat anomaly
	const [dataC, setDataC] = React.useState({
		SM_C3R1: null,
		SM_C2R1: null,
		SM_C1R1: null,
		SM_C3R2: null,
		SM_C2R2: null,
		SM_C1R2: null,
		SM_C3R3: null,
		SM_C2R3: null,
		SM_C1R3: null,
		SM_C3R4: null,
		SM_C2R4: null,
		SM_C1R4: null,
		SM_C3R5: null,
		SM_C2R5: null,
		SM_C1R5: null,
		SM_C3R6: null,
		SM_C2R6: null,
		SM_C1R6: null,
		//sensor lain
		NPK1: null,
		NPK2: null,
		PH1A: null,
		PH2A: null,
		ST1A: null,
		ST2A: null,
		DHTA: null,
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


	const [SM_C1R1Chart, setSM_C1R1Chart] = React.useState([]);
	const [SM_C1R2Chart, setSM_C1R2Chart] = React.useState([]);
	const [SM_C1R3Chart, setSM_C1R3Chart] = React.useState([]);
	const [SM_C1R4Chart, setSM_C1R4Chart] = React.useState([]);
	const [SM_C1R5Chart, setSM_C1R5Chart] = React.useState([]);
	const [SM_C1R6Chart, setSM_C1R6Chart] = React.useState([]);

	const [SM_C2R1Chart, setSM_C2R1Chart] = React.useState([]);
	const [SM_C2R2Chart, setSM_C2R2Chart] = React.useState([]);
	const [SM_C2R3Chart, setSM_C2R3Chart] = React.useState([]);
	const [SM_C2R4Chart, setSM_C2R4Chart] = React.useState([]);
	const [SM_C2R5Chart, setSM_C2R5Chart] = React.useState([]);
	const [SM_C2R6Chart, setSM_C2R6Chart] = React.useState([]);

	const [SM_C3R1Chart, setSM_C3R1Chart] = React.useState([]);
	const [SM_C3R2Chart, setSM_C3R2Chart] = React.useState([]);
	const [SM_C3R3Chart, setSM_C3R3Chart] = React.useState([]);
	const [SM_C3R4Chart, setSM_C3R4Chart] = React.useState([]);
	const [SM_C3R5Chart, setSM_C3R5Chart] = React.useState([]);
	const [SM_C3R6Chart, setSM_C3R6Chart] = React.useState([]);

	const [NPK1Chart, setNPK1Chart] = React.useState([]);
	const [NPK2Chart, setNPK2Chart] = React.useState([]);
	const [PH1Chart, setPH1Chart] = React.useState([]);
	const [PH2Chart, setPH2Chart] = React.useState([]);
	const [ST1Chart, setST1Chart] = React.useState([]);
	const [ST2Chart, setST2Chart] = React.useState([]);
	const [DHTChart, setDHTChart] = React.useState([]);


	const [analysis, setAnalysis] = React.useState("Pemberian air dan nutrisi pada bedeng hujan hari ini sudah sesuai");
	const [analysisA, setAnalysisA] = React.useState("Pemberian air dan nutrisi pada bedeng kemarau hari ini sudah sesuai");


	React.useEffect(() => {
		datasoil.forEach((dtsoil) => {
			console.log("dtsoil", dtsoil);
			axios
				.get("https://api.sf2.ctailab.com/datalist", {
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
				.get("https://api.sf2.ctailab.com/datalist", {
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
				.get("https://api.sf2.ctailab.com/anomalyDetection", {
					params: {
						sensor_name: datasetC.sensor_name,
					},
				})
				.then((res) => {
					const reversedData = res.data.reverse();
					setDataC((prevState) => ({
						...prevState,
						[datasetC.elementId]: reversedData || [],
					}));

					if (datasetC.elementId === "SM_C1R1") {
						setSM_C1R1Chart(reversedData);
					} else if (datasetC.elementId === "SM_C1R2") {
						setSM_C1R2Chart(reversedData);
					} else if (datasetC.elementId === "SM_C1R3") {
						setSM_C1R3Chart(reversedData);
					} else if (datasetC.elementId === "SM_C1R4") {
						setSM_C1R4Chart(reversedData);
					} else if (datasetC.elementId === "SM_C1R5") {
						setSM_C1R5Chart(reversedData);
					} else if (datasetC.elementId === "SM_C1R6") {
						setSM_C1R6Chart(reversedData);
					} else if (datasetC.elementId === "SM_C2R1") {
						setSM_C2R1Chart(reversedData);
					} else if (datasetC.elementId === "SM_C2R2") {
						setSM_C2R2Chart(reversedData);
					} else if (datasetC.elementId === "SM_C2R3") {
						setSM_C2R3Chart(reversedData);
					} else if (datasetC.elementId === "SM_C2R4") {
						setSM_C2R4Chart(reversedData);
					} else if (datasetC.elementId === "SM_C2R5") {
						setSM_C2R5Chart(reversedData);
					} else if (datasetC.elementId === "SM_C2R6") {
						setSM_C2R6Chart(reversedData);
					} else if (datasetC.elementId === "SM_C3R1") {
						setSM_C3R1Chart(reversedData);
					} else if (datasetC.elementId === "SM_C3R2") {
						setSM_C3R2Chart(reversedData);
					} else if (datasetC.elementId === "SM_C3R3") {
						setSM_C3R3Chart(reversedData);
					} else if (datasetC.elementId === "SM_C3R4") {
						setSM_C3R4Chart(reversedData);
					} else if (datasetC.elementId === "SM_C3R5") {
						setSM_C3R5Chart(reversedData);
					} else if (datasetC.elementId === "SM_C3R6") {
						setSM_C3R6Chart(reversedData);
					} else if (datasetC.elementId === "NPK1") {
						setNPK1Chart(reversedData);
					} else if (datasetC.elementId === "NPK2") {
						setNPK2Chart(reversedData);
					} else if (datasetC.elementId === "PH1A") {
						setPH1Chart(reversedData);
					} else if (datasetC.elementId === "PH2A") {
						setPH2Chart(reversedData);
					} else if (datasetC.elementId === "DHTA") {
						setDHTChart(reversedData);
					} else if (datasetC.elementId === "ST1A") {
						setST1Chart(reversedData);
					} else if (datasetC.elementId === "ST2A") {
						setST2Chart(reversedData);
					}
				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});

		datasoilA.forEach((dtsoilA) => {
			console.log("dtsoilA", dtsoilA);
			axios
				.get("https://api.sf2.ctailab.com/anomalyDetection", {
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


	}, []);


	React.useEffect(() => {
		if (dataB.irynan1.length && dataB.musan1.length) {
			let analysisText = "Pemberian air dan nutrisi pada bedeng hujan hari ini sudah sesuai";
			let issues = [];

			const irynan1 = dataB.irynan2[0]?.value || 0;
			const musan1 = dataB.musan1[0]?.value || 0;
			const irynap1 = dataB.irynap2[0]?.value || 0;
			const musap1 = dataB.musap1[0]?.value || 0;
			const irynak1 = dataB.irynak1[0]?.value || 0;
			const musak1 = dataB.musak1[0]?.value || 0;

			if (irynan1 !== musan1) {
				if (irynan1 < musan1) {
					issues.push(`kekurangan N sebanyak ${musan1 - irynan1}`);
				} else {
					issues.push(`kelebihan N sebanyak ${irynan1 - musan1}`);
				}
			}
			if (irynap1 !== musap1) {
				if (irynap1 < musap1) {
					issues.push(`kekurangan P sebanyak ${musap1 - irynap1}`);
				} else {
					issues.push(`kelebihan P sebanyak ${irynap1 - musap1}`);
				}
			}
			if (irynak1 !== musak1) {
				if (irynak1 < musak1) {
					issues.push(`kekurangan K sebanyak ${musak1 - irynak1}`);
				} else {
					issues.push(`kelebihan K sebanyak ${irynak1 - musak1}`);
				}
			}

			if (issues.length) {
				analysisText = `Pemberian nutrisi pada bedeng hujan  ${issues.join(', ')}`;
			}

			setAnalysis(analysisText);
		}
	}, [dataB]);


	React.useEffect(() => {
		if (dataB.irynan2.length && dataB.musan2.length) {
			let analysisText = "Pemberian air dan nutrisi pada bedeng kemarau hari ini sudah sesuai";
			let issues = [];

			const irynan2 = dataB.irynan2[0]?.value || 0;
			const musan2 = dataB.musan2[0]?.value || 0;
			const irynap2 = dataB.irynap2[0]?.value || 0;
			const musap2 = dataB.musap2[0]?.value || 0;
			const irynak2 = dataB.irynak2[0]?.value || 0;
			const musak2 = dataB.musak2[0]?.value || 0;

			if (irynan2 !== musan2) {
				if (irynan2 < musan2) {
					issues.push(`kekurangan N sebanyak ${musan2 - irynan2}`);
				} else {
					issues.push(`kelebihan N sebanyak ${irynan2 - musan2}`);
				}
			}
			if (irynap2 !== musap2) {
				if (irynap2 < musap2) {
					issues.push(`kekurangan P sebanyak ${musap2 - irynap2}`);
				} else {
					issues.push(`kelebihan P sebanyak ${irynap2 - musap2}`);
				}
			}
			if (irynak2 !== musak2) {
				if (irynak2 < musak2) {
					issues.push(`kekurangan K sebanyak ${musak2 - irynak2}`);
				} else {
					issues.push(`kelebihan K sebanyak ${irynak2 - musak2}`);
				}
			}

			if (issues.length) {
				analysisText = `Pemberian nutrisi pada bedeng kemarau  ${issues.join(', ')}`;
			}

			setAnalysisA(analysisText);
		}
	}, [dataB]);


	//bedeng manual
	const chartSM_C1R1 = {
		labels: SM_C1R1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R1 Manual",
				data: SM_C1R1Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};
	const chartSM_C1R2 = {
		labels: SM_C1R2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R2 Manual",
				data: SM_C1R2Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C1R3 = {
		labels: SM_C1R3Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R3 Manual",
				data: SM_C1R3Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C1R4 = {
		labels: SM_C1R4Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R4 Manual",
				data: SM_C1R4Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C1R5 = {
		labels: SM_C1R5Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R5 Manual",
				data: SM_C1R5Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C1R6 = {
		labels: SM_C1R6Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R6 Manual",
				data: SM_C1R6Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};


	//bedeng hujan
	const chartSM_C2R1 = {
		labels: SM_C2R1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R1 Hujan",
				data: SM_C2R1Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};
	const chartSM_C2R2 = {
		labels: SM_C2R2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R2 Hujan",
				data: SM_C2R2Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C2R3 = {
		labels: SM_C2R3Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R3 Hujan",
				data: SM_C2R3Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C2R4 = {
		labels: SM_C2R4Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R4 Hujan",
				data: SM_C2R4Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C2R5 = {
		labels: SM_C2R5Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R5 Hujan",
				data: SM_C2R5Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C2R6 = {
		labels: SM_C2R6Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R6 Hujan",
				data: SM_C2R6Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartPH1 = {
		labels: PH1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "PH Hujan",
				data: PH1Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartST1 = {
		labels: ST1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "ST Hujan",
				data: ST1Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartNPK1 = {
		labels: NPK1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "NPK Hujan",
				data: NPK1Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartDHT = {
		labels: DHTChart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "DHT",
				data: DHTChart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};



	//bedeng kemarau
	const chartSM_C3R1 = {
		labels: SM_C3R1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R1 Kemarau",
				data: SM_C3R1Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};
	const chartSM_C3R2 = {
		labels: SM_C3R2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R2 Kemarau",
				data: SM_C3R2Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C3R3 = {
		labels: SM_C3R3Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R3 Kemarau",
				data: SM_C3R3Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C3R4 = {
		labels: SM_C3R4Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R4 Kemarau",
				data: SM_C3R4Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C3R5 = {
		labels: SM_C3R5Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R5 Kemarau",
				data: SM_C3R5Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartSM_C3R6 = {
		labels: SM_C3R6Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "R6 Kemarau",
				data: SM_C3R6Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartPH2 = {
		labels: PH2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "PH Kemarau",
				data: PH2Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartST2 = {
		labels: ST2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "ST Kemarau",
				data: ST2Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	const chartNPK2 = {
		labels: NPK2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
		datasets: [
			{
				label: "NPK Kemarau",
				data: NPK2Chart.map((item) => item.anomaly),
				fill: false,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",

			},
		],
	};

	//beda section

	const options = {
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
				min: 0,
				max: 1,
				ticks: {
					stepSize: 1,
					// min: 0,
					// max: 1,
				},
			},
		},
	};



	return (
		<Template userName="Fikri Rida P" title="Dashboard" page={Pages.Anomaly}>
			<div className="container-fluid">

				<div className="row">
					<div className="col-auto">
						
						<section className="grid grid-cols-2 gap-4 mt-12">
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="text-3xl font-semibold tracking-tight text-black text-center">
									Bedeng Kemarau
								</div>
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span className="text-teal-500 text-center">
											{/* {analysisA} */}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="text-3xl font-semibold tracking-tight text-black text-center">
									Bedeng Hujan
								</div>
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span className="text-teal-500 text-center">
											{/* {analysis} */}
										</span>
									</div>
								</div>
							</div>
						</section>




						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Anomali Sensor Bedeng Manual
										</h2>
										<div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>

										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C1R1} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C1R2} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C1R3} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C1R4} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C1R5} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C1R6} options={options} />
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
											Anomali Sensor Bedeng Hujan
										</h2>
										<div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>

										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C2R1} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C2R2} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C2R3} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C2R4} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C2R5} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C2R6} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartST1} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartPH1} options={options} />
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
											Anomali Sensor Bedeng Kemarau
										</h2>
										<div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>

										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C3R1} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C3R2} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C3R3} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C3R4} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C3R5} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartSM_C3R6} options={options} />
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartST2} options={options} />
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												<Line data={chartPH2} options={options} />
											</div>
										</div>

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
