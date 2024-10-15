import { useCallback, useState } from "react";
import { axios } from "../utils";
import { message } from "antd";

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
          message.error("Failed to fetch products");
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
        .post("/industrial/product", params)
        .then((res) => {
          message.success("Product created successfully");
          resolve(res.data.product);
        })
        .catch((err) => {
          message.error("Failed to create product");
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
          message.error("Failed to fetch product details");
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
        .post(`/industrial/product/${id}/update`, params)
        .then((res) => {
          message.success("Product updated successfully");
          resolve(res.data.product);
        })
        .catch((err) => {
          message.error("Failed to update product");
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
          message.success("Product deleted successfully");
          resolve();
        })
        .catch((err) => {
          message.error("Failed to delete product");
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
          message.success("Image deleted successfully");
          resolve();
        })
        .catch((err) => {
          message.error("Failed to delete image");
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
          message.success("Attribute deleted successfully");
          resolve();
        })
        .catch((err) => {
          message.error("Failed to delete attribute");
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
