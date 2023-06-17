import { createTheme } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: ["Nanum Barun Gothic", "Roboto"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
            font-family: 'Nanum Barun Gothic';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/NanumBarunGothic.ttf) format("truetype");
        }
        @font-face {
            font-family: 'Ubuntu Mono';
            font-weight: normal;
            font-display: swap;
            font-style: normal;
            font-named-instance: 'Regular';
            src: url(/fonts/UbuntuMono-Regular.ttf) format("truetype");
        }
      `,
    },
  },
})

export default theme
