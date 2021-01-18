<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Vuetify + Nuxt.js + Typescript template
        </v-card-title>
        <v-card-text>
          <p>Features:</p>
          <ul>
            <li>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >Typescript
              </a>
            </li>
            <li>
              <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >Nuxt
              </a>
            </li>
            <li>
              <a
                href="https://composition-api.nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              > Nuxt composition API
              </a>
            </li>
            <li>
              <a
                href="https://typescript.nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              > Nuxt Typescript
              </a>
            </li>
            <li>
              <a
                href="https://auth.nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              > Nuxt Auth module
              </a>
            </li>
            <li>
              <a
                href="https://axios.nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              > Nuxt Axios module
              </a>
            </li>
            <li>
              <a
                href="https://vuetifyjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vuetify
              </a>
            </li>
          </ul>
          <hr class="my-3">
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
