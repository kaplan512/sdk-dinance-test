<template>
    <div>
        <router-link :to="{ name: 'transactions' }">Transactions</router-link>
        Login
        <form @submit.prevent="onSubmit">
            <input type="password" placeholder="Password" v-model="form.password">
            <input type="text" placeholder="Email" v-model="form.email">
            <input type="submit">
        </form>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    password: '',
                    email: ''
                }
            }
        },
        methods: {
            ...mapActions({loginAction: 'loginAction'}),
            onSubmit() {
                if(this.form.password && this.form.email) {
                    this.loginAction(this.form)
                    this.form.email = ''
                    this.form.password = ''
                }
            }
        },
        computed: {
            ...mapGetters({
                login: 'login',
            }),
        },
    }
</script>

<style scoped>

</style>