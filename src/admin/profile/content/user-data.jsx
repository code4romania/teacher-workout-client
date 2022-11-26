import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material';
import { InfoPiece } from 'admin/profile/core/info-piece';

const dataKeys = {
  'lastName': 'lastName',
  'firstName': 'firstName',
  'email': 'email',
  'phone': 'phone',
  'role': 'role',
};

const dataKeyToLabel = {
  [dataKeys.lastName]: 'Nume',
  [dataKeys.firstName]: 'Prenume',
  [dataKeys.email]: 'Adresa de email',
  [dataKeys.phone]: 'Telefon',
  [dataKeys.role]: 'Rol',
};


const InfoPieceByKey = ({ user, keyname, halfWidth = false }) => (
  <Grid item xs={halfWidth ? 6 : 12}>
    <InfoPiece
      label={dataKeyToLabel[keyname]}
      value={user[keyname]}
    />
  </Grid>
);

export const UserData = ({ user }) => (
  <Box maxWidth={'350px'}>
    <Grid container columnSpacing={2} rowSpacing={4}>
      <InfoPieceByKey user={user} keyname={dataKeys.lastName} halfWidth={true} />
      <InfoPieceByKey user={user} keyname={dataKeys.firstName} halfWidth={true} />
      <InfoPieceByKey user={user} keyname={dataKeys.phone} />
      <InfoPieceByKey user={user} keyname={dataKeys.role} />
      <InfoPieceByKey user={user} keyname={dataKeys.email} />
    </Grid>
  </Box>
);

UserData.propTypes = {
  user: PropTypes.shape({
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    role: PropTypes.string
  }).isRequired,
};
