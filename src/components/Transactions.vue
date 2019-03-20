<template>
    <div>
        <div class = "logout" @click = "logout">Logout</div>
        <h1>Transactions table</h1>
        <div class = "wrapper">
            <h2>Filters</h2>
            <div class = "filters">
                <div>
                    <el-input @input = "filterByProperty({type: 'id', value: id})" class = "input" type="text" placeholder="Id" v-model="id"></el-input>
                </div>
                <div>
                    <el-input @input = "filterByProperty({type: 'amount', value: amount})" class = "input" type="text" placeholder="Amount" v-model="amount"></el-input>
                </div>
                <div>
                    <el-date-picker
                            v-model="date"
                            type="datetime"
                            placeholder="Select date and time"
                            @change = "filterByProperty({type: 'date', value: date})"
                    >
                    </el-date-picker>
                </div>
                <div>
                    <el-select @change = "filterByProperty({type: 'status', value: status})" v-model="status" placeholder="Status">
                        <el-option
                                v-for="item in optionsStatus"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-button @click = "clearFields">Clear</el-button>
                </div>
            </div>
            <h2>Sort</h2>
            <div class = "filters">
                <el-button @click = "sortData('amount')">Amount</el-button>
                <el-button @click = "sortData('date')">Date</el-button>
                <el-button @click = "sortData('id')">Id</el-button>
            </div>

            <el-table
                    v-if = "chunkedArray"
                    :data="chunkedArray[activePage]"
                    style="width: 100%">
                <el-table-column
                        prop="amount"
                        label="Amount">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="Date">
                </el-table-column>
                <el-table-column
                        prop="description"
                        label="Description">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="Id">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="Status">
                </el-table-column>
            </el-table>

            <div v-if = "chunkedArray.length" class = "pagination">
                <div v-if = "activePage !== 0" @click = "setActivePage(activePage-1)"><</div>
                <div
                        v-for = "(page, index) in chunkedArray"
                        @click = "setActivePage(index)"
                        :class = "{active: activePage === index}"
                >
                    {{index+1}}
                </div>
                <div v-if = "chunkedArray.length !== activePage+1" @click = "setActivePage(activePage+1)">></div>
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
                id: null,
                amount: null,
                date: null,
                status: null,
                optionsStatus: [{
                    value: 'paid',
                    label: 'Paid'
                }, {
                    value: 'pending',
                    label: 'Pending'
                }, {
                    value: 'error',
                    label: 'Error'
                },],
            }
        },
        methods: {
            ...mapActions({
                fetchFile: 'fetchFile',
                sortData: 'sortData',
                filterByProperty: 'filterByProperty',
                setActivePage: 'setActivePage',
                clearFilter: 'clearFilter'
            }),
            logout() {
                localStorage.setItem('login', '')
                this.$router.push({ name: 'login' })
            },
            clearFields() {
                this.id = null
                this.amount = null
                this.date = null
                this.status = null
                this.clearFilter()
            }

        },
        computed: {
            ...mapGetters({
                data: 'data',
                dataCopy: 'dataCopy',
                activePage: 'activePage'
            }),

            chunkedArray() {
                if(this.data) {
                    let newData = this.data.slice();
                    let newArray = [];
                    while (newData.length > 0) {
                        newArray.push(newData.splice(0, 4));
                    }
                    return newArray;
                }
            }
        },
        mounted() {
            if(!this.data.length) {
                this.fetchFile()
            }
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
        width: 90%;
        margin: 0 auto;
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
        .filters {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 15px;
            div {
                margin: 0 5px;
            }
        }
    }

</style>
