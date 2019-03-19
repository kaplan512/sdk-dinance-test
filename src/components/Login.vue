<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="onSubmit">
            <el-input type="password" placeholder="Password" v-model="form.password"></el-input>
            <el-input type="text" placeholder="Email" v-model="form.email"></el-input>
            <el-button type="primary">Login</el-button>
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
                    let form = Object.assign(this.form, {})
                    this.loginAction(form)
                    localStorage.setItem('login', JSON.stringify(this.form))
                    this.$router.push({ name: 'transactions' })
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
    form {
        max-width: 500px;
        margin: 15px auto 0;
    }
    form div {
        margin-bottom: 10px;
    }
</style>
