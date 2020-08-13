export default {
    addNewTask({ commit }, data) {
        if(data) {
            commit("setTask", data)
        }
    },
    updateSlider({ commit }, {id, value}) {
        commit("setSliderValue", {id, value})
    },
    deleteTask({ commit }, itemId) {
        commit("removeTask", itemId)
    },
    updateTask({ commit }, {id, isEdit}) {
        commit("editTask", {id, isEdit})
    },
    updateTitle({ commit }, {id, title}) {
        commit("updateTitle", {id, title})
    }
}