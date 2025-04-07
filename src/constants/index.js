import {
  AboutMeOn,
  dgraphicsOn,
  FBUThumb,
  GraphicDesignOn,
  IllustrationsOn,
  kohutM,
  kohutMAvif,
  kohutMWebp,
  surferM,
  surferMAvif,
  surferMWebp,
  OasisThumb,
  SDThumb,
  TombThumb,
  PortfolioThumb,
  PortfolioIllustrationsShowcase,
  PortfolioFontShowcase,
  PortfolioColorPalette,
  shoesM,
  ravenM,
  birdM,
  stillLife1,
  stillLife2,
  stillLife3,
  stillLife4,
} from "../assets";

export const navLinks = [
  {
    id: "3dGraphics",
    title: "3D Graphics",
    to: "/dgraphics",
  },
  {
    id: "graphicDesign",
    title: "Graphic Design",
    to: "/graphicdesign",
  },
  {
    id: "illustrations",
    title: "Illustrations",
    to: "/illustrations",
  },
  {
    id: "aboutMe",
    title: "About Me",
    to: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    to: "/contact",
  },
];

export const GraphicsLinks = [
  {
    id: "SD",
    title: "Substance Designer Practice3",
    text: "Here are some of the materials I created using Substance Designer. Aim of this practice was to improve my skills in Substance Designer. I wanted to achieve a more stylized look. Textures were created in Substance Designer and final render was done using Substance Stager.",
    thumb: SDThumb,
    href: "https://www.artstation.com/artwork/oJd3Dq",
  },
  {
    id: "FBU",
    title: "Forgotten but Unbroken",
    text: "Screenshots of maps I worked on during my time in Centurion Devolopments. I was part of the team developing Forgotten but Unbroken, turn-based strategy game set during events of World War II.",
    thumb: FBUThumb,
    href: "https://www.artstation.com/artwork/K34aQR",
  },
  {
    id: "Oasis",
    title: "Oasis",
    text: "Another personal project I created in my free time. This time I wanted to do something more stylized with focus on organic elements like rocks and vegetation.",
    thumb: OasisThumb,
    href: "https://www.artstation.com/artwork/xDb601",
  },
  {
    id: "Tomb",
    title: "Greek Tomb",
    text: "Greek tomb environment I did in my free time.",
    thumb: TombThumb,
    href: "https://www.artstation.com/artwork/m8456y",
  },
];

export const DesignLinks = [
  {
    id: "Portfolio",
    title: "Portfolio Website",
    textShort:
      "Personal project. I wanted to make a website showcasing some of my work from different areas of visual arts.",
    thumb: PortfolioThumb,
    type: "Web design",
    tools: `Design: Figma, Krita, Adobe Illustrator \n Programming: React, Tailwind CSS`,
    year: "2025",
    text: "Personal project. I wanted to make a website showcasing some of my work from different areas of visual arts. I also wanted for this website to combine my love for illustrating, so of course simple angular Illustrations were used on the home page. I wanted to keep the color palette black and white, as I also like to work mostly with black and white for most of my illustrations. There are a total of 4 colors used on this website: white, light grey, dark grey and black.\nFonts used are all geometric sans-serif. Circular shapes of Montserrat Alternates complements nicely with sharp edges of illustrations and rectangles on the website. In some places, I also used Futura PT, this time for sharp edges on some of it's symbols, like A and F.\nWebsite was created by me from start to finish, including web development. I used React framework with Tailwind CSS, as this is combination I'm most comfortable with.",
    images: [
      {
        image: PortfolioIllustrationsShowcase,
        title: "Illustration Showcase",
      },
      {
        image: PortfolioFontShowcase,
        title: "Fonts Showcase",
      },
      {
        image: PortfolioColorPalette,
        title: "Color Palette",
      },
    ],
  },
];

export const IllustrationLinks = [
  {
    id: "kohut",
    title: "Roosters in Key West",
    text: "pen and ink, Letter",
    image: {
      jpg: kohutM,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
  {
    id: "surfer",
    title: "Feel the Waves",
    text: "digital, 1920x1080p",
    image: {
      jpg: surferM,
      avif: surferMAvif,
      webp: surferMWebp,
    },
  },
  {
    id: "shoes",
    title: "Topánky",
    text: "pen and ink",
    image: {
      jpg: shoesM,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
  {
    id: "raven",
    title: "Raven",
    text: "pen and ink",
    image: {
      jpg: ravenM,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
  {
    id: "bird",
    title: "Bird",
    text: "Engraving",
    image: {
      jpg: birdM,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
  {
    id: "stillLife1",
    title: "Still Life Practice 1",
    text: "charcoal, pencil",
    image: {
      jpg: stillLife1,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
  {
    id: "stillLife2",
    title: "Still Life Practice 2",
    text: "charcoal, pencil",
    image: {
      jpg: stillLife2,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
  {
    id: "stillLife3",
    title: "Still Life Practice 3",
    text: "charcoal, pencil",
    image: {
      jpg: stillLife3,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
  {
    id: "stillLife4",
    title: "Still Life Practice 4",
    text: "charcoal, pencil",
    image: {
      jpg: stillLife4,
      avif: kohutMAvif,
      webp: kohutMWebp,
    },
  },
];
