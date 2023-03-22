import http from '@/utils/http';
import endpoints from '@/utils/constants/endpoints';
import { authActions } from '@/modules/redux/store/auth-slice';

export const login = (credentials: any) => {
  return (dispatch: any) => {
    dispatch(authActions.loginPending());
    http.axios
      .post(endpoints.LOGIN, credentials)
      .then(response => {
        console.log(response);
        dispatch(authActions.loginSuccess());
      })
      .catch(error => {
        console.error(error);
        dispatch(authActions.loginFailure());
      });
  };
};
