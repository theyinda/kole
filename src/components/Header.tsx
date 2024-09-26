"use client";

import { Box, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import format from 'date-fns/format';
import { useState } from 'react';

export default function Header() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const formattedDate = selectedDate ? format(selectedDate, 'EEEE, dd MMMM yyyy') : '';

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '1rem auto 2rem auto', }}>
                <Box>
                    <Typography sx={{
                        fontFamily: 'Averta-Semibold',
                        fontSize: '1.76rem',
                        lineHeight: '2.062rem',
                        color: '#15192C',
                    }}>
                        Dashboard
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Averta-Semibold',
                        fontSize: '0.792rem',
                        lineHeight: '0.928rem',
                        color: '#92959E',
                        pt: '0.2rem'
                    }}>
                        Information about your current plan and usages
                    </Typography>
                </Box>

                <Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Select Date"
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                        />
                    </LocalizationProvider>
                </Box>
            </Box>
        </Box >

    );
}
