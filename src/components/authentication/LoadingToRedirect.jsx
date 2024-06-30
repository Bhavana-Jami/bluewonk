import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoadingToRedirect() {
  const [count, setCount] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return <div>Redirecting you in {count}</div>;
}

export default LoadingToRedirect;
