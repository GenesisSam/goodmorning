import * as React from "react";

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}

const ImageCoverHolder = (props: IProps) => {

  if ("object-fit" in document.body.style) {
    const { style, ...rest } = props;

    return <img style={{
      ...style,
      objectFit: "cover"
    }} {...rest} />

  } else {
    const { style, src: _src, ...rest } = props;

    return <img style={{
      ...style,
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center center",
    }} {...rest} />
  }


}

export default ImageCoverHolder;
