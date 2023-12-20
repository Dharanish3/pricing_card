import React from "react";
import Price from "./Components/Price";

function App() {
  const pricing = [
    {
      cost: "Free",
      price: "$0",
      user: "Single User",
      isUser : true,
      storage: "5GB Storage",
      isStorage : true,
      projects: "Unlimited Public Projects",
      isProjects : true,
      access: " Community Access",
      isAccess : true,
      private: "Unlimited Private Projects",
      isPrivate : false,
      support: "Dedicated Phone Support",
      isSupport : false,
      domain: "Free Subdomain",
      isDomain : false,
      report: "Monthly Status Reports",
      isReport : false
    },
    {
      cost: "Plus",
      price: "$9",
      user: "5 User",
      isUser : true,
      storage: "15GB Storage",
      isStorage : true,
      projects: "Unlimited Public Projects",
      isProjects : true,
      access: " Community Access",
      isAccess : true,
      private: "Unlimited Private Projects",
      isPrivate : true,
      support: "Dedicated Phone Support",
      isSupport : true,
      domain: "Free Subdomain",
      isDomain : true,
      report: "Monthly Status Reports",
      isReport : false
    },
    {
      cost: "Pro",
      price: "$49",
      user: "Unlimited Users",
      isUser : true,
      storage: "150GB Storage",
      isStorage : true,
      projects: "Unlimited Public Projects",
      isProjects : true,
      access: " Community Access",
      isAccess : true,
      private: "Unlimited Private Projects",
      isPrivate : true,
      support: "Dedicated Phone Support",
      isSupport : true,
      domain: "Free Subdomain",
      isDomain : true,
      report: "Monthly Status Reports",
      isReport : true
    }
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
