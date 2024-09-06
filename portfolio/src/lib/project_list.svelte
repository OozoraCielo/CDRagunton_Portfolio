<script>
//tailwind css
//space
let space1 = "pt-16"
let space2 = "pt-10"

//texts
let heading_white_l = "px-10 text-3xl text-gray-200 font-electrolize my-auto"
let heading_white_s = "px-10 pt-10 text-xl text-gray-200 font-electrolize my-auto"

let subtext1_white_l = "pt-2 px-10 text-xl text-gray-200 font-electrolize"
let subtext1_white_s = "pt-2 px-10 text-base text-gray-200 font-electrolize"

let subtext2_white_l = "pt-2 px-10 text-xl text-gray-200 font-normal"
let subtext2_white_s = "pt-2 px-10 text-base text-gray-200 font-normal"


//projects
let project_box = "bg-gray-900 rounded-2xl  border border-light_blue_area"
let project_divider = "mt-2 mx-10 border-dashed border-light_blue_area border"



//project data
let project_data = [{
        name: "JeePS: Realtime Public Transportation Tracking System",
        logo_link: "JeePS2.png",
        date: "September 2023 - June 2024",
        details: "Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase.",
        pics: [{
                link: "JeePS_jeep_selected.png",
                tailwind_l: "w-[40%] rounded-xl",
                tailwind_s: "w-[90%] rounded",
            },
            {
                link: "JeePS_feedback.png",
                tailwind_l: "w-[40%] rounded-xlw-[90%] rounded mt-5",
                tailwind_s: "w-[90%] rounded mt-5",
            },
            {
                link: "JeePS_driver_app.png",
                tailwind_l: "w-[10%] rounded-xl",
                tailwind_s: "w-[30%] rounded mt-5",
            },
        ]

    },
    {
        name: "MeralCOST: Analysis on Meralco Typical Consumption Price",
        logo_link: "meralcost.png",
        date: "March 2024 - June 2024",
        details: "Used Data Science to analyze and interpret data from past electric consumption costs of Meralco to determine how its price has changed over the years and what factors cause the price to fluctuate.",
        pics: [{
                link: "meralcost_homepage.png",
                tailwind_l: "w-[50%] rounded-xl",
                tailwind_s: "w-[90%] rounded",
            },
            {
                link: "meralcost_plot1.png",
                tailwind_l: "w-[40%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ]
    },
    {
        name: "Alco-OL",
        logo_link: "alco_ol.png",
        date: "May 2023 - June 2023",
        details: "Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase.",
        pics: [{
                link: "alco_ol_homepage .png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded",
            },
            {
                link: "alco_ol_map.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ]
    },
    {
        name: "Predicting Highest and lowest Region of game Sales using Decision Tree Classifier and other Models (AI)",
        logo_link: "",
        date: "April 2024 - June 2024",
        details: "Used Decision Tree Classifier, Multilayer Perception Classifier, and Hist Gradient Bossting Classifier to predict which region has the highest and lowest scale for a video game.",
        pics: [{
                link: "ai_1.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
            {
                link: "ai_2.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ]
    },
    {
        name: "JeePS (old version)",
        logo_link: "JeePS_old.png",
        date: "September 2022 - June 2023",
        details: "Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase",
        pics: [{
                link: "JeePS_old_homepage.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
            {
                link: "JeePS_old_login.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ]
    },
]


$: innerWidth = 1000;
$: innerHeight = 1000;
</script>


<svelte:window bind:innerWidth bind:innerHeight />

<project>
    {#each project_data as proj}
            <div class={project_box}>

                <div class={space2}></div>

                
                <div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
                    {#if proj.logo_link != ""}
                    <div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
                        <img src={proj.logo_link} alt="a" class="ml-5 w-32 rounded-xl drop-shadow-xl">
                    </div>
                    {/if}

                    <div>

                        <h2 class={`${innerWidth > 700 ? heading_white_l : heading_white_s}`}>
                            {proj.name}
                        </h2>
                        <h2 class={`${innerWidth > 700 ? subtext1_white_l : subtext1_white_s}`}>
                            {proj.date}
                        </h2>

                        <div class={project_divider}></div>

                        <h2 class={`${innerWidth > 700 ?subtext2_white_l : subtext2_white_s}`}>
                            {proj.details}
                        </h2>

                    </div>
                </div>

                
                <div class={`mt-5 ${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}`}>
                    {#each proj.pics as pic}
                    <img src={pic.link} alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? pic.tailwind_l : pic.tailwind_s}`}>
                    {/each}
                </div>

                <div class={space2}></div>

            </div>

            <!--space brfore next area-->
            <div class={space1}></div>

            {/each}
</project>