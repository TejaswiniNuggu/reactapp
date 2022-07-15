export function Detailsecond(){
  const datadetailsecond=[ {
  heading: "plus",
  amount: "$9",
  month: "/month",
  user: "✔️ 5 Users",
  gb: "✔️50GB Storage",
  publicprojects: "✔️unlimited public project",
  access: "✔️community access",
  privateprojects: "✔️unlimited private projects",
  phnsupport: "✔️Dedicated phone support",
  subdomain: "✔️Free Subdomain",
  statusreports: "❌month status reports",
}]
return(
  <div className="fullpack">
 {datadetailsecond.map((dds)=>(<PricingSnipssec data2={dds}/>))}
</div>
);
}


export function PricingSnipssec({ data2}) {
  
  return (
<div className="pack">
<h1 className="heading2">{data2.heading} </h1>
<h1 className="amt2">{data2.amount}<span className="mon">{data2.month}</span></h1>
<hr></hr>
<h6 className="user2">{data2.user}</h6>
<h6 className="gb2"> {data2.gb}</h6>
<h6 className="publicprojects2">{data2.publicprojects}</h6>
<h6 className="communityaccess2"> {data2.access}</h6>
<h6 className="unlimitedpp2">{data2.privateprojects}</h6>
<h6 className="phnsupport2">{data2.phnsupport}</h6>
<h6 className="subdomain2">{data2.subdomain}</h6>
<h6 className="statusreports2">{data2.statusreports}</h6>

<div className="butn">
        <button className="btn">Button</button>
        </div>

</div>)}
