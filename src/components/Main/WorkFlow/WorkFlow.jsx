const WorkFlow = () => {
  return (
    <section>
      <div className="w-full mx-auto bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] p-12 md:py-20 text-center text-white shadow-2xl relative overflow-hidden">
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-[44px] font-extrabold mb-3 leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          
          <p className="text-purple-100 text-[16px] mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button className="bg-white text-[#851DF9] px-8 py-3.5 rounded-full font-bold text-[16px] hover:bg-gray-100 transition-all cursor-pointer active:scale-95 duration-150">
              Explore Products
            </button>
            
            <button className="border-2 border-white/40 text-white px-8 py-3.5 rounded-full font-bold text-[16px] hover:bg-white/10 transition-all cursor-pointer active:scale-95 duration-150">
              View Pricing
            </button>
          </div>

          <p className="text-purple-200 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
