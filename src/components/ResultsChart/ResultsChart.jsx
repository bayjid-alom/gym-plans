import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultsData = [
    {
        id: 1,
        name: "Monday",
        members: 45,
        calories: 320,
        newMembers: 8
    },
    {
        id: 2,
        name: "Tuesday",
        members: 70,
        calories: 450,
        newMembers: 12
    },
    {
        id: 3,
        name: "Wednesday",
        members: 55,
        calories: 380,
        newMembers: 6
    },
    {
        id: 4,
        name: "Thursday",
        members: 85,
        calories: 520,
        newMembers: 15
    },
    {
        id: 5,
        name: "Friday",
        members: 40,
        calories: 290,
        newMembers: 5
    }
];


const gymData = [
    {
        id: 1,
        name: "Monday",
        members: 45,
        trainers: 5,
        revenue: 900
    },
    {
        id: 2,
        name: "Tuesday",
        members: 70,
        trainers: 7,
        revenue: 1400
    },
    {
        id: 3,
        name: "Wednesday",
        members: 55,
        trainers: 6,
        revenue: 1100
    },
    {
        id: 4,
        name: "Thursday",
        members: 85,
        trainers: 8,
        revenue: 1700
    },
    {
        id: 5,
        name: "Friday",
        members: 40,
        trainers: 4,
        revenue: 800
    }
];



const ResultsChart = () => {
    return (

        <section className='w-[95%] md:w-[85%] flex gap-10 p-4 flex-col md:flex-row justify-between mx-auto md:my-30 my-18 '>


            {/* Line Chart */}
            <div className='line-chart-container w-full min-w-0 flex-1 mx-auto'>
               

                {/* <LineChart width={600} height={500} responsive data={resultsData}> */}
                <LineChart width='100%' height={350} responsive data={resultsData}>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis ></YAxis>
                    <Line dataKey="members" stroke="#6366f1" strokeWidth={2} />
                    <Line dataKey="calories" stroke="orange" strokeWidth={2} />
                    <Line dataKey="newMembers" stroke="#22c55e" strokeWidth={2} />


                    <Legend></Legend>

                    <Tooltip contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #475569",
                        borderRadius: "8px"
                    }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#a5b4fc" }}>
                    </Tooltip>

                </LineChart>
            </div>



            {/* Bar Chart */}
            <div className='bar-chart-container w-full min-w-0 flex-1 mx-auto'>
                {/* <BarChart width={600} height={500} data={gymData} responsive> */}
                <BarChart width='100%' height={350} data={gymData} responsive>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="members" barSize={40} fill="#6366f1" />

                    <Legend></Legend>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1e293b",
                            border: "1px solid #334155",
                            borderRadius: "8px",
                            color: "#ffffff"
                        }}
                        itemStyle={{ color: "#ffffff" }}
                        labelStyle={{ color: "#ffffff" }}></Tooltip>


                </BarChart>
            </div>




        </section>
    );
};


export default ResultsChart;