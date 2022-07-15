
export function Details() {
  const datadetail = [{
    heading: "free",
    amount: "$0",
    month: "/month",
    user: "✔️single user",
    gb: "✔️5GB Storage",
    publicprojects: "✔️unlimited public project",
    access: "✔️community access",
    privateprojects: "❌unlimited private projects",
    phnsupport: "❌dedicated phone support",
    subdomain: "❌free subdomain",
    statusreports: "❌month status reports",
  }];
  return (
    <div className="fullpack">
      {datadetail.map((dd) => (
        <PricingSnips data={dd} />
      ))}

    </div>
  );
}

export function PricingSnips({ data }) {
  // console.log(data);
  return (
      <div className="pack">
        <h1 className="heading">{data.heading} </h1>
        <h1 className="amt">{data.amount}<span className="mon">{data.month}</span></h1>
        <hr></hr>
        <h6 className="user">{data.user}</h6>
        <h6 className="gb"> {data.gb}</h6>
        <h6 className="publicprojects">{data.publicprojects}</h6>
        <h6 className="communityaccess"> {data.access}</h6>
        <h6 className="unlimitedpp">{data.privateprojects}</h6>
        <h6 className="phnsupport">{data.phnsupport}</h6>
        <h6 className="subdomain">{data.subdomain}</h6>
        <h6 className="statusreports">{data.statusreports}</h6>
        <div className="butn">
        <button className="btn">Button</button>
        </div>
       
      </div>



  );
}
