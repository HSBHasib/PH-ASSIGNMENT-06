import React from 'react'

const Navber = ({selectProduct}) => {
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 shadow-xs sm:px-20">
            <div className="navbar-start -space-x-7">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                <li className='transition-all duration-200 active:scale-95 active:bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] active:text-white rounded-lg'><a>Products</a></li>
                <li className='transition-all duration-100 active:scale-95 active:bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] active:text-white rounded-lg'><a>Features</a></li>
                <li className='transition-all duration-100 active:scale-95 active:bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] active:text-white rounded-lg'><a>Pricing</a></li>
                <li className='transition-all duration-100 active:scale-95 active:bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] active:text-white rounded-lg'><a>Testimonials</a></li>
                <li className='transition-all duration-100 active:scale-95 active:bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] active:text-white rounded-lg'><a>FAQ</a></li>
                </ul>
            </div>
            <a className="btn btn-ghost text-transparent bg-clip-text bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] font-extrabold text-3xl">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#101727] font-semibold">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
            </ul>
            </div>
            <div className="navbar-end space-x-3">
                <div className="flex-none max-[500px]:hidden">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"  /> </svg>
                        <span className={`badge-sm indicator-item ${selectProduct.length > 0 ? 'absolute -right-1 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white' : 'bg-white' }  p-1 rounded-full`}>{ selectProduct.length > 0 ? selectProduct.length : ''}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <p className='font-semibold text-[#101727] pr-2 max-[500px]:hidden'>Login</p>
                <a className="border-none bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white rounded-full px-4 py-2 text-sm font-bold transition-all duration-100 active:scale-95 cursor-pointer">
                    Get Started
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navber
