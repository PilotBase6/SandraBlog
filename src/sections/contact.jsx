import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});  
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors={};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      console.info(errors.name);
      
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      console.info(errors.email);
      
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      console.info(errors.email);
     
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      console.info(errors.subject);
     
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      console.info(errors.message);
      
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_f93a6f8",
          "template_0487uz7",
          form.current,
          "q_2oA3HBSY88c1xZ4"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Form submitted:", formData);
            setIsMessageSent(true);
            setTimeout(() => {
            setIsMessageSent(false);
          },2300);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }

  };
 
  return (
    <section id="contact" className="relative h-auto max-h-min xs:mt-24 xl:pt-24 w-full mx-auto max-w-[1200px] min-h-screen px-8 ">
      <div className="grid xl:grid-cols-2 place-items-center ">
        <article className="px-11 xl:px-8">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-poppins text-transparent text-gradient font-bold">¿Interesado en mi trabajo?</h1>
          <p className="mt-8 font-poppins text-lg md:text-xl lg:text-2xl text-justify font-semibold">Enviame un mensaje con la propuesta o contactame atraves de mis redes sociales.</p>

        </article>
      <form
        ref={form}
        onSubmit={sendEmail}
        action="#"
        method="POST"
        className="px-8 w-full mt-16 xl:mt-0 max-w-xl"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 xl:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4ABD7F] sm:text-sm sm:leading-6"
              />{errors.name&&(<span className="font-poppins text-sm text-red-700 font-semibold">{errors.name}</span>)}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4ABD7F] sm:text-sm sm:leading-6"
              />{errors.email && (<span className="font-poppins text-sm text-red-700 font-semibold">{errors.email}</span> )}
            </div>
          </div>
          <div className="xl:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4ABD7F] sm:text-sm sm:leading-6"
              />{errors.subject && (<span className="font-poppins text-sm text-red-700 font-semibold">{errors.subject}</span> )}
            </div>
          </div>
          <div className="xl:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4ABD7F] sm:text-sm sm:leading-6"
                defaultValue={""}
              />{errors.message && (<span className="font-poppins text-sm text-red-700 font-semibold">{errors.message}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            id="send"
            type="submit"
            className="block w-full rounded-md bg-[#005650] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#4ABD7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005650]"
          >
           {isMessageSent?"Message sent!":" Let's talk"}
          </button>
        </div>
      </form>
      </div>
    </section>
  );
}
