import { Box, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'

const PL = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', mb: "1rem", mt: '2rem' }}>
                <Box sx={{ mr: '0.3rem' }}>
                    <CircleIcon sx={{ color: '#FD2254', fontSize: ".7rem" }} />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.722rem',
                            pb: '.5rem'
                        }}
                    >
                        Re-used APIs
                    </Typography>
                    <Typography
                        sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.792 rem',
                            lineHeight: '0.928rem',
                        }}
                    >
                        36%
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', mb: "1rem" }}>
                <Box sx={{ mr: '0.3rem' }}>
                    <CircleIcon sx={{ color: '#00B7FE', fontSize: ".7rem" }} />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.722rem',
                            pb: '.5rem'
                        }}
                    >
                        Webhooks
                    </Typography>
                    <Typography
                        sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.792 rem',
                            lineHeight: '0.928rem',
                        }}
                    >
                        36%
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ mr: '0.3rem' }}>
                    <CircleIcon sx={{ color: '#D0D2DA', fontSize: ".7rem" }} />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.722rem',
                            pb: '.5rem'
                        }}
                    >
                        API calls
                    </Typography>
                    <Typography
                        sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.792 rem',
                            lineHeight: '0.928rem',
                        }}
                    >
                        36%
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default PL