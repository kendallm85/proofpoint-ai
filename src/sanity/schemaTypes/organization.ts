import {defineField,defineType} from "sanity";
export const organization=defineType({name:"organization",title:"Organization",type:"document",fields:[
defineField({name:"name",title:"Name",type:"string",validation:r=>r.required()}),
defineField({name:"organizationType",title:"Organization Type",type:"string",options:{list:["buyer","vendor","partner","other"]}}),
defineField({name:"website",title:"Website",type:"url"}),
defineField({name:"notes",title:"Notes",type:"text"})
]});