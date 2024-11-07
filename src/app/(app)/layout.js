import { Banner, Navbar } from "@/components/ui";
export default function HomeLayout({ children }) {
  return (
    <div>
      <Banner />
      <div className="flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
