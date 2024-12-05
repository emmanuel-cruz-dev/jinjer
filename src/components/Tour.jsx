import { useTranslation } from "react-i18next";
const Tour = () => {
  const { t } = useTranslation();

  return (
    <section className="scroll-top-margin tour py-16 mx-auto" id="tour">
      <article className="flex flex-col justify-center items-center gap-12 w-11/12 mx-auto">
        <div className="text-center flex flex-col gap-4">
          <h2 className="logo text-5xl">
            T<span>ou</span>r Dates
          </h2>
          <p className="text-lg">
            A complete list of festivals and concerts to be held soon! You can
            buy the latest concert tickets here!
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="table table-auto w-full border-collapse">
            <thead className="border-b border-gray-600">
              <tr className="table__header">
                <th>{t("tour.table.th1")}</th>
                <th>{t("tour.table.th2")}</th>
                <th>{t("tour.table.th3")}</th>
                <th>{t("tour.table.th4")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table__date">23-02-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Rock Am Ring Festival
                  </a>
                </td>
                <td>
                  Paris/<span>{t("tour.table.france")}</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">05-03-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Resurrection Fest
                  </a>
                </td>
                <td>
                  Galicia/<span>{t("tour.table.spain")}</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">18-03-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Rock'n'Roll Camping
                  </a>
                </td>
                <td>
                  <span>Austria</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.available")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">16-05-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Electric Daisy Carnival
                  </a>
                </td>
                <td>
                  Las Vegas/<span>{t("tour.table.usa")}</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">25-05-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Glastonbury Festival
                  </a>
                </td>
                <td>
                  Somerset/<span>{t("tour.table.uk")}</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.available")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">19-06-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Tomorrowland
                  </a>
                </td>
                <td>
                  <span>{t("tour.table.belgium")}</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">30-07-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Wacken Open Air
                  </a>
                </td>
                <td>
                  Wacken/<span>{t("tour.table.germany")}</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.soldOut")}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="table__date">06-08-2025</td>
                <td>
                  <a className="table__venue" href="#">
                    Sziget Festival
                  </a>
                </td>
                <td>
                  Budapest/<span>{t("tour.table.hungary")}</span>
                </td>
                <td>
                  <a className="table__btn-ticket" href="#">
                    {t("tour.table.available")}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center my-8">
            <a href="#" className="table__btn uppercase">
              Up-Coming Events
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Tour;
