import { useAppDispatch, useAppSelector } from "@/store/app/hooks";
import { RootState } from "@/store/app/store";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(
    (state: RootState) => state.local.userReducer.userInfo
  );
  const token = useAppSelector(
    (state: RootState) => state.local.userReducer.token
  );

  return { user: value, token: token, dispatch };
};

export default useAuth;
