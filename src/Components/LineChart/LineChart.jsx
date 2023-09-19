import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: 'Student 1', math: 85, physics: 76, chemistry: 90 },
        { id: 2, name: 'Student 2', math: 78, physics: 88, chemistry: 82 },
        { id: 3, name: 'Student 3', math: 92, physics: 79, chemistry: 94 },
        { id: 4, name: 'Student 4', math: 67, physics: 70, chemistry: 75 },
        { id: 5, name: 'Student 5', math: 95, physics: 89, chemistry: 92 },
        { id: 6, name: 'Student 6', math: 70, physics: 65, chemistry: 78 },
        { id: 7, name: 'Student 7', math: 88, physics: 82, chemistry: 90 },
        { id: 8, name: 'Student 8', math: 76, physics: 71, chemistry: 85 },
        { id: 9, name: 'Student 9', math: 90, physics: 85, chemistry: 92 },
        { id: 10, name: 'Student 10', math: 82, physics: 77, chemistry: 88 }
    ];
    
    return (
        <div className=''>
            <LChart width={500} height={400} data={studentData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
                <Line dataKey={'chemistry'} stroke='blue'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;