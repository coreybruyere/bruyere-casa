import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Bruyere Casa",
  DESCRIPTION: "Bruyere Casa in the central homebase for all things Bruyere.",
  EMAIL: "hello@coreybruyere.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Bruyere Casa in the central homebase for all things Bruyere.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of Bruyere articles.",
};

export const HEALTH: Metadata = {
  TITLE: "Health",
  DESCRIPTION: "A collection of Bruyere health tips.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of Bruyere projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/coreybruyere",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/coreybruyere",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/coreybruyere",
  },
];
