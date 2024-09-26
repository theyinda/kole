"use client";

import {
    CssBaseline,
    Container,
    ThemeProvider,
    createTheme,
    Box,
} from "@mui/material";
import Header from "@/components/Header";
import StickySideNav from "@/components/SideNav";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
    },
});

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box sx={{ width: "100%" }}>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        margin: "0 auto",
                        background: "#F8F9FC",
                        maxWidth: "1400px",
                    }}
                >
                    <StickySideNav />

                    <Box sx={{ flexGrow: 1, padding: "1rem" }}>
                        <Header />
                        <Container sx={{ padding: "0 !important" }}>{children}</Container>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
