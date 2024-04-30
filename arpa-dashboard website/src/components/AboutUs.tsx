type Props = {};
const AboutUs = (props: Props) => {
  return (
    <div className="flex flex-col items-center  bg-zinc-400 h-[40rem] rounded-md p-10 space-y-16">
      <h1 className="text-2xl font-extrabold text-black"> About Us </h1>
      <p className="text-lg font-bold text-black">
        The ARPA projects managed by the Food Policy and Planning team fall under the “Clean and Healthy Communities” section of Mayoral Priority Outcomes. The goal of this project is to build an equitable and resilient food system to mitigate the negative impacts associated with food insecurity during and after the COVID-19 pandemic by: improving access to healthy affordable food, increasing produce distribution and incentivization, and addressing the food supply chain failure by building the BIPOC local food production supply chain. Evaluation data from each pillar will be utilized to create food system policies and programs for the future. Overall, what makes this project innovative is that it is a comprehensive food systems strategy, not just one project in one community.
      </p>
    </div>
  );
};

export default AboutUs;
