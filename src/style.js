const styles = {
  // Main box size
  boxWidth: "xl:max-w-[1440px] w-full",
  focus: "",
  cards:
    "bg-PWhite border-4 rounded-sm shadow-2xl border-PBlack min-w-42 basis-1/4 ",

  // Cursor styles
  cursorText:
    "cursor-[url('/cursors/cursor-text.svg')_0_10,text] dark:cursor-[url('/cursors/cursor-text_dark.svg')_0_10,text]",
  cursorPointer:
    "cursor-[url('/cursors/cursor-pointer.svg')_0_0,pointer] dark:cursor-[url('/cursors/cursor-pointer_dark.svg')_0_0,pointer]",
  cursorAuto:
    "cursor-[url('/cursors/cursor-auto.svg')_0_0,default] dark:cursor-[url('/cursors/cursor-auto_dark.svg')_0_0,default]",

  headingMain:
    "text-3xl sm:text-5xl lg:text-6xl font-black uppercase border-b-2 pb-4 lg:pb-8 border-black text-center",

  // Paddings and margins
  paddingXA: "px-10 lg:px-20",
  mainMarginY: "my-8 lg:my-16",
  marginB: "mb-8 md:mb-10",
  paddingB: "pb-8 md:pb-10",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  tabHover:
    "group hover:cursor-pointer hover:bg-PGrey hover:rounded-lg hover:translate-x-4 transition-all ease-in-out duration-300",

  // Icon styles
  iconSize: "w-[29px] h-[29px] lg:w-[58px] lg:h-[58px]",
  iconHover:
    "dark:brightness-[4] dark:saturate-0 opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out cursor-pointer",

  illustHover:
    "hover:opacity-100 hover:-translate-y-2 transition-all ease-in-out duration-300",

  // Transitions
  transitionOpacity: "transition duration-300 ease-in-out",
  transitionTransform:
    "data-[hover]:-translate-y-4 transition-transform duration-300 ease-in-out ",
};

export default styles;
