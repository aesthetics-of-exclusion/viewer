<template>
  <div class="poi" :data-id="poi.id">
    <a :href="poiHref(poi)">
      <template v-if="maskImageUrl">
        <img class="mask" :src="maskImageUrl" />
      </template>
      <template v-else>
        <img class="screenshot" :src="screenshotImageUrl">
      </template>
    </a>
  </div>
</template>

<script>
export default {
  name: 'POI',
  props: {
    poi: Object
  },
  computed: {
    maskImageUrl: function () {
      if  (this.maskAnnotation) {
        return this.maskAnnotation.data.urls['square.jpg']
      }

      return undefined
    },
    maskAnnotation: function () {
      return this.annotationOfType(this.poi.annotations, 'mask')
    },
    screenshotImageUrl: function () {
      if  (this.screenshotAnnotation) {
        return this.screenshotAnnotation.data.screenshotUrl
      }

      return undefined
    },
    screenshotAnnotation: function () {
      return this.annotationOfType(this.poi.annotations, 'screenshot')
    }
  },
  methods: {
    poiHref: function (poi) {
      return `https://console.firebase.google.com/project/streetswipe-aoe/database/firestore/data~2Fpois~2F${poi.id}?hl=nl`
    },
    annotationOfType: function (annotations, type) {
      return annotations
        .filter((annotation) => annotation.type === type)[0]
    }
  }
}
</script>

<style scoped>
.poi, img {
  width: 160px;
  height: 160px;
}

img {
  object-fit: cover;
}

img.screenshot {
  opacity: .3;
}
</style>
