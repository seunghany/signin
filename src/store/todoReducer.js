// JavaScript
// Action: An object that tells the reducer how to change the state. It must contain
// a type property. It can optionally contain a payload property
// 이것들이 액션 함수
export const addTodoAction = todo => ({
    type: "ADD_TODO",
    payload: todo
    // 페이로드(영어: payload)는 사용에 있어서 전송되는 데이터를 뜻한다.
    // 페이로드는 전송의 근본적인 목적이 되는 데이터의 일부분으로
    // 그 데이터와 함께 전송되는 헤더와 메타데이터와 같은 데이터는 제외한다.
})

//const toggleTodo = todoID => dispatch(toggleTodoAction(todoID))
// 이것들이 액션 함수
export const toggleTodoAction = todoID => ({
    type: "TOGGLE_TODO",
    payload: todoID
})
// const deleteTodo = todoID => dispatch(deleteTodoAction(todoID))
// 이것들이 액션 함수
export const deleteTodoAction = todoID => ({
    type: "DELETE_TODO",
    payload: todoID
})
// {} 이 ({}) 안에 있는 이유는 json 으로 return 하려구

const initialState = {todos: []}
// initialState 는 한번만 만듬! 


// 이건 reducer
const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO" : 
            return {...state, todos: [...state.todos, action.payload ]}

        case "TOGGLE_TODO" : 
            return {...state, todos: 
                        state.todos.map(todo => todo.todoId === action.payload ?
                            {...todo, complete: !todo.complete} : todo)
            }
        case "DELETE_TODO" : 
            return {...state, todos: state.todos.filter(todo => todo.todoId !== action.payload)}
        default:
            return state
    }
}

export default todoReducer
