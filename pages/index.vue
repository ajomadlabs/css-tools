<template>
  <div>
        <!-- TOP NAVBAR COMPONENT -->
        <top-navbar/>
        <!-- END -->
        <div>
            <center>
                <div style="maxWidth:1180px">
                    <div class="ml-10 mt-6 text-left text-20 font-extrabold">
                        <h1> Color Swatches </h1>
                    </div>  
                    <div class="ml-10 mt-1 text-left text-15 font-normal">
                        <p>Choose your favourite colors with ease for your next project</p>
                    </div>    
                    
                    <div class="flex flex-wrap justify-start">
                        <div class="mt-10 w-auto shadow-lg h-auto ml-10"
                            v-for="(info, i) in cardInfo" :key="i"
                        >
                        <div class="font-light border-solid border-grey border rounded">
                            <h1 class="px-2 py-2"> Color Swatch #{{i+1}}  </h1> 
                        </div>
                        
                                <div class="flex gap-2 mt-2 py-4 px-4">
                                    
                                    <div class="h-15 w-15 rounded-full "
                                        :style="`background-color:${info.colorOne}`"/>
                                        
                                    
                                    <div class="h-15 w-15 rounded-full"
                                        :style="`background-color:${info.colorTwo}`"
                                    />
                                </div>
                                <div class="flex gap-2 mt-2 py-4 px-4">                           
                                    <div class="h-15 w-15 rounded-full"
                                        :style="`background-color:${info.colorThree}`"
                                    />
                                    <div class="h-15 w-15 rounded-full"
                                        :style="`background-color:${info.colorFour}`"
                                    />
                                </div>
                                <div class="flex gap-2 mt-2 py-4 px-4">                           
                                    <div class="h-15 w-15 rounded-full"
                                        :style="`background-color:${info.colorFive}`"
                                    />
                                    <div class="h-15 w-15 rounded-full"
                                        :style="`background-color:${info.colorSix}`"
                                    />
                                </div>
                            
                        </div>
                        
                    </div>
                </div>
            </center>
        </div>
 </div>
</template>

<script src="./index.js" />
