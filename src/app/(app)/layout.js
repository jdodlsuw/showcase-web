import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";

export default function AppLayout({ children }) {
  return (
    <div data-wrapper="" className="border-border/40 dark:border-border">
      <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
