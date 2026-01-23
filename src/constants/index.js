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
  kohutM_webp,
  surferM_jpg,
  surferM_webp,
  shoesM_jpg,
  shoesM_webp,
  ravenM_jpg,
  ravenM_webp,
  birdM_jpg,
  birdM_webp,
  stillLife1_jpg,
  stillLife1_webp,
  stillLife2_jpg,
  stillLife2_webp,
  stillLife3_jpg,
  stillLife3_webp,
  stillLife4_jpg,
  stillLife4_webp,
  serviceWeb,
  service3D,
  serviceIllustration,
  HornThumb,
  HornColors,
  HornLogo,
  HornLogoShowcase,
  HornWireframe,
  HornDesktop,
  HornMobile,
  TorseThumb,
  TorseDesktop,
  TorseLoading,
  TorseMobile,
  TorseWireframe,
  TorseShading,
  CofDesktop,
  CofDesktop2,
  CofMobile,
  VirDesktop,
  VirLandscape,
  VirMobile,
  TorseThumbnail,
  ScrollLockThumb,
  artstation,
  behance,
  linkedin,
  github,
  BielaLiniaThumb,
  BielaLiniaDesktop,
  BielaLiniaMobile,
} from "../assets";

export const navLinks = [
  {
    id: "graphicDesign",
    to: "/graphicDesign",
  },
  {
    id: "3dGraphics",
    to: "/dGraphics",
  },
  {
    id: "illustrations",
    to: "/illustrations",
  },
  {
    id: "services",
    to: "/services",
  },
  {
    id: "aboutMe",
    to: "/about",
  },
];

export const navLinksContact = {
  id: "contact",
  to: "/contact",
};

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
    id: "Horn",
    thumb: HornThumb,
    live: "https://adammkass.github.io/horn/",
    images: [
      {
        image: HornThumb,
      },
      {
        image: HornColors,
      },
      {
        image: HornLogo,
      },
      {
        image: HornLogoShowcase,
      },
      {
        image: HornWireframe,
      },
      {
        image: HornDesktop,
      },
      {
        image: HornMobile,
      },
    ],
  },
  {
    id: "BielaLinia",
    thumb: BielaLiniaThumb,
    live: "https://bielalinia.pages.dev/",
    images: [
      {
        image: BielaLiniaThumb,
      },
      {
        image: BielaLiniaDesktop,
      },
      {
        image: BielaLiniaMobile,
      },
    ],
  },
  {
    id: "Torse",
    thumb: TorseThumbnail,
    live: "https://adammkass.github.io/torse/",
    images: [
      {
        image: TorseThumb,
      },
      {
        image: TorseDesktop,
      },
      {
        image: TorseLoading,
      },
      {
        image: TorseMobile,
      },
      {
        image: TorseWireframe,
      },
      {
        image: TorseShading,
      },
    ],
  },
  {
    id: "ScrollLock",
    thumb: ScrollLockThumb,
    live: "https://adammkass.github.io/Veri/",
    images: [
      {
        image: CofDesktop,
      },
      {
        image: CofDesktop2,
      },
      {
        image: VirDesktop,
      },
      {
        image: VirLandscape,
      },
    ],
  },
  {
    id: "Portfolio",
    thumb: PortfolioThumb,
    live: "https://adamkascak.com/",
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
];

export const IllustrationLinks = [
  {
    id: "kohut",
    image: {
      jpg: kohutM_jpg,
      webp: kohutM_webp,
      width: 600,
      height: 800,
    },
  },
  {
    id: "surfer",
    image: {
      jpg: surferM_jpg,
      webp: surferM_webp,
      width: 800,
      height: 600,
    },
  },
  {
    id: "shoes",
    image: {
      jpg: shoesM_jpg,
      webp: shoesM_webp,
      width: 800,
      height: 600,
    },
  },
  {
    id: "raven",
    image: {
      jpg: ravenM_jpg,
      webp: ravenM_webp,
      width: 600,
      height: 800,
    },
  },
  {
    id: "bird",
    image: {
      jpg: birdM_jpg,
      webp: birdM_webp,
      width: 800,
      height: 600,
    },
  },
  {
    id: "stillLife1",
    image: {
      jpg: stillLife1_jpg,
      webp: stillLife1_webp,
      width: 600,
      height: 800,
    },
  },
  {
    id: "stillLife2",
    image: {
      jpg: stillLife2_jpg,
      webp: stillLife2_webp,
      width: 800,
      height: 600,
    },
  },
  {
    id: "stillLife3",
    image: {
      jpg: stillLife3_jpg,
      webp: stillLife3_webp,
      width: 600,
      height: 800,
    },
  },
  {
    id: "stillLife4",
    image: {
      jpg: stillLife4_jpg,
      webp: stillLife4_webp,
      width: 600,
      height: 800,
    },
  },
];

export const experienceTitles = [
  {
    id: "exe",
  },
  {
    id: "centurion",
  },
  {
    id: "school",
  },
];

export const socials = [
  {
    id: "artstation",
    to: "https://www.artstation.com/adamkascak1",
    image: artstation,
  },
  {
    id: "behance",
    to: "https://www.behance.net/adamkascak#",
    image: behance,
  },
  {
    id: "github",
    to: "https://github.com/adammKass",
    image: github,
  },
  {
    id: "linked",
    to: "https://linkedin.com/in/adam-kascak-2006b3350",
    image: linkedin,
  },
];

export const services = [
  {
    id: "web",
    image: serviceWeb,
  },
  {
    id: "3d",
    image: service3D,
  },
  {
    id: "illustration",
    image: serviceIllustration,
  },
];

export const faqs = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
];
