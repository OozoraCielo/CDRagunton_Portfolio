<script>
//get screen size
$: innerWidth = 1000;
$: innerHeight = 1000;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class={`min-h-full min-w-full fixed  flex justify-end bg-blue_bg`}>

</div>

<div>
    {#if innerHeight > innerWidth}
    <img src="bg2.png" alt="a" class="min-h-full min-w-full fixed">
    {:else}
    <img src="bg.png" alt="a" class="min-h-full min-w-full fixed">

    {/if}


</div>

<!--floating squares-->

<!-- <div class={`absolute bg-black h-24 w-24 mt-20 ml-20 animate-spin1 opacity-50`}></div>

<div class={`absolute bg-black h-36 w-36 mt-36 ml-20 animate-spin4 opacity-20`}></div> -->

<div class={`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin6 opacity-30 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[50%]' : 'h-[50%] -ml-[30%]'}`}></div>

<div class={`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin5 opacity-50 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[40%]' : 'h-[40%] -ml-[30%]'}`}></div>

<div class={`fixed aspect-square bg-black right-0 -mr-[20%] my-auto animate-spin4 opacity-20 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[40%]' : 'h-[40%] -ml-[30%]'}`}></div>



<style>


</style>
