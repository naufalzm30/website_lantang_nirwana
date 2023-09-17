

<script lang="ts">
	import { stringify } from 'postcss';


import type {PageData} from './$types';
export let data: PageData;

$:({songs} = data);

// let liriknya =  document.getElementById("liriknya")
// document.body.innerHTML += songs[0].lirik



</script>

<div class="w-[40%] flex flex-wrap  gap-5 justify-center bg-putih-lantang rounded-lg px-10 py-5 relative">
    {#each songs as song}
    <div class="w-[30%] flex flex-col text-center relative items-center gap-3 p-4 rounded-xl drop-shadow-lg bg-putih-lantang">
        <div class=" w-[110px] h-[110px]  ">
            <svg class="drop-shadow-lg absolute " xmlns="http://www.w3.org/2000/svg" width= 110px height= 110px viewBox="0 0 150 150" fill="none">
                <path d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z" fill="#FFCA17"/>
                
            </svg>
            <img class="w-[110px] h-[110px] absolute border-3 border-black" src="/src/asset/{(song.thumbnail)}" alt="">
        </div>
        <p>{@html (song.judul)}</p>
        <a href='/lirik/{song._id}'><button class="bg-kuning-lantang rounded-lg p-1 pl-3 pr-3 drop-shadow-lg focus:ring-3 ring-kuning-ring shadow-lg transform active:scale-90 hover:scale-110 transition-transform ">view more</button></a> <!-- <p>{(song.thumbnail)}</p> -->
        
    </div>
    {/each}
</div>