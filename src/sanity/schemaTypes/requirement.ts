import {defineField,defineType} from "sanity";
export const requirement=defineType({name:"requirement",title:"Requirement",type:"document",fields:[
defineField({name:"title",title:"Requirement",type:"string",validation:r=>r.required()}),
defineField({name:"requirementId",title:"Requirement ID",type:"string",validation:r=>r.required()}),
defineField({name:"category",title:"Category",type:"string",options:{list:["eligibility","insurance","deadline","submission","pricing","certification","other"]}}),
defineField({name:"value",title:"Current Value",type:"text"}),
defineField({name:"mandatory",title:"Mandatory",type:"boolean",initialValue:true}),
defineField({name:"evidence",title:"Supporting Evidence",type:"array",of:[{type:"reference",to:[{type:"evidenceSource"}]}]})
]});