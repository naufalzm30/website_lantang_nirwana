<script>
    import "../app.css";
    import logo from '$lib/asset/logo-kuning.png';
    import { base } from '$app/paths';
</script>

<body class="bg-biru-lantang relative min-h-screen  ">
    <!-- md:ml-logo-kiri md:mt-logo-atas md:translate-x-[50%] ml-[50%] translate-x-[-50%] -->

    <nav class="bg-biru-lantang flex  md:justify-center md:flex-col lg:inline-flex lg:flex-row lg:gap-6     ">
        
        <div class="flex md:order-0 lg:ml-logo-kiri lg:mt-logo-atas md:mt-logo-atas md:justify-center ml-3 mt-3 ">

            <img src="{logo}" class=" md:w-[13.6rem] w-[9.6rem] " alt="">
        </div>
        

        <div class="lg:inline-flex hidden md:order-2  w-divider-nav h-divider-nav bg-putih-lantang mt-divider-atas mb-divider-bawah"></div>
        
        <div class=" hidden lg:inline-flex  md:order-3 lg:mt-menu-nav-atas md:mt-5 md:mb-10 lg:mb-menu-nav-bawah md:inline-flex md:justify-center text-putih-lantang  font-Helvetica font-bold  gap-6 ">
            <a href="{ base }/" class="hover:underline" >HOME</a>
            <a href="{ base }/lirik" class="hover:underline" >LYRICS</a>
            <a href="{ base }/jadwal" class="hover:underline" >SCHEDULE</a>
            <a href="{ base }/stories" class="hover:underline" >STORIES</a>
            <a href="{ base }/about_me" class=" hover:underline" >ABOUT ME</a>
        </div>

        
        <div class="" >
            <svg class="absolute lg:w-[5.8rem] w-[3.8rem] top-[1.3rem] right-[0.9rem] lg:block " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 91" fill="none">
                <path d="M91 45.5C91 70.629 70.629 91 45.5 91C20.371 91 0 70.629 0 45.5C0 20.371 20.371 0 45.5 0C70.629 0 91 20.371 91 45.5Z" fill="#FFCA17"/>
                </svg>
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
    
    <slot></slot>

    
        <svg class=" absolute top-[50%] translate-y-[-50%] left-0 lg:w-[6.6rem] w-[4rem] md:w-[5rem]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 109 335" fill="none">
            <path d="M109 167.5C109 260.008 34.0077 335 -58.5 335C-151.008 335 -226 260.008 -226 167.5C-226 74.9923 -151.008 0 -58.5 0C34.0077 0 109 74.9923 109 167.5Z" fill="#FFCA17"/>
            </svg>

        
        
        


        <svg class=" absolute right-0 bottom-0 lg:w-[19rem] md:w-[15rem] w-[9rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 182" fill="none">
            <path d="M611 305.5C611 474.223 474.223 611 305.5 611C136.777 611 0 474.223 0 305.5C0 136.777 136.777 0 305.5 0C474.223 0 611 136.777 611 305.5Z" fill="#FFCA17"/>
            </svg>



    
        <footer class="absolute  left-1/2 -translate-x-1/2 bottom-4">
            
            <div class=" text-center text-putih-lantang">
                &copy; Copyright 2023, Lantang Nirwana
                
            </div>
        </footer>
    
</body>


