<script lang="ts">
    import { stringify } from 'postcss';

    import type { PageData } from './$types';
    export let data: PageData;

    $: ({ hasil_songs } = data);

    import { base } from '$app/paths';
    // let source_lib: string = `${base}/src/lib/asset/`;

    import asset from '$lib';

    // console.log(asset);
</script>

<div class="lg:w-[55rem] sm:w-[30rem] md:w-[37rem] w-[18rem] flex flex-wrap gap-5 justify-center bg-putih-lantang rounded-lg px-10 py-10 relative z-10">
    <!-- {console.log(data.props.hasil_songs)} -->
    {#each hasil_songs as song}
        <div class="lg:w-[15rem] sm:w-[19rem] md:w-[9rem] w-[13rem] flex flex-col text-center relative items-center gap-3 p-4 rounded-xl drop-shadow-lg bg-putih-lantang">
            <div class=" w-[6rem] h-[6.7rem]">
                <svg class="drop-shadow-lg absolute w-[6rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" fill="none">
                    <path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z" fill="#FFCA17" />
                </svg>
                <!-- map.get((song.thumbnail)) -->
                <!-- (base).concat(source_lib,song.thumbnail) -->
                <img class="w-[6rem] absolute border-3 border-black" src={asset.get(song.thumbnail)} alt="" />
            </div>
            <p>{@html song.judul}</p>
            <a href="{base}/lirik/{song._id}/"
                ><button class="bg-kuning-lantang rounded-lg p-1 pl-3 pr-3 drop-shadow-lg focus:ring-3 ring-kuning-ring shadow-lg transform active:scale-90 hover:scale-110 transition-transform"
                    >view more</button
                ></a
            >
            <!-- <p>{(song.thumbnail)}</p> -->
        </div>
    {/each}
</div>
