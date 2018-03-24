import * as React from "react";
import ImageCoverHolder from "../../common/imageCoverHolder";
import { connect, Dispatch } from "react-redux";
import { AppReducer } from "../../typings/reducer";
import { changeBGImage } from "../../actions/landing";
import NavBar from "../../common/navBar/index";

const styles = require("./index.scss");

const IMAGE_RES_SRC = [
  "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg01.jpg?alt=media",
  "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg02.jpg?alt=media",
  "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg03.jpg?alt=media",
  "https://firebasestorage.googleapis.com/v0/b/goodmorning-7d726.appspot.com/o/bg%2Fbg04.jpg?alt=media",
]

interface IProps {
  landing: Landing.IStore;
  dispatch: Dispatch<any>;
}

function mapStateToProps(appState: AppReducer.IStore) {
  return {
    landing: appState.landing,
  }
}

class LandPage extends React.PureComponent<IProps> {
  private currentPos = 1;
  private handlerImageChanger: NodeJS.Timer;

  public componentDidMount() {
    this.handlerImageChanger = setInterval(this.handleChangeImage, 5000);
  }

  public componentWillUnmount() {
    clearInterval(this.handlerImageChanger);
  }

  public render() {
    return (
      <div className={styles.wrapper}>
        <NavBar className={styles.fixedNav} />
        <ImageCoverHolder className={styles.background} src={this.props.landing.currentImageSrc ? this.props.landing.currentImageSrc : IMAGE_RES_SRC[0]} width="100%" height="100%" />
      </div>
    )
  }

  handleChangeImage = () => {
    this.currentPos = this.currentPos < IMAGE_RES_SRC.length - 1 ? this.currentPos + 1 : 0;
    this.props.dispatch(changeBGImage(IMAGE_RES_SRC[this.currentPos]));
  }
}


export default connect(mapStateToProps)(LandPage);
