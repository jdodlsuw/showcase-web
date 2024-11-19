import { SiteFooter } from "@/components/app/site-footer";
import { AppHeader } from "@/components/app/header";
import { AppSidebar } from "@/components/app/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <AppHeader />
        <main className="flex-1 px-4">{children}</main>
        <SiteFooter />
      </main>
    </SidebarProvider>
  );
}
