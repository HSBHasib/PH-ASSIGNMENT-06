import { Play } from 'lucide';
import bannerImg from '../../../assets/image/banner.png'
import circleImg from '../../../assets/image/circle.png'
import { CiPlay1 } from 'react-icons/ci';


const  Banner = () => {
  return (
      <section className="bg-white px-6 py-10 lg:px-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f3efff] px-4 py-1.5 rounded-full border border-[#e0d4ff]">
            <img className='object-cover ' src={circleImg} alt="" />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-sm font-medium">New: AI-Powered Tools Available</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-[60px] font-extrabold text-[#2d3142] leading-tight">
            Supercharge Your  Digital Workflow
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-[17px] max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:opacity-90 transition-all cursor-pointer active:scale-95 duration-100 ">
              Explore Products
            </button>
            
            <button className="flex items-center gap-2 border-2 border-[#4f39f6] px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all cursor-pointer active:scale-95 duration-100">
              <span className="flex items-center gap-2 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] bg-clip-text text-transparent">
              <CiPlay1 size={24} className="text-[#4f39f6]" />
              Watch Demo
            </span>

          </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img 
              src={bannerImg} 
              alt="AI Technology" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>

      </section>
  );
};

export default  Banner;

