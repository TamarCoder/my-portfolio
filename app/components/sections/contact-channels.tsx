import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { LinkedInIcon } from "@/app/components/ui/icons";
import IconBox from "@/app/components/ui/icon-box";
import { contactInfo } from "@/app/lib/content/contact";

interface Channel {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

const channels: Channel[] = [
  { icon: <Mail size={20} />, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: <LinkedInIcon size={20} />, label: "LinkedIn", value: contactInfo.linkedin.label, href: contactInfo.linkedin.url },
  { icon: <MapPin size={20} />, label: "Based in", value: contactInfo.location },
];

function ChannelCard({ channel }: { channel: Channel }) {
  const body = (
    <>
      <IconBox size="lg" className="shrink-0">{channel.icon}</IconBox>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">{channel.label}</span>
        <span className="block truncate text-base font-medium">{channel.value}</span>
      </span>
      {channel.href && (
        <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light" />
      )}
    </>
  );
  const style = "glass group flex items-center gap-4 rounded-2xl p-4 transition-colors";
  if (!channel.href) return <div className={style}>{body}</div>;
  const isExternal = channel.href.startsWith("http");
  return (
    <a href={channel.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={`${style} hover:border-accent/50`}>
      {body}
    </a>
  );
}

export default function ContactChannels() {
  return (
    <div className="flex flex-col gap-3">
      {channels.map((channel) => (
        <ChannelCard key={channel.label} channel={channel} />
      ))}
    </div>
  );
}
