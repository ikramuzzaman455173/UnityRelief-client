// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Food', value: 400 },
//   { name: 'Water', value: 300 },
//   { name: 'Medicine', value: 200 },
//   { name: 'Clothing', value: 100 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const Dashboard = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="md:text-6xl text-3xl md:mx-0 mx-4 font-bold text-transparent text-center bg-gradient-to-br md:from-indigo-700 md:to-sky-500 from-indigo-500 to-sky-700 bg-clip-text animate-pulse mb-8">
//         Welcome To Our <br /> Unity Relief Dashboard
//       </h1>

//       <div style={{ width: '80%', height: 300 }} className="mt-8">
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#8884d8"
//               dataKey="value"
//               label
//             >
//               {data?.map((_entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Water", value: 300 },
  { name: "Medicine", value: 200 },
  { name: "Clothing", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="md:text-6xl text-3xl md:mx-0 mx-4 font-bold text-transparent text-center bg-gradient-to-br md:from-indigo-700 md:to-sky-500 from-indigo-500 to-sky-700 bg-clip-text animate-pulse mb-8">
        Welcome To Our <br /> Unity Relief Dashboard
      </h1>

      <div style={{ width: "80%", height: "80vh" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label>
              {data?.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.8)",
                border: "1px solid #ccc",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
