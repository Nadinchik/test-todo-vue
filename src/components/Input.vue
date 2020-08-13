<template>
    <div class="card__form">
        <form class="card__form-container" v-on:submit.prevent="addItem">
            <input type="text" name="newitem" id="newitem" v-model="newCard">
            <button type="submit" class="card__buttons-add">+</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "newItem",
    data() {
        return {
            newCard: ''
        }
    },
    methods: {
        ...mapActions(["addNewTask"]),
        addItem() {
            this.addNewTask(this.newCard.trim());
            this.newCard = '';
        }
    }
}
</script>
