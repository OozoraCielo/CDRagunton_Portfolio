<script>
// tailwind css
//skills
let skills_div = "flex flex-col mx-auto"

let skills_logo_l = "drop-shadow-xl mt-10 w-12 mx-6 my-auto"
let skills_name_l = "text-2xl text-gray-200 font-odibee mx-auto mt-auto"

let skills_logo_s = "drop-shadow-xl mt-10 w-10 mx-4 my-auto"
let skills_name_s = "text-xl text-gray-200 font-odibee mx-auto mt-auto"

//space
let space1 = "pt-16"
let space2 = "pt-10"

//texts
let area_title_white = "text-5xl text-gray-200 font-odibee flex justify-center text-center"
let area_title_black = "text-5xl text-black font-odibee flex justify-center text-center"

let heading_white_l = "px-10 text-3xl text-gray-200 font-electrolize my-auto"
let heading_black_l = "px-10 text-3xl text-black font-electrolize my-auto"
let heading_white_s = "px-10 pt-10 text-xl text-gray-200 font-electrolize my-auto text-center"
let heading_black_s = "px-10 pt-10 text-xl text-black font-electrolize my-auto text-center"

let subtext1_white_l = "pt-2 px-10 text-xl text-gray-200 font-electrolize"
let subtext1_black_l = "pt-2 px-10 text-xl text-black font-electrolize"
let subtext1_white_s = "pt-2 px-10 text-sm text-gray-200 font-electrolize text-center"
let subtext1_black_s = "pt-2 px-10 text-sm text-black font-electrolize text-center"

let subtext2_white_l = "pt-2 px-10 text-xl text-gray-200 font-normal"
let subtext2_black_l = "pt-2 px-10 text-xl text-black font-normal"
let subtext2_white_s = "pt-2 px-10 text-sm text-gray-200 font-normal text-center"
let subtext2_black_s = "pt-2 px-10 text-sm text-black font-normal text-center"

//projects
let project_box = "bg-gray-900 rounded-2xl  border border-light_blue_area"
let project_divider = "mt-2 mx-10 border-dashed border-light_blue_area border"

//margins, paddings, dividers
let left_right_margins_l = "ml-[3%] mr-[15%]"
let left_right_margins_s = "ml-[4%] mr-[4%]"
let divider_light = "mt-2 mx-10 border-dashed border-light_blue_area border"
let divider_dark = "mt-2 mx-10 border-dashed border-blue_bg border"

import {
    scrollTo,
    scrollRef,
    scrollTop
} from 'svelte-scrolling'

//get screen size
$: innerWidth = 1000;
$: innerHeight = 1000;

