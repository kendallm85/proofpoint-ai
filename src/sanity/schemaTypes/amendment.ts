import {defineField,defineType} from "sanity";
export const amendment=defineType({name:"amendment",title:"Amendment",type:"document",fields:[
defineField({name:"title",title:"Amendment Title",type:"string",validation:r=>r.required()}),
defineField({name:"amendmentId",title:"Amendment ID",type:"string",validation:r=>r.required()}),
defineField({name:"publishedAt",title:"Published At",type:"datetime"}),
defineField({name:"summary",title:"Summary",type:"text"}),
defineField({name:"changes",title:"Material Changes",type:"array",of:[{type:"object",fields:[
defineField({name:"field",title:"Field",type:"string"}),
defineField({name:"previousValue",title:"Previous Value",type:"string"}),
defineField({name:"newValue",title:"New Value",type:"string"})
]}]}),
defineField({name:"source",title:"Evidence Source",type:"reference",to:[{type:"evidenceSource"}]})
]});