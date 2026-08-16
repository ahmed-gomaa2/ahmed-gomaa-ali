import { getAssetPath } from "../utils/paths";
import huseinNadeemCover from "../assets/projects/husein-nadeem/screen-01.png";
import takemeMarketplaceCover from "../assets/projects/takeme-marketplace/cover.png";

export const skillGroups = [
  {
    icon: "frontend",
    number: "01",
    title: "Front-end",
    description: "Responsive, accessible interfaces built for real users.",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    icon: "frameworks",
    number: "02",
    title: "UI frameworks",
    description: "Consistent layouts and components that move projects forward.",
    skills: ["Bootstrap", "Semantic UI"],
  },
  {
    icon: "state",
    number: "03",
    title: "State & data",
    description: "Predictable application state and asynchronous data flows.",
    skills: ["Redux", "Redux Thunk", "JWT"],
  },
  {
    icon: "backend",
    number: "04",
    title: "Back-end",
    description: "The server-side tools needed to ship connected applications.",
    skills: ["NodeJS", "MySQL", "Socket.IO"],
  },
];

function createScreenshots(slug, count, title) {
  const screenshots = [];

  for (let index = 1; index <= count; index += 1) {
    const number = String(index).padStart(2, "0");

    screenshots.push({
      src: getAssetPath(`/assets/projects/${slug}/screen-${number}.png`),
      alt: `${title} screenshot ${index}`,
    });
  }

  return screenshots;
}

function createTakeMeScreenshot(fileName, caption) {
  return {
    src: getAssetPath(`/assets/projects/takeme-marketplace/${fileName}`),
    alt: `TakeMe ${caption.toLowerCase()} screen`,
    caption,
    layout: "phone",
  };
}

const takemeScreenshots = [
  createTakeMeScreenshot("screen-01.png", "Profile overview"),
  createTakeMeScreenshot("screen-02.png", "Discovery loading state"),
  createTakeMeScreenshot("screen-03.png", "Side navigation"),
  createTakeMeScreenshot("screen-04.png", "Login flow"),
  createTakeMeScreenshot("screen-05.png", "Email confirmation"),
  createTakeMeScreenshot("screen-06.png", "About content"),
  createTakeMeScreenshot("screen-07.png", "Terms page"),
  createTakeMeScreenshot("screen-08.png", "Countries management"),
  createTakeMeScreenshot("screen-09.png", "Roles management"),
  createTakeMeScreenshot("screen-10.png", "Languages management"),
  createTakeMeScreenshot("screen-11-phone.png", "Locales management"),
];

export const projects = [
  {
    slug: "husein-nadeem",
    number: "01",
    type: "Landing page",
    title: "Husein Nadeem",
    description:
      "A personal coaching landing page focused on clear messaging, direct contact, and a simple conversion path for Arabic-speaking users.",
    liveUrl: "https://huseinnadeem.com/",
    galleryPath: "/projects/husein-nadeem",
    coverImage: huseinNadeemCover,
    screenshots: createScreenshots("husein-nadeem", 9, "Husein Nadeem"),
    tags: ["Landing Page", "Responsive UI", "Arabic Content"],
    tone: "coral",
  },
  {
    slug: "takeme-marketplace",
    number: "02",
    type: "Mobile marketplace",
    title: "TakeMe",
    description:
      "A mobile-first marketplace experience with RTL flows, profile tools, authentication screens, admin management, and multilingual content.",
    galleryPath: "/projects/takeme-marketplace",
    coverImage: takemeMarketplaceCover,
    coverPosition: "center center",
    screenshots: takemeScreenshots,
    galleryLayout: "phone",
    tags: ["Marketplace", "Mobile UI", "RTL", "Admin Tools"],
    tone: "mint",
  },
];
