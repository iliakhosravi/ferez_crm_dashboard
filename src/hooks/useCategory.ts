import { useCallback, useState } from "react";
import { axios } from "../utils";

export interface iCategory {
  id?: number;
  name?: string;
  brand_id?: number;
  created_at?: string;
  updated_at?: string;
  image?: string;
  cdn_image?: string;
  sort?: number;
}

const useCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<iCategory[]>([]);

  const getCategories = useCallback(() => {
    setLoading(true);
    return new Promise<iCategory[]>((resolve, reject) => {
      axios
        .get("/industrial/brand_category")
        .then((res) => {
          setCategories(res.data.brand_categories);
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
        .post("/industrial/brand_category", params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          resolve(res.data.brand_category);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  const getCategory = useCallback((id: number) => {
    setLoading(true);
    return new Promise<iCategory>((resolve, reject) => {
      axios
        .get(`/industrial/brand_category/${id}/edit`)
        .then((res) => {
          resolve(res.data.brand_category);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const updateCategory = useCallback((id: number, params: iCategory) => {
    return new Promise<iCategory>((resolve, reject) => {
      axios
        .post(`/industrial/brand_category/${id}/update`, params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          resolve(res.data.brand_category);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  const deleteCategory = useCallback((id: number) => {
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      axios
        .delete(`/admin/brand_category/${id}`)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  return {
    loading,
    categories,
    getCategories,
    getCategory,
    getGeneralCategories,
    addCategory,
    updateCategory,
    deleteCategory,
  };
};

export default useCategory;
