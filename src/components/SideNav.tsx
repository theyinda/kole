import React from 'react';
import {
    AppBar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Toolbar,
    Box,
    useMediaQuery,
    Drawer,
    useTheme,
} from '@mui/material';
import { Home, MonetizationOn, Settings, Help, Logout } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';

const StickySideNav = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const sidebarItems = [
        { icon: <Home />, text: 'Profile' },
        { icon: <ArticleIcon />, text: 'Billings' },
        { icon: <MonetizationOn />, text: 'Invoices' },
        { icon: <Settings />, text: 'Settings' },
        { icon: <Help />, text: 'Help' },
        { icon: <Logout />, text: 'Log out' },
    ];

    const SidebarContent = () => (
        <Box>
            <Toolbar>
                <Box>
                    <img src="/assets/images/Logo.svg" alt="Storage Icon" />
                </Box>
            </Toolbar>
            <List>
                {sidebarItems.slice(0, 3).map((item, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            '&:hover': {
                                borderRadius: '4.399rem',
                                cursor: 'pointer',
                                color: '#551FFF'
                            },
                            backgroundColor: item.text === 'Billings' ? '#F3F0FF' : 'transparent',
                            borderRadius: item.text === 'Billings' ? '4.399rem' : '0',
                        }}
                    >
                        <ListItemIcon sx={{ color: item.text === 'Billings' ? '#551FFF' : '#D0D2DA' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.text}
                            sx={{
                                color: item.text === 'Billings' ? '#551FFF' : '#D0D2DA',
                                fontFamily: 'AvertaStd-Bold',
                                fontSize: '0.88rem',
                                lineHeight: '1.031rem',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {sidebarItems.slice(3).map((item, index) => (
                    <ListItem
                        key={index + 3}
                        sx={{
                            '&:hover': {
                                // backgroundColor: '#F3F0FF',
                                borderRadius: '4.399rem',
                                cursor: 'pointer',
                                color: '#551FFF'
                            },
                        }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={item.text}
                            sx={{
                                color: '#D0D2DA',
                                fontFamily: 'AvertaStd-Bold',
                                fontSize: '0.88rem',
                                lineHeight: '1.031rem',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {isSmallScreen ? (
                <Drawer variant="temporary" anchor="left" open={true} onClose={() => { }}>
                    <SidebarContent />
                </Drawer>
            ) : (
                <AppBar position="sticky" sx={{ width: '240px', height: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF', padding: '1rem' }}>
                    <SidebarContent />
                </AppBar>
            )}
        </>
    );
};

export default StickySideNav;
