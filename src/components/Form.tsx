import { useState, FC } from 'react'

interface Props {
	addTodo: (text: string) => void
}
export const Form: FC<Props> = ({ addTodo }) => {
	const [value, setValue] = useState('')
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(234)
		addTodo(value)
	}
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={value}
				onChange={handleChangeInput}
				placeholder='Enter your todo....'
			/>
			<button>Ok</button>
		</form>
	)
}
