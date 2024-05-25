import HashLoader from "react-spinners/HashLoader";

type Props = {
  loading: boolean;
};

const loader = ({ loading }: Props) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <HashLoader
        color={"#750e21"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default loader;
