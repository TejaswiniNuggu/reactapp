export function Detail3(){
  const datadetail3=[ {
    heading: "pro",
    amount: "$49",
    month: "/month",
    user: "✔️Unlimited Users",
    gb: "✔️ 150GB Storage",
    publicprojects: "✔️Unlimited public project",
    access: "✔️Community access",
    privateprojects: "✔️Unlimited private projects",
    phnsupport: "✔️Dedicated phone support",
    tick:"✔️",
    subdomain: "Free subdomain",
    unlimited:"unlimited",
    statusreports: "✔️Month status reports",
  }]
  return(
    <div className="fullpack">
   {datadetail3.map((dd3)=>(<PricingSnips3 data3={dd3}/>))}
  </div>
  );
}

export function PricingSnips3({ data3}) {
  return (
    
<div className="pack">
<h1 className="heading3">{data3.heading} </h1>
<h1 className="amt3">{data3.amount}<span className="mon">{data3.month}</span></h1>
<hr></hr>
<h6 className="user3">{data3.user}</h6>
<h6 className="gb3"> {data3.gb}</h6>
<h6 className="publicprojects3">{data3.publicprojects}</h6>
<h6 className="communityaccess3"> {data3.access}</h6>
<h6 className="unlimitedpp3">{data3.privateprojects}</h6>
<h6 className="phnsupport3">{data3.phnsupport}</h6>
<h6 className="subdomain3">{data3.tick}<span className="un">{data3.unlimited}</span>{data3.subdomain}</h6>
<h6 className="statusreports3">{data3.statusreports}</h6>
<div className="butn">
        <button className="btn">Button</button>
        </div>
</div>

)}