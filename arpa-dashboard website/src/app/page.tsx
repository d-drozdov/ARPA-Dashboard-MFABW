import AboutUs from "@/components/AboutUs";
import DataPanes from "@/components/DataPanes";
import FivePillars from "@/components/FivePillars";
import { Tab, Tabs } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Tabs
        tabs={tabsContent}
        containerClassName="px-10 pt-5 min-w-full mx-auto"
        contentClassName="px-10"
      />
    </div>
  );
}

const tabsContent: Tab[] = [
  {
    title: "About Us",
    value: "about-us",
    content: <AboutUs />,
  },
  {
    title: "The Data",
    value: "the-data",
    content: <DataPanes />,
  },
  {
    title: "The Five Pillars",
    value: "the-five-pillars",
    content: <FivePillars />,
  },
];
