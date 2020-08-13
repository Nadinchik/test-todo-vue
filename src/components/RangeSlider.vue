<template>
    <div class="slidecontainer">
        <input
            id="myRange"
            type="range"
            min="1"
            max="100"
            :value="card.sliderValue"
            class="slider"
            @change="updateValue"
        >
        <div class="card__score">
            <div :class="`card__score-${card.status}`"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: "slider",
    props: {
        card: {
            type: Object
        }
    },
    computed: {
          ...mapState({
            list: state => state.listOfCards
        })
    },
    methods: {
        ...mapActions(["updateSlider"]),
        updateValue(e) {
            this.updateSlider({id: this.card.id, value: e.target.value});
        }
    }
    
}
</script>