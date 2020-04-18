const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.name;
// const getUserEmail = ({ auth }) => auth.user.email;
// const getError = ({ auth }) => auth.error;
// const getLoading = ({ auth }) => auth.loading;

export default {
  isAuthenticated,
  getUserName,
  //   getError,
  //   getLoading,
  //   getUserEmail,
};
