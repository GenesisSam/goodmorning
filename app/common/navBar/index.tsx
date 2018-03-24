import * as React from "react";

const styles = require("./navBar.scss");

interface IProps extends React.HTMLProps<HTMLDivElement> {
}

export default class NavBar extends React.Component<IProps> {
  public render() {
    return (
      <div className={`${styles.wrapper} ${this.props.className}`}>
        <div className={styles.logo}>Good morning!</div>
      </div>
    )
  }
}
