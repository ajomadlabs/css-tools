<template>
  <div>
    <!-- COLOR PALETTE CARD SECTION -->
    <center
      class="xs:mt-28 md:mt-34"
    >
      <div
        style="max-width: 1180px"
      >

        <!-- HEADER SECTION -->
        <div
          class="xs:mx-8 md:mx-16 ipadPro:mx-20 lg:mx-27"
        >
          <!-- SECTION ONE -->
          <h1
            class="antialiased font-semibold leading-normal tracking-normal xs:text-18 md:text-24 text-left text-css-tools-black"
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
            class="xs:w-5/12 md:w-1/5 xs:ml-2 md:ml-4 px-4 py-6 cursor-pointer mb-8 h-auto rounded-lg bg-css-tools-white shadow-md"
            @click="goTo(i)"
          >
            <!-- FIRST ROW -->
            <div
              class="flex items-center justify-between"
            >
              <!-- COLOR ONE -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md"
                :style="`background-color:${color.color_one}`"
                @mouseover="setActiveColor(i, 1)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.color_one_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_one }}
                  </h3>
                </div>
              </div>
              <!-- END -->

              <!-- COLOR TWO -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md ml-2"
                :style="`background-color:${color.color_two}`"
                @mouseover="setActiveColor(i, 2)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.color_two_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_two }}
                  </h3>
                </div>
              </div>
              <!-- END -->
            </div>
            <!-- END -->

            <!-- SECOND ROW -->
            <div
              class="flex items-center justify-between mt-2"
            >
              <!-- COLOR THREE -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md"
                :style="`background-color:${color.color_three}`"
                @mouseover="setActiveColor(i, 3)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-if="color.color_three_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_three }}
                  </h3>
                </div>
              </div>
              <!-- END -->

              <!-- COLOR FOUR -->
              <div
                class="w-28 xs:h-12 sm:h-16 md:h-26 rounded-md ml-2"
                :style="`background-color:${color.color_four}`"
                @mouseover="setActiveColor(i, 4)"
                @mouseleave="resetColor(i)"
              >
                <div
                  v-show="color.color_four_active"
                  class="bg-css-tools-black opacity-50 rounded-t-lg"
                >
                  <h3
                    class="text-center antialiased leading-normal tracking-normal text-css-tools-white"
                  >
                    {{ color.color_four }}
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
                class="antialiased font-medium leading-normal tracking-normal text-center xs:text-12 md:text-16 text-css-tools-gray-dark"
              >
                Color Swatch <br> #{{i + 1}}
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
