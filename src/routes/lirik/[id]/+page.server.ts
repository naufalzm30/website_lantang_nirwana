// import { songs } from '$db/songs';
import type { PageServerLoad } from './$types';
import { ObjectId } from 'mongodb';

export const prerender = true;
export const trailingSlash = 'always';

type song = {
    song: {
        _id: Object;
        judul: string;
        lirik: string;
        story: string;
        thumbnail: string;
    };
};

export const load: PageServerLoad = async function ({ params }) {
    const id = new String(params.id);
    console.log(`http://localhost:8080/songs/get/${id}`);
    const r = await fetch(`http://localhost:8080/songs/get/${id}`);
    const hasil_songs = ((await r.json()) as song).song;
    // console.log(hasil_songs);
    return {
        hasil_songs
    };
};
