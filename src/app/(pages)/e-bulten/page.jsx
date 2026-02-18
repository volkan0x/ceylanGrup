import React from "react";

import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";

export const metadata = {
  title: {
    default: "E‑Bülten",
  },
  description: AppData.settings.siteDescription,
};

const NewsletterPage = () => {
  return (
    <>
      <PageBanner
        pageTitle={"E‑Bülten"}
        breadTitle={"E‑Bülten"}
        bgImage={"/img/photo/12.jpg"}
      />

      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-lg-8">
              <p className="mil-text-lg mil-up mil-mb-30">
                Yeni projeler, duyurular ve kampanyalardan haberdar olmak için
                e‑bültenimize kayıt olun.
              </p>
              <p className="mil-up">
                Kayıt olmak için info@bursaceylangrup.com adresine e‑posta
                gönderebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterPage;
