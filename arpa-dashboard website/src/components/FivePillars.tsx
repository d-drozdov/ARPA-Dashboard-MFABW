import FivePillarsCard from "./ui/fivePillarsCards";

type Props = {};
const FivePillars = (props: Props) => {
  const data = [
    {
      title: "Produce Boxes",
      data: ["87,870 boxes per month", "9.25M fruit/veg servings"],
      description:
        "The longest-running and biggest overall initiative, consisting in providing boxes of fresh produce to those in high-priority areas via food delivery sites.",
    },
    {
      title: "Online Snap",
      data: ["$519,208 avg dollar value per month (last quarter)"],
      description:
        " Participation in this new  initiative incentivizes online purchasing of fruits and vegetables, as well as promotion of online grocery store platforms.  This also allows for easily collected data on recipients.",
    },
    {
      title: "Farmers Markets",
      data: ["3,668 e-incentives total redeemed"],
      description:
        "Many vendors now accept benefits such as SNAP/EBT/eWIC card for distribution of fresh produce from local growers.  Examples include Clifton Park's Real Food Farm and Parkton's Oxbow Farm.",
    },
    {
      title: "Food is Medicine",
      data: ["121 patients", "34,556 meals", "56,900 servings"],
      description:
        "A MedStar RX program that helps people with diabetes improve their health by thinking of food as medicine, therefore reducing hemoglobin A1C concentrations and emergency department visits.  Patients can connect with SNAP, Meals on Wheels, and many more resources.",
    },
    {
      title: "BIPOC Local Farms",
      data: ["48 farms currently", "8,936 pounds produce"],
      description:
        "The Farm Alliance of Baltimore's Black Butterfly Urban Farmer Academy provides a 9 month training program that centers around sustainable agriculture and farm business planning, through both classroom and hands-on instruction.  This is meant for socially disadvantaged members of Baltimore that live in 'butterfly wings' of the city.",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-900 h-[40rem] rounded-md w-full px-9">
      {data.map((block, index) => (
        <FivePillarsCard
          key={index}
          title={block.title}
          data={block.data}
          description={block.description}
        />
      ))}
    </div>
  );
};

export default FivePillars;
