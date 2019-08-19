import jwtDecode from 'jwt-decode';

const getCurrentUser = () => {
  if (localStorage.getItem('token')) {
    const token = JSON.parse(localStorage.getItem('token'));
    const currentTime = new Date() / 1000;
    if (jwtDecode(token).exp < currentTime) {
      return null;
    }
    return jwtDecode(token);
  }
  return null;
};

export default getCurrentUser;