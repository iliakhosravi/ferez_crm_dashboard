/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { axios } from "../utils";

export interface iProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: string;
  brand_category_id?: number;
  multidimensional_view?: string | null;
  link?: string | null;
  created_at?: string;
  updated_at?: string;
  off?: number;
  unit?: string;
  table_name?: string;
  user_id?: number;
  status?: string;
  images?: any[];
  keys?: string[];
  values?: string[];
  first_images?: {
    src: string;
  };
}

const useProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const getProducts = useCallback((page = 1) => {
    setLoading(true);
    return new Promise<iProduct[]>((resolve, reject) => {
      axios
        .get(`/industrial/product?page=${page}`)
        .then((res) => {
          setProducts(res.data.products.data);
          setCurrentPage(res.data.products.current_page);
          setTotal(res.data.products.total);
          resolve(res.data.products.data);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const createProduct = useCallback((params: iProduct) => {
    setLoading(true);
    return new Promise<iProduct>((resolve, reject) => {
      axios
        .post("/industrial/product", params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          resolve(res.data.product);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const getProduct = useCallback((id: number) => {
    setLoading(true);
    return new Promise<iProduct>((resolve, reject) => {
      axios
        .get(`/industrial/product/${id}/edit`)
        .then((res) => {
          resolve(res.data.product);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const updateProduct = useCallback((id: number, params: iProduct) => {
    setLoading(true);
    return new Promise<iProduct>((resolve, reject) => {
      axios
        .post(`/industrial/product/${id}/update`, params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          resolve(res.data.product);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const deleteProduct = useCallback((id: number) => {
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      axios
        .delete(`/industrial/product/${id}`)
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

  const deleteProductImage = useCallback((imageId: number) => {
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      axios
        .delete(`/industrial/product/image/${imageId}`)
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

  const deleteProductAttribute = useCallback((attributeId: number) => {
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      axios
        .get(`/industrial/attribute/${attributeId}/delete`)
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
    products,
    currentPage,
    total,
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    deleteProductImage,
    deleteProductAttribute,
  };
};

export default useProduct;
