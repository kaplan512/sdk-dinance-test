<template>
    <div>
        <h1>Login</h1>
        <form>
            <el-input class = "input" type="password" placeholder="Password" v-model="form.password"></el-input>
            <el-input class = "input" type="text" placeholder="Email" v-model="form.email"></el-input>
            <el-button @click = "onSubmit" type="primary">Login</el-button>
        </form>
    </div>
</template>

<script>
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
            onSubmit() {
                if(this.form.password && this.form.email) {
                    let form = Object.assign(this.form, {})
                    this.loginAction(form)
                    localStorage.setItem('login', JSON.stringify(this.form))
                    this.form.password = ''
                    this.form.email = ''
                    this.$router.push({ name: 'transactions' })
                }
            }
        },
    }
</script>

<style lang = "scss" scoped>
    form {
        max-width: 500px;
        margin: 15px auto 0;
        text-align: center;
        .input {
            margin-bottom: 10px;
        }
    }
    h1 {
        text-align: center;
    }

</style>
