export function getContactHref(name: string, contact: string): string {
  const links: Record<string, string> = {
    github: `https://github.com/${contact}`,
    linkedin: `https://linkedin.com/in/${contact}`,
    twitter: `https://twitter.com/${contact}`,
    telegram: `https://t.me/${contact}`,
    email: `mailto:${contact}`,
    rss: contact,
  };
  return links[name] || contact;
}
