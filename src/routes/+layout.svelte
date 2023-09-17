<script>
    import "../app.css";
    import logo from '$lib/asset/logo-kuning.png';
    import { base } from '$app/paths';
</script>

<body class="bg-biru-lantang relative min-h-screen  ">

    <nav class="bg-biru-lantang inline-flex gap-6">
        <img src="{logo}" class="h-logo w-logo ml-logo-kiri mt-logo-atas" alt="">
        <div class="w-divider-nav h-divider-nav bg-putih-lantang mt-divider-atas mb-divider-bawah"></div>
        <a href="{ base }/" class="mt-menu-nav-atas mb-menu-nav-bawah text-putih-lantang active:underline font-Helvetica font-bold" >HOME</a>
        <a href="{ base }/lirik" class="mt-menu-nav-atas mb-menu-nav-bawah text-putih-lantang active:underline font-Helvetica font-bold" >LYRICS</a>
        <a href="{ base }/jadwal" class="mt-menu-nav-atas mb-menu-nav-bawah text-putih-lantang active:underline font-Helvetica font-bold" >SCHEDULE</a>
        <a href="{ base }/stories" class="mt-menu-nav-atas mb-menu-nav-bawah text-putih-lantang active:underline font-Helvetica font-bold" >STORIES</a>
        <a href="{ base }/about_me" class="mt-menu-nav-atas mb-menu-nav-bawah text-putih-lantang active:underline font-Helvetica font-bold" >ABOUT ME</a>
    
        
    
    </nav>
    
    <slot></slot>

    <svg class="absolute top-[2.19rem] right-[1.38rem]" xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91" fill="none">
        <path d="M91 45.5C91 70.629 70.629 91 45.5 91C20.371 91 0 70.629 0 45.5C0 20.371 20.371 0 45.5 0C70.629 0 91 20.371 91 45.5Z" fill="#FFCA17"/>
        </svg>
            
        <svg class=" absolute top-[50%] translate-y-[-50%] left-0 " xmlns="http://www.w3.org/2000/svg" width="109" height="335" viewBox="0 0 109 335" fill="none">
        <path d="M109 167.5C109 260.008 34.0077 335 -58.5 335C-151.008 335 -226 260.008 -226 167.5C-226 74.9923 -151.008 0 -58.5 0C34.0077 0 109 74.9923 109 167.5Z" fill="#FFCA17"/>
        </svg>
        
        <!-- <svg class=" absolute right-0 bottom-0" xmlns="http://www.w3.org/2000/svg" width="300" height="182" viewBox="0 0 300 182" fill="none">
        <path d="M611 305.5C611 474.223 474.223 611 305.5 611C136.777 611 0 474.223 0 305.5C0 136.777 136.777 0 305.5 0C474.223 0 611 136.777 611 305.5Z" fill="#FFCA17"/>
        </svg> -->

        <svg class=" absolute right-0 bottom-0" xmlns="http://www.w3.org/2000/svg" width="300" height="182" viewBox="0 0 300 182" fill="none">
            <path d="M611 305.5C611 474.223 474.223 611 305.5 611C136.777 611 0 474.223 0 305.5C0 136.777 136.777 0 305.5 0C474.223 0 611 136.777 611 305.5Z" fill="#FFCA17"/>
            </svg>
    
        <footer class="absolute  left-1/2 -translate-x-1/2 bottom-4">
            
            <div class=" text-center text-putih-lantang">
                &copy; Copyright 2023, Lantang Nirwana
                
            </div>
        </footer>
    
</body>


