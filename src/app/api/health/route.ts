import {NextResponse} from "next/server";
export function GET(){return NextResponse.json({ok:true,service:"proofpoint-ai",sanityConfigured:Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)});}