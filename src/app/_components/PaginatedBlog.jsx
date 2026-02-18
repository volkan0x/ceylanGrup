import Link from "next/link";
import Date from '@library/date';

const PaginatedBlogPosts = ({ items }) => {
  const translateCategory = (value) => {
    const map = {
      Architecture: "Mimarlık",
      Design: "Tasarım",
      Technology: "Teknoloji",
      Urban: "Kentsel",
      Interior: "İç Mekân",
      Decor: "Dekor",
    };
    return map[value] || value;
  };
  return (
    <>
      {items.map((item, index) => (
      <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60" key={`blog-post-${index}`}>
          <div className="mil-cover mil-square mil-up">
              <img src={item.image} alt={item.title} />
              <div className="mil-date"><Date dateString={item.date} /></div>
          </div>
          <div className="mil-description">
              <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                {translateCategory(item.category || (item.categories && item.categories[0]))}
              </span>
              <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
              <p className="mil-up mil-mb-30">{item.short}</p>
              <span className="mil-link mil-upper mil-up">Oku <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></span>
          </div>
      </Link>
      ))}
    </>
  );
};
export default PaginatedBlogPosts;
  