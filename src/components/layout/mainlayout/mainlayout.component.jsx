import "./mainlayout.css";
import { SideNav } from "../sidenav/sidenav.component";

export function MainLayout({ children }) {
  return (
    <div className="base">
      <SideNav />
      <div className="content">{children}</div>
    </div>
  );
}
