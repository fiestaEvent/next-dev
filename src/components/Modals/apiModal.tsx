export default function ApiModal() {
  return (
    <div className="fixed z-50 bg-black bg-opacity-70 flex justify-center items-center h-screen w-screen">
      <div
        className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-white m0auto border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
