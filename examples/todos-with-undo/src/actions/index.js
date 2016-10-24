let nextTodoId = 0
//添加TODO
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

//设置过滤属性
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

//toggleTodo
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

//试试
