import { useCallback, useState } from "react";
import { axios } from "../utils";
import { message } from "antd";

export interface iBrand {
  id?: number;
  category_id?: number;
  name?: string;
  view?: number;
  tell?: string;
  description?: string;
  image?: string;
  cdn_image?: string;
  priority?: number;
  address?: string;
  created_at?: string;
  updated_at?: string;
  site?: string;
  instagram?: string;
  email?: string;
  whatsapp?: string;
  linkedin?: string;
  telegram?: string;
  status?: number;
  user_id?: number;
  approved?: number;
}

const useBrand = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getBrand = useCallback(() => {
    setLoading(true);
    return new Promise<iBrand>((resolve, reject) => {
      axios
        .get("/industrial/profile/brand")
        .then((res) => {
          resolve(res.data.brand);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const editBrand = useCallback((params: iBrand) => {
    return new Promise<iBrand>((resolve, reject) => {
      axios
        .post("/industrial/profile", params)
        .then((res) => {
          message.success(res.data.message);
          resolve(res.data.brand);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  return { loading, getBrand, editBrand };
};

export default useBrand;