//data
import Project from "$lib/project_list.svelte"
import Skills from "$lib/skill_list.svelte"
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<body class={`min-h-full min-w-full`}>
    <section use:scrollRef={'top'} class={`h-full`}></section>
    <!--Home-->
    <div>
        <section use:scrollRef={'home'} class={`${innerWidth > 700 ? left_right_margins_l : left_right_margins_s}`}>
            <div class ={`flex ${innerWidth > 700 ? 'py-[28%] flex-row' : 'py-[25%] flex-col'}`}>

                <div class={`${innerWidth > 700 ? '-mt-[30px] ml-auto' : 'mx-auto'} `}>
                    <img src="cdbr_logo.png" alt="a" class={`rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'w-44' : 'w-32'} pointer-events-none select-none touch-none`}>
                </div>

                <div class={`${innerWidth > 700 ? 'ml-10' : 'mt-7'}`}>

                    <h2 class={`text-gray-200 font-odibee flex justify-center text-center ${innerWidth > 700 ? 'text-7xl' : 'text-5xl'}`}>
                        CD  Ragunton
                    </h2>

                    <h2 class={`text-gray-400 flex justify-center font-electrolize text-center ${innerWidth > 700 ? 'text-2xl pt-4' : 'text-base pt-2'}`}>
                        Frontend/UI/UX Developer, Software Engineer
                    </h2>

                </div>

                <div class={`${innerWidth > 700 ? '-mt-[125px] mr-auto' : 'mx-auto'} `}>
                    <img src="chibi_hello.gif" alt="a" class={`${innerWidth > 700 ? 'h-[300px]' : 'h-[250px]'}  pointer-events-none select-none touch-none`}>
                </div>
            </div>
            <!--space brfore next area-->
            <div class={space1}></div>

        </section>
    </div>

    <div class="pt-56"></div>

    <!--Skills-->
    <div>
        <section use:scrollRef={'skills'} class={`${innerWidth > 700 ? left_right_margins_l : left_right_margins_s}`}>
            <h2 class={area_title_white}>
                Skills
            </h2>

            <div class={space2}></div>

            <Skills></Skills>

        </section>

    </div>

    <div class={space1}></div>

    <!--Work-->
    <div>
        <img src="area_top.png" alt="a" class="w-screen pointer-events-none select-none touch-none opacity-60">

        <div class={`bg-light_blue_area w-screen bg-opacity-60`}>
            <section use:scrollRef={'work'} class={`${innerWidth > 700 ? left_right_margins_l : left_right_margins_s}`}>

                <div class={space1}></div>

                <h2 class={area_title_black}>
                    Work Experience
                </h2>

                <div class={space1}></div>

                <!--ncts-->
                <div class=" ">

                    <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>

                        <div class={`${innerWidth > 700 ? 'flex flex-col min-w-32' : 'flex flex-row min-w-32 mx-auto'}`}>
                            <img src="itslab.png" alt="a" class={`rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'w-24 h-24' : 'w-20 h-20'}`}>
                            <img src="ncts.png" alt="a" class={`rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'w-24 h-24' : 'ml-5 w-20 h-20'}`}>
                        </div>

                        <div>
                            <h2 class={`${innerWidth > 700 ? heading_black_l : heading_black_s}`}>
                                UP National Center for Transportation Studies: Intelligent Transportations Systems Laboratory
                            </h2>

                            <h2 class={`${innerWidth > 700 ? subtext1_black_l : subtext1_black_s}`}>
                                July 2023 – August 2023 <br>
                                Quezon City, NCR
                            </h2>

                            <div class={divider_dark}></div>

                            <h2 class={`${innerWidth > 700 ?subtext2_black_l : subtext2_black_s}`}>
                                Worked as an intern and developed the frontend of CREATE: CIVIR, a government project that replicates a real-life car-related accident, using Unity.
                            </h2>
                        </div>

                    </div>

                </div>

                <div class={space1}></div>
            </section>
        </div>

        <img src="area_bottom.png" alt="a" class="w-screen pointer-events-none select-none touch-none opacity-60">

    </div>

    <div class={space1}></div>

    <!--Publication-->
    <div>
        <section use:scrollRef={'publication'} class={`${innerWidth > 700 ? left_right_margins_l : left_right_margins_s}`}>
            <h2 class={area_title_white}>
                Publication
            </h2>

            <div class={space1}></div>

            <!--JeePS-->
            <div class=" ">
                <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>

                    <div class={`flex flex-col ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                        <img src="jeeps.png" alt="a" class={`rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'w-72' : 'w-24'}`}>
                    </div>
                    <div>

                        <h2 class={`${innerWidth > 700 ? heading_white_l : heading_white_s}`}>
                            JeePS: Designing a Realtime Public Transportation Tracking System
                        </h2>

                        <h2 class={`${innerWidth > 700 ? subtext1_white_l : subtext1_white_s}`}>
                            NIDS 2024 <br>
                            Carl Ragunton, Zedec Pacaldo, and Jozelle Adawe
                        </h2>

                        <div class={divider_light}></div>

                        <h2 class={`${innerWidth > 700 ?subtext2_white_l : subtext2_white_s}`}>
                            Published a paper and presented in the NIDS 2024 conference about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase. The results of the paper shows a visible increase in passengers' satisfaction upon using the JeePS system.
                        </h2>

                    </div>
                </div>

            </div>
        </section>
    </div>

    <div class={space1}></div>

    <!--Education-->
    <div>
        <img src="area_top.png" alt="a" class="w-screen pointer-events-none select-none touch-none opacity-60">

        <div class={`bg-light_blue_area w-screen bg-opacity-60`}>

            <section use:scrollRef={'education'} class={`${innerWidth > 700 ? left_right_margins_l : left_right_margins_s}`}>

                <div class={space1}></div>
                <h2 class={area_title_black}>
                    Education
                </h2>

                <div class={space1}></div>

                <!--upd-->
                <div class=" ">
                    <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>

                        <div class={`flex flex-col ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                            <img src="upd.png" alt="a" class={`rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'w-32' : 'w-24'}`}>
                        </div>
                        <div>

                            <h2 class={`${innerWidth > 700 ? heading_black_l : heading_black_s}`}>
                                University of the Philippines Diliman
                            </h2>

                            <h2 class={`${innerWidth > 700 ? subtext1_black_l : subtext1_black_s}`}>
                                September 2020 – July 2024 <br>
                                Quezon City, NCR
                            </h2>

                            <div class={divider_dark}></div>

                            <h2 class={`${innerWidth > 700 ?subtext2_black_l : subtext2_black_s}`}>
                                Bachelor of Computer Science <br>
                                Magna Cum Laude
                            </h2>

                        </div>

                    </div>

                </div>

                <div class={space1}></div>
                <div class={space1}></div>

                <!--sha-->
                <div class=" ">
                    <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>

                        <div class={`flex flex-col ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                            <img src="sha.png" alt="a" class={`rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'w-32' : 'w-24'}`}>
                        </div>

                        <div>
                            <h2 class={`${innerWidth > 700 ? heading_black_l : heading_black_s}`}>
                                Sacred Heart Academy of Sta. Maria (Bulacan) Inc.
                            </h2>

                            <h2 class={`${innerWidth > 700 ? subtext1_black_l : subtext1_black_s}`}>
                                June 2014 – April 2020 <br>
                                Santa Maria, Bulacan
                            </h2>
                            <div class={divider_dark}></div>
                            <h2 class={`${innerWidth > 700 ?subtext2_black_l : subtext2_black_s}`}>
                                STEM Strand <br>
                                Highest Honor
                            </h2>

                        </div>
                    </div>

                </div>

                <div class={space1}></div>
            </section>

        </div>

        <img src="area_bottom.png" alt="a" class="w-screen pointer-events-none select-none touch-none opacity-60">
    </div>

    <div class={space1}></div>

    <!--Projects-->
    <div>
        <section use:scrollRef={'projects'} class={`${innerWidth > 700 ? left_right_margins_l : left_right_margins_s}`}>
            <h2 class={area_title_white}>
                Projects
            </h2>

            <div class={space1}></div>

            <Project></Project>

        </section>

    </div>

    <!--space brfore next area-->
    <div class={space1}></div>

    <div class={space1}></div>

    <!--end-->
    <div>
        <section class={`${innerWidth > 700 ? left_right_margins_l : left_right_margins_s}`}>

            <div class={`flex flex-col `}>

                <img src="barong grad pic.png" alt="a" class="w-[20%] min-w-64 mx-auto">
                <h2 class={`text-xl text-gray-200  font-electrolize text-center`}>
                    Carl David Ragunton<br>
                    raguntoncarl@gmail.com
                </h2>

            </div>
        </section>
    </div>

    <div class={space1}></div>
    <div class={space1}></div>

</body>

<style>
body {
    overflow-x: hidden;
}
</style>
