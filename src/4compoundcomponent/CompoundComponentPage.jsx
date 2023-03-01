import { CompoundTodo, TodoForm, TodoList, TodoTitle } from './components/compound-todo';
import { Todo } from './components/normal-todo';

export const CompoundComponentPage = () => {
  return (
    <div>
      <h4>Ejemplo sin compound component pattern</h4>
      <hr />
      <Todo title='sin compound component pattern' />
      <hr />
      <h4>Ejemplo con compound component pattern</h4>
      <hr />
      <CompoundTodo>
        <TodoTitle>compound pattern</TodoTitle>
        <TodoForm />
        <TodoList />
      </CompoundTodo>
    </div>
  );
};
