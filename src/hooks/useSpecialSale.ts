/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { axios } from "../utils";

export interface iSpecialSale {
  id?: number;
  category_id?: number;
  title?: string;
  description?: string;
  price?: string;
  percent?: number;
  contact?: string;
  created_at?: string;
  updated_at?: string;
  status?: string;
  count?: number;
  brand_id?: number;
  images?: any[];
}

const useSpecialSales = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [specialSales, setSpecialSales] = useState<iSpecialSale[]>([]);

  const getSpecialSales = useCallback(() => {
    setLoading(true);
    return new Promise<iSpecialSale[]>((resolve, reject) => {
      axios
        .get("industrial/special_sale")
        .then((res) => {
          setSpecialSales(res.data.special_sales.data);
          resolve(res.data.special_sales.data);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const createSpecialSale = useCallback((params: iSpecialSale) => {
    return new Promise<iSpecialSale>((resolve, reject) => {
      axios
        .post("industrial/special_sale", params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          resolve(res.data.special_sale);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  const showSpecialSale = useCallback((id: number) => {
    setLoading(true);
    return new Promise<iSpecialSale>((resolve, reject) => {
      axios
        .get(`industrial/special_sale/${id}/edit`)
        .then((res) => {
          resolve(res.data.special_sale);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  const updateSpecialSale = useCallback((id: number, params: iSpecialSale) => {
    return new Promise<iSpecialSale>((resolve, reject) => {
      axios
        .post(`industrial/special_sale/${id}/update`, params, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          resolve(res.data.special_sale);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  const deleteSpecialSale = useCallback((id: number) => {
    return new Promise<void>((resolve, reject) => {
      axios
        .delete(`industrial/special_sale/${id}/`)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  const deleteSpecialSaleImage = useCallback((imageId: number) => {
    return new Promise<void>((resolve, reject) => {
      axios
        .delete(`industrial/special_sale/image/${imageId}/delete`)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }, []);

  return {
    loading,
    specialSales,
    getSpecialSales,
    createSpecialSale,
    showSpecialSale,
    updateSpecialSale,
    deleteSpecialSale,
    deleteSpecialSaleImage,
  };
};

export default useSpecialSales;
