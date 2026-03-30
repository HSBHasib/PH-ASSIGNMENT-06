// import { FiUserPlus, FiBox } from 'react-icons/fi';
// import { GoRocket } from 'react-icons/go';
import userIcon from '../../../assets/image/user.png';
import packIcon from '../../../assets/image/package.png';
import rocketIcon from '../../../assets/image/rocket.png';

const GetStarted = () => {
  return (
    <section className="py-20 bg-[#F9FAFC] md:px-20 px-10">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div>
            <h2 className="text-[40px] font-extrabold text-gray-900 ">Get Started In 3 Steps</h2>
            <p className="text-gray-500 text-[15px]">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">          
          {/* Card 1 */}
          <div className="relative bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">01</span>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#f3efff] rounded-full flex items-center justify-center text-[#4f39f6]">
                {/* <FiUserPlus size={32} /> */}
                <img className='w-[55%]' src={userIcon} alt="userIcon" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Create Account</h3>
            <p className="text-gray-500 text-sm leading-5">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">02</span>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#f3efff] rounded-full flex items-center justify-center text-[#4f39f6]">
                {/* <FiBox size={32} /> */}
                <img className='w-[55%]' src={packIcon} alt="packIcon" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Choose Products</h3>
            <p className="text-gray-500 text-sm leading-5">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute top-4 right-4 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">03</span>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#f3efff] rounded-full flex items-center justify-center text-[#4f39f6]">
                {/* <GoRocket size={32} /> */}
                <img className='w-[55%]' src={rocketIcon} alt="rocketIcon" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Start Creating</h3>
            <p className="text-gray-500 text-sm leading-5">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetStarted;
