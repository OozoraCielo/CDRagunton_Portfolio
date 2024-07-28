<script>

    //get screen size
    $: innerWidth = 1000;
    $: innerHeight = 1000;
    $: width = "w-["+String(innerWidth)+"px]";
    $: height = "h-["+String(innerHeight)+"px]";

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- <div class={`bg-black h-[400px] w-[2000px] z-30 fixed rotate-[-20deg]`}>
</div> -->
<div class={` w-full pointer-events-none`}>
<div class="min-h-full min-w-full fixed z-30">
    <img src="/top_left.png" alt="a" class="mt-auto w-[20%]">
</div>

<div class="min-h-full min-w-full fixed z-30 flex justify-end">
    <img src="/right.png" alt="a" class="w-[20%] min-h-[50%] -mt-44">
</div>



<!-- <div class={`bg-black ${height} w-[200%] rotate-[-20deg] -ml-[20%] -mt-[48%]`}>
</div> -->

<!-- <div class={`bg-black h-[400px] w-[2000px] rotate-[-20deg] -ml-[20%] -mt-[25%]`}>
</div>

<div class={`bg-black h-[400px] w-[2000px] rotate-[-75deg] ml-[53%]`}>
</div> -->


</div>