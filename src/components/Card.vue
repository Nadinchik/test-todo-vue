<template>
    <div class="card__item flex-center">
        <div class="card__item-container">
            <div class="card__buttons">
                <button
                    class="card__buttons-edit"
                    :class="{'active': item.isEditable}"
                    @click="editTask({id: item.id, isEdit: !item.isEditable})"
                >
                    <img src="../assets/edit.png" width="10" height="10">
                </button>
                <button
                    class="card__buttons-delete"
                    @click="deleteTask(item.id)"
                >X</button>
            </div>
            <div class="card__item-body flex-center">
                <div v-if="!item.isEditable" style="display: flex; word-break: break-word">{{item.title}}</div>
                <div v-else class="card__input-edit">
                    <input type="text" name="title" id="title" v-model="item.title">
                    <button
                        class="card__buttons-set"
                        @click="acceptChanges"
                    >
                        <img src="../assets/success.png" width="12" height="12">
                    </button>
                </div>
                <slider :card="item" />
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "./RangeSlider";
import { mapActions } from "vuex";

export default {
    name: "card",
    components: { Slider },
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        ...mapActions(["deleteTask", "updateTask", "updateTitle"]),
        editTask({id, isEdit}) {
            this.updateTask({id, isEdit});
        },
        acceptChanges() {
            this.updateTitle({id: this.item.id, title: this.item.title.trim()});
            this.updateTask({id: this.item.id, isEdit: false});
        }
    }
}
</script>