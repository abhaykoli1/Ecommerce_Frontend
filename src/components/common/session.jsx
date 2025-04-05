import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useToast } from "../hooks/use-toast";
import { toast } from "react-toastify";

function useSessionTimeout() {
  const navigate = useNavigate();
  // const location = useLo
  // const { toast } = useToast();
  useEffect(() => {
    const loginTime = sessionStorage.getItem("loginTime");

    // if (!loginTime) {
    //   const currentTime = Date.now();
    //   sessionStorage.setItem("loginTime", currentTime);
    // }

    const checkTimeout = () => {
      const storedLoginTime = sessionStorage.getItem("loginTime");

      if (storedLoginTime) {
        const elapsedTime = Date.now() - parseInt(storedLoginTime, 10);
        const timeoutLimit = 60 * 60 * 1000; // 60 minutes in milliseconds
        // const timeoutLimit = 30 * 1000;

        if (elapsedTime > timeoutLimit) {
          toast("Session Expired");
          window.location.reload();
          sessionStorage.removeItem("isLoggedIn");
          sessionStorage.removeItem("userId");
          sessionStorage.removeItem("loginTime");
        }
      }
    };

    const interval = setInterval(checkTimeout, 60000); // Check every 1 minute
    // const interval = setInterval(checkTimeout, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [navigate]);
}

export default useSessionTimeout;
