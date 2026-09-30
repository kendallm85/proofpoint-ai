import {client} from "@/sanity/client";
import {opportunityListQuery} from "@/sanity/queries";
export default async function Home(){
 const configured=Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
 const opportunities=configured?await client.fetch(opportunityListQuery):[];
 return <main className="shell">
  <section className="hero"><p className="eyebrow">PROOFPOINT AI</p><h1>Evidence before decisions.</h1><p className="lede">An evidence-first agent for business opportunities, requirements, amendments, and qualification decisions.</p></section>
  <section className="panel"><div className="panelHeader"><div><p className="eyebrow">OPPORTUNITIES</p><h2>Current opportunity record</h2></div><span className={configured?"status live":"status"}>{configured?"SANITY CONNECTED":"SANITY NOT CONFIGURED"}</span></div>
  {opportunities.length===0?<div className="empty"><strong>Foundation ready.</strong><p>Connect a Sanity project and publish the synthetic procurement fixture to activate the first evidence query.</p></div>:<div className="list">{opportunities.map(o=><article key={o._id} className="card"><div><span className="mono">{o.opportunityId}</span><h3>{o.title}</h3><p>{o.buyerName||"Buyer not recorded"}</p></div><div className="meta"><span>{o.status||"unknown"}</span><span>{o.deadline?new Date(o.deadline).toLocaleDateString():"No deadline"}</span></div></article>)}</div>}</section>
 </main>;
}