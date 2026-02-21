import React from "react";

import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";

export const metadata = {
  title: {
    default: "Kişisel Verilerin Korunması",
  },
  description: AppData.settings.siteDescription,
};

const KvkkPage = () => {
  return (
    <>
      <PageBanner
        pageTitle={"Kişisel Verilerin Korunması"}
        breadTitle={"KVKK"}
        bgImage={"/img/photo/CeylanGrup.jpg"}
      />

      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-lg-8">
              <p className="mil-text-lg mil-up mil-mb-30">
                Kişisel verileriniz, KVKK kapsamında yalnızca belirli amaçlarla ve
                sınırlı sürelerle işlenir. Haklarınız ve talepleriniz için bizimle
                iletişime geçebilirsiniz.
              </p>
              <p className="mil-up">
                Detaylı bilgilendirme metni ve başvuru kanalları için
                info@bursaceylangrup.com adresine e‑posta gönderebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KvkkPage;
