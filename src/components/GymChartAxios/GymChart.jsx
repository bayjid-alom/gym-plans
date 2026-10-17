import React, { use } from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const GymChart = ({ gymDataPromise }) => {
    const gymDataRes = use(gymDataPromise);
    // console.log(gymDataRes);  // {data: Array(7), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
    
    const gymData = gymDataRes.data;  // [{...}, {....}] (Nested)



    // data processing for the chart
    const gymChartData = gymData.map(singleData => {
        const student = {
            id: singleData.id,
            name: singleData.name,
            chest: singleData.workout.chest,
            back: singleData.workout.back,
            legs: singleData.workout.legs,
        };

        const avgThree = (student.chest + student.back + student.legs) / 3;
        student.avg = avgThree;

        return student;
    });

    return (
        <section className="my-18 md:my-30">
            <div className="w-[95%] md:w-[70%] mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-sky-500 text-center mb-10">
                    Gym Members' Average Workout Performance Using Axios
                </h2>

                <div className="w-full min-w-0">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={gymChartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="chest" name="Chest" fill="#6366f1" />
                            <Bar dataKey="back" name="Back" fill="#06b6d4" />
                            <Bar dataKey="legs" name="Legs" fill="#f43f5e" />
                            <Bar dataKey="avg" name="Average Score" fill="#6366f1" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1e293b",
                                    border: "1px solid #334155",
                                    borderRadius: "8px",
                                    color: "#ffffff"
                                }}
                                itemStyle={{ color: "#ffffff" }}
                                labelStyle={{ color: "#ffffff" }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default GymChart;