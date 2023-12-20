import React from "react";
import Price from "./Components/Price";

function App() {
  const pricing = [
    {
      cost: "Free",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      projects: "Unlimited Public Projects",
      access: " Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      cost: "Plus",
      price: "$9",
      user: "5 Users",
      storage: "5GB Storage",
      projects: "Unlimited Public Projects",
      access: " Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      cost: " Pro",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      projects: "Unlimited Public Projects",
      access: " Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Unlimited Free Subdomain",
      report: "Monthly Status Reports",
    },
  ];

  return (
    <>
      <h1 className="text-center mt-2 mb-3">Pricing Card</h1>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {pricing.map((val, i) => {
                return <Price value={val} key={i} />;
              })}
            </div>
          </div>
        </section>
    </>
  );
}

export default App;
