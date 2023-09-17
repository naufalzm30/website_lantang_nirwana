import {songs} from "$db/songs"
import type { PageServerLoad } from "./$types";
import { ObjectId } from 'mongodb'

export const prerender = true;


export const load: PageServerLoad =async function ({params}) {
    const id = new ObjectId(params.id);

    const data = await songs.findOne({_id:id}, {projection:{
        _id:1, judul:1, lirik:1, thumbnail:1
    }});

    // const query = {_id:params.id};
    // const cursor = songs.find(query);

    // for await (const data of cursor) {
    //     console.dir(data);
    // }

    
    // console.log(JSON.parse(JSON.stringify(data)));
    // console.log(params.id);
    return {
            song: JSON.parse(JSON.stringify(data))
        }
    
}