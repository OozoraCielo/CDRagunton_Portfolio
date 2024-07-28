<script>
    // import { page } from "$app/stores";
    // $:currentRoute = $page.url.pathname;


    function scrollIntoView({ target }) {
      const el = document.querySelector(target.getAttribute('href'));
      if (!el) return;
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }


  
      
</script>

<!--black behind navbar-->
<div class={`pointer-events-none`}>
<div class=" min-w-full min-h-full fixed z-10 flex opacity-70">
    <img src="/top.png" alt="a" class="ml-auto w-[900px] h-[175px]">
</div>
</div>
  
<nav class="w-full h-32 z-10 fixed flex justify-end pt-8 text-3xl pr-24 font-odibee">
  
          <!--Home-->
          <li class="flex justify-center" >

          <!--<a href="/">-->
          <a href="#home" on:click|preventDefault={scrollIntoView}>
          <div class={"px-4 bg-black bg-opacity-0 hover:bg-opacity-100 h-14 rounded-2xl"}>
          <p class={`text-white py-3`}>Home</p>
          </div>
          </a>
  
  
          <a href="#work" on:click|preventDefault={scrollIntoView}>
          <div class={"px-4 bg-black bg-opacity-0 hover:bg-opacity-100 h-14 rounded-2xl"}>
          <p class={`text-white py-3`}>Work</p>
          </div>
          </a>
            
  
  
          <a href="#education" on:click|preventDefault={scrollIntoView}>
          <div class={"px-4 bg-black bg-opacity-0 hover:bg-opacity-100 h-14 rounded-2xl"}>
          <p class={`text-white py-3`}>Education</p>
          </div>
          </a>
  
  
  
          <a href="#publication" on:click|preventDefault={scrollIntoView}>
          <div class={"px-4 bg-black bg-opacity-0 hover:bg-opacity-100 h-14 rounded-2xl"}>
          <p class={`text-white py-3`}>Publication</p>
          </div>
          </a>
          
  
  
          <a href="projects" on:click|preventDefault={scrollIntoView}>
          <div class={"px-4 bg-black bg-opacity-0 hover:bg-opacity-100 h-14 rounded-2xl"}>
          <p class={`text-white py-3`}>Projects</p>
          </div>
          </a>
  
  
          <a href="#skills" on:click|preventDefault={scrollIntoView}>
          <div class={"px-4 bg-black bg-opacity-0 hover:bg-opacity-100 h-14 rounded-2xl"}>
          <p class={`text-white py-3`}>Skills</p>
          </div>
          </a>
        </li>

</nav>
  