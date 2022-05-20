import { Button, Stack, styled, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import { Box } from '@mui/system';
import { Navbar } from './components/Navbar';

function App() {


  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent = "space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>


  );
}

export default App;
