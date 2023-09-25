// import { songs } from '$db/songs';
import type { PageServerLoad } from './$types';
export const prerender = true;
export const trailingSlash = 'always';

type songs = {
    _id: Object;
    judul: string;
    lirik: string;
    story: string;
    thumbnail: string;
};

type t = {
    songs: songs[];
};

export const load: PageServerLoad = async function () {
    const r = await fetch('http://localhost:8080/songs/get');
    const hasil_songs = ((await r.json()) as t).songs; // we only want to send the todo array as props
    console.log(hasil_songs);
    return {
        hasil_songs
    };
};
