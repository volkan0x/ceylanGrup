"use client";

import Data from "@data/sliders/partners";

const PartnersSlider = ( { bgStyle } ) => {
  return (
    <>
    {/* partners */}
    <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
        {bgStyle == "soft" &&
        <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />
        }
        
        <div className="container mil-p-120-120">
            <div className="mil-background-grid mil-softened" />
            <div className="mil-partners-marquee mil-up">
                <div className="mil-partners-track">
                    {[...Data.items, ...Data.items].map((item, key) => (
                        <div className="mil-partner-frame" key={`partners-slider-item-${key}`}>
                            <img src={item.image} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    {/* partners end */}
    </>
  );
};
export default PartnersSlider;