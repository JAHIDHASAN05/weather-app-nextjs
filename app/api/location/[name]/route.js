import { getLocationByName } from "./locationUtills";

export const GET = async (request , {params })=>{
    const result = getLocationByName(params?.name)
    return Response.json(result)

}