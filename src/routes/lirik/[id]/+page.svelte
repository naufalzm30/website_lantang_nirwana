<script lang="ts">
	import { stringify } from 'postcss';


import type {PageData} from './$types';
export let data: PageData;

$:({song} = data);

// let liriknya =  document.getElementById("liriknya")
// document.body.innerHTML += songs[0].lirik



</script>
<div class="w-[40%]  bg-putih-lantang rounded-lg px-10 py-5">
    <br>
    <a href="/lirik" class="w-20 block"><img src="/src/asset/back_black.png" class="block w-20 active:scale-90 hover:scale-110 transition-transform" alt=""></a> 
    
    <div class="w-full flex justify-center">
        <img class="w-[200px] object-center" src="/src/asset/{(song.thumbnail)}" alt="">
    </div>
    
    <p class="text-3xl font-bold text-center " >{@html (song.judul)} </p> 
    <br>
    <br>
    <p class="text-xl" >{@html (song.lirik)}</p>   
    <br>
    <br>    
</div>