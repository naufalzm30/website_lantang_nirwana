import {songs} from "$db/songs"
import type { PageServerLoad } from "./$types";



export const load: PageServerLoad =async function () {
    const data = await songs.find({}, {projection:{
        _id:1, judul:1, lirik:1, thumbnail:1
    }}).toArray();
    console.log(JSON.parse(JSON.stringify(data)));
    return {
            songs: JSON.parse(JSON.stringify(data))
        }
    
}