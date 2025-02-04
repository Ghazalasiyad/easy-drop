interface CounterProps {
  icon: string;
  value: string;
  label: string;
  isActive?: boolean;
}

const Counter: React.FC<CounterProps> = ({ icon, value, label, }) => {
  return (
    <div
    className="bg-white rounded-xl flex items-center p-6 w-full min-h-[235px] gap-6 transition-all duration-300 
    border-b-0 
    hover:shadow-[6px_6px_15px_rgba(46,44,128,0.3)] hover:border-b-[6px] hover:border-[#2E2C80] 
    hover:scale-105 cursor-pointer overflow-hidden"
    >
      <div className="w-[80px] h-[80px] flex items-center justify-center">
        <img src={icon} alt={label} className="w-[80px] h-[80px]" />
      </div>
      <div className="flex flex-col justify-center w-[151px] h-[92px]">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#2E2C80] to-[#2458A4] 
               text-transparent bg-clip-text">{value}</h1>
        <p className="text-black text-2xl font-medium">{label}</p>
      </div>
    </div>

  );
};

export default Counter;