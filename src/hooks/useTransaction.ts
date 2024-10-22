import { useCallback, useState } from "react";
import { axios } from "../utils";

export interface iTransaction {
  id?: number;
  amount?: string;
  status?: string;
  transaction_id?: string | null;
  reference_id?: string | null;
  payment_verify?: string;
  pay?: string;
  created_at?: string;
  updated_at?: string;
  brand_id?: number;
  description?: string;
}

const useTransaction = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<iTransaction[]>([]);

  const getTransactions = useCallback(() => {
    setLoading(true);
    return new Promise<iTransaction[]>((resolve, reject) => {
      axios
        .get("/industrial/orders")
        .then((res) => {
          setTransactions(res.data.orders.data);
          resolve(res.data.orders.data);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  return { loading, transactions, getTransactions };
};

export default useTransaction;
