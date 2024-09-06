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
let heading_white_s = "px-10 pt-10 text-xl text-gray-200 font-electrolize my-auto"
let heading_black_s = "px-10 pt-10 text-xl text-black font-electrolize my-auto"

let subtext1_white_l = "pt-2 px-10 text-xl text-gray-200 font-electrolize"
let subtext1_black_l = "pt-2 px-10 text-xl text-black font-electrolize"
let subtext1_white_s = "pt-2 px-10 text-base text-gray-200 font-electrolize"
let subtext1_black_s = "pt-2 px-10 text-base text-black font-electrolize"

let subtext2_white_l = "pt-2 px-10 text-xl text-gray-200 font-normal"
let subtext2_black_l = "pt-2 px-10 text-xl text-black font-normal"
let subtext2_white_s = "pt-2 px-10 text-base text-gray-200 font-normal"
let subtext2_black_s = "pt-2 px-10 text-base text-black font-normal"

//projects
let project_box = "bg-gray-900 rounded-2xl  border border-light_blue_area"
let project_divider ="mt-2 mx-10 border-dashed border-light_blue_area border"

//margins, paddings, dividers
let left_right_margins = "ml-[3%] mr-[15%]"
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
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<main class={`min-h-full min-w-full`}>
    <section use:scrollRef={'top'} class={`h-full`}></section>
    <!--Home-->
    <div>
        <section use:scrollRef={'home'} class={left_right_margins}>
            <div class={`${innerHeight > 700 ? 'py-[350px]' : 'py-[225px]'}`}>

                <h2 class={`text-gray-200 font-odibee flex justify-center text-center ${innerWidth > 700 ? 'text-7xl' : 'text-5xl'}`}>
                    CD Ragunton
                </h2>

                <h2 class={`text-gray-400 flex justify-center font-electrolize text-center ${innerWidth > 700 ? 'text-2xl pt-4' : 'text-base pt-2'}`}>
                    Frontend/UI/UX Developer, Software Engineer
                </h2>

                <!--space brfore next area-->
                <div class={space1}></div>

            </div>
        </section>
    </div>

    <div class="pt-56"></div>

    <!--Skills-->
    <div>
        <section use:scrollRef={'skills'} class={left_right_margins}>
            <h2 class={area_title_white}>
                Skills
            </h2>

            <div class={space2}></div>

            <div class={`flex flex-row flex-wrap mx-auto w-[75%]`}>

                <div class={skills_div}>
                    <img src="skills/python_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Python</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/c_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>C</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/csharp_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>C#</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/typescript_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Typescript</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/html_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>HTML</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/css_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>CSS</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/javascript_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Javascript</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/linux_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Linux</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/figma_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Figma</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/svelte_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Svelte</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/tailwind_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Tailwind</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/matlab_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Matlab</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/flutter_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Flutter</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/firebase_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Firebase</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/postgresql_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>PostgreSQL</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/godot_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Godot</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/unity_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Unity</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/github_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Github</h2>
                </div>

                <div class={skills_div}>
                    <img src="skills/git_logo.png" alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
                    <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>Git</h2>
                </div>

            </div>
        </section>

    </div>

    <div class={space1}></div>

    <!--Work-->
    <div>
        <img src="area_top.png" alt="a" class="w-screen pointer-events-none select-none touch-none">

        <div class={`bg-light_blue_area w-screen`}>
            <section use:scrollRef={'work'} class={left_right_margins}>

                <div class={space1}></div>

                <h2 class={area_title_black}>
                    Work Experience
                </h2>

                <div class={space1}></div>

                <!--ncts-->
                <div class=" ">
                    
                    <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
                        
                        <div class={`${innerWidth > 700 ? 'flex flex-col min-w-32' : 'flex flex-row min-w-32 mx-auto'}`}>
                            <img src="itslab.png" alt="a" class={`w-24 h-24 rounded-xl drop-shadow-xl`}>
                            <img src="ncts.png" alt="a" class={`w-24 h-24 rounded-xl drop-shadow-xl ${innerWidth > 700 ? '' : 'ml-5'}`}>
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
                                Worked as an intern and developed the frontend of CREATE: CIVIR, a project that replicates a real-life car-related accident, using Unity.
                            </h2>
                        </div>

                    </div>

                </div>

                <div class={space1}></div>
            </section>
        </div>

        <img src="area_bottom.png" alt="a" class="w-screen pointer-events-none select-none touch-none">

    </div>

    <div class={space1}></div>

    <!--Publication-->
    <div>
        <section use:scrollRef={'publication'} class={left_right_margins}>
            <h2 class={area_title_white}>
                Publication
            </h2>

            <div class={space1}></div>

            <!--JeePS-->
            <div class=" ">
                <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>

                    <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                        <img src="jeeps.png" alt="a" class="w-32 rounded-xl drop-shadow-xl">
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
                            Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase.
                        </h2>

                    </div>
                </div>

            </div>
        </section>
    </div>

    <div class={space1}></div>

    <!--Education-->
    <div>
        <img src="area_top.png" alt="a" class="w-screen pointer-events-none select-none touch-none">

        <div class={`bg-light_blue_area w-screen`}>

            <section use:scrollRef={'education'} class={left_right_margins}>

                <div class={space1}></div>
                <h2 class={area_title_black}>
                    Education
                </h2>

                <div class={space1}></div>

                <!--upd-->
                <div class=" ">
                    <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>


                        <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                            <img src="upd.png" alt="a" class="w-32 h-32 rounded-xl drop-shadow-xl">
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

                <!--sha-->
                <div class=" ">
                    <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>

                        <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                            <img src="sha.png" alt="a" class="w-32 h-32 rounded-xl drop-shadow-xl">
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

        <img src="area_bottom.png" alt="a" class="w-screen pointer-events-none select-none touch-none">
    </div>

    <div class={space1}></div>

    <!--Projects-->
    <div>
        <section use:scrollRef={'projects'} class={left_right_margins}>
            <h2 class={area_title_white}>
                Projects
            </h2>

            <div class={space1}></div>

            <!--JeePS-->
            <div class={project_box}>

                <div class={space2}></div>

                <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>

                    <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                        <img src="JeePS2.png" alt="a" class="ml-5 w-32 rounded-xl drop-shadow-xl">
                    </div>
                    <div>

                        <h2 class={`${innerWidth > 700 ? heading_white_l : heading_white_s}`}>
                            JeePS: Realtime Public Transportation Tracking System
                        </h2>
                        <h2 class={`${innerWidth > 700 ? subtext1_white_l : subtext1_white_s}`}>
                            September 2023 - June 2024
                        </h2>

                        <div class={project_divider}></div>

                        <h2 class={`${innerWidth > 700 ?subtext2_white_l : subtext2_white_s}`}>
                            Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase.
                        </h2>

                    </div>
                </div>
                <div class={`mt-5 ${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}`}>
                    <img src="JeePS_jeep_selected.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[40%] rounded-xl' : 'w-[90%] rounded'}`}>
                    <img src="JeePS_feedback.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[40%] rounded-xl' : 'w-[90%] rounded mt-5'}`}>
                    <img src="JeePS_driver_app.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[10%] rounded-xl' : 'w-[30%] rounded mt-5'}`}>
                </div>

                <div class={space2}></div>

            </div>

            <!--space brfore next area-->
            <div class={space1}></div>

            <!--MeralCOST-->
            <div class={project_box}>

                <div class={space2}></div>

                <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
                    <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                        <img src="meralcost.png" alt="a" class="ml-5 w-32 rounded-xl drop-shadow-xl">
                    </div>
                    <div>

                        <h2 class={`${innerWidth > 700 ? heading_white_l : heading_white_s}`}>
                            MeralCOST: Analysis on Meralco Typical Consumption Price
                        </h2>
                        <h2 class={`${innerWidth > 700 ? subtext1_white_l : subtext1_white_s}`}>
                            March 2024 - June 2024
                        </h2>

                        <div class="mt-2 mx-10  border-dashed border-light_blue_area border "></div>
                        <h2 class={`${innerWidth > 700 ?subtext2_white_l : subtext2_white_s}`}>
                            Used Data Science to analyze and interpret data from past electric consumption costs of Meralco to determine how its price has changed over the years and what factors cause the price to fluctuate.		</h2>

                    </div>
                </div>
                <div class={`mt-5 ${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}`}>
                    <img src="meralcost_homepage.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[50%] rounded-xl' : 'w-[90%] rounded'}`}>
                    <img src="meralcost_plot1.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[40%] rounded-xl' : 'w-[90%] rounded mt-5'}`}>
                </div>

                <div class={space2}></div>

            </div>

            <!--space brfore next area-->
            <div class={space1}></div>

            <!--alco-ol-->
            <div class={project_box}>

                <div class={space2}></div>

                <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
                    <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                        <img src="alco_ol.png" alt="a" class="ml-5 w-32 rounded-xl drop-shadow-xl">
                    </div>
                    <div>

                        <h2 class={`${innerWidth > 700 ? heading_white_l : heading_white_s}`}>
                            Alco-OL
                        </h2>
                        <h2 class={`${innerWidth > 700 ? subtext1_white_l : subtext1_white_s}`}>
                            May 2023 - June 2023
                        </h2>

                        <div class={project_divider}></div>
                        <h2 class={`${innerWidth > 700 ?subtext2_white_l : subtext2_white_s}`}>
                            Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase		</h2>

                    </div>

                </div>

                <div class={`mt-5 ${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}`}>
                    <img src="alco_ol_homepage .png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[45%] rounded-xl' : 'w-[90%] rounded'}`}>
                    <img src="alco_ol_map.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[45%] rounded-xl' : 'w-[90%] rounded mt-5'}`}>
                </div>

                <div class={space2}></div>

            </div>

            <!--space brfore next area-->
            <div class={space1}></div>

            <!--AI highest lowest game sales-->
            <div class={project_box}>

                <div class={space2}></div>

                <div>
                    <h2 class={`${innerWidth > 700 ? heading_white_l : heading_white_s} pt-0`}>
                        Predicting Highest and lowest Region of game Sales using Decision Tree Classifier and other Models (AI)
                    </h2>
                    <h2 class={`${innerWidth > 700 ? subtext1_white_l : subtext1_white_s}`}>
                        April 2024 - June 2024
                    </h2>

                    <div class={project_divider}></div>
                    <h2 class={`${innerWidth > 700 ?subtext2_white_l : subtext2_white_s}`}>
                        Used Decision Tree Classifier, Multilayer Perception Classifier, and Hist Gradient Bossting Classifier to predict which region has the highest and lowest scale for a video game. </h2>

                </div>

                <div class={`mt-5 ${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}`}>
                    <img src="ai_1.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[45%] rounded-xl' : 'w-[90%] rounded'}`}>
                    <img src="ai_2.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[45%] rounded-xl' : 'w-[90%] rounded mt-5'}`}>
                </div>

                <div class={space2}></div>
            </div>

            <!--space brfore next area-->
            <div class={space1}></div>

            <!--JeePS old-->
            <div class={project_box}>

                <div class={space2}></div>

                <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
                    <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                        <img src="JeePS_old.png" alt="a" class="ml-5 w-32 rounded-xl drop-shadow-xl">
                    </div>
                    <div>

                        <h2 class={`${innerWidth > 700 ? heading_white_l : heading_white_s}`}>
                            JeePS (old version)
                        </h2>
                        <h2 class={`${innerWidth > 700 ? subtext1_white_l : subtext1_white_s}`}>
                            September 2022 - June 2023
                        </h2>

                        <div class={project_divider}></div>
                        <h2 class={`${innerWidth > 700 ?subtext2_white_l : subtext2_white_s}`}>
                            Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase		</h2>

                    </div>

                </div>
                <div class={`mt-5 ${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}`}>
                    <img src="JeePS_old_homepage.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[45%] rounded-xl' : 'w-[90%] rounded'}`}>
                    <img src="JeePS_old_login.png" alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? 'w-[45%] rounded-xl' : 'w-[90%] rounded mt-5'}`}>
                </div>

                <div class={space2}></div>

            </div>
        </section>

    </div>

    <!--space brfore next area-->
    <div class={space1}></div>

    <div class={space1}></div>

    <!--end-->
    <div>
        <section class={left_right_margins}>

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

</main>

<style>

</style>
