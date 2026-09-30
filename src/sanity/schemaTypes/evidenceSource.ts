import {defineField,defineType} from "sanity";
export const evidenceSource=defineType({name:"evidenceSource",title:"Evidence Source",type:"document",fields:[
defineField({name:"title",title:"Title",type:"string",validation:r=>r.required()}),
defineField({name:"sourceType",title:"Source Type",type:"string",options:{list:["solicitation","amendment","website","attachment","email","other"]}}),
defineField({name:"url",title:"URL",type:"url"}),
defineField({name:"publishedAt",title:"Published At",type:"datetime"}),
defineField({name:"retrievedAt",title:"Retrieved At",type:"datetime"}),
defineField({name:"excerpt",title:"Evidence Excerpt",type:"text"}),
defineField({name:"contentHash",title:"Content Hash",type:"string"})
]});