import axios from "axios";
import useLocalStorage from './useLocalStorage';

const useAxios = (localStorageKey, baseUrl) => {
    const [responses, setResponses] = useLocalStorage(localStorageKey);

    const addResponseData = async (formatter = data => data, remainingUrl = "") => {
        const resp = await axios.get(`${baseUrl}${remainingUrl}`);
        setResponses(data => [...data, formatter(response.data)]);
    };

    const clearRespStorage = () => setResponses([]);

    return [responses, addResponseData, clearRespStorage];
}

export default useAxios;