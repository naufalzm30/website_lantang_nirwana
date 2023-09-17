<script lang="ts">
	import { stringify } from 'postcss';
    export const prerender = true;
export const trailingSlash = 'always'; 

import type {PageData} from './$types';
export let data: PageData;

$:({song} = data);

import it_wont_be_long from '$lib/asset/it wont be long.png';
import not_yours from '$lib/asset/not yours.png';
import you_left_me_again from '$lib/asset/you left me again.png';
import biar_kuantar_kau_pulang from '$lib/asset/biar kuantar kau pulang.png';
import utarakan from '$lib/asset/utarakan.png';
import it_took_me_two_years from '$lib/asset/it took me two years.png';
import back_black from '$lib/asset/back_black.png'

let thumbnail_lirik= {
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
<div class="w-[40%]  bg-putih-lantang rounded-lg px-10 py-5">
    <br>
    <a href="{ base }/lirik" class="w-20 block"><img src="{back_black}" class="block w-20 active:scale-90 hover:scale-110 transition-transform" alt=""></a> 
    
    <div class="w-full flex justify-center">
        <img class="w-[200px] object-center" src="{thumbnail_lirik[(song.thumbnail)]}" alt="">
    </div>
    
    <p class="text-3xl font-bold text-center " >{@html (song.judul)} </p> 
    <br>
    <br>
    <p class="text-xl" >{@html (song.lirik)}</p>   
    <br>
    <br>    
</div>