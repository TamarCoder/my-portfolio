"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import IconBox from "@/app/components/ui/icon-box";
import { contactInfo } from "@/app/lib/content/contact";
import { useLanguage } from "@/app/i18n/language-provider";

interface Channel {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ChannelCard({ channel }: { channel: Channel }) {
  const body = (
    <>
      <IconBox size="lg" className="h-10 w-10 shrink-0 md:h-12 md:w-12">{channel.icon}</IconBox>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">{channel.label}</span>
        <span className="block truncate text-base font-medium">{channel.value}</span>
      </span>
      {channel.href && (
        <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light" />
      )}
    </>
  );
  const style = "glass group flex items-center gap-3 rounded-2xl p-3 transition-colors md:gap-4 md:p-4";
  if (!channel.href) return <div className={style}>{body}</div>;
  const isExternal = channel.href.startsWith("http");
  return (
    <a href={channel.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={`${style} hover:border-accent/50`}>
      {body}
    </a>
  );
}

export default function ContactChannels() {
  const { t } = useLanguage();
  const channels: Channel[] = [
    { icon: <Mail size={20} />, label: t.contact.email, value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: <FaLinkedin size={20} />, label: t.contact.linkedin, value: contactInfo.linkedin.label, href: contactInfo.linkedin.url },
    { icon: <MapPin size={20} />, label: t.contact.basedIn, value: t.contact.location },
  ];
  return (
    <div className="flex flex-col gap-2 md:gap-3">
      {channels.map((channel) => (
        <ChannelCard key={channel.label} channel={channel} />
      ))}
    </div>
  );
}
