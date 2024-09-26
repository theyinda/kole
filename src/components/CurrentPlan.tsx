import { Box, LinearProgress, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState, useEffect } from 'react';
import { sampleData } from '@/data/sampleData';

const CurrentPlan = () => {
    const [projectsProgress, setProjectsProgress] = useState<number>(0);
    const [usersProgress, setUsersProgress] = useState<number>(0);
    const [requestsProgress, setRequestsProgress] = useState<number>(0);

    useEffect(() => {
        // Calculate progress for projects
        const completedProjects = sampleData.projects.filter(project => project.tasksCompleted === project.totalTasks).length;
        const totalProjects = sampleData.projects.length;
        const projectsProgressValue = (completedProjects / totalProjects) * 100;

        // Calculate progress for users (assuming 1/5 users)
        const totalUsers = 5;
        const currentUsers = sampleData.users.length;
        const usersProgressValue = (currentUsers / totalUsers) * 100;

        // Calculate progress for requests/day
        const currentRequests = 7500;
        const totalRequestsPerDay = 10000;
        const requestsProgressValue = (currentRequests / totalRequestsPerDay) * 100;

        setProjectsProgress(projectsProgressValue);
        setUsersProgress(usersProgressValue);
        setRequestsProgress(requestsProgressValue);
    }, []);

    return (
        <Box sx={{}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ background: '#EAF9FF', padding: '0.5rem 0.8rem', borderRadius: '0.704rem', }}>
                        <img src="/assets/images/Profile.svg" alt="User Icon" />
                    </Box>
                    <Box sx={{ ml: '0.5rem' }}>
                        <Typography sx={{
                            color: "#8083A3", fontFamily: 'AvertaStd-Bold',
                            fontSize: '0.616rem',
                            lineHeight: '0.722rem',
                        }}>Teams Plan</Typography>
                        <Typography sx={{
                            color: "#8083A3", fontFamily: 'Averta-Semibold',
                            fontSize: '0.792rem',
                            lineHeight: '0.928rem',
                        }}>$99/mo</Typography>
                    </Box>
                </Box>
                <Box>
                    <ArrowForwardIosIcon sx={{ color: '#15192C', fontSize: ".7rem", cursor: 'pointer' }} />
                </Box>
            </Box>


            <Box>
                <Box sx={{ width: '100%', mb: '1rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.039rem',
                        }}>Projects</Typography>
                        <Typography sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.039rem',
                        }}>{`${sampleData.projects.length} / ${sampleData.projects.length}`}</Typography>
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        value={projectsProgress}
                        sx={{
                            background: '#FFF7F0',
                            height: '0.264rem',
                            borderRadius: '0.125rem',
                            margin: '.5rem 0 2rem 0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#FF6A00',
                            },
                        }}
                    />
                </Box>

                {/* Users Progress */}
                <Box sx={{ width: '100%', mb: '1rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.039rem',
                        }}>Users</Typography>
                        <Typography sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.039rem',
                        }}>{`${sampleData.users.length} / 5`}</Typography>
                    </Box>

                    <LinearProgress
                        variant="determinate"
                        value={usersProgress}
                        sx={{
                            background: '#F3F0FF',
                            height: '0.264rem',
                            borderRadius: '0.125rem',
                            margin: '.5rem 0 2rem 0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#551FFF',
                            },
                        }}
                    />
                </Box>

                {/* Requests Progress */}
                <Box sx={{ width: '100%', mb: '1rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.039rem',
                        }}>Requests/day</Typography>
                        <Typography sx={{
                            color: "#15192C", fontFamily: 'Averta-Regular',
                            fontSize: '0.616rem',
                            lineHeight: '0.039rem',
                        }}> {`${sampleData.requests.length + 'k'} / 10k`}</Typography>
                    </Box>

                    <LinearProgress
                        variant="determinate"
                        value={requestsProgress}
                        sx={{
                            background: '#FFF2F5',
                            height: '0.264rem',
                            borderRadius: '0.125rem',
                            margin: '.5rem 0 0 0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#FD2254',
                            },
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default CurrentPlan;
