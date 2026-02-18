import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
  return (
    <>
        <PageBanner pageTitle={"İletİşİm"} breadTitle={"Contact"} bgImage={"/img/CeylanKozaEvleri.jpg"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Ceylan Grup | Bursa</h2>
                            <p className="mil-up mil-mb-40">
                                Dumlupınar Mahallesi, Atatürk Bulvarı Ostaş Ceylan İş Merkezi No:7/4-5-6-7-8-9<br />
                                Nilüfer/Bursa TÜRKİYE
                                <br /><br />
                                (549) 483-5416<br />
                                info@bursaceylangrup.com<br />
                                bilgi@bursaceylangrup.com
                                <br />
                                (KVKK ile ilgili bilgi talepleriniz için bu adrese yazabilirsiniz)
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">

                            <img src="img/Ceylan13.jpg" alt="img" style={{"width": "100%", "height": "200px", "objectFit": "cover", "objectPosition": "0 -60px"}} className="mil-mb-30" />
                            <div className="mil-sidebar-info">
                                <h6 className="mil-upper mil-up mil-mb-30">Ceylan Grup | Bursa</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>Dumlupınar Mahallesi, Atatürk Bulvarı Ostaş Ceylan İş Merkezi No:7/4-5-6-7-8-9</li>
                                    <li>Nilüfer/Bursa TÜRKİYE</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Telefon</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>(549) 483-5416</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">E-posta</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    <li>info@bursaceylangrup.com</li>
                                    <li>bilgi@bursaceylangrup.com</li>
                                    <li>(KVKK ile ilgili bilgi talepleriniz için bu adrese yazabilirsiniz)</li>
                                </ul>
                                
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-7" />
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe
                    src="https://yandex.com.tr/map-widget/v1/?um=constructor%3Aeb904f5f962ad86b0d27e1b59b9dbe17a1a6cdadf3a4ebcef4a3d2ac04595b78&source=constructor"
                    title="Konum Haritası"
                    frameBorder="0"
                    style={{"border": "0"}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        {/* <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">We’d love to talk</h2>
                            <p className="mil-up mil-mb-30">Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current openings.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Join Us</Link>
                            </div>
                        </div> */}

                    </div>
                    {/* <div className="col-lg-7">

                        <ContactForm />

                    </div> */}
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Contact;
