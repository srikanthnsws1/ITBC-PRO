import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({ viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, ...props });

export const FacebookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V14h2.7v8h3.3z" />
  </svg>
);

export const LinkedinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5z" />
  </svg>
);

export const TwitterIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.4 11.7 11.7 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z" />
  </svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8zM9.8 15.1V8.9l5.8 3.1-5.8 3.1z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8.3c-.1-1.6-.4-3-1.6-4.2S17.6 2.6 16 2.5c-1.6-.1-6.4-.1-8 0-1.6.1-3 .4-4.2 1.6S2.3 6.7 2.2 8.3c-.1 1.6-.1 6.4 0 8 .1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.4 0-8zm-2.1 9.7a3.2 3.2 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4A3.2 3.2 0 0 1 4.8 18c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.2 3.2 0 0 1 6.6 4.8c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" />
  </svg>
);

export const TelegramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21.9 4.3 18.7 19.5c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.5 13.3 1.8 11.8c-1-.3-1-1 .2-1.5L20.6 3.2c.9-.3 1.6.2 1.3 1.1z" />
  </svg>
);

export const WhatsappIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.3-.3-.3-.5-.5z" />
  </svg>
);

export const KooIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="14" rx="7" ry="7.5" />
    <circle cx="9.5" cy="12" r="1" fill="#fff" />
    <circle cx="14.5" cy="12" r="1" fill="#fff" />
    <path d="M10.5 15h3l-1.5 1.8z" fill="#f97316" />
    <path d="M9 6.5 10.5 3l1.5 3 1.5-3L15 6.5z" />
  </svg>
);

export const socials = [
  { name: "Facebook", Icon: FacebookIcon, bg: "bg-[#1877f2]", href: "#" },
  { name: "LinkedIn", Icon: LinkedinIcon, bg: "bg-[#0a66c2]", href: "#" },
  { name: "Twitter", Icon: TwitterIcon, bg: "bg-[#1da1f2]", href: "#" },
  { name: "Instagram", Icon: InstagramIcon, bg: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]", href: "#" },
  { name: "YouTube", Icon: YoutubeIcon, bg: "bg-[#ff0000]", href: "#" },
  { name: "Telegram", Icon: TelegramIcon, bg: "bg-[#229ed9]", href: "#" },
  { name: "WhatsApp", Icon: WhatsappIcon, bg: "bg-[#25d366]", href: "#" },
  { name: "Koo App", Icon: KooIcon, bg: "bg-[#facc15]", href: "#" },
];
