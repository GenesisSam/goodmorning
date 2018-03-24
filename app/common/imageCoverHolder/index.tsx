import * as React from "react";

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  useBackground?: boolean;
}

const ImageCoverHolder = (props: IProps) => {

  if ("object-fit" in document.body.style && !props.useBackground) {
    const { style, useBackground: _var1, ...rest } = props;

    return <img style={{
      ...style,
      objectFit: "cover"
    }} {...rest} />

  } else {
    const { style, useBackground: _var1, src, ...rest } = props;

    return <img style={{
      ...style,
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center center",
    }} {...rest} />
  }


}

export default ImageCoverHolder;
