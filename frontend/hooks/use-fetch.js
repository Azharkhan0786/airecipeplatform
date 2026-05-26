import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);

      // If server action returned a structured error object, treat it as an error
      if (response && typeof response === "object" && response.success === false) {
        setError(response);
        toast.error(response.message || "Request failed");
      } else {
        setData(response);
        setError(null);
      }
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;