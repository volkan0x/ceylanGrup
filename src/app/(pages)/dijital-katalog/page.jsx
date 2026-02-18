import React from "react";

import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";

export const metadata = {
  title: {
    default: "Dijital Katalog",
  },
  description: AppData.settings.siteDescription,
};

const DigitalCatalogPage = () => {
  return (
    <>
      <PageBanner
        pageTitle={"Dijital Katalog"}
        breadTitle={"Dijital Katalog"}
        bgImage={"/img/photo/12.jpg"}
      />

      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-lg-8">
              <p className="mil-text-lg mil-up mil-mb-30">
                Güncel projelerimiz ve katalog içerikleri için bizimle iletişime
                geçebilirsiniz.
              </p>
              <p className="mil-up">
                Katalog talebi için info@bursaceylangrup.com adresine e‑posta
                gönderebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalCatalogPage;
