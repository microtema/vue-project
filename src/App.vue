<template lang="html">
    <div id="app">
        <Counter :msg="message"/>
    </div>
</template>

<script type="javascript">
    import {mapState} from 'vuex';
    import {Counter} from './components/counter';

    export default {
        name: 'app',
        computed: {
            ...mapState('counter', {
                message: state => state.count + ''
            })
        },
        components: {
            Counter
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
