<template>
  <main>
    <no-ssr>
      <notifications group="alerts"
                    position="bottom right">
        <template slot="body" slot-scope="props">
          <b-alert :show="props.item.duration || 3000"
                  dismissible
                  :variant="props.item.type || 'info'"
                  @dismissed="props.item.timer=0">
            <p>{{props.item.text}}</p>
            <b-progress :variant="props.item.type"
                        striped
                        :animated="true"
                        :max="props.item.duration"
                        :value="props.item.timer"
                        height="4px">
            </b-progress>
          </b-alert>
        </template>
      </notifications>
    </no-ssr>
    <b-container class="container">
      <div class="header-wrapper">
          <h1><img class="main-logo" src="~/assets/images/teamcmp-logo.png" /></h1>
          <p>Using (nuxtjs & scss) to build a SPA TODO list</p>
      </div>
      <b-card>
        <Nuxt />
      </b-card>
    </b-container>
  </main>
</template>

<style lang="scss" scoped>
  .header-wrapper {
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    .main-logo {
      width: 200px;
    }
  }
</style>