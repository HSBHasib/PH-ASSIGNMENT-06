import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-400 sm:py-20 sm:pb-8 px-2 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]"></div>

        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
            
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-white text-3xl font-bold">DigiTools</h2>
                <p className="text-sm leading-relaxed max-w-sm">
                Premium digital tools for creators, professionals, and businesses. 
                Work smarter with our suite of powerful tools.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="text-white font-semibold">Product</h3>
                <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Features</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Templates</li>
                <li className="hover:text-white transition-colors cursor-pointer">Integrations</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h3 className="text-white font-semibold">Company</h3>
                <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Press</li>
                </ul>
            </div>

            <div className="space-y-6">
                <div className="space-y-4">
                <h3 className="text-white font-semibold">Resources</h3>
                <ul className="space-y-2 text-sm">
                    <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
                </ul>
                </div>
                
            </div>

            <div className="space-y-4">
                <h3 className="text-white font-semibold">Social Links</h3>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                    <TbBrandInstagramFilled size={21} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                    <FaFacebookSquare size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                    <FaXTwitter size={18} />
                    </a>
                </div>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer">Terms of Service</span>
                <span className="hover:text-white cursor-pointer">Cookies</span>
            </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
