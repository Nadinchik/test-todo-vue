export default {
    setTask(state, title) {
        state.listOfCards = [...state.listOfCards, {
            id: Math.floor(Math.random() * 9999) + 10,
            title: title,
            sliderValue: 0,
            isEditable: false,
            status: 'red'
        }];
    },
    setSliderValue(state, {id, value}) {
        let cardIndex = state.listOfCards.findIndex(card => card.id === id);
        state.listOfCards[cardIndex].sliderValue = value;
        if(value <= 30) {
            state.listOfCards[cardIndex].status = 'red'
        }
        else if(value > 30 && value <= 70) {
            state.listOfCards[cardIndex].status = 'orange'
        }
        else if(value > 70) {
            state.listOfCards[cardIndex].status = 'green'
        }
    },
    removeTask(state, cardId) {
        state.listOfCards = state.listOfCards.filter(el => el.id !== cardId);
    },
    editTask(state, {id, isEdit}) {
        let cardIndex = state.listOfCards.findIndex(card => card.id === id);
        state.listOfCards[cardIndex].isEditable = isEdit;
    },
    updateTitle(state, {id, title}) {
        let cardIndex = state.listOfCards.findIndex(card => card.id === id);
        !title ? state.listOfCards = state.listOfCards.filter(el => el.id !== id) : state.listOfCards[cardIndex].title = title;
    }
}