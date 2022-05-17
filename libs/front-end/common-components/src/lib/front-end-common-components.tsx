import styles from "./front-end-common-components.module.scss";

/* eslint-disable-next-line */
export interface FrontEndCommonComponentsProps {}

export function FrontEndCommonComponents(props: FrontEndCommonComponentsProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to FrontEndCommonComponents!</h1>
    </div>
  );
}

export default FrontEndCommonComponents;
