import { random } from 'lodash';
import usersData from 'admin/profile/mock-data/users';

export const getRandomUser = () => 
  usersData.users[random(0, usersData.users.length - 1, false)];
