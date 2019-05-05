const initState = {
    posts: [
        {id: '1', title: 'Team Rocket blasting off again!', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit in temporibus et magni? Pariatur ratione numquam nobis itaque hic reiciendis, velit eligendi rerum sapiente fuga adipisci veritatis quos reprehenderit!"},
        {id: '2', title: 'You have recieved a rare candy!', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit in temporibus et magni? Pariatur ratione numquam nobis itaque hic reiciendis, velit eligendi rerum sapiente fuga adipisci veritatis quos reprehenderit!"},
        {id: '3', title: 'Pikachu I choose you!', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit in temporibus et magni? Pariatur ratione numquam nobis itaque hic reiciendis, velit eligendi rerum sapiente fuga adipisci veritatis quos reprehenderit!"}
    ]
}


const rootReducer = (state = initState, action) => {
    return state
}


export default rootReducer;

