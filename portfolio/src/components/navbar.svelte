<script>
// import { page } from "$app/stores";
// $:currentRoute = $page.url.pathname;

// tailwind css
let menu_div_l = "bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto px-3 text-2xl h-14"
let menu_word_l = "text-white py-3"

let menu_div_s = "bg-black bg-opacity-0 hover:bg-opacity-100  rounded pointer-events-auto px-1 text-base h-8"
let menu_word_s = "text-white py-1"

import {
    scrollTo,
    scrollRef,
    scrollTop
} from 'svelte-scrolling'

//get screen size
$: innerWidth = 1000;
$: innerHeight = 1000;

let options = [{
        word: "Home",
        link: "top"
    },

    {
        word: "Skills",
        link: "skills"
    },
    {
        word: "Work",
        link: "work"
    },
    {
        word: "Publication",
        link: "publication"
    },
    {
        word: "Education",
        link: "education"
    },
    {
        word: "Projects",
        link: "projects"
    },

]
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!--black behind navbar-->
<div class={`pointer-events-none`}>
    <div class=" min-w-full min-h-full fixed flex opacity-80 select-none touch-none">
        <img src="top.png" alt="a" class={`ml-auto  ${innerWidth > 700 && innerHeight > 400 && innerHeight > 400 ? 'w-[700px] h-[175px]' : 'w-[350px] h-[90px]'}`}>
    </div>
</div>

<nav class={`w-full h-32 z-10 fixed flex justify-end pointer-events-none  font-odibee ${innerWidth > 700 && innerHeight > 400 ? 'pr-20 pt-8' : 'pr-5 pt-4'}`}>

    <li class={`flex justify-center`}>
        {#each options as opt}
        <div class={`${innerWidth > 700 && innerHeight > 400 ? menu_div_l : menu_div_s}`}>
            <a href use:scrollTo={{ ref: opt.link, offset: -200 }} >
                <p class={`${innerWidth > 700 && innerHeight > 400 ? menu_word_l : menu_word_s}`}>{opt.word}</p>
            </a>
        </div>
        {/each}
    </li>

</nav>
