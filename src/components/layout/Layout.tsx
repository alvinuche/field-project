import { FC, ReactNode } from "react";
import "./layout.scss";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<main className="layout">
			<div className="layout__content">{children}</div>
		</main>
	);
};

export default Layout;
