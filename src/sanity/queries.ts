import {defineQuery} from "next-sanity";
export const opportunityListQuery=defineQuery(`
 *[_type=="opportunity"]|order(deadline asc){_id,title,opportunityId,opportunityType,status,deadline,"buyerName":buyer->name}
`);
export const opportunityEvidenceQuery=defineQuery(`
 *[_type=="opportunity"&&opportunityId==$opportunityId][0]{
 _id,title,opportunityId,status,deadline,summary,
 "buyer":buyer->{name,organizationType,website},
 "requirements":requirements[]->{requirementId,title,category,value,mandatory,"evidence":evidence[]->{title,sourceType,url,excerpt}},
 "amendments":amendments[]->{amendmentId,title,publishedAt,summary,changes}
 }
`);