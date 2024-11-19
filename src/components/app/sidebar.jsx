import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Icons } from "@/components/ui/icons";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Icons.logo className="h-6 w-6" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
