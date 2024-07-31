// Loader component from scratch, not used any library for creating loader
export const Loader = () => {
  return (
    <div>
      <div
        className="w-[30px] h-[30px] border-4 border-green-500 border-t-transparent rounded-full animate-spin"
        style={{ borderRadius: "50%" }}
      ></div>
    </div>
  );
};
