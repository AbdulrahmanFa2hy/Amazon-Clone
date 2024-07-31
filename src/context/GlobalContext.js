import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import reducer, { intialState } from "./AppReducer";
const GlobalContext = createContext();
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [loading, setLoading] = useState(true);
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "USER", value: user });
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        currentUser: state.user,
        basket: state.basket,
        login,
        signup,
        logout,
        dispatch,
      }}
    >
      {!loading && children}
    </GlobalContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(GlobalContext);
};
