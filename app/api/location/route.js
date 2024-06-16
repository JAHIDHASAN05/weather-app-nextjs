import { getLocationAllData } from "./[name]/locationUtills";

export async function GET (){
    const locationData= getLocationAllData()
    return Response.json(locationData)
}