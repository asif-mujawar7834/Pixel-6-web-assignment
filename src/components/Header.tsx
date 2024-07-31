interface HeaderProps {
  heading: string;
}
// reusable header component that receives heading as string
export const Header = ({ heading }: HeaderProps) => {
  return (
    <div className="bg-white p-5 sticky top-0 shadow-md border-l-2 border-[#e2e7eb] z-20">
      <h1 className="font-bold text-lg">{heading}</h1>
    </div>
  );
};
