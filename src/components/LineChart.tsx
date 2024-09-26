import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

const timeData = [
    dayjs('2023-09-25T10:30:00').toDate(),
    dayjs('2023-09-25T11:30:00').toDate(),
    dayjs('2023-09-25T12:30:00').toDate(),
    dayjs('2023-09-25T13:30:00').toDate(),
    dayjs('2023-09-25T14:30:00').toDate(),
];
const seriesData = [1000, 3000, 2000, 8500, 1500];

const formatYValue = (value: number) => {
    return value >= 1000 ? `${value / 1000}k` : value.toString(); // Format as '1k', '3k', etc.
};

const APIChart = () => {

    return (
        <Box sx={{ height: "200px", width: "70%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LineChart
                margin={{ top: 5, bottom: 30, left: 55, right: 0 }}
                xAxis={[
                    {
                        data: timeData.map((date) => date.getTime()), // Convert Date to timestamp
                        valueFormatter: (timestamp) => dayjs(timestamp).format('h:mm A'), // Format time as "10:30 AM"
                    },
                ]}
                series={[
                    {
                        data: seriesData,
                        color: '#7549FF',
                        // color: '#F3F0FF',
                        area: true,


                    },
                ]}
                yAxis={[
                    {
                        valueFormatter: formatYValue,
                    },
                ]}

                sx={{
                    '& .MuiLineSeries-root': {
                        fill: '#red',
                    },
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}

            />

        </Box >

    );
}

export default APIChart
