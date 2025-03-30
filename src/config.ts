import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
    telegram?: string;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://eplot.oopus.info", // your site url
  title: "Eplot",
  slogan: "",
  description: "Abstract of Eposides 剧情简介",
  social: {
    github: "https://github.com/sudoghut/eplot", // leave empty if you don't want to show the github
    // linkedin: "https://www.linkedin.com/in/someone/", // leave empty if you don't want to show the linkedin
    // email: "example@gmail.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "G-WTWD13672L", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
