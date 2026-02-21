import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import VideoCarousel from "@components/VideoCarousel";

export const metadata = {
  title: {
    default: "Dijital Katalog",
  },
  description: AppData.settings.siteDescription,
};

const DigitalCatalogPage = () => (
  <>
    <PageBanner
      pageTitle="Dijital Katalog"
      breadTitle="Dijital Katalog"
      bgImage="/img/TimeOzluce.jpg"
    />

    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="mil-background-grid mil-softened" />
        <VideoCarousel />
        <p className="mil-text mil-dark mil-mt-30">
          Videolar arasında geçiş yapmak için alana tıklayın.
        </p>
      </div>
    </section>
  </>
);

export default DigitalCatalogPage;
