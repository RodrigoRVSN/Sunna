import { useContext } from 'react';
import { AuthContext, AuthContextData } from '../contexts/auth';

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
export default useAuth;
