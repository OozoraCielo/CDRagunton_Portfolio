<script>

    //get screen size
    $: innerWidth = 1000;
    $: innerHeight = 1000;

function doMail() {

    var email ="raguntoncarl@gmail.com";
    location.href = "mailto:"+email;
    }

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- <div class={`bg-black h-[400px] w-[2000px] z-30 fixed rotate-[-20deg]`}>
</div> -->


<div class={` min-w-full pointer-events-none select-none touch-none`}>

    <div class="min-w-full min-h-full fixed justify-end flex flex-col">
        <img src="bottom_shadow.png" alt="a" class="w-[100%] fixed mt-auto opacity-100 -mb-16">
    </div>

    <div class="min-h-full min-w-full fixed">
        <img src="top_left.png" alt="a" class="mt-auto w-[20%]">
    </div>

    <div class="min-h-full min-w-full fixed flex justify-end">
        <img src="right.png" alt="a" class="w-[15%] min-h-[50%] -mt-44">
    </div>



<!-- <div class={`bg-black ${height} w-[200%] rotate-[-20deg] -ml-[20%] -mt-[48%]`}>
</div> -->

<!-- <div class={`bg-black h-[400px] w-[2000px] rotate-[-20deg] -ml-[20%] -mt-[25%]`}>
</div>

<div class={`bg-black h-[400px] w-[2000px] rotate-[-75deg] ml-[53%]`}>
</div> -->


</div>

<!--links-->
<div class={`min-w-full min-h-full flex flex-col fixed justify-end pointer-events-none `}>
    <div class="ml-auto" >
        <a href="mailto:raguntoncarl@gmail.com" class={`pointer-events-auto`}>
            <img src="mail.png" alt="a" class=" w-10 transform transition duration-300 hover:scale-125  m-3">
    
        </a>
        </div>


    <div class="ml-auto">
    <a href="https://www.linkedin.com/in/cdragunton/" class={`pointer-events-auto`} >
        <img src="linkedin_logo.png" alt="a" class=" w-10 h-10 transform transition duration-300 hover:scale-125  m-3">

    </a>
    </div>

    <div class="ml-auto">
    <a href="https://github.com/OozoraCielo" class={`pointer-events-auto`}>
        <img src="github_logo.png" alt="a" class=" w-10 h-10 transform transition duration-300 hover:scale-125  m-3">

    </a>
    </div>


</div>