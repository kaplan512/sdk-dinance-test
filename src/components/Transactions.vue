<template>
    <div>
        <div @click = "logout">Logout</div>
        Transactions
    </div>
</template>

<script>
    export default {
        name: "Transactions",
        methods: {
            logout() {
                localStorage.setItem('login', '')
                this.$router.push({ name: 'login' })
            }
        }
    }
</script>

<style scoped>

</style>
