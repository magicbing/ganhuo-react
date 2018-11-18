const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter) // 以前是 getVisibleTodos(state.todos, state.visibilityFilter)
  }
}