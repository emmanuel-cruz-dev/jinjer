import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Tour = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Anchor = ({ title, id }) => {
    return (
      <a
        className="table__venue"
        href={`/tour/${id}`}
        onClick={() => goToSection(`/tour/`, `${id}`)}
        title={t("news.seeDetails")}
      >
        {title}
      </a>
    );
  };

  const goToSection = (path, sectionId) => {
    navigate(path);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      else section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };

  return (
    <section className="scroll-top-margin tour py-16 mx-auto" id="tour">
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            {t("tour.title1")}
            <span>{t("tour.titleSpan")}</span>
            {t("tour.title2")}
          </h2>
          <p className="text-lg">{t("tour.description")}.</p>
        </div>
        <div className="w-full overflow-x-auto xl:w-5/6">
          <table className="table table-auto w-full border-collapse">
            <thead className="border-b border-gray-600">
              <tr className="table__header">
                <th>{t("tour.table.th1")}</th>
                <th className="table__venue__title">{t("tour.table.th2")}</th>
                <th className="hidden lg:table-cell">{t("tour.table.th3")}</th>
                <th>{t("tour.table.th4")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table__date">23-02-2025</td>
                <td>
                  <Anchor title="Rock Am Ring Festival" id="1" />
                </td>
                <td className="hidden lg:table-cell">
                  Paris/<span>{t("tour.table.france")}</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">05-03-2025</td>
                <td>
                  <Anchor title="Resurrection Fest" id="2" />
                </td>
                <td className="hidden lg:table-cell">
                  Galicia/<span>{t("tour.table.spain")}</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">18-03-2025</td>
                <td>
                  <Anchor title="Rock'n'Roll Camping" id="3" />
                </td>
                <td className="hidden lg:table-cell">
                  <span>Austria</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.available")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">16-05-2025</td>
                <td>
                  <Anchor title="Electric Daisy Carnival" id="4" />
                </td>
                <td className="hidden lg:table-cell">
                  Las Vegas/<span>{t("tour.table.usa")}</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">25-05-2025</td>
                <td>
                  <Anchor title="Glastonbury Festival" id="5" />
                </td>
                <td className="hidden lg:table-cell">
                  Somerset/<span>{t("tour.table.uk")}</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.available")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">19-06-2025</td>
                <td>
                  <Anchor title="Tomorrowland" id="6" />
                </td>
                <td className="hidden lg:table-cell">
                  <span>{t("tour.table.belgium")}</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">30-07-2025</td>
                <td>
                  <Anchor title="Wacken Open Air" id="7" />
                </td>
                <td className="hidden lg:table-cell">
                  Wacken/<span>{t("tour.table.germany")}</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">06-08-2025</td>
                <td>
                  <Anchor title="Sziget Festival" id="8" />
                </td>
                <td className="hidden lg:table-cell">
                  Budapest/<span>{t("tour.table.hungary")}</span>
                </td>
                <td className="table__btn__container">
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.available")}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center my-8">
            <a href="#" className="red__btn">
              {t("tour.table.coming")}
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Tour;
