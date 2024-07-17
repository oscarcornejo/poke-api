import { CombatList } from "../../components";
import { useAppSelector } from "../../hooks";
import { RootLayoutProps } from "./RootLayout.def";

import classes from "./RootLayout.module.scss";

export const RootLayout = ({ children }: RootLayoutProps) => {
  const isOpenSidebar = useAppSelector((state) => state.sidebar.isOpenSidebar);

  return (
    <main className={classes["layout-container"]}>
      {children}
      <CombatList isOpen={isOpenSidebar} />
    </main>
  );
};
