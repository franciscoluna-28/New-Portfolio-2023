import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

type ContactFormProps = {
  serviceId: string;
  templateId: string;
  userId: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm({
  serviceId,
  templateId,
  userId,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message_html: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response: EmailJSResponseStatus) => {
        setIsSending(false);
        setIsSuccess(true);
        console.log('SUCCESS!', response.status, response.text);
        console.log(templateParams)
      })
      .catch((error) => {
        setIsSending(false);
        setIsError(true);
        console.log('FAILED...', error);
      });
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center py-12">
    <h3
      className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
text-mainExtraDarkBlue dark:text-white lg:text-5xl"
    >
      Reach out to me
    </h3>
    <h4
      className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl"
    >
     By Email
    </h4>
    <p className="dark:text-mainSilver/80 md:text-xl text-center">
      I'll be glad to reply you back and connect!
    </p>
  </div>

    <div className="w-full md:col-span-2 lg:px-32" id="contact">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-mainDarkCyan dark:border-mainCyan bg-transparent p-4 rounded-md"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 dark:border-mainCyan border-mainDarkCyan bg-transparent p-4 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border-2 dark:border-mainCyan border-mainDarkCyan bg-transparent p-4 rounded-md"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-mainDarkCyan flex justify-items-start justify-center items-center duration-150 ease-in h-16 font-normal hover:text-mainExtraDarkBlue w-full hover:border-transparent rounded border-none text-white dark:bg-mainCyan dark:text-mainExtraDarkBlue dark:hover:text-mainDarkCyan shadow-lg shadow-mainCyan/10
            } primary-button p-4 w-1/2 lg:w-1/4"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>

          {isSuccess && (
            <p className="text-green-500">Message sent successfully!</p>
          )}

          {isError && (
            <p className="text-red-500">An error occurred, please try again.</p>
          )}
        </div>
      </form>
    </div>
    </>
  );
}
