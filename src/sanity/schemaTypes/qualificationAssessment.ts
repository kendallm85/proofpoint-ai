import {defineField,defineType} from "sanity";
export const qualificationAssessment=defineType({name:"qualificationAssessment",title:"Qualification Assessment",type:"document",fields:[
defineField({name:"opportunity",title:"Opportunity",type:"reference",to:[{type:"opportunity"}],validation:r=>r.required()}),
defineField({name:"status",title:"Assessment Status",type:"string",options:{list:["qualified","not-qualified","needs-review","insufficient-evidence"]}}),
defineField({name:"verifiedFacts",title:"Verified Facts",type:"array",of:[{type:"string"}]}),
defineField({name:"gaps",title:"Evidence Gaps",type:"array",of:[{type:"string"}]}),
defineField({name:"conflicts",title:"Conflicts",type:"array",of:[{type:"string"}]}),
defineField({name:"reasoning",title:"Reasoning",type:"text"}),
defineField({name:"humanDecision",title:"Human Decision",type:"string",options:{list:["pursue","do-not-pursue","pending"]}}),
defineField({name:"assessedAt",title:"Assessed At",type:"datetime"})
]});