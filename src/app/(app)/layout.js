import { SiteFooter } from "@/components/app/site-footer";
import { AppHeader } from "@/components/app/header";
import { AppSidebar } from "@/components/app/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 px-4"></main>
        <SiteFooter />
      </main>
    </SidebarProvider>
  );
}
