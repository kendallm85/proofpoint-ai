import {defineField,defineType} from "sanity";
export const opportunity=defineType({name:"opportunity",title:"Opportunity",type:"document",fields:[
defineField({name:"title",title:"Title",type:"string",validation:r=>r.required()}),
defineField({name:"opportunityId",title:"Opportunity ID",type:"string",validation:r=>r.required()}),
defineField({name:"opportunityType",title:"Type",type:"string",options:{list:["procurement","rfp","grant","contract","other"]}}),
defineField({name:"buyer",title:"Buyer",type:"reference",to:[{type:"organization"}]}),
defineField({name:"summary",title:"Summary",type:"text"}),
defineField({name:"deadline",title:"Current Deadline",type:"datetime"}),
defineField({name:"status",title:"Status",type:"string",options:{list:["open","amended","closed","unknown"]}}),
defineField({name:"requirements",title:"Requirements",type:"array",of:[{type:"reference",to:[{type:"requirement"}]}]}),
defineField({name:"amendments",title:"Amendments",type:"array",of:[{type:"reference",to:[{type:"amendment"}]}]}),
defineField({name:"evidence",title:"Evidence Sources",type:"array",of:[{type:"reference",to:[{type:"evidenceSource"}]}]})
]});