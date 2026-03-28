"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { LinkedInIcon } from "@/app/components/ui/icons";
import Button from "@/app/components/ui/button";
import Card from "@/app/components/ui/card";
import { Input, Textarea } from "@/app/components/ui/input";
import IconBox from "@/app/components/ui/icon-box";
import { contactInfo } from "@/app/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Left — info panel */}
            <div className="bg-accent/4 p-8 lg:col-span-2 lg:p-10">
              <p className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
                Contact
              </p>
              <h2 className="mb-4 text-3xl font-bold">
                Let&apos;s Work
                <br />
                Together
              </h2>
              <p className="mb-10 text-sm text-muted-foreground">
                Have a project in mind or looking for a frontend developer? Feel
                free to reach out — I&apos;d love to hear from you.
              </p>

              <div className="space-y-5">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                >
                  <IconBox size="sm">
                    <Mail size={15} className="text-accent" />
                  </IconBox>
                  <span className="break-all">{contactInfo.email}</span>
                </a>

                <a
                  href={contactInfo.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                >
                  <IconBox size="sm">
                    <LinkedInIcon size={15} className="text-accent" />
                  </IconBox>
                  {contactInfo.linkedin.label}
                </a>

                <div className="flex items-center gap-3 text-sm">
                  <IconBox size="sm">
                    <MapPin size={15} className="text-accent" />
                  </IconBox>
                  {contactInfo.location}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-8 lg:col-span-3 lg:p-10"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full flex-1"
              />
              <div>
                <Button type="submit">
                  Send Message
                  <Send size={16} className="ml-2 inline" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
