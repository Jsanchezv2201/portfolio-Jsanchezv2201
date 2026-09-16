import dynamic from "next/dynamic";

import { AskJuanAssistant } from "@/components/ask-juan-assistant";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TerminalModal } from "@/components/terminal-modal";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-clip px-2">{children}</main>
      <SiteFooter />
      <ScrollTop />
      <AskJuanAssistant />
      <TerminalModal />
    </>
  );
}
