<template>
  <v-app>
    <img
      data-aos="fade-down-right"
      class="fixed-top-left"
      src="/images/top-left.png"
    />
    <img
      data-aos="fade-up-left"
      class="fixed-bottom-right"
      src="/images/bottom-right.png"
    />
    <div class="root">
      <v-row style="height: 100%" align="center" justify="center">
        <div>
          <v-col
            class="center-on-phone"
            style="z-index: 10; position: relative "
          >
            <div data-aos="flip-up">
              <h1>hello.</h1>
            </div>
            <div>
              <p data-aos="zoom-in" class="description">
                my name is dhevan <br />
                and i am a
                <b data-aos="fade-down" style="color: #1c4587">
                  software
                </b>
                <b data-aos="fade-left" style="color: #393939">
                  developer
                </b>
              </p>
            </div>
            <v-row class="d-none d-sm-block">
              <button
                data-aos="fade-right"
                class="rounded-button bg-primary mr-5"
              >
                see my portfolio
              </button>
              <form action="/resume_dhevan.pdf">
                <button
                  type="submit"
                  data-aos="fade-left"
                  class="bordered-button"
                >
                  download my resume
                </button>
              </form>
            </v-row>
            <v-col class="d-sm-none">
              <button class="rounded-button bg-primary mr-5 mb-3">
                see my portfolio
              </button>
              <button class="bordered-button">
                download my resume
              </button>
            </v-col>
            <v-row class="mt-5" justify="center" justify-sm="start">
              <div
                data-aos="zoom-in"
                v-for="social in socials"
                :key="social.link"
              >
                <a :href="social.link" target="_blank">
                  <i
                    :class="`${social.icon} social-icon mr-4`"
                    :style="`color: ${social.color}`"
                  />
                </a>
              </div>
            </v-row>
          </v-col>
        </div>
        <img
          data-aos="zoom-in-up"
          class="side-image"
          src="/images/programer.png"
        />
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    align: ['start', 'end', 'center', 'baseline', 'stretch'],
    socials: [
      {
        icon: 'fab fa-github',
        link: 'https://github.com/dhevanthareza',
        color: '#1c4587',
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/dhevanthareza',
        color: '#202020',
      },
      {
        icon: 'fas fa-envelope',
        link:
          'mailto:dhevanmuhamad@gmail.com?Subject=Hello, can you working in my project!',
        color: '#1c4587',
      },
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/dhevanthareza',
        color: '#202020',
      },
      {
        icon: 'fab fa-whatsapp',
        link:
          'https://wa.me/6281226292132?text=Hello, i need programmer',
        color: '#1c4587',
      },
    ],
  }),
}
</script>

<style>
.root {
  height: 100vh;
  background-color: #f8f8f8;
  padding: 10px 15px;
}
* {
  font-family: 'Montserrat', sans-serif;
}
h1 {
  font-size: 5em;
  color: #1c4587;
}
p.description {
  color: #202020;
  font-size: 2.5em;
}
.rounded-button {
  border-radius: 32px;
  padding: 12px 24px;
}
.bordered-button {
  border-color: #202020;
  border-style: solid;
  border-width: 2px;
  padding: 12px 24px;
}
.bg-primary {
  background-color: #1c4587;
  color: white;
}
.side-image {
  z-index: 1;
  margin-left: -100px;
  width: 40%;
}
.fixed-top-left {
  height: 35%;
  position: fixed;
  top: 0;
  left: 0;
}
.fixed-bottom-right {
  height: 35%;
  position: fixed;
  bottom: 0;
  right: 0;
}
.bg-yellow {
  background-color: #e6ea2b;
}
.social-icon {
  font-size: 2.5em;
}
@media only screen and (max-width: 768px) {
  .fixed-top-left {
    height: 25%;
  }
  .fixed-bottom-right {
    height: 25%;
  }
  .side-image {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 5em;
  }
  p.description {
    font-size: 1.5em;
  }
  .center-on-phone {
    text-align: center;
  }
}
@media only screen and (max-width: 450px) {
  p.description {
    font-size: 1.3em;
  }
}
@media only screen and (max-height: 568px) {
  p.description {
    font-size: 1.3em;
  }
  .fixed-top-left {
    height: 20%;
  }
  .fixed-bottom-right {
    height: 20%;
  }
}
</style>
