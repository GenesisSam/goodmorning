import * as React from "react";

const styles = require("./global.scss");

const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.rootWrapper}>
      {children}
    </div>
  )
}

export default RootWrapper;
