<script>
//get screen size
$: innerWidth = 1000;
$: innerHeight = 1000;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class={`min-h-full min-w-full fixed  flex justify-end bg-blue_bg`}>

</div>

<!--floating squares-->

<!-- <div class={`absolute bg-black h-24 w-24 mt-20 ml-20 animate-spin1 opacity-50`}></div>

<div class={`absolute bg-black h-36 w-36 mt-36 ml-20 animate-spin4 opacity-20`}></div> -->

<div class={`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin6 opacity-20 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[50%]' : 'h-[50%]'}`}></div>

<div class={`fixed aspect-square bg-black bottom-0 -mb-[20%] -ml-[20%] animate-spin5 opacity-40 pointer-events-none select-none touch-none ${innerWidth > innerHeight ? 'w-[40%]' : 'h-[40%]'}`}></div>




<style>


</style>
