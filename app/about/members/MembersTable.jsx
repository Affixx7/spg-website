'use client';
import React, { useState, useCallback } from 'react';
import {
  Paper,
  TextField,
  Typography,
  Box,
  InputAdornment,
  Chip,
  Avatar,
  Stack,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';

const MembersTable = ({ membersData = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleMembers, setVisibleMembers] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const membersPerLoad = 10;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setVisibleMembers(10); // Reset to initial count when searching
  };

  const filteredMembers = membersData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm) ||
      member.affiliation.toLowerCase().includes(searchTerm) ||
      member.expertise.toLowerCase().includes(searchTerm) ||
      member.contact.toLowerCase().includes(searchTerm)
  );

  const displayedMembers = filteredMembers.slice(0, visibleMembers);
  const hasMore = visibleMembers < filteredMembers.length;

  const handleScroll = useCallback((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 50 && hasMore && !isLoading) {
      setIsLoading(true);
      // Simulate loading delay for better UX
      setTimeout(() => {
        setVisibleMembers(prev => Math.min(prev + membersPerLoad, filteredMembers.length));
        setIsLoading(false);
      }, 300);
    }
  }, [hasMore, isLoading, filteredMembers.length]);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = ['#123456', '#4a6b8a', '#0b1e2e', '#2d5016', '#7b1fa2', '#d32f2f'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Search Section */}
      <Box sx={{ mb: 4 }}>
        <TextField
          variant="outlined"
          fullWidth
          onChange={handleSearch}
          placeholder="Search members by name, affiliation, or expertise..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#123456' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '&:hover fieldset': {
                borderColor: '#123456',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#123456',
              },
            },
          }}
        />
        <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
          Found {filteredMembers.length} member(s)
        </Typography>
      </Box>

      {/* Members Cards - Scrollable Container */}
      <Box 
        sx={{ 
          mb: 4,
          maxHeight: '600px', // Match the height of the benefits container content area
          overflowY: 'auto',
          pr: 1,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#123456',
            borderRadius: '4px',
            '&:hover': {
              background: '#0b1e2e',
            }
          }
        }}
        onScroll={handleScroll}
      >
        {displayedMembers.length > 0 ? (
          <Stack spacing={2}>
            {displayedMembers.map((member, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  p: 2.5, // Slightly reduced padding
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  border: '1px solid #e0e0e0',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0px 8px 16px rgba(18, 52, 86, 0.1)',
                    borderColor: '#123456',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  {/* Avatar */}
                  <Avatar
                    sx={{
                      width: 48, // Slightly smaller avatar
                      height: 48,
                      backgroundColor: getAvatarColor(member.name),
                      color: '#ffffff !important',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}
                  >
                    {getInitials(member.name)}
                  </Avatar>

                  {/* Member Info */}
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <PersonIcon sx={{ fontSize: 16, color: '#123456', mr: 1 }} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#123456' }}>
                        {member.name}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <BusinessIcon sx={{ fontSize: 14, color: '#666', mr: 1 }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {member.affiliation}
                      </Typography>
                    </Box>

                    {member.expertise && (
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <SchoolIcon sx={{ fontSize: 14, color: '#666', mr: 1 }} />
                        <Chip
                          label={member.expertise}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(18, 52, 86, 0.1)',
                            color: '#123456',
                            fontWeight: 500,
                            height: '24px',
                            fontSize: '0.75rem'
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Paper>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <CircularProgress size={24} sx={{ color: '#123456' }} />
              </Box>
            )}
          </Stack>
        ) : (
          <Paper
            elevation={1}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 2,
              backgroundColor: '#f8f9fa'
            }}
          >
            <SearchIcon sx={{ fontSize: 36, color: '#ccc', mb: 2 }} />
            <Typography variant="h6" sx={{ color: '#666', mb: 1, fontSize: '1.1rem' }}>
              No members found
            </Typography>
            <Typography variant="body2" sx={{ color: '#999' }}>
              Try adjusting your search criteria
            </Typography>
          </Paper>
        )}
        
        {/* Load more indicator */}
        {hasMore && !isLoading && displayedMembers.length > 0 && (
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
              Scroll down to load more members...
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MembersTable;