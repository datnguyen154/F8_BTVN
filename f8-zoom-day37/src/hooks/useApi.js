import { useEffect, useState } from "react";

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refetchKey, setRefetchKey] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Không thể tải dữ liệu");
                }

                const result = await response.json();

                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, refetchKey]);

    const refetch = () => {
        setRefetchKey((prevKey) => prevKey + 1);
    };

    return {
        data,
        loading,
        error,
        refetch,
    };
}

export default useApi;
