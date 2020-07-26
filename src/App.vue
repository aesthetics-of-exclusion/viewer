<template>
  <div id="app">
    <h1>StreetSwipe Facade Viewer</h1>
    <template v-if="pois.length === 0">
      <h3>Loading…</h3>
    </template>
    <template v-else>
      <h3>{{ pois.length }} POIs loaded, showing {{ firstIndex + 1 }} – {{ lastIndex }} </h3>
      <paginate v-model="page" :page-count="Math.ceil(pois.length / pageSize)"
        :page-range="3" :margin-pages="2"
        :prev-text="'Prev'" :next-text="'Next'"
        :container-class="'pagination'" :page-class="'page-item'">
      </paginate>
      <ol class="pois">
        <li v-for="poi in pois.slice(firstIndex, lastIndex)" :key="poi.id">
          <POI :poi="poi" />
        </li>
      </ol>
      <paginate v-model="page" :page-count="Math.ceil(pois.length / pageSize)"
        :page-range="3" :margin-pages="2"
        :prev-text="'Prev'" :next-text="'Next'"
        :container-class="'pagination'" :page-class="'page-item'">
      </paginate>
    </template>
  </div>
</template>

<script>
import ndjsonStream from 'can-ndjson-stream'

import POI from './components/POI.vue'

export default {
  name: 'App',
  components: {
    POI
  },
  data: function () {
    return {
      pageSize: 5 * 20,
      page: 1,
      pois: []
    }
  },
  computed: {
    firstIndex: function () {
      return (this.page - 1) * this.pageSize
    },
    lastIndex: function () {
      return Math.min(this.page * this.pageSize, this.pois.length)
    }
  },
  mounted: function () {
    const url = 'https://us-central1-streetswipe-aoe.cloudfunctions.net/annotations/all.ndjson'
    // const url = 'all.ndjson'
    // const url = 'some.ndjson'

    fetch(url)
      .then((response) => ndjsonStream(response.body))
      .then((stream) => {
        const reader = stream.getReader()
        let read
        reader.read().then(read = (result) => {
          if (result.done) {
            return
          }

          const poi = result.value

          if (poi.annotations.filter((annotation) => annotation.type === 'mask').length > 0) {
            this.pois.push(result.value)
          }

          reader.read().then(read)
        })
      })
  }
}
</script>

<style>
body {
  margin: 0 auto;
  width: 800px;
  font-family: monospace;
  font-size: 16px;
}

h1, h2, h3 {
  text-align: center;
}

.pois {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, 160px);
  grid-row-gap: .5em;
  grid-column-gap: 1em;
}

.pois li {
  margin: 0;
  padding: 0;
}

.pagination {
  margin: 1em 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  /* width: 100%; */
  align-items: center;
  justify-content: center;
}

.pagination li {
  padding: .5em;
  width: 4em;
  text-align: center;
}
</style>
