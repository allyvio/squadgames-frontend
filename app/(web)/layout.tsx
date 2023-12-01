import React, { FC } from "react";
import WebFooter from "@/components/web-footer";
import WebNav from "@/components/nav/web-nav";
import { webNavConfig, productNavConfig } from "@/config/nav";
import "styles/styles.css";

interface WebLayoutProps {
  children: React.ReactNode;
}

const WebLayout: FC<WebLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <WebNav items={webNavConfig} productNav={productNavConfig} />
      <main className="flex-1">{children}</main>
      <WebFooter />
    </div>
  );
};

export default WebLayout;
