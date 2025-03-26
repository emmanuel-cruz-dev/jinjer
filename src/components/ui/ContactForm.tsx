import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col gap-4 mx-auto">
      <div className="flex flex-col gap-2 my-2">
        <h2 className="text-2xl font-semibold">{t("contactForm.comment")}</h2>
        <p className="text-gray-400 text-[15px]">{t("contactForm.required")}</p>
      </div>

      <form
        method="post"
        className="form flex flex-col gap-4"
        id="contact-form"
      >
        <textarea
          className="w-full max-w-lg min-h-[160px] p-2 px-4 sm:max-w-md md:min-h-[220px] lg:max-w-full"
          placeholder={t("contactForm.message")}
          id="comment"
          name="comment"
        />
        <div className="flex flex-col gap-4 lg:w-1/2">
          <input
            className="p-2 px-4"
            type="text"
            placeholder={t("contactForm.name")}
            id="contact-form__name"
          />
          <input
            className="p-2 px-4"
            type="email"
            placeholder={t("contactForm.email")}
            id="contact-form__email"
          />
          <input
            className="p-2 px-4"
            type="text"
            placeholder={t("contactForm.website")}
            id="contact-form__website"
          />
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <label htmlFor="save" className="flex gap-2">
            <input type="checkbox" name="save" value="save" id="save" />
            <span className="text-gray-400 text-[15px]">
              {t("contactForm.save")}
            </span>
          </label>
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="red__btn lg:w-fit rounded-none"
          >
            {t("contactForm.post")}
          </button>
        </div>
      </form>
    </article>
  );
}

export default ContactForm;
