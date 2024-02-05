import { Box, Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link color="inherit" href="https://neodigit.com">
                Neodigit
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export const Home = () => {
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh"
                }}
            >
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                    <Typography variant="h3" component="h1" gutterBottom>
                        Générateur d'images
                    </Typography>
                    {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: "auto",
                        backgroundColor: theme => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800])
                    }}
                >
                    <Container maxWidth="sm">
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
