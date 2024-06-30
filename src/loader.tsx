import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import App from "./App";

const Loader = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-screen items-center justify-center bg-black">
          <HashLoader
            color={"#750e21"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <App />
      )}
    </>
  );
};

export default Loader;
