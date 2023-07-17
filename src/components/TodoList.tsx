import { ITodo } from '../App'

type Props = {
	data: ITodo[]
	deleteTodo?: (id: string) => void
}
export const TodoList = ({ data, deleteTodo }: Props) => {
	const handleDelete = (id: string) => {
		if (deleteTodo) {
			deleteTodo(id)
		}
	}
	return (
		<div>
			<h1>AWESOME TS GUIDE</h1>
			<ul>
				{data.map(todo => (
					<li className='flex gap-4 w-1/2 justify-between' key={todo.id}>
						<span>{todo.title}</span>
						<button onClick={() => handleDelete(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
