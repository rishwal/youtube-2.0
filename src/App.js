
import { Box } from '@mui/material';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PlayVideo from './components/Video/PlayVideo';
import ChannelDetails from './components/Channel/ChannelDetails';
import SearchResult from './components/Search/SearchResult';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SideNav from './components/SideNavbar/SideNav';

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <BrowserRouter>

          <SideNav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/video/:id' element={<PlayVideo />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='search/:keyword' element={<SearchResult />} />
          </Routes>
        </BrowserRouter>



      </Box>
    </div>
  );
}

export default App;
