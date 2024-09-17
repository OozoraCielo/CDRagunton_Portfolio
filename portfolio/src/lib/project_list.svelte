<script>
//tailwind css
//space
let space1 = "pt-16"
let space2 = "pt-10"

//texts
let heading_white_l = "px-10 text-3xl text-gray-200 font-electrolize my-auto"
let heading_white_s = "px-5 pt-5 text-xl text-gray-200 font-electrolize my-auto text-center"

let subtext1_white_l = "pt-2 px-10 text-xl text-gray-200 font-electrolize"
let subtext1_white_s = "pt-2 px-5 text-sm text-gray-200 font-electrolize text-center"

let subtext2_white_l = "pt-2 px-10 text-xl text-gray-200 font-normal"
let subtext2_white_s = "pt-2 px-5 text-sm text-gray-200 font-normal text-center"

//projects
let project_box = "bg-black rounded-2xl  border border-light_blue_area bg-opacity-60"
let project_divider = "mt-2 mx-5 border-dashed border-light_blue_area border"

//project data
let project_data = [{
        name: "JeePS: Realtime Public Transportation Tracking System",
        logo_link: "JeePS2.png",
        date: "September 2023 - June 2024",
        details: "Created a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase. In order to adress these factors, several features were developed. These features include: Realtime GPS Location, Fare Matrix, Basic Information, Passenger Counter, Rough Time Estimation, Feedback System (5 star system and text feedback), Report System, Passenger Demand System, Account System, and various Route Manager Features like editing the route and verifying drivers.",
        pics: [{
                pic_link: "JeePS_jeep_selected.png",
                tailwind_l: "w-[40%] rounded-xl",
                tailwind_s: "w-[90%] rounded",
            },
            {
                pic_link: "JeePS_feedback.png",
                tailwind_l: "w-[40%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
            {
                pic_link: "JeePS_driver_app.png",
                tailwind_l: "w-[10%] rounded-xl",
                tailwind_s: "w-[30%] rounded mt-5",
            },
        ],
        link: "https://jeeps2.web.app/",
        skills: ["Flutter", "Firebase"],

    },
    {
        name: "MeralCOST: Analysis on Meralco Typical Consumption Price",
        logo_link: "meralcost.png",
        date: "March 2024 - June 2024",
        details: "Used Data Science to analyze and interpret data from past electric consumption costs of Meralco to determine how its price has changed over the years and what factors cause the price to fluctuate. Svelte was used to build the desktop webpage and Python was utilized to perform various data science techniques on the data. Few graphs were made to show the data in an efficient manner. The results show inconsistent changes in electricity price and how generation and distribution charges heavily affect it.",
        pics: [{
                pic_link: "meralcost_homepage.png",
                tailwind_l: "w-[50%] rounded-xl",
                tailwind_s: "w-[90%] rounded",
            },
            {
                pic_link: "meralcost_plot1.png",
                tailwind_l: "w-[40%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ],
        link: "https://meralcost.netlify.app/",
        skills: ["Svelte", "Javascript", "Python", "Data Science"],
    },
    {
        name: "Alco-OL: Esp32-based Sanitation Dispenser Monitoring System",
        logo_link: "alco_ol.png",
        date: "May 2023 - June 2023",
        details: "Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase. Through this system, users can easily detect which containers need to be refilled. The history log can also be used to detect which dispensers are possibly broken. Though developed for sanitation dispensers, the system can also be used for other purposes (i.e. soap/shampoo dispensers).",
        pics: [{
                pic_link: "alco_ol_homepage .png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded",
            },
            {
                pic_link: "alco_ol_map.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ],
        link: "",
        skills: ["Svelte", "Javascript", "esp32 Hardware"],
    },
    {
        name: "Predicting Highest and lowest Region of game Sales using Decision Tree Classifier and other Models (AI)",
        logo_link: "",
        date: "April 2024 - June 2024",
        details: "Used Decision Tree Classifier, Multilayer Perception Classifier, and Hist Gradient Boosting Classifier to predict which region has the highest and lowest scale for a video game. Python and Sklearn libraries were used to train different models on a dataset from Kaggle. The results of each classifiers were compared to each other to see their strengths and weaknesses.",
        pics: [{
                pic_link: "ai_1.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
            {
                pic_link: "ai_2.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ],
        link: "",
        skills: ["Artificial Intelligence", "Python"],
    },
    {
        name: "JeePS (old version)",
        logo_link: "JeePS_old.png",
        date: "September 2022 - June 2023",
        details: "Developed a web application that displays the current location of jeepneys and routes in an area with an Arduino for the hardware, Svelte for the frontend, and PostgreSQL for the backend. The project was developed as an extension for Diskover, a website that shows important locations and routes inside the University of the Philippines campus. An account system was also made for the administrator features.",
        pics: [{
                pic_link: "JeePS_old_homepage.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
            {
                pic_link: "JeePS_old_login.png",
                tailwind_l: "w-[45%] rounded-xl",
                tailwind_s: "w-[90%] rounded mt-5",
            },
        ],
        link: "https://jeeps-view.onrender.com/",
        skills: ["Svelte", "Javascript", "PostgreSQL"],
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
                <img src={proj.logo_link} alt="a" class={`ml-5 rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'w-32' : 'w-24'}`}>
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
            <img src={pic.pic_link} alt="a" class={`drop-shadow-xl mx-auto ${innerWidth > 700 ? pic.tailwind_l : pic.tailwind_s}`}>
            {/each}
        </div>

        <div class={space2}></div>

        <div class={`flex flex-row`}>
            {#if proj.link != ""}
            <div class={`ml-auto w-12 h-10 border border-light_blue_area rounded-xl mr-5 hover:bg-gray-800`}>
                <a href={proj.link} target="_blank">
                    <img src="open_in_new_tab.png" alt="a" class="w-6 mx-auto py-2">
                </a>
            </div>
            {/if}

        </div>
        <div class={`pt-5`}></div>

        

    </div>

    <!--space brfore next area-->
    <div class={space1}></div>

    {/each}
</project>
