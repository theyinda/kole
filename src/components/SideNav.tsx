import React, { useState } from 'react';
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
    IconButton,

} from '@mui/material';
import { Home, MonetizationOn, Settings, Help, Logout, Menu } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';

const StickySideNav = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const [drawerOpen, setDrawerOpen] = useState(false);

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
            {!drawerOpen && (
                <IconButton
                    onClick={() => setDrawerOpen(true)}
                    sx={{
                        display: isSmallScreen ? 'block' : 'none',
                        position: 'fixed',
                        top: 16,
                        left: 16,
                        zIndex: 1201,

                    }}
                >
                    <Menu />
                </IconButton>
            )
            }

            {isSmallScreen ? (
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
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
