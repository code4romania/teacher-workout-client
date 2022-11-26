import React from 'react'
import PropTypes from 'prop-types'
import { Avatar as MuiAvatar, Box } from '@mui/material';

export const Avatar = ({ src }) => (
  <Box mb={'22px'}>
    <MuiAvatar alt={'User Picture'} src={src} sx={{ width: 88, height: 88 }} />
  </Box>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};
