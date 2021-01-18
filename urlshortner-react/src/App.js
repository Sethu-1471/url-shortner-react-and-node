import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ marginTop: '20px' }}
 >
  <Card/>     
 </Grid>
    </div>
  );
}

export default App;
