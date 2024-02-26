import { Container, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function Dashboard() {
  const dataChart1 = [
    { name: 'Enero', value: 30 },
    { name: 'Febrero', value: 40 },
    { name: 'Marzo', value: 25 },
  ];

  const dataChart2 = [
    { name: 'Enero', value: 15 },
    { name: 'Febrero', value: 28 },
    { name: 'Marzo', value: 20 },
  ];

  return (
    <Container maxWidth="md">
    <Box my={3} textAlign="center" alignContent='center'>
    <Typography fontFamily="Roboto, sans-serif" variant="h2" color="primary">
        Dashboard de Películas
      </Typography>
    </Box>

    <Box my={3} textAlign="center" alignContent='center'>

      <Grid container spacing={2}>
        {/* Columna de tarjetas */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Películas</Typography>
                  {/* Contenido de la tarjeta */}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Género más popular</Typography>
                  {/* Contenido de la tarjeta */}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Año más popular</Typography>
                  {/* Contenido de la tarjeta */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Columna de gráficos */}
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Gráfico 1</Typography>
              <LineChart width={400} height={300} data={dataChart1}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Gráfico 2</Typography>
              <LineChart width={400} height={300} data={dataChart2}>
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
</Box>
    </Container>
  );
}

export default Dashboard;
