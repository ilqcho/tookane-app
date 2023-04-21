
<template>
    <div class="layoutDefault">
        <NavBar :greetings="greetings" />
        <main class="layoutDefault__main">
            <slot/>
        </main>
        <Footer :brand-name="brandName" />
    </div>
</template>

<script>
export default{ 
    name: 'LayoutDefault',
    data(){
        return{
          greetings: null,
          brandName: 'JSWorks Company',
        }
    },
    mounted(){
        if (localStorage.email) {
            this.email = localStorage.email;
            this.greetings = 'Hello ' + this.email;
        }
    },
}
</script>

<style scoped>
.layoutDefault {
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
}
.layoutDefault__main {
  padding-top: 1.5em;
  padding-bottom: 2em;
}
</style>