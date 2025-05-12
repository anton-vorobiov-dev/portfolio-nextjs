"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+385) 998 237 548",
    isLink: false,
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    description: "(+380) 635 214 373",
    isLink: false,
  },
  {
    icon: <FaTelegramPlane />,
    title: "Telegram",
    description: "@devrocket",
    isLink: false,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anton.vorobiov.dev@gmail.com",
    isLink: false,
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "https://www.linkedin.com/in/anton-vorobiov-b72402106/",
    isLink: true,
  },
];

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/anton.vorobiov.dev@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setFormSubmitted(true);
        form.reset();
      }
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form / thank you */}
          <div className="xl:w-[54%] order-2 xl:order-none relative min-h-[688px]">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="absolute inset-0 flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                >
                  <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                  <p className="text-white/60">
                    Feel free to contact me for any project or collaboration.
                  </p>

                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="text" name="firstname" placeholder="Firstname" required />
                    <Input type="text" name="lastname" placeholder="Lastname" required />
                    <Input type="email" name="email" placeholder="Email address" required />
                    <Input type="tel" name="phone" placeholder="Phone number" />
                  </div>

                  <Select name="service">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Performance Optimization">Performance Optimization</SelectItem>
                        <SelectItem value="SEO Optimization">SEO Optimization</SelectItem>
                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Textarea
                    name="message"
                    className="h-[200px]"
                    placeholder="Type your message here."
                    required
                  />

                  <Button size="md" type="submit" className="max-w-40">
                    Send message
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl items-center justify-center text-center"
                >
                  <h3 className="text-4xl text-accent">Thank you!</h3>
                  <p className="text-white/60">
                    Thank you for sending your message. I&apos;ll be in touch soon!
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} className="max-w-40">
                    OK
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* contact info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl break-words">
                      {item.isLink ? (
                        <a
                          href={item.description}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-accent"
                        >
                          {item.description}
                        </a>
                      ) : (
                        item.description
                      )}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
