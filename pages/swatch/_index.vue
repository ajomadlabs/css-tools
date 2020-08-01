<template>
    <div>
        <!-- TOP NAVBAR COMPONENT -->
        <top-navbar/>
        <!-- END -->
        
            <div>
                 <center>
                         <div style="maxWidth:1180px">

                                    <div class="ml-10 mt-6 text-center text-20 font-normal">
                                        <h1 class="px-2 py-2"> Color Swatch </h1>
                                    </div>

                                    <div class="ml-10 mt-1 text-center text-15 font-light">
                                        <p>Choose your favourite colors with ease for your next project</p>
                                    </div>  

                                    <div class="flex flex-wrap justify-start">
                                        <div class="mt-10 w-auto shadow-lg h-auto ml-10"
                                            v-for="(info, i) in cardInfo" :key="i"
                                            
                                        >
                                                <div class="font-light border-grey border-b-4">
                                                        <h1 class="px-2 py-2"> Color Swatch #{{i+1}}  </h1>                                      
                                                </div>
                                       </div>
                                    </div>
                        </div>
                </center>

            </div>
    </div>
</template>

<script src="./cswatch.js"/>



