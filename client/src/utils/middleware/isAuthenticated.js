import API from '../../utils/API'

// This is middleware for restricting routes a user is not allowed to visit if not logged in
const isAuthenticated = {
  isAuthenticated: false,
  setAuth() {
    this.isAuthenticated = true;
  },
  setLogout() {
    this.isAuthenticated = false;
  },
  getAuth() {

    return this.isAuthenticated;


  },
};
export default isAuthenticated;