<script>
    // import { page } from "$app/stores";
    // $:currentRoute = $page.url.pathname;


     import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'


  
//get screen size
$: innerWidth = 1000;
$: innerHeight = 1000;


</script>

<svelte:window bind:innerWidth bind:innerHeight />


<!--black behind navbar-->
<div class={`pointer-events-none`}>
<div class=" min-w-full min-h-full fixed flex opacity-80 select-none touch-none">
    <img src="top.png" alt="a" class={`ml-auto  ${innerWidth > 700 ? 'w-[700px] h-[175px]' : 'w-[500px] h-[85px]'}`}>
</div>
</div>
  
<nav class={`w-full h-32 z-10 fixed flex justify-end  text-2xl pointer-events-none  font-odibee ${innerWidth > 700 ? 'pr-20 pt-8' : 'pt-2 pr-8'}`}>
  
          <!--Home-->
          <!-- ${innerWidth > 700 ? 'flex-row' : 'flex-col'} -->
          <li class={`flex justify-center`} >
        
          <!--<a href="/">-->
          
          <div class={`bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto ${innerWidth > 700 ? 'px-3 h-14' : 'px-2 text-xl h-10'}`}>
            <a href use:scrollTo={'home'} >
          <p class={`text-white  ${innerWidth > 700 ? 'py-3' : 'py-1'}`}>Home</p>
        </a>
          </div>



          <div class={`bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto ${innerWidth > 700 ? 'px-3 h-14' : 'px-2 text-xl h-10'}`}>
            <a href use:scrollTo={{ ref: 'skills', offset: -200 }}>
      <p class={`text-white  ${innerWidth > 700 ? 'py-3' : 'py-1'}`}>Skills</p>
    </a>
      </div>
  
  
          
            <div class={`bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto ${innerWidth > 700 ? 'px-3 h-14' : 'px-2 text-xl h-10'}`}>
                <a href use:scrollTo={{ ref: 'work', offset: -200 }}>
          <p class={`text-white  ${innerWidth > 700 ? 'py-3' : 'py-1'}`}>Work</p>
        </a>
          </div>
            
  
  
          
            
  
  
  
          
            <div class={`bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto ${innerWidth > 700 ? 'px-3 h-14' : 'px-2 text-xl h-10'}`}>
                <a href use:scrollTo={{ ref: 'publication', offset: -200 }}>
          <p class={`text-white  ${innerWidth > 700 ? 'py-3' : 'py-1'}`}>Publication</p>
        </a>
          </div>



          <div class={`bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto ${innerWidth > 700 ? 'px-3 h-14' : 'px-2 text-xl h-10'}`}>
            <a href use:scrollTo={{ ref: 'education', offset: -100 }}>
      <p class={`text-white  ${innerWidth > 700 ? 'py-3' : 'py-1'}`}>Education</p>
    </a>
      </div>
          
          
  
  
          
            <div class={`bg-black bg-opacity-0 hover:bg-opacity-100  rounded-2xl pointer-events-auto ${innerWidth > 700 ? 'px-3 h-14' : 'px-2 text-xl h-10'}`}>
                <a href use:scrollTo={{ ref: 'projects', offset: -200 }}>
          <p class={`text-white  ${innerWidth > 700 ? 'py-3' : 'py-1'}`}>Projects</p>
        </a>
          </div>
  
  
        </li>

</nav>
  