<script>
    import "../app.css";
    // import logo from '$lib/asset/logo-kuning.png';
    // import { base } from '$app/paths';
    // import { browser } from '$app/environment';
    // var menu = document.getElementById('menu');
    // function toggleMenu() {
    //     menu.classList.toggle('hidden');
    //     menu.classList.toggle('w-full');
    //     menu.classList.toggle('h-screen');
    // }

    import Navbar from '$lib/Navbar.svelte';
    
</script>

<!-- {#if browser}
<script>
     const menu = document.getElementById('menu');
        function toggleMenu() {
            menu.classList.toggle('hidden');
            menu.classList.toggle('w-full');
            menu.classList.toggle('h-screen');
        }
</script>
{/if} -->

<body class="bg-biru-lantang relative min-h-screen  ">
    <!-- md:ml-logo-kiri md:mt-logo-atas md:translate-x-[50%] ml-[50%] translate-x-[-50%] -->

    <Navbar />
    
    <div class="" >
        <svg class="absolute lg:w-[5.8rem] w-[3.8rem] top-[1.3rem] right-[0.9rem] lg:block " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 91" fill="none">
            <path d="M91 45.5C91 70.629 70.629 91 45.5 91C20.371 91 0 70.629 0 45.5C0 20.371 20.371 0 45.5 0C70.629 0 91 20.371 91 45.5Z" fill="#FFCA17"/>
            </svg>
    </div>
    <slot></slot>

    
        <svg class=" hidden md:block absolute top-[50%] translate-y-[-50%] left-0 lg:w-[6.6rem] w-[3rem] md:w-[5rem]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 109 335" fill="none">
            <path d="M109 167.5C109 260.008 34.0077 335 -58.5 335C-151.008 335 -226 260.008 -226 167.5C-226 74.9923 -151.008 0 -58.5 0C34.0077 0 109 74.9923 109 167.5Z" fill="#FFCA17"/>
            </svg>

        
        
        


        <svg class="absolute right-0 bottom-0 lg:w-[19rem] md:w-[15rem] w-[9rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 182" fill="none">
            <path d="M611 305.5C611 474.223 474.223 611 305.5 611C136.777 611 0 474.223 0 305.5C0 136.777 136.777 0 305.5 0C474.223 0 611 136.777 611 305.5Z" fill="#FFCA17"/>
            </svg>



    
        <footer class="absolute  left-1/2 -translate-x-1/2 bottom-4">
            
            <div class=" text-center text-putih-lantang">
                &copy; Copyright 2023, Lantang Nirwana
                
            </div>
        </footer>
    
</body>