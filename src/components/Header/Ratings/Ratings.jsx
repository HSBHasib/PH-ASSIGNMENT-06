import { FiUsers, FiCpu, FiStar } from 'react-icons/fi';

const Ratings = () => {
  return (
    <div className="w-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        <div className="flex flex-col items-center text-center text-white flex-1 space-y-0.5">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-purple-100 text-sm mt-1">Active Users</p>
        </div>

        <div className="hidden md:block h-12 w-px bg-white/30"></div>

        <div className="flex flex-col items-center text-center text-white flex-1 space-y-0.5">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-purple-100 text-sm mt-1">Premium Tools</p>
        </div>

        <div className="hidden md:block h-12 w-px bg-white/30"></div>

        <div className="flex flex-col items-center text-center text-white flex-1 space-y-0.5">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-purple-100 text-sm mt-1">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Ratings;

