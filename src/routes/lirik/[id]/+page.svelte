<script lang="ts">
    import { stringify } from 'postcss';

    import type { PageData } from './$types';
    export let data: PageData;

    $: ({ hasil_songs } = data);

    // let source_lib: string = '/src/lib/asset/';
    import { base } from '$app/paths';
    import asset from '$lib';
    import back_black from '$lib/asset/back_black.png';
</script>

<div class="w-[18rem] sm:w-[30rem] md:w-[37rem] lg:w-[55rem] bg-putih-lantang rounded-lg px-5">
    <br />
    <a href="{base}/lirik" class="w-20 md:w-24 block"> <img src={back_black} class="block w-14 md:w-24 active:scale-90 hover:scale-110 transition-transform" alt="" /></a>
    <!-- map.get((song.thumbnail)) -->
    <!-- (base).concat(source_lib,song.thumbnail) -->
    <!-- {console.log(hasil_songs)} -->
    <div class=" flex justify-center">
        <img class="w-60 object-center" src={asset.get(hasil_songs.thumbnail)} alt="" />
    </div>

    <p class="text-3xl font-bold text-center">{@html hasil_songs.judul}</p>
    <br />
    <br />
    <p class="text-lg ml-2 md:ml-5">{@html hasil_songs.lirik}</p>
    <br />
    <br />
</div>
