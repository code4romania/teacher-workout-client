import React from 'react';
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    fontSize: '0.875rem',
    marginBottom: '16px',
    color: '#374151',
    fontWeight: 500,
  },
  value: {
    fontSize: '1rem',
    color: '#000000',
    fontWeight: 600,
  }
});

export const InfoPiece = ({ label, value }) => {
  const styles = useStyles();

  return (
    <Box>
      <Typography className={styles.title}>{label}</Typography>
      <Typography className={styles.value}>{value}</Typography>
    </Box>
  );
}

InfoPiece.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
