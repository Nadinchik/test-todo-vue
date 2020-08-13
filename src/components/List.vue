<template>
    <div class="card__list">
        <div class="card__list-item"
          v-for="item in list"
          :key="item.id"
        >
            <card :item="item"/>
         </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/Card";

export default {
    name: "list",
    components: { Card },
    computed: {
    ...mapState({list: state => state.listOfCards})
    }
}
</script> 
