import Data from "@data/sections/ideas.json";
import Link from "next/link";

const IdeasSection = () => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row">
                        <div className="col-lg-12">

                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <div className="mil-mb-40" style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
                                    <iframe
                                        src="https://www.youtube.com/embed/8mwJnqjADQI?controls=0&modestbranding=1&rel=0&showinfo=0"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                    />
                                </div>
                                <div className="mil-mb-40">
                                    <h3 className="mil-upper mil-up mil-mb-15">Konum</h3>
                                    <div style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
                                        <iframe
                                            src="https://yandex.com.tr/map-widget/v1/?um=constructor%3Aeb904f5f962ad86b0d27e1b59b9dbe17a1a6cdadf3a4ebcef4a3d2ac04595b78&source=constructor"
                                            title="Konum Haritası"
                                            frameBorder="0"
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                        />
                                    </div>
                                </div>
                                <Link href={Data.button.link} className="mil-link mil-upper mil-up">
                                    {Data.button.label}
                                    <span className="mil-arrow"><img src="img/icons/1.svg" alt="arrow" /></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};
export default IdeasSection;