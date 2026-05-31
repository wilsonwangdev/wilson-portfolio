import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Wilson's Handbook",
  DESCRIPTION: "Personal portal — a curated index of projects, tools, and experiments.",
  AUTHOR: "Wilson",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Things I've built and shipped.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all projects by keyword.",
}

// Links (top nav)
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hi@wilsonhandbook.online",
    HREF: "mailto:hi@wilsonhandbook.online",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "github.com/wilsonwangdev",
    HREF: "https://github.com/wilsonwangdev"
  },
]
