import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/NanumBarunGothic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="NanumBarunGothicFont"
    />,
    <link
      rel="preload"
      href="/fonts/UbuntuMono-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="UbuntuMonoFont"
    />,
  ])
}
