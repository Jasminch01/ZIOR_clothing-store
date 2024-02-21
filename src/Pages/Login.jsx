import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../config/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const googleSignIn = async () => {
    await signInGoogle();
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="font-bold text-3xl mb-7">Log in to ZIOR</p>
      <button
        onClick={googleSignIn}
        className="hover:bg-green-500 rounded py-2 px-3 border-2 border-gray-400 font-medium hover:text-white uppercase hover:border-green-500 flex gap-2"
      >
        Log In with Google <FcGoogle size={25} />
      </button>
    </div>
  );
};

export default Login;
