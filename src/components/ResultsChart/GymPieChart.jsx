import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const gymData = [
    { id: 1, name: "Weight Training", members: 120 },
    { id: 2, name: "Cardio", members: 85 },
    { id: 3, name: "Yoga", members: 45 },
    { id: 4, name: "CrossFit", members: 65 },
    { id: 5, name: "Zumba", members: 35 }
];

const GymPieChart = () => {
    return (
        <section className="my-18 md:my-30">
            <div className="w-[95%] md:w-[85%] mx-auto">

                <div className="heading mb-5">
                    <h2 className="text-xl text-center md:text-2xl font-bold text-sky-500 mb-5">
                        Workout Preferences
                    </h2>
                </div>


                <div className="w-full min-w-0">
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                            <Pie
                                data={gymData}
                                dataKey="members"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius="75%"
                                fill="#6366f1"
                                label
                            />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1e293b",
                                    border: "1px solid #475569",
                                    borderRadius: "8px"
                                }}
                                labelStyle={{ color: "#fff" }}
                                itemStyle={{ color: "#c7d2fe" }}></Tooltip>

                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </section>
    );
};

export default GymPieChart;