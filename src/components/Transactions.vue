<template>
    <div>
        <div class = "logout" @click = "logout">Logout</div>
        <h1>Transactions table</h1>
        <div class = "wrapper">
            <table v-if = "chunkedArray">
                <tr>
                    <td>Amount (<span @click = "applySortFilter({type: 'amount', do: 'sort'})">Sort</span>/<span>Filter</span>)</td>
                    <td>Date (<span @click = "applySortFilter({type: 'date', do: 'sort'})">Sort</span>/<span>Filter</span>)</td>
                    <td>Description</td>
                    <td>Id (<span @click = "applySortFilter({type: 'id', do: 'sort'})">Sort</span>/<span>Filter</span>)</td>
                    <td>Status (<span @click = "applySortFilter({type: 'status', do: 'sort'})">Sort</span>/<span>Filter</span>)</td>
                </tr>
                <tr v-for = "rows in chunkedArray[activePage]">
                    <td>{{rows.amount}}</td>
                    <td>{{rows.date}}</td>
                    <td>{{rows.description}}</td>
                    <td>{{rows.id}}</td>
                    <td>{{rows.status}}</td>
                </tr>
            </table>
            <div class = "pagination">
                <div v-if = "chunkedArray && activePage !== 0" @click = "prevPage"><</div>
                <div
                        v-for = "(page, index) in chunkedArray"
                        @click = "setActivepage(index)"
                        :class = "{active: activePage === index}"
                >
                    {{index+1}}
                </div>
                <div v-if = "chunkedArray && chunkedArray.length !== activePage+1" @click = "nextPage">></div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "Transactions",
        data() {
            return {
                activePage: 0
            }
        },
        methods: {
            ...mapActions({
                fetchFile: 'fetchFile',
                sortData: 'sortData'
            }),
            logout() {
                localStorage.setItem('login', '')
                this.$router.push({ name: 'login' })
            },
            fetchData() {
                // this.axios.get('../transactions.json').then((response) => {
                //     console.log(response)
                // })
            },
            setActivepage(index) {
                this.activePage = +index

            },
            prevPage() {
                this.activePage -= 1;
            },
            nextPage() {
                this.activePage += 1;
            },
            applySortFilter(data) {
                this.sortData(data)
                // objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
            }
        },
        computed: {
            ...mapGetters({
                data: 'data',
            }),
            chunkedArray() {
                if(this.data) {
                    let newArray = [];
                    while (this.data.length > 0) {
                        newArray.push(this.data.splice(0, 4));
                    }
                    return newArray;
                }
            }
        },
        mounted() {
            this.fetchFile()
        }
    }
</script>

<style lang = "scss" scoped>
    h1 {
        text-align: center;
    }
    .logout {
        cursor: pointer;
        text-align: right;
        color: red;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .pagination {
            display: flex;
            align-items: center;
            div {
                padding: 10px;
                cursor: pointer;
            }
            .active {
                color: red;
            }
        }
        table {
            border-collapse: collapse;
            td {
                border: 1px solid black;
                padding: 5px;
                span {
                    cursor: pointer;
                }
            }
        }
    }

</style>
