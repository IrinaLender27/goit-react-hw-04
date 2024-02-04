import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#81959d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};
