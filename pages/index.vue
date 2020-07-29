<template>
  <div>
    <!-- COLOR PALETTE CARD SECTION -->
    <center
      class="mt-34"
    >
      <div
        style="max-width: 1180px"
      >

        <!-- HEADER SECTION -->
        <div
          class="mx-27"
        >
          <!-- SECTION ONE -->
          <h1
            class="antialiased font-semibold leading-normal tracking-normal text-24 text-left text-css-tools-black"
          >
            Color Swatches
          </h1>
          <!-- END -->

          <!-- SECTION TWO -->
          <p
            class="antialiased font-normal leading-normal tracking-normal text-left text-14 text-css-tools-gray-700"
          >
            Choose your favourite colors with ease for your next project.
          </p>
          <!-- END -->
        </div>
        <!-- END -->

        <!-- PALETTE CONTAINER -->
        <div
          class="mt-10 flex flex-wrap justify-center items-start"
        >
          <!-- PALETTE CARD -->
          <div
            v-for="(color, i) in colorPalettes"
            :key="i"
            class="w-1/5 ml-4 px-4 py-6 cursor-pointer mb-8 h-auto rounded-lg bg-css-tools-white shadow-md"
            @click="goTo(i)"
          >
            <!-- FIRST ROW -->
            <div
              class="flex items-center justify-between"
            >
              <!-- COLOR ONE -->
              <div
                class="w-28 h-26 rounded-md"
                :style="`background-color:${color.colorOne}`"
                @mouseover="setActiveColor(i, 1)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.colorOneActive"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.colorOne }}
                  </h3>
                </div>
              </div>
              <!-- END -->

              <!-- COLOR TWO -->
              <div
                class="w-28 h-26 rounded-md ml-2"
                :style="`background-color:${color.colorTwo}`"
                @mouseover="setActiveColor(i, 2)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.colorTwoActive"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.colorTwo }}
                  </h3>
                </div>
              </div>
              <!-- END -->
            </div>
            <!-- END -->

            <!-- SECOND ROW -->
            <div
              class="flex items-center gap-2 justify-between mt-2"
            >
              <!-- COLOR THREE -->
              <div
                class="w-28 h-26 rounded-md"
                :style="`background-color:${color.colorThree}`"
                @mouseover="setActiveColor(i, 3)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-if="color.colorThreeActive"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.colorThree }}
                  </h3>
                </div>
              </div>
              <!-- END -->

              <!-- COLOR FOUR -->
              <div
                class="w-28 h-26 rounded-md ml-2"
                :style="`background-color:${color.colorFour}`"
                @mouseover="setActiveColor(i, 4)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.colorFourActive"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.colorFour }}
                  </h3>
                </div>
              </div>
              <!-- END -->
            </div>
            <!-- END -->
            <!-- THIRD ROW -->
            <div
              class="mt-4"
            >
              <!-- PALETTE NAME -->
              <h3
                class="antialiased font-medium leading-normal tracking-normal text-center text-16 text-css-tools-gray-dark"
              >
                Color Swatch #{{i + 1}}
              </h3>
              <!-- END -->
            </div>
            <!-- END -->
          </div>
          <!-- END -->
        </div>
        <!-- END -->
      </div>
    </center>
    <!-- END -->
  </div>
</template>

<script src="./index.js" />
