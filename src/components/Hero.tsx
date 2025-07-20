
function Hero() {

  return (
    <div className="flex flex-col w-[95%] 2xl:w-[1440px] lg:h-[623px] mx-auto mt-[150px] overflow-hidden">
       <div className="group overflow-hidden relative">

          <div className="absolute w-[88%] min-[460px]:w-[94%] h-[90%] min-[460px]:h-[84%] border-white border-[10px] sm:border-[12px] md:border-[14px] z-10 min-[460px]:top-[8%]
              min-[460px]:left-[3%] left-[6%] group-hover:top-0 top-[5%] group-hover:left-0  transition-all duration-400
              group-hover:w-full group-hover:h-full
          "></div>

          <div className="w-full flex flex-row h-[480px] min-[460px]:h-[345px] lg:h-[480px] group-hover:scale-[1.05] transition-all duration-400">

              <div className="w-[66%] 2xl:w-[960px] h-full hidden min-[460px]:block">
                  <img 
                   className="object-cover w-full h-full"
                   src="https://assets.brack.ch/static/assets/blta/d/b/3/e/bltadb3e314ded75818/br4-2025-kw29-herobox-kick-it-like-summer-woche-4.jpg"/>
              </div>

              <div className="w-full min-[460px]:w-[34%] 2xl:w-[480px] h-[480px] min-[460px]:h-[345px] lg:h-[480px] overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/45NkpBNBVVY?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=45NkpBNBVVY"
                    title="YouTube Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-[600px] relative top-[-60px] scale-[1.8] min-[460px]:top-[-130px]  lg:top-[-70px] pointer-events-none
                    md:scale-[1.4] lg:scale-[1.5] 2xl:scale-[1.1] sm:scale-[1.7] min-[460px]:scale-[2.33]"
                  ></iframe>
              </div>

          </div>
       </div>

        <div className="flex flex-col lg:flex-row justify-between p-[28px] sm:p-[42px] gap-y-4 lg:items-center">
           <div>
                <h1 className="text-[24px] min-[460px]::text-[32px] leading-[1.125] tracking-[-0.3px] font-semibold" >Mit unseren Sport- und Partyartikeln die Fussballsaison geniessen</h1>
                <p className="text-2xl leading-[1.125] tracking-[-0.3px] font-[350] mt-1 hidden md:block">Produkte und Aktionen für den Fussballsommer</p>
           </div>

           <button className="bg-[#cb003d] w-[150px] h-[40px] text-white">
                Entdecken
           </button>
        </div>
    </div>
  )
}

export default Hero
