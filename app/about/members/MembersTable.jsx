import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Collapse,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import CloseIcon from '@mui/icons-material/Close';

const membersData = [
  { name: 'Abhijit Gangopadhyay', affiliation: 'BP, Houston', expertise: 'Seismology', contact: 'abhijit29208@gmail.com' },
  { name: 'Abhishek Rai', affiliation: 'IPGP, Paris', expertise: 'Seismic Tomography', contact: 'akrncemp@gmail.com' },
  { name: 'Agnibha Das', affiliation: 'Colorado School of Mines', expertise: '', contact: 'adas@mines.edu' },
  { name: 'Amit Padhi', affiliation: 'University of Wyoming', expertise: '', contact: 'apadhi@uwyo.edu' },
  { name: 'Anil Kumar', affiliation: 'Kurukshetra Univ', expertise: 'Geophysics', contact: 'anil_gp09@yahoo.co.in' },
  { name: 'Arun Babu N', affiliation: 'Cairn India', expertise: '', contact: 'arunbabu.nalamara@cairnindia.com' },
  { name: 'Arun Kumar', affiliation: 'EMGS, Houston', expertise: 'CSEM', contact: 'akumar@emgs.com' },
  { name: 'Arvind K Sharma', affiliation: 'BP, Houston', expertise: 'GoM Production Joint Ventures', contact: 'sharma@bp.com' },
  { name: 'Ashwani Dev', affiliation: 'ION, Houston', expertise: 'Seismic processing, AVO', contact: 'ashwani.dev@gmail.com' },
  { name: 'Awadesh Kumar Rai', affiliation: 'ONGC', expertise: '', contact: 'rai_awadesh@yahoo.co.in' },
  { name: 'Baishali Roy', affiliation: 'ConocoPhillips', expertise: '', contact: 'baishali.roy@conocophillips.com' },
  { name: 'Bharath Shekar', affiliation: 'Colorado School of Mines', expertise: 'Seismics', contact: 'bshekar@mines.edu' },
  { name: 'Bikash Sinha', affiliation: 'Schlumberger, Boston', expertise: 'Borehole Sonic', contact: 'sinha1@slb.com' },
  { name: 'Brij Pal Singh', affiliation: 'ONGC, Karaikal', expertise: 'Well Logging', contact: 'gzb_bpsingh@yahoo.com' },
  { name: 'Chandan Kumar', affiliation: 'BP, Houston', expertise: 'Seismic exploration, GoM', contact: 'chandan.kumar@bp.com' },
  { name: 'Chizuku M Dutta', affiliation: 'Rice Univ, Houston', expertise: 'Theoretical physics', contact: 'chizuko@rice.edu' },
  { name: 'D. K. Rawat', affiliation: 'ONGC/DGH', expertise: '', contact: 'dkrawat@rediffmail.com' },
  { name: 'Dave Agarwal', affiliation: 'Geokinetics Inc.', expertise: 'Geophysics', contact: 'dave0836@aol.com' },
  { name: 'Debashish Sarkar', affiliation: '', expertise: '', contact: 'DS_Sarkar@yahoo.com' },
  { name: 'Dhananjay Kumar', affiliation: 'Chevron, Houston', expertise: 'Rock physics, seismic waveform modeling', contact: 'dhananjaykumar@gmail.com' },
  // Add more members here...
];

const MembersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm(''); // Clear search term when closing the search
  };

  const filteredMembers = membersData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm) ||
      member.affiliation.toLowerCase().includes(searchTerm) ||
      member.expertise.toLowerCase().includes(searchTerm) ||
      member.contact.toLowerCase().includes(searchTerm)
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3}}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', marginBottom: .5 }}>
            Members Information:
          </Typography>
          <IconButton onClick={toggleSearch} sx={{ ml: 1 }}>
            {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
          </IconButton>
          <Collapse in={isSearchOpen} orientation="horizontal" sx={{ ml: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              onChange={handleSearch}
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ width: '200px' }}
            />
          </Collapse>
        </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Affiliation</TableCell>
              <TableCell>Expertise</TableCell>
              {/* <TableCell>Contact</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.affiliation}</TableCell>
                <TableCell>{member.expertise}</TableCell>
                {/* <TableCell>{member.contact}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MembersTable;