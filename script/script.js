tailwind.config = {
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
        },
        screens: {
          sm: "370px",
          md: "640px",
          lg: "940px",
          xl: "1160px",
        },
      },
      colors: {
        "color-E2E": "#FFEE2E",
        "color-B41": "#333B41",
        "color-013": "#FE9013",
        "color-7F6": "#F5F7F6",
        "color-F4F": "#4F4F4F",
        "color-DBD": "#BDBDBD",
        "color-115": "#111115",
      },
      fontFamily: {
        robot: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "size-15": [
          "15px",
          {
            lineHeight: "18px",
            fontWeight: "300",
          },
        ],
        "size-18": [
          "18px",
          {
            lineHeight: "21.6px",
            fontWeight: "400",
          },
        ],
        "size-27.21": [
          "27.21px",
          {
            lineHeight: "20.41px",
            fontWeight: "700",
          },
        ],
        "size-36": [
          "36px",
          {
            lineHeight: "46.8px",
            fontWeight: "400",
          },
        ],
        "size-54.42": [
          "54.42px",
          {
            lineHeight: "40.81px",
            fontWeight: "700",
          },
        ],
        "size-85.2": [
          "85.2px",
          {
            lineHeight: "63.9px",
            fontWeight: "700",
          },
        ],
        "size-106.5": [
          "106.5px",
          {
            lineHeight: "79.87px",
            fontWeight: "700",
          },
        ],
        "size-24": [
          "24px",
          {
            lineHeight: "28.8px",
            fontWeight: "400",
          },
        ],
        "size-42": [
          "42px",
          {
            lineHeight: "50.4px",
            fontWeight: "400",
          },
        ],
        "size-48": [
          "48px",
          {
            lineHeight: "57.6px",
            fontWeight: "400",
          },
        ],
      },
      gridColumn: {
        "auto-2": "grid-template-columns: auto auto",
      },
      spacing: {
        "position-37": "37px",
        "position-57": "57px",
        "position-100": "100px",
        "position-125": "125px",
        "270px": "270px",
        m280px: "-280px",
        m620px: "-620px",
        m16px: "-16px",
        m30px: "-30px",
        m95px: "-95px",
        m175px: "-175px",
        "105px": "105px",
        "20.4px": "20.4px",
        "60px": "60px",
        "100px": "100px",
        "140px": "140px",
        "33px": "33px",
        "152px": "152px",
        "155px": "155px",
        "218px": "218px",
      },
      lineHeight: {
        "lineH-22.4": "22.4px",
        "lineH-79.87": "79.87px",
      },
      backgroundImage: {
        "bg-xl": "url('./images/bg-xl.jpg')",
        "bg-sm": "url('./images/bg-sm.png')",
        "bg-md": "url('./images/bg-md.png')",
      },
      maxWidth: {
        "maxWidth-128": "128.13px",
        "maxWidth-255": "255.64px",
        "maxWidth-285": "285.24px",
        "maxWidth-300": "300px",
        "maxWidth-400": "400.25px",
        "maxWidth-454": "454px",
        "maxWidth-500": "500.3px",
        "maxWidth-600": "600px",
        "maxWidth-640": "640px",
        "maxWidth-940": "940px",
        "maxWidth-900": "900px",
        "maxWidth-1160": "1160px",
      },
    },
    screens: {
      sm: "370px",
      md: "640px",
      lg: "940px",
      xl: "1160px",
    },
    // screens: {
    //   xl: { max: "1160px" },
    //   lg: { max: "940px" },
    //   md: { max: "640px" },
    //   sm: { max: "370px" },
    // },
  },
};
