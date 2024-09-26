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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '1rem auto 2rem auto', mt: { sm: '2rem', md: '2rem', lg: '0' }, }}>
                <Box >
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
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            // // renderInput={(params) => <TextField {...params} />}
                            sx={{
                                background: '#F4F5F7',
                                borderRadius: '0.528rem',
                                borderColor: '#F4F5F7',
                            }}

                        />
                    </LocalizationProvider>
                </Box>
            </Box>
        </Box >

    );
}
