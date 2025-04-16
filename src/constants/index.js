import {
  FBUThumb,
  OasisThumb,
  SDThumb,
  TombThumb,
  PortfolioThumb,
  PortfolioIllustrationsShowcase,
  PortfolioFontShowcase,
  PortfolioColorPalette,
  kohutM_jpg,
  kohutM_avif,
  kohutM_webp,
  surferM_jpg,
  surferM_avif,
  surferM_webp,
  shoesM_jpg,
  shoesM_avif,
  shoesM_webp,
  ravenM_jpg,
  ravenM_avif,
  ravenM_webp,
  birdM_jpg,
  birdM_avif,
  birdM_webp,
  stillLife1_jpg,
  stillLife1_avif,
  stillLife1_webp,
  stillLife2_jpg,
  stillLife2_avif,
  stillLife2_webp,
  stillLife3_jpg,
  stillLife3_avif,
  stillLife3_webp,
  stillLife4_jpg,
  stillLife4_avif,
  stillLife4_webp,
  UnderwaterDesignStyles,
  UnderwaterLandingPage,
  UnderwaterLandingPageMobile,
  UnderwaterBlogPage,
  UnderwaterBlogPost,
  UnderwaterImagePage,
  UnderwaterImagePageMobile,
  UnderwaterUserPage,
  UnderwaterEditUserPage,
  UnderwaterThumb,
} from "../assets";

export const navLinks = [
  {
    id: "3dGraphics",
    to: "/adam-kascak-portfolio/dgraphics",
  },
  {
    id: "graphicDesign",
    to: "/adam-kascak-portfolio/graphicdesign",
  },
  {
    id: "illustrations",
    to: "/adam-kascak-portfolio/illustrations",
  },
  {
    id: "aboutMe",
    to: "/adam-kascak-portfolio/about",
  },
  {
    id: "contact",
    to: "/adam-kascak-portfolio/contact",
  },
];

export const GraphicsLinks = [
  {
    id: "SD",
    thumb: SDThumb,
    href: "https://www.artstation.com/artwork/oJd3Dq",
  },
  {
    id: "FBU",
    thumb: FBUThumb,
    href: "https://www.artstation.com/artwork/K34aQR",
  },
  {
    id: "Oasis",
    thumb: OasisThumb,
    href: "https://www.artstation.com/artwork/xDb601",
  },
  {
    id: "Tomb",
    thumb: TombThumb,
    href: "https://www.artstation.com/artwork/m8456y",
  },
];

export const DesignLinks = [
  {
    id: "Portfolio",
    thumb: PortfolioThumb,
    images: [
      {
        image: PortfolioIllustrationsShowcase,
      },
      {
        image: PortfolioFontShowcase,
      },
      {
        image: PortfolioColorPalette,
      },
    ],
  },
  {
    id: "Divers Lenses",
    thumb: UnderwaterThumb,
    images: [
      {
        image: UnderwaterDesignStyles,
      },
      {
        image: UnderwaterLandingPage,
      },
      {
        image: UnderwaterLandingPageMobile,
      },
      {
        image: UnderwaterBlogPage,
      },
      {
        image: UnderwaterBlogPost,
      },
      {
        image: UnderwaterImagePage,
      },
      {
        image: UnderwaterImagePageMobile,
      },
      {
        image: UnderwaterUserPage,
      },
      {
        image: UnderwaterEditUserPage,
      },
    ],
  },
];

export const IllustrationLinks = [
  {
    id: "kohut",
    image: {
      jpg: kohutM_jpg,
      avif: kohutM_avif,
      webp: kohutM_webp,
    },
  },
  {
    id: "surfer",
    image: {
      jpg: surferM_jpg,
      avif: surferM_avif,
      webp: surferM_webp,
    },
  },
  {
    id: "shoes",
    image: {
      jpg: shoesM_jpg,
      avif: shoesM_avif,
      webp: shoesM_webp,
    },
  },
  {
    id: "raven",
    image: {
      jpg: ravenM_jpg,
      avif: ravenM_avif,
      webp: ravenM_webp,
    },
  },
  {
    id: "bird",
    image: {
      jpg: birdM_jpg,
      avif: birdM_avif,
      webp: birdM_webp,
    },
  },
  {
    id: "stillLife1",
    image: {
      jpg: stillLife1_jpg,
      avif: stillLife1_avif,
      webp: stillLife1_webp,
    },
  },
  {
    id: "stillLife2",
    image: {
      jpg: stillLife2_jpg,
      avif: stillLife2_avif,
      webp: stillLife2_webp,
    },
  },
  {
    id: "stillLife3",
    image: {
      jpg: stillLife3_jpg,
      avif: stillLife3_avif,
      webp: stillLife3_webp,
    },
  },
  {
    id: "stillLife4",
    image: {
      jpg: stillLife4_jpg,
      avif: stillLife4_avif,
      webp: stillLife4_webp,
    },
  },
];
