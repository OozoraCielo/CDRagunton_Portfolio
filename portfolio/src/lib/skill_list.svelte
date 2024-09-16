<script>
//tailwind css
let skills_div = "flex flex-col mx-auto"

let skills_logo_l = "drop-shadow-xl mt-10 w-12 mx-8 my-auto"
let skills_name_l = "text-2xl text-gray-200 font-odibee mx-auto mt-auto"

let skills_logo_s = "drop-shadow-xl mt-10 w-10 mx-4 my-auto"
let skills_name_s = "text-xl text-gray-200 font-odibee mx-auto mt-auto"

//data
let skill_data = [{
        name: "Python",
        link: "skills/python_logo.png",
    },
    {
        name: "C",
        link: "skills/c_logo.png",
    },
    {
        name: "C#",
        link: "skills/csharp_logo.png",
    },
    {
        name: "Typescript",
        link: "skills/typescript_logo.png",
    },
    {
        name: "HTML",
        link: "skills/html_logo.png",
    },
    {
        name: "CSS",
        link: "skills/css_logo.png",
    },
    {
        name: "Javascript",
        link: "skills/javascript_logo.png",
    },
    {
        name: "Linux",
        link: "skills/linux_logo.png",
    },
    {
        name: "Figma",
        link: "skills/figma_logo.png",
    },
    {
        name: "Svelte",
        link: "skills/svelte_logo.png",
    },
    {
        name: "Tailwind CSS",
        link: "skills/tailwind_logo.png",
    },
    {
        name: "Matlab",
        link: "skills/matlab_logo.png",
    },
    {
        name: "Flutter",
        link: "skills/flutter_logo.png",
    },
    {
        name: "Firebase",
        link: "skills/firebase_logo.png",
    },
    {
        name: "MySQL",
        link: "skills/mysql_logo.png",
    },
    {
        name: "Godot",
        link: "skills/godot_logo.png",
    },
    {
        name: "Unity",
        link: "skills/unity_logo.png",
    },
    {
        name: "Github",
        link: "skills/github_logo.png",
    },
    {
        name: "Git",
        link: "skills/git_logo.png",
    },
]

$: innerWidth = 1000;
$: innerHeight = 1000;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<skills>
    <div class={`flex flex-row flex-wrap mx-auto w-[75%]`}>

        {#each skill_data as skill}
        <div class={skills_div}>
            <img src={skill.link} alt="a" class={`${innerWidth > 700 ? skills_logo_l : skills_logo_s}`}>
            <h2 class={`${innerWidth > 700 ? skills_name_l : skills_name_s}`}>{skill.name}</h2>
        </div>
        {/each}

    </div>
</skills>
