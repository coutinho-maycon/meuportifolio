<template>
    <div class="grid grid-cols-3 w-8/12">
        <div class="bg-black text-gray-200 h-screen flex flex-col pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 ml-16 mt-2 " preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9c0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
            <ul class=" ml-12 font-semibold text-lg">
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>Home</a></li>
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" /></svg>Explore</a></li>
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg> Notifications</a></li>
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>Messages</a></li>
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>Bookmarks</a></li>
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6 13h9v-2H6Zm0-3h9V8H6ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm0 0V6v12Z"/></svg>Lists</a></li>
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>Profile</a></li>
                <li class=""><a class="flex gap-5  rounded-full py-3 px-4 hover:bg-zinc-900 max-w-max" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>More</a></li>
            </ul>
            <button class="mt-5 bg-cyan-500 rounded-full w-2/3 py-3 text-lg font-bold mx-auto hover:bg-cyan-600">Tweet</button>
            <div class="text-gray-200 flex mx-auto mt-5">
                <img class="rounded-full w-8 h-8 my-auto" src="../assets/99freela.png" alt="">
                <div class="inline-block align-middle">
                    <p class="font-bold ml-2 text-white">Maycon_Coutinho</p>
                    <p class="font-light text-gray-500">@maycon_cout</p>
                </div>
                <p class="content-center text-3xl ml-3">...</p>
            </div>
        </div>
        <div>
            <p>teste1</p>
        </div>
        <div>
            <p>teste2</p>

        </div>
    </div>
</template>
<script>
</script>