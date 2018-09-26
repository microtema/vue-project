<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="increment">+</button>
        <button @click="incrementAsync">+ @Async</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            ...mapActions('counter', [
                'increment', // map `this.increment()` to `this.$store.dispatch('increment')`
                'incrementAsync', // map `this.incrementAsync()` to `this.$store.dispatch('incrementAsync')`
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
