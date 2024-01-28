import MakeProtectedApiCall from "../../util/api";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const HANDLE_LOGIN = ({ payload }) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/login`;
      const res = await MakeProtectedApiCall(url, "post", payload);

      if (res?.status >= 200 && res?.status < 300) {
        dispatch({ type: "HANDLE_LOGIN", data: res?.data?.data });
        return { success: true, data: res?.data?.data };
      }

      return { success: false };
    } catch (error) {
      console.log("Error occured in HANDLE_LOGIN: ", error);
    }
  };
};

export const HANDLE_SIGNUP = ({ payload }) => {
	return async (dispatch) => {
		try {
			const url = `${baseUrl}/signup`;
			const res = await MakeProtectedApiCall(url, "post", payload);

			if (res?.status === 200) {
				dispatch({ type: "HANDLE_SIGNUP", data: res?.data?.data });
				return { success: true, data: res?.data?.data };
			}
			return { success: false };
		} catch (error) {
      console.log("Error occured in HANDLE_SIGNUP: ", error);
		}
	};
};
