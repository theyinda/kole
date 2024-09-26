"use client";

import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { Box, Grid } from "@mui/material";
import CurrentPlan from "@/components/CurrentPlan";
import PL from "@/components/PL";
import APIChart from "@/components/LineChart";
import Aside from "@/components/Aside";

export default function Home() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh', }}>


      <Box sx={{ display: 'flex', width: '100%' }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={8.5}>
            <Box sx={{ flexGrow: 1 }}>

              <Box sx={{ mb: '1rem' }}>
                <Hero />
              </Box>

              <Box sx={{ mb: '1rem' }}>
                <Card headerText={'API Calls in last 6 hours'} subText={''}>
                  <APIChart />
                </Card>
              </Box>

              <Box sx={{ mb: '1rem' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Card headerText={'P&L'} subText={'Total profit growth of 25%'}>
                      <PL />
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Card headerText={'Current Plan'} subText={'Information and usages of your current plan'}>
                      <CurrentPlan />
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>

          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3.3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={12}>
                <Box
                  sx={{
                    mb: '2rem',
                    width: {
                      xs: '100%', sm: '100%', md: '300px', lg: '300px'
                    },

                  }}
                >
                  <Aside name={'Activity'} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={12}>
                <Box
                  sx={{

                    width: { xs: '100%', sm: '100%', md: '300px', lg: '300px' },
                  }}
                >
                  <Aside name={'Integrations'} />
                </Box>


              </Grid>
            </Grid>
          </Grid>
        </Grid>



      </Box>
    </Box >
  );
}
