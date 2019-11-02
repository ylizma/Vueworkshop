<template>
  <div id="app">
    <Navbar />
      <FormApi />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import FormApi from './components/FormApi'
export default {
  name: 'app',
  components: {
    Navbar,
    FormApi
  }
}
</script>

<style>
</style>
