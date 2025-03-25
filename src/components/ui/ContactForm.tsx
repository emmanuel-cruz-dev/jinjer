function ContactForm() {
  return (
    <article className="flex flex-col gap-4 mx-auto">
      <div className="flex flex-col gap-2 my-2">
        <h2 className="text-2xl font-semibold">Leave a Reply</h2>
        <p className="text-gray-400 text-[15px]">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form
        method="post"
        className="form flex flex-col gap-4"
        id="contact-form"
      >
        <textarea
          className="w-full max-w-lg min-h-[160px] p-2 px-4 sm:max-w-md md:min-h-[220px] lg:max-w-full"
          placeholder="Comment*"
          id="comment"
          name="comment"
        />
        <div className="flex flex-col gap-4 lg:w-1/2">
          <input
            className="p-2 px-4"
            type="text"
            placeholder="Name*"
            id="contact-form__name"
          />
          <input
            className="p-2 px-4"
            type="email"
            placeholder="Email*"
            id="contact-form__email"
          />
          <input
            className="p-2 px-4"
            type="text"
            placeholder="Website"
            id="contact-form__website"
          />
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <label htmlFor="save" className="flex gap-2">
            <input type="checkbox" name="save" value="save" id="save" />
            <span className="text-gray-400 text-[15px]">
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </label>
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="red__btn lg:w-1/3 rounded-none"
          >
            Post Comment
          </button>
        </div>
      </form>
    </article>
  );
}

export default ContactForm;
