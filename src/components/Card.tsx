import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

interface CardProps {
    headerText: string;
    subText: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ headerText, subText, children }) => {
    return (
        <Grid
            container
            sx={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            <Box
                sx={{
                    borderRadius: "0.5rem",
                    boxShadow: "0px 4px 8px 0px rgba(16, 24, 64, 0.08)",
                    padding: "1.25rem",
                    width: '100%',
                    background: '#fff',
                    height: '17.773rem',
                    maxHeight: '17.773rem'
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                    <Box>
                        <Typography
                            sx={{
                                color: "#15192C", fontFamily: 'Averta-Semibold',
                                fontSize: '1.056rem',
                                lineHeight: '1.238rem',
                            }}
                        >
                            {headerText}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#92959E", fontFamily: 'Averta-Regular',
                                fontSize: '0.616rem',
                                lineHeight: '0.039rem',
                                pt: '0.2rem',
                            }}
                        >
                            {subText}
                        </Typography>
                    </Box>
                    <Box>
                        <img src="/assets/images/Filter.svg" alt="Filter Icon" />
                    </Box>
                </Box>

                <Box sx={{ margin: '1rem 0' }}>
                    {children}
                </Box>

            </Box>
        </Grid>
    );
}

export default Card;
