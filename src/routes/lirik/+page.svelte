

<script lang="ts">
	import { stringify } from 'postcss';


    import type {PageData} from './$types';
    export let data: PageData;

    $:({songs} = data);

    // console.log((songs));
    import it_wont_be_long from '$lib/asset/it wont be long.png';
    import not_yours from '$lib/asset/not yours.png';
    import you_left_me_again from '$lib/asset/you left me again.png';
    import biar_kuantar_kau_pulang from '$lib/asset/biar kuantar kau pulang.png';
    import utarakan from '$lib/asset/utarakan.png';
    import it_took_me_two_years from '$lib/asset/it took me two years.png';

    export let thumbnail_lirik= {
        "it wont be long.png":it_wont_be_long,
        "not yours.png":not_yours,
        "you left me again.png":you_left_me_again,
        "biar kuantar kau pulang.png":biar_kuantar_kau_pulang,
        "utarakan.png":utarakan,
        "it took me two years.png":it_took_me_two_years
    };
    import { base } from '$app/paths';

// let liriknya =  document.getElementById("liriknya")
// document.body.innerHTML += songs[0].lirik



</script>

<div class="w-[40%] flex flex-wrap  gap-5 justify-center bg-putih-lantang rounded-lg px-10 py-5 relative">
    
    <!-- {console.log((songs))} -->
    {#each songs as song}
    <div class="w-[30%] flex flex-col text-center relative items-center gap-3 p-4 rounded-xl drop-shadow-lg bg-putih-lantang">
        <div class=" w-[110px] h-[110px]  ">
            <svg class="drop-shadow-lg absolute " xmlns="http://www.w3.org/2000/svg" width= 110px height= 110px viewBox="0 0 150 150" fill="none">
                <path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z" fill="#FFCA17"/>
                
            </svg>
            
            <img class="w-[110px] h-[110px] absolute border-3 border-black" src="{thumbnail_lirik[(song.thumbnail)]}" alt="">
        </div>
        <p>{@html (song.judul)}</p>
        <a href='{base}/lirik/{song._id}/'><button class="bg-kuning-lantang rounded-lg p-1 pl-3 pr-3 drop-shadow-lg focus:ring-3 ring-kuning-ring shadow-lg transform active:scale-90 hover:scale-110 transition-transform ">view more</button></a> <!-- <p>{(song.thumbnail)}</p> -->
        
    </div>
    {/each}
</div>