
<script lang="ts">
    import logo from '$lib/asset/logo-kuning.png';
    import { base } from '$app/paths';

    import { onMount } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';

    let isActive = true;
    
    export const prerender = true;
    export const trailingSlash = 'always'; 
;

    // onMount(() => {
	// 	let menu = document.getElementById('menu') ;
	// 	function toggleMenu() {
    //         menu?.classList.toggle('hidden')  ;
    //         menu?.classList.toggle('w-full');
    //         menu?.classList.toggle('h-screen');
    //     }

	// 	return () => {
	// 		toggleMenu();
	// 	};
	// });

    
    
	
    
    
    

    
    
</script>


<nav class="bg-biru-lantang flex justify-between md:justify-center md:flex-col lg:inline-flex lg:flex-row lg:gap-6     ">
        
    <div class="flex md:order-0 lg:ml-logo-kiri lg:mt-logo-atas md:mt-logo-atas md:justify-center md:m-0 ml-5 mt-3 ">

        <img src="{logo}" class=" md:w-[13.6rem] w-[9.6rem] aspect-auto  " alt="">
    </div>
    
      


    <div class="lg:inline-flex hidden md:order-2  w-divider-nav h-divider-nav bg-putih-lantang mt-divider-atas mb-divider-bawah"></div>
    
    <div id="menu"  class=" hidden sm:h-fit lg:inline-flex  md:order-3 lg:mt-menu-nav-atas md:mt-5 md:mb-10 lg:mb-menu-nav-bawah md:inline-flex md:justify-center text-putih-lantang  font-Helvetica font-bold  gap-6 ">
        <a href="{ base }/" class="hover:underline" >HOME</a>
        <a href="{ base }/lirik" class="hover:underline" >LYRICS</a>
        <a href="{ base }/jadwal" class="hover:underline" >SCHEDULE</a>
        <a href="{ base }/stories" class="hover:underline" >STORIES</a>
        <a href="{ base }/about_me" class=" hover:underline" >ABOUT ME</a>
    </div>

    <div id="menu" class:hidden={isActive} class="absolute flex flex-col pt-10 pl-5 z-10 w-full h-72 bg-kuning-lantang text-black  font-Helvetica font-bold  gap-6 ">
        <a href="{ base }/" class="hover:underline focus:underline w-fit" on:click={() => isActive = !isActive} >HOME</a>
        <a href="{ base }/lirik" class="hover:underline w-fit" on:click={() => isActive = !isActive} >LYRICS</a>
        <a href="{ base }/jadwal" class="hover:underline w-fit" on:click={() => isActive = !isActive} >SCHEDULE</a>
        <a href="{ base }/stories" class="hover:underline w-fit" on:click={() => isActive = !isActive} >STORIES</a>
        <a href="{ base }/about_me" class=" hover:underline w-fit" on:click={() => isActive = !isActive} >ABOUT ME</a>
    </div>

    <!-- class:hidden={isActive} -->
    
    <div class="flex items-center md:hidden mr-7 z-10">
        <button class="text-biru-lantang text-4xl font-bold opacity-100 hover:opacity-100 duration-300"
            on:click={() => isActive = !isActive} >
            &#9776;
        </button>
        <!-- <button on:click={() => isActive = !isActive}>Click me</button> -->
    </div>
    

   

    <!-- <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> -->


    <!-- <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
        </ul>
    </div> -->
</nav>