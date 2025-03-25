import AnchorItem from "../../../components/ui/AnchorItem";
import { useTranslation } from "react-i18next";

function TourTable() {
  const { t } = useTranslation();

  return (
    <table className="table table-auto w-full border-collapse">
      <thead className="border-b border-gray-600">
        <tr className="table__header">
          <th className="table__date__title">{t("tour.table.th1")}</th>
          <th className="table__venue__title">{t("tour.table.th2")}</th>
          <th className="hidden md:table-cell">{t("tour.table.th3")}</th>
          <th>{t("tour.table.th4")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table__date">23-02-2025</td>
          <td>
            <AnchorItem title="Rock Am Ring Festival" id="1" />
          </td>
          <td className="hidden md:table-cell">
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
            <AnchorItem title="Resurrection Fest" id="2" />
          </td>
          <td className="hidden md:table-cell">
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
            <AnchorItem title="Rock'n'Roll Camping" id="3" />
          </td>
          <td className="hidden md:table-cell">
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
            <AnchorItem title="Electric Daisy Carnival" id="4" />
          </td>
          <td className="hidden md:table-cell">
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
            <AnchorItem title="Glastonbury Festival" id="5" />
          </td>
          <td className="hidden md:table-cell">
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
            <AnchorItem title="Tomorrowland" id="6" />
          </td>
          <td className="hidden md:table-cell">
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
            <AnchorItem title="Wacken Open Air" id="7" />
          </td>
          <td className="hidden md:table-cell">
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
            <AnchorItem title="Sziget Festival" id="8" />
          </td>
          <td className="hidden md:table-cell">
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
  );
}

export default TourTable;
