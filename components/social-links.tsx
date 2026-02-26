import {
  ExternalLink,
  Facebook,
  Globe,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import type { LinkItem } from "@/lib/site-config"

const iconMap = {
  globe: Globe,
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  facebook: Facebook,
  link: LinkIcon,
} as const

export function SocialLinks({ links }: { links: LinkItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((item) => {
        const IconComponent = iconMap[item.icon] || LinkIcon
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5 shadow-sm transition-colors active:bg-muted md:px-5 md:py-4"
          >
            <span className="text-primary">
              <IconComponent className="h-5 w-5" />
            </span>
            <span className="flex-1 text-sm font-medium text-foreground md:text-base">
              {item.label}
            </span>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
        )
      })}
    </div>
  )
}
