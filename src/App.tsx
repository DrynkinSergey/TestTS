import { Form } from './components/Form'
import { TodoList } from './components/TodoList'
import { useState } from 'react'

export interface ITodo {
	id: string
	title: string
	completed: boolean
}

export const App = () => {
	const [todos, setTodos] = useState<ITodo[]>([])
	const deleteTodo = (id: string) => {
		setTodos(prev => prev.filter(item => item.id !== id))
	}

	const addTodo = (todo: string) => {
		setTodos(prev => [
			...prev,
			{ title: todo, id: crypto.randomUUID(), completed: false },
		])
	}
	return (
		<div className='underline text-4xl'>
			<Form addTodo={addTodo} />
			<TodoList deleteTodo={deleteTodo} data={todos} />
			<TodoList data={todos} />
		</div>
	)
}
