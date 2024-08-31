<script>
import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'


//get screen size
$: innerWidth = 1000;
$: innerHeight = 1000;



</script>

<svelte:window bind:innerWidth bind:innerHeight />


<main class={` min-h-full min-w-full`}>
	<section use:scrollRef={'home'} class={`pt-44`}>
		<div class={`py-[220px]`}>
			

			<h2 class={`pl-[3%] text-7xl text-gray-200 font-odibee flex justify-center mr-[15%] text-center`}>
				CD Ragunton
			</h2>
			<h2 class={`pl-[3%] pt-4 text-3xl text-gray-400 flex justify-center mr-[15%] font-electrolize text-center`}>
				Frontend/UI/UX Developer, Software Engineer
			</h2>
			<!--space brfore next area-->
			<div class="pt-16"></div>
		
		</div>
		<!--space brfore next area-->
		<div class="pt-56"></div>
	</section>





	<section use:scrollRef={'skills'} class="pt-16">
		<h2 class={`pl-[3%] text-5xl text-gray-200 font-odibee flex justify-center mr-[15%] text-center`}>
			Skills
		</h2>
		<div class={`flex flex-row flex-wrap pl-[3%] pr-[15%] mx-auto w-[70%]`}>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/python_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Python</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/c_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>C</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/csharp_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>C#</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
				<img src="/skills/typescript_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
				<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Typescript</h2>
				</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/html_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>HTML</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/css_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>CSS</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
				<img src="/skills/javascript_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
				<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Javascript</h2>
				</div>
			
				<div class={`flex flex-col mx-auto`}>
					<img src="/skills/linux_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
					<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Linux</h2>
					</div>

					<div class={`flex flex-col mx-auto`}>
						<img src="/skills/figma_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
						<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Figma</h2>
						</div>



		

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/svelte_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Svelte</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/tailwind_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Tailwind</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/matlab_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Matlab</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
				<img src="/skills/flutter_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
				<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Flutter</h2>
				</div>

				<div class={`flex flex-col mx-auto`}>
					<img src="/skills/firebase_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
					<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Firebase</h2>
					</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/postgresql_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>PostgreSQL</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
			<img src="/skills/godot_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
			<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Godot</h2>
			</div>

			<div class={`flex flex-col mx-auto`}>
				<img src="/skills/unity_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
				<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Unity</h2>
				</div>
			
			<div class={`flex flex-col mx-auto`}>
				<img src="/skills/github_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
				<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Github</h2>
				</div>

				<div class={`flex flex-col mx-auto`}>
					<img src="/skills/git_logo.png" alt="a" class={` drop-shadow-xl mt-10 w-12 mx-6 my-auto`}>
					<h2 class={`text-2xl text-gray-200 font-odibee mx-auto mt-auto`}>Git</h2>
					</div>



		</div>
		<div class="pt-16"></div>
			<!-- <div class={`mr-[15%]  `}>
				<img src="/skills/top.png" alt="a" class={`   w-[60%]  mx-auto pointer-events-none`}>
				<div class={`bg-gray-900 w-[60%] h-64 mx-auto`}>

					<h2 class={` text-5xl text-gray-200 font-odibee flex justify-center pt-6`}>
						Technological Skills
					</h2>

				</div>
				<img src="/skills/bottom.png" alt="a" class={`   w-[60%]  mx-auto pointer-events-none`}>
			</div> -->



			
			
			

			<!-- <div class={` min-w-full mx-auto`}>
				<img src="/skills/top2.png" alt="a" class={` drop-shadow-xl mt-10 w-[40%]  absolute  mx-auto`}>
			<img src="/skills/top1.png" alt="a" class={` drop-shadow-xl mt-10 w-[40%]  absolute  mx-auto`}>
			
			<div class={`bg-black w-[40%] mt-[370px]  absolute mx-auto`}>
				<h2 class={` text-5xl text-gray-200 font-odibee flex justify-center p-4`}>
					Frameworks and Technologies
				</h2>
			</div>-->



		<!--space brfore next area-->
		<div class="pt-16"></div>
		
	</section>

	
	
		<div class={``}>
			<img src="/area_top.png" alt="a" class="w-screen pointer-events-none select-none touch-none">
			<section use:scrollRef={'work'} class="">
			<div class={`bg-light_blue_area w-screen pt-16`}>
				

				<h2 class={`pl-[3%] text-5xl text-black font-odibee flex justify-center mr-[15%] text-center`}>
					Work Experience
				</h2>

				<!--ncts-->
				<div class="pl-[3%] mr-[15%]">
					<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
						<div class={`${innerWidth > 700 ? 'flex flex-col min-w-32' : 'flex flex-row min-w-32 mx-auto'}` }>
					<img src="/itslab.png" alt="a" class={`w-24 h-24 rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'mt-10' : 'mt-10'}`}>
					<img src="/ncts.png" alt="a" class={`w-24 h-24 rounded-xl drop-shadow-xl ${innerWidth > 700 ? 'mt-5' : ' mt-10 ml-5'}`}>
					</div>
				<div>

				<h2 class={`pt-10 pl-10 text-3xl text-black font-electrolize my-auto `}>
					UP National Center for Transportation Studies: Intelligent Transportations Systems Laboratory
				</h2>
				
				<h2 class={`pt-2 pl-10 text-xl text-black font-electrolize`}>
					July 2023 – August 2023 <br>
					Quezon City, NCR
				</h2>

				<div class="mt-2 ml-10 w-full  mr-[20%] border-dashed border-blue_bg border"></div>
				<h2 class={`pt-2 pl-10 text-xl text-black font-normal`}>
					Worked as an intern and developed the frontend of CREATE: CIVIR, a project that replicates a real-life car-related accident, using Unity.
				</h2>
				
				</div>
				</div>
				
				</div>
				<!--space brfore next area-->
				<div class="pt-16"></div>

				<!--new-->
				<!-- <div class="mt-12 w-full h-[4px] bg-blue_bg"></div> -->
				
			</div>
		</section>
			<img src="/area_bottom.png" alt="a" class="w-screen pointer-events-none select-none touch-none">

		</div>
	
	

	<section use:scrollRef={'publication'} class="pt-16">
		<h2 class={`pl-[3%] text-5xl text-gray-200 font-odibee flex justify-center mr-[15%] text-center`}>
			Publication
		</h2>
		<!--JeePS-->
		<div class="pl-[3%] mr-[15%]">
			<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
				<div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
			<img src="/jeeps.png" alt="a" class="mt-10 w-32 rounded-xl drop-shadow-xl">
			</div>
		<div>

		<h2 class={`pt-10 pl-10 text-4xl text-gray-200  font-electrolize my-auto `}>
			JeePS: Designing a Realtime Public Transportation Tracking System
		</h2>
		
		<h2 class={`pt-2 pl-10 text-xl text-gray-200  font-electrolize`}>
			NIDS 2024 <br>
			Carl Ragunton, Zedec Pacaldo, and Jozelle Adawe
		</h2>

		<div class="mt-2 ml-10 w-full  mr-[20%] border-dashed border-light_blue_area border"></div>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200  font-normal`}>
			Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase.
		</h2>
		
		</div>
		</div>
		
		</div>

		
			<!--space brfore next area-->
			<div class="pt-16"></div>

	</section>

   
		<div class={``}>
			<img src="/area_top.png" alt="a" class="w-screen pointer-events-none select-none touch-none">
			<section use:scrollRef={'education'}>
			<div class={`bg-light_blue_area w-screen pt-16`}>
				<h2 class={`pl-[3%] text-5xl text-black font-odibee flex justify-center mr-[15%] text-center`}>
					Education
				</h2>

				<!--upd-->
		<div class="pl-[3%] mr-[15%]">
			<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
				<div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
				<img src="/upd.png" alt="a" class="mt-10 w-32 h-32 rounded-xl drop-shadow-xl">
				</div>
			<div>

			<h2 class={`pt-10 pl-10 text-4xl text-black font-electrolize my-auto `}>
				University of the Philippines Diliman
			</h2>
			
			<h2 class={`pt-2 pl-10 text-xl text-black font-electrolize`}>
				September 2020 – July 2024 <br>
				Quezon City, NCR
			</h2>
			<div class="mt-2 ml-10 w-full  mr-[20%] border-dashed border-blue_bg border"></div>
			<h2 class={`pt-2 pl-10 text-xl text-black font-normal`}>
				Bachelor of Computer Science <br>
				Magna Cum Laude
			</h2>
			
			</div>
			</div>
			
			</div>

		<!--new-->
		<div class="mt-12 w-full h-[4px] bg-blue_bg"></div>

			<!--sha-->
		<div class="pl-[3%] mr-[15%]">
			<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
				<div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
				<img src="/sha.png" alt="a" class="mt-10 w-32 h-32 rounded-xl drop-shadow-xl">
				</div>
			<div>

			<h2 class={`pt-10 pl-10 text-4xl text-black font-electrolize my-auto `}>
				Sacred Heart Academy of Sta. Maria (Bulacan) Inc.
			</h2>
			
			<h2 class={`pt-2 pl-10 text-xl text-black font-electrolize`}>
				June 2014 – April 2020 <br>
				Santa Maria, Bulacan
			</h2>
			<div class="mt-2 ml-10 w-full  mr-[20%] border-dashed border-blue_bg border"></div>
			<h2 class={`pt-2 pl-10 text-xl text-black font-normal`}>
				STEM Strand <br>
				Highest Honor
			</h2>
			
			</div>
			</div>
			
			</div>

				
				<!--space brfore next area-->
			<div class="pt-16"></div>
			</div>
			
		</section>
		
			<img src="/area_bottom.png" alt="a" class="w-screen pointer-events-none select-none touch-none">
		</div>
	



		<section use:scrollRef={'projects'} class="pt-16">
			<h2 class={`pl-[3%] text-5xl text-gray-200 font-odibee flex justify-center mr-[15%] text-center`}>
				Projects
			</h2>


			

			<!--JeePS-->
		<div class="ml-[5%] mr-[15%] bg-gray-900 mt-10 rounded-2xl  border border-light_blue_area">
			<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
				<div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
			<img src="/JeePS2.png" alt="a" class="ml-5 mt-10 w-32 rounded-xl drop-shadow-xl">
			</div>
		<div>

		<h2 class={`pt-10 pl-10 text-4xl text-gray-200  font-electrolize my-auto `}>
			JeePS: Realtime Public Transportation Tracking System
		</h2>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200 font-electrolize`}>
			September 2023 - June 2024
		</h2>
		

		<div class="mt-2 ml-10 mr-4  border-dashed border-light_blue_area border "></div>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200  font-normal`}>
			Published a paper about creating a web application and mobile application that improves the overall situation of public informal transportation in the Philippines. The system addresses problems of passengers regarding safety, driver’s behavior, information materials and service adequacy by providing several information using Flutter and Firebase.
		</h2>

		

		</div>
		</div>
		<div class={`flex flex_row `}>
			<img src="/JeePS_jeep_selected.png" alt="a" class="mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
			<img src="/JeePS_driver_app.png" alt="a" class=" mt-10 w-[10%] rounded-xl drop-shadow-xl mx-auto">
			<img src="/JeePS_feedback.png" alt="a" class="mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
		</div>
		
		<div class="pt-10"></div>
		
		</div>

		
			<!--space brfore next area-->
			<div class="pt-16"></div>
	


			<!--MeralCOST-->
			<div class="ml-[5%] mr-[15%] bg-gray-900 mt-10 rounded-2xl  border border-light_blue_area">
			<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
				<div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
			<img src="/meralcost.png" alt="a" class="ml-5 mt-10 w-32 rounded-xl drop-shadow-xl">
			</div>
		<div>

		<h2 class={`pt-10 pl-10 text-4xl text-gray-200  font-electrolize my-auto `}>
			MeralCOST: Analysis on Meralco Typical Consumption Price
		</h2>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200 font-electrolize`}>
			March 2024 - June 2024
		</h2>
		

		<div class="mt-2 ml-10 mr-4  border-dashed border-light_blue_area border "></div>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200  font-normal`}>
			Used Data Science to analyze and interpret data from past electric consumption costs of Meralco to determine how its price has changed over the years and what factors cause the price to fluctuate.		</h2>
			
		

		</div>
		</div>
		<div class={`flex flex_row `}>
			<img src="/meralcost_homepage.png" alt="a" class="mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
			<img src="/meralcost_plot1.png" alt="a" class="ml-10 mt-10 w-[35%] rounded-xl drop-shadow-xl mx-auto">
		</div>
		
		<div class="pt-10"></div>
		
		</div>

		
			<!--space brfore next area-->
			<div class="pt-16"></div>
	


			<!--alco-ol-->
			<div class="ml-[5%] mr-[15%] bg-gray-900 mt-10 rounded-2xl  border border-light_blue_area">
			<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
				<div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
			<img src="/alco_ol.png" alt="a" class="ml-5 mt-10 w-32 rounded-xl drop-shadow-xl">
			</div>
		<div>

		<h2 class={`pt-10 pl-10 text-4xl text-gray-200  font-electrolize my-auto `}>	
			Alco-OL
		</h2>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200 font-electrolize`}>
			May 2023 - June 2023
		</h2>
		
		

		<div class="mt-2 ml-10 mr-4  border-dashed border-light_blue_area border "></div>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200  font-normal`}>
			Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase		<div class={`flex flex_row `}>
		
	</div>
	

		</div>
		
		</div>
		<div class={`flex flex_row `}>
			<img src="/alco_ol_homepage .png" alt="a" class="mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
			<img src="/alco_ol_map.png" alt="a" class="ml-10 mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
			</div>
		<div class="pt-10"></div>
		
		</div>

		
			<!--space brfore next area-->
			<div class="pt-16"></div>


			<!--AI highest lowest game sales-->
			<div class="ml-[5%] mr-[15%] bg-gray-900 mt-10 rounded-2xl  border border-light_blue_area">
		<div>

		<h2 class={`pt-10 pl-10 text-4xl text-gray-200  font-electrolize my-auto `}>
			Predicting Highest and lowest Region of game Sales using Decision Tree Classifier and other Models (AI)
		</h2>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200 font-electrolize`}>
			April 2024 - June 2024
		</h2>
		
		

		<div class="mt-2 ml-10 mr-4  border-dashed border-light_blue_area border "></div>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200  font-normal`}>
			Used Decision Tree Classifier, Multilayer Perception Classifier, and Hist Gradient Bossting Classifier to predict which region has the highest and lowest scale for a video game.
		

		</div>
		
		<div class={`flex flex_row `}>
			<img src="/ai_1.png" alt="a" class="mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
			<img src="/ai_2.png" alt="a" class="ml-10 mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
		</div>
		
		<div class="pt-10"></div>
		</div>

		
			<!--space brfore next area-->
			<div class="pt-16"></div>


		<!--JeePS old-->
		<div class="ml-[5%] mr-[15%] bg-gray-900 mt-10 rounded-2xl  border border-light_blue_area">
			<div class={`${innerWidth > 700 ? 'flex flex-row' : 'flex flex-col'}` }>
				<div class={`flex flex-col min-w-32  ${innerWidth > 700 ? '' : 'mx-auto'}` }>
			<img src="/JeePS_old.png" alt="a" class="ml-5 mt-10 w-32 rounded-xl drop-shadow-xl">
			</div>
		<div>

		<h2 class={`pt-10 pl-10 text-4xl text-gray-200  font-electrolize my-auto `}>	
			JeePS (old version)
		</h2>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200 font-electrolize`}>
			September 2022 - June 2023
		</h2>
		
		

		<div class="mt-2 ml-10 mr-4  border-dashed border-light_blue_area border "></div>
		<h2 class={`pt-2 pl-10 text-xl text-gray-200  font-normal`}>
			Developed a website that shows current level of content of sanitation dispensers using esp32 as well as their battery status through the internet using Svelte and Firebase		<div class={`flex flex_row `}>
		
	</div>
	

		</div>
		
		</div>
		<div class={`flex flex_row `}>
			<img src="/JeePS_old_homepage.png" alt="a" class="mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
			<img src="/JeePS_old_login.png" alt="a" class="ml-10 mt-10 w-[40%] rounded-xl drop-shadow-xl mx-auto">
			</div>
		<div class="pt-10"></div>
		
		</div>

		
			<!--space brfore next area-->
			<div class="pt-16"></div>

		</section>
		<div class="pt-16"></div>

	<div class={`pl-[3%]  flex flex-col mr-[15%]`}>
		
	<img src="/barong grad pic.png" alt="a" class="w-[18%] mx-auto">
	<h2 class={` text-xl text-gray-200  font-electrolize text-center`}>
		Carl David Ragunton<br>
		raguntoncarl@gmail.com
	</h2>

	
	</div>
	<div class="pt-16"></div>

</main>

<style>

</style>