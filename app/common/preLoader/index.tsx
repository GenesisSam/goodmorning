import * as React from "react";

interface IProps {
  imageUrls: string[];
}

const PreLoader = ({ imageUrls }: IProps) => {
  let urls;

  urls = imageUrls.map((src) => {
    return `url(${src})`;
  })

  return (
    <div style={{
      display: "none",
      width: 0,
      height: 0,
      backgroundImage: `${urls.join(",")}`
    }} />
  )
}

export default PreLoader;
