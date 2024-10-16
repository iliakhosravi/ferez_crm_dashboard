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

  const getGeneralCategories = useCallback(() => {
    setLoading(true);
    return new Promise<iCategory[]>((resolve, reject) => {
      axios
        .get("/client/category")
        .then((res) => {
          resolve(res.data.categories);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const addCategory = useCallback((params: iCategory) => {
    return new Promise<iCategory>((resolve, reject) => {
      axios
        .post("/industrial/brand_category", params)
        .then((res) => {
          resolve(res.data.brand_category);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  return { loading, getCategories, getGeneralCategories, addCategory };
};

export default useCategory;
