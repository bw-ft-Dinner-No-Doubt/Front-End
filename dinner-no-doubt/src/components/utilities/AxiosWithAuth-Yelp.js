import axios from 'axios';

export const AxiosWithAuthYelp = () => {
  //const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    headers: {
      Authorization: 'Bearer k5nOwIoobiYCMwTPwFcqpJTEXx_JjSKsfBbBoTaly9nQ6rfTAuMYNGIlFPNqy9yOnJBf9UmD-sPrr7amxc48LQoVHLyRonRBdFlH41z-u3Q9IAR1UK2qeW6yY3LPXXYx'
    }
  });
};
