import { getUserpending, getUserSuccess, getUserFail } from "./userSlice";
import { getUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserpending());

    const res = await getUser();

    if (res.user && res.user._id) {
     return dispatch(getUserSuccess(res.user));
    }

    dispatch(getUserFail("User is not found"))

  } catch (error) {
    dispatch(getUserFail(error));
  }
};
