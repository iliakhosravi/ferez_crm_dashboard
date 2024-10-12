import { useCallback, useState } from "react";
import { axios } from "../utils";

export interface iCategory {
  id?: number;
  name?: string;
  brand_id?: number;
  created_at?: string;
  updated_at?: string;
  image?: string;
}

const useCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getCategories = useCallback(() => {
    setLoading(true);
    return new Promise<iCategory[]>((resolve, reject) => {
      axios
        .get("/industrial/brand_category")
        .then((res) => {
          resolve(res.data.brand_categories);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  return { loading, getCategories };
};

export default useCategory;
