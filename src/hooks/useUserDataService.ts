import { useCallback } from "react";
import api from '../services/api';

const useUserDataService = () => {

  const getUsersData = async () => {
    const response = await api.get('/data');
    return response.data;
  };

  return {getUsersData};
}

export default useUserDataService;
