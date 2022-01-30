import { useCallback } from "react";
import api from '../services/api';

const useUserDataService = () => {

  const getUsersData = useCallback(async () => {
    const response = await api.get('');
    return response.data;
  }, []);

  return {getUsersData};
}

export default useUserDataService;
