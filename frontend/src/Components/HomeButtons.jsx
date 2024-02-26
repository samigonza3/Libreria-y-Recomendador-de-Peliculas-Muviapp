import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'; // Asegúrate de tener instalada esta dependencia
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import NextWeekIcon from '@mui/icons-material/NextWeek';

const MovieButtons = () => {

  return (
    <>
      <Link to="/movies">
        <Button 
        variant="outlined" 
        startIcon={<MovieCreationOutlinedIcon />} 
        color="secondary" 
        style={{ margin: '10px 10px 10px 10px' }}>
          Ver mis Películas
        </Button>
      </Link>

      <Link to="/new">
      <Button
        variant="contained"
        startIcon={<AddCircleOutlinedIcon />}
        color="primary"
        style={{ margin: '10px 10px 10px 10px' }}
      >
        Añadir Película
      </Button>
      </Link>

      <Link to="/soon">
      <Button
        variant="outlined"
        startIcon={<NextWeekIcon />}
        color="secondary"
        style={{ margin: '10px 10px 10px 10px' }}
      >
        Próximas Pelis
      </Button>
      </Link>

    </>
  );
}

export default MovieButtons;