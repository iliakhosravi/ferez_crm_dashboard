import { message } from "antd";
import { useCallback, useContext } from "react";
import { UserStore } from "../stores/userStore";
import { axios } from "../utils";

const useUser = () => {
  const userContext = useContext(UserStore);

  if (!userContext) {
    throw new Error("UserStoreProvider is missing in the component tree.");
  }

  const { setUser } = userContext;

  const login = useCallback((phone: string) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/industrial/login", {
          phone,
        })
        .then((res) => {
          message.success(res.data.message);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  const verify = useCallback(
    ({ phone, code }: { phone: string; code: number }) => {
      return new Promise((resolve, reject) => {
        axios
          .post("/client/verify", {
            phone,
            code,
          })
          .then((res) => {
            message.success(res.data.message);
            setUser(res.data.user);
            localStorage.setItem("token", res.data.token);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    [setUser]
  );

  return { login, verify };
};

export default useUser;
