import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/ui/sidebar-nav";

export default function DocsLayout({ children }) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      {children}
    </div>
  );
}
