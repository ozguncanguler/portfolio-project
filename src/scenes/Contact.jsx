import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-start h-full mt-10 py-10"
    >
      <div className="flex flex-row">
        <p className="text-8xl font-neonderthaw text-neon-blue">Contacts</p>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/c.ozgun.guler@gmail.com"
          method="POST"
        >
          <input
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}

          <input
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
            type="text"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red mt-1">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}

          <textarea
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
            name="message"
            placeholder="MESSAGE"
            rows="4"
            cols="50"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}

          <button
            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            type="submit"
          >
            SEND ME A MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
