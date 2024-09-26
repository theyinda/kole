import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { sampleData } from '@/data/sampleData';

interface Project {
    id: number;
    name: string;
    status: string;
    deadline: string;
    tasksCompleted: number;
    totalTasks: number;
}

interface Request {
    id: number;
    requestor: string;
    requestType: string;
    status: string;
    submissionDate: string;
}

interface User {
    id: number;
    name: string;
    role: string;
    lastActive: string;
}

interface Storage {
    used: number;
    total: number;
    percentageUsed: number;
}

interface Data {
    projects: Project[];
    requests: Request[];
    users: User[];
    storage: Storage;
}

const Hero = () => {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        setData(sampleData);
    }, []);

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
                    display: "flex",
                    border: "1px solid #E9EAEF",
                    borderRadius: "0.5rem",
                    boxShadow: "0px 4px 8px 0px rgba(16, 24, 64, 0.08)",
                    padding: "1.25rem",
                    width: '100%',
                    background: '#fff',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", width: '22%' }}>
                    <Box sx={{ background: '#FFF2E9', padding: '0.5rem 0.8rem', borderRadius: '0.704rem' }}>
                        <img src="/assets/images/Paper.svg" alt="Projects Icon" />
                    </Box>
                    <Box sx={{ pl: '0.5rem' }}>
                        <Typography sx={{ color: "#8083A3", fontFamily: 'AvertaStd-Bold', fontSize: '0.704rem', lineHeight: '0.825rem' }}>
                            Projects
                        </Typography>
                        <Typography sx={{ color: "#15192C", fontFamily: 'AvertaStd-Bold', fontSize: '0.88rem', lineHeight: '1.031rem' }}>
                            {data?.projects.length}
                        </Typography>
                    </Box>
                </Box>

                <Divider orientation="vertical" flexItem />

                <Box sx={{ display: "flex", alignItems: "center", width: '22%' }}>
                    <Box sx={{ background: '#EDE8FF', padding: '0.5rem 0.8rem', borderRadius: '0.704rem' }}>
                        <img src="/assets/images/Swap.svg" alt="Requests Icon" />
                    </Box>
                    <Box sx={{ pl: '0.5rem' }}>
                        <Typography sx={{ color: "#8083A3", fontFamily: 'AvertaStd-Bold', fontSize: '0.704rem', lineHeight: '0.825rem' }}>
                            Requests
                        </Typography>
                        <Typography sx={{ color: "#15192C", fontFamily: 'AvertaStd-Bold', fontSize: '0.88rem', lineHeight: '1.031rem' }}>
                            {data?.requests.length}
                        </Typography>
                    </Box>
                </Box>

                <Divider orientation="vertical" flexItem />

                {/* Users */}
                <Box sx={{ display: "flex", alignItems: "center", width: '22%' }}>
                    <Box sx={{ background: '#EAF9FF', padding: '0.5rem 0.8rem', borderRadius: '0.704rem' }}>
                        <img src="/assets/images/Profile.svg" alt="Users Icon" />
                    </Box>
                    <Box sx={{ pl: '0.5rem' }}>
                        <Typography sx={{ color: "#8083A3", fontFamily: 'AvertaStd-Bold', fontSize: '0.704rem', lineHeight: '0.825rem' }}>
                            Users
                        </Typography>
                        <Typography sx={{ color: "#15192C", fontFamily: 'AvertaStd-Bold', fontSize: '0.88rem', lineHeight: '1.031rem' }}>
                            {data?.users.length}
                        </Typography>
                    </Box>
                </Box>

                <Divider orientation="vertical" flexItem />

                <Box sx={{ display: "flex", alignItems: "center", width: '22%' }}>
                    <Box sx={{ background: '#FFEBEF', padding: '0.5rem 0.8rem', borderRadius: '0.704rem' }}>
                        <img src="/assets/images/Graph.svg" alt="Storage Icon" />
                    </Box>
                    <Box sx={{ pl: '0.5rem' }}>
                        <Typography sx={{ color: "#8083A3", fontFamily: 'AvertaStd-Bold', fontSize: '0.704rem', lineHeight: '0.825rem' }}>
                            Storage
                        </Typography>
                        <Typography sx={{ color: "#15192C", fontFamily: 'AvertaStd-Bold', fontSize: '0.88rem', lineHeight: '1.031rem' }}>
                            {data?.storage.used} / {data?.storage.total}GB
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default Hero;
