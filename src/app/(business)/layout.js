import { Banner } from "@/components/ui";
export default function HomeLayout({ children }) {
  return (
    <div>
      <Banner />
      <div>Header 1</div>
      {children}
    </div>
  );
}
