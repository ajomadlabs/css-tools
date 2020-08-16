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
          class="xs:mx-6 md:mx-27"
        >
          <!-- SECTION ONE -->
          <h1
            class="antialiased font-semibold leading-normal tracking-normal text-24 text-left"
          >
            Color Swatch {{ swatchNumber }}
          </h1>
          <!-- END -->

          <!-- SECTION TWO -->
          <p
            class="antialiased font-normal leading-normal tracking-normal text-left text-14"
          >
            Let this swatch be the very next one you choose for your upcoming project.
          </p>
          <!-- END -->

          <!-- SECTION THREE -->
          <div
            class="md:flex md:flex-wrap w-full items-center mt-16"
          >
            <!-- COLOR SECTION -->
            <div
              v-for="(item, i) in colorSwatch"
              :key="i"
            >
              <!-- COLOR -->
              <div
                class="xs:w-full xs:h-64 md:w-50 md:h-116 rounded cursor-pointer"
                :class="[i !== 0 ? 'md:ml-2' : 'ml-0']"
                :style="`background-color:${item}`"
                @mouseover="viewColorInfo(item)"
              />
              <!-- END -->
              <!-- COLOR CODE -->
              <div>
                <h3
                  class="mt-2 font-medium text-16 text-center antialiased leading-normal tracking-normal text-center"
                  :style="`color: ${item}`"
                >
                  {{ item }}
                </h3>
              </div>
              <!-- END -->
            </div>
            <!-- END -->

          </div>
          <!-- END -->

          <!-- SECTION FOUR -->
          <div
            class="my-20"
          >
            <!-- HEADER SECTION -->
            <h1
              class="antialiased font-bold leading-normal tracking-normal text-30 text-left"
              :style="`color:${colorTitle}`"
            >
              {{ colorTitle }}
            </h1>
            <!-- END -->

            <!-- SUB HEADER SECTION -->
            <p
              class="antialiased font-normal leading-normal tracking-normal text-left text-14"
            >
              An in-depth overview of this color swatch which mainly includes light, dark etc
            </p>
            <!-- END -->

            <!-- COLOR FORMATS -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Color Formats
              </h1>
              <!-- END -->
              <!-- BOX SECTION -->
              <div
                class="mt-6 bg-css-tools-gray-200 w-full border border-solid border-css-tools-light rounded px-8 py-4"
              >
                <!-- HEX SECTION -->
                <div
                  class="antialiased text-css-tools-black leading-normal tracking-normal text-left text-14 font-medium"
                >
                  <p>
                    Hex Value - {{ this.hexValue }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    Hex8 Value - {{ this.hex8Value }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    RGB Value - {{ this.rgbValue }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    HSL Value - {{ this.hslValue }}
                  </p>
                  <p
                    class="mt-4"
                  >
                    HSV Value - {{ this.hsvValue }}
                  </p>
                </div>
                <!-- END -->
              </div>
              <!-- END -->
            </div>
            <!-- END -->
            <!-- LIGHT SHADES -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Light Shades
              </h1>
              <!-- END -->
              <!-- LIGHT COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in lightShades"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    v-if="color.name !== '#ffffff'"
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div
                    v-if="color.name !== '#ffffff'"
                  >
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- DARK SHADES -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Dark Shades
              </h1>
              <!-- END -->
              <!-- LIGHT COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in darkShades"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    v-if="color.name !== '#000000'"
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div
                    v-if="color.name !== '#000000'"
                  >
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- SATURATE SHADES -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Saturate Shades
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14"
              >
                Saturation is the strength of a surface colour, its degree of visual difference from neutral grey.
              </p>
              <!-- END -->
              <!-- DESATURATE COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in saturate"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- DESATURATE SHADES -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Desaturate Shades
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14"
              >
                Desaturation is the weakness of a surface colour, its degree of visual difference from neutral grey.
              </p>
              <!-- END -->
              <!-- DESATURATE COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in desaturate"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- ANALOGOUS -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Analogous
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14"
              >
                Groups of three colours that are next to each other on the colour wheel.
              </p>
              <!-- END -->
              <!-- ANALOGOUS COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in analogous"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- MONOCHROMATIC -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Monochromatic
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14"
              >
                Color schemes are derived from a single base hue and extended using its shades, tones and tints.
              </p>
              <!-- END -->
              <!-- MONOCHROMATIC COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in monochromatic"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- SPLIT COMPLEMENT -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Split Complement
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14"
              >
                Color scheme using one base color and two secondary colors.
              </p>
              <!-- END -->
              <!-- SPLIT COMPLEMENT COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in splitComplement"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- TRIADS -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Triads
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14"
              >
                All three colors are distributed evenly around the color wheel, causing no clear dominance of one color.
              </p>
              <!-- END -->
              <!-- TRIADS COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in triads"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- TETRAD -->
            <div
              class="mt-10"
            >
              <!-- HEADER SECTION -->
              <h1
                class="antialiased text-left leading-normal tracking-normal text-18 font-medium"
              >
                Tetrad
              </h1>
              <!-- END -->
              <!-- SUB HEADER SECTION -->
              <p
                class="antialiased font-normal leading-normal tracking-normal text-left text-14"
              >
                All four colors are distributed evenly around the color wheel, causing no clear dominance of one color.
              </p>
              <!-- END -->
              <!-- TRIADS COLOR SECTIONS -->
              <div
                class="mt-6 flex flex-wrap w-full"
              >
                <!-- COLOR SECTION -->
                <div
                  v-for="(color, i) in tetrads"
                  :key="i"
                >
                  <!-- COLOR -->
                  <div
                    class="w-16 h-16 shadow mb-2 ml-2 rounded"
                    :style="`background-color:${color.name}`"
                  />
                  <!-- END -->
                  <!-- COLOR CODE -->
                  <div>
                    <h3
                      class="mt-2 ml-2 font-medium text-14 text-center antialiased leading-normal tracking-normal text-center"
                    >
                      {{ color.name }}
                    </h3>
                  </div>
                  <!-- END -->
                </div>
              </div>
            </div>
            <!-- END -->
          </div>
          <!-- END -->
        </div>
        <!-- END -->
        <!-- PALETTE FAB -->
        <div
          v-show="!showMiniSwatch"
          class="xs:block md:hidden text-center rounded-full cursor-pointer"
        >
          <button
            class="btn-float rounded-full font-semibold shadow-xl text-26"
            :class="cardColor"
            @click="showMiniSwatch=!showMiniSwatch"
          >
            <h1
              class="text-12 font-medium leading-normal tracking-normal"
            >
              MS
            </h1>
          </button>
        </div>
        <div
          v-show="showMiniSwatch"
          class="xs:block lg:hidden text-center rounded-full cursor-pointer"
        >
          <div
            class="btn-float-palette rounded-lg"
            :class="cardColor"
          >
            <!-- HEADER SECTION -->
            <div
              class="flex items-center justify-between"
            >
              <h1
                class="pl-2 pt-2 text-left text-10 font-normal leading-normal tracking-normal"
              >
                Mini Swatch
              </h1>
              <div
                class="pr-2 pt-2 cursor-pointer"
                @click="showMiniSwatch=!showMiniSwatch"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 32 32"><path d="M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 Z"/></svg>
              </div>
            </div>
            <!-- END -->
            <div
              class="flex flex-wrap w-full items-center"
            >
              <!-- COLOR SECTION -->
              <div
                v-for="(item, i) in colorSwatch"
                :key="i"
              >
                <!-- COLOR -->
                <div
                  class="mt-2 w-12 h-12 rounded cursor-pointer"
                  :class="[i !== 0 ? 'ml-2' : 'ml-0']"
                  :style="`background-color:${item}`"
                  @mouseover="viewColorInfo(item)"
                  @click="viewColorInfo(item)"
                />
                <!-- END -->
              </div>
              <!-- END -->
            </div>
            <!-- END -->
          </div>
        </div>
        <!-- END -->
      </div>
    </center>
    <!-- END -->
  </div>
</template>

<script src="./index.js" />
