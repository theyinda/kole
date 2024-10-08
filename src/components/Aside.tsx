import { activities } from '@/data/sampleData';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface AsideProps {
    name: string;
}

const Aside: React.FC<AsideProps> = ({ name }) => {
    const [fadeIndexes, setFadeIndexes] = useState(new Array(activities.length).fill(false));

    const handleScroll = () => {
        const updatedFades = activities.map((_, index) => {
            if (index === 0) {

                return false;
            }
            const box = document.getElementById(`activity-box-${index}`);
            if (box) {
                const rect = box.getBoundingClientRect();

                return !(rect.top >= 0 && rect.bottom <= window.innerHeight);
            }
            return false;
        });

        setFadeIndexes(updatedFades);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{
            width: '100%',
            borderRadius: "0.5rem",
            boxShadow: "0px 4px 8px 0px rgba(16, 24, 64, 0.08)",
            padding: "1.25rem",
            background: '#fff',
            height: { xs: '20rem', sm: '18rem', md: '18rem', lg: '24rem' },
            overflowY: 'auto',
        }}>
            <Box sx={{ borderRadius: '0.5rem', width: '100%' }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', mb: '2rem' }}>
                    <Typography sx={{
                        color: "#15192C", fontFamily: 'Averta-Semibold',
                        fontSize: '1.056rem',
                        lineHeight: '1.238rem',
                    }}>
                        {name}
                    </Typography>
                    <MoreVertIcon sx={{ color: '#92959E' }} />
                </Box>

                {activities.map((item, index) => (
                    <Box
                        key={index}
                        id={`activity-box-${index}`}
                        sx={{
                            mb: index < activities.length - 1 ? 2 : 0,
                            opacity: fadeIndexes[index] ? 0.3 : 1,
                            transition: 'opacity 0.5s ease',
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ mr: '1rem' }}>
                                <img src="/assets/images/User.svg" alt="User Icon" />
                            </Box>
                            <Box>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666' }}>
                                    {item.comment}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Aside;
