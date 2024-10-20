import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import Template from '../../Template';
import Pages from '../../Constants/Pages.json';
import axios from 'axios';

const Detail = () => {
    const { device_id, index_id } = useParams(); // Mengambil device_id dan index_id dari URL
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Fetch data dari API menggunakan device_id dan index_id
        axios.get(`https://api-sf2.vercel.app/anomalyDetection2?device_id=${device_id}&index_id=${index_id}`)
            .then((res) => {
                setChartData(res.data);
            })
            .catch((err) => console.log("Error fetching chart data:", err));
    }, [device_id, index_id]);

    // Pisahkan data anomaly dan value
    const anomalyData = chartData.map(item => ({ x: new Date(item.createdAt), y: item.anomaly }));
    const valueData = chartData.map(item => ({ x: new Date(item.createdAt), y: item.value }));

    const chartAnomaly = {
        labels: anomalyData.map(item => item.x.toLocaleString()), // Tampilkan label waktu
        datasets: [
            {
                label: 'Anomaly',
                data: anomalyData.map(item => item.y),
                fill: false,
                backgroundColor: 'rgba(255,99,132,1)',
                borderColor: 'rgba(255,99,132,1)',
            },
        ],
    };

    const chartValue = {
        labels: valueData.map(item => item.x.toLocaleString()), // Tampilkan label waktu
        datasets: [
            {
                label: 'Value',
                data: valueData.map(item => item.y),
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
    };

    return (
        <Template userName="Fikri Rida P" title={`Detail for ${device_id} - ${index_id}`} page={Pages.Dashboard}>
            <div className="container-fluid">
                <section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
                    <div className="flex flex-col w-full p-5">
                        <div className="flex gap-5 text-sm tracking-normal w-full">
                            <div className="flex flex-col gap-3 w-full">
                                {/* Kontainer untuk dua kolom */}
                                <div className="flex flex-wrap">
                                    {/* Kolom pertama */}
                                    <div className="w-1/2 p-3">
                                        <h2 className="text-2xl font-semibold tracking-tight text-black">
                                            Anomali Sensor
                                        </h2>
                                        <div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>
                                        <div className="font-medium text-gray-400 text-center justify-center items-center">
                                            <Line data={chartAnomaly} options={options} /> {/* chart anomaly */}
                                        </div>
                                    </div>
                                    {/* Kolom kedua */}
                                    <div className="w-1/2 p-3">
                                        <h2 className="text-2xl font-semibold tracking-tight text-black">
                                            Bacaan Sensor
                                        </h2>
                                        <div className="text-teal-500">Nilai bacaan sensor yang terekam oleh database</div>
                                        <div className="font-medium text-gray-400 text-center justify-center items-center">
                                            <Line data={chartValue} options={options} /> {/* chart value */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Template>
    );
};

export default Detail;
