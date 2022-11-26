import React from 'react'
import { Box } from '@mui/material';
import { Avatar } from 'admin/profile/content/avatar';
import { UserData } from 'admin/profile/content/user-data';
import dummyAvatar from 'admin/profile/mock-data/avatar-dummy.jpg'
import { getRandomUser } from 'admin/profile/mock-data/random-user';

const randomUser = getRandomUser();

export const Content = () => (
  <Box maxWidth={'350px'}>
    <Avatar src={dummyAvatar} />
    <UserData user={randomUser} />
  </Box>
);
