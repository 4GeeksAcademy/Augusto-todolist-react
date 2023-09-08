import React from "react";

const Home = () => {
	
	const [todoList, setTodoList] = React.useState([{ label: "Hacer la cama", done: false }, { label: "Pasear al perro", done: false }, { label: "Preparar la comida", done: false }, { label: "Limpiar la casa", done: false }, { label: "Hacer la compra", done: false }])
	const [inputValue, setInputValue] = React.useState("")
	
	const handleAddNewTodo = () => {
		setTodoList(prev => [...prev, { label: inputValue, done: false }])
	}
	
	const handleDeleteTodo = (indexToRemove) => {
		setTodoList(prev => prev.filter((element, index) => index !== indexToRemove))
	}
	
	const handleOnKeyDown = (e) => {
		const keyPressed = e.key
		if (inputValue && keyPressed === "Enter") {
			handleAddNewTodo()
			setInputValue("")
		}
	}
	
	return (
		<div className="text-center">
			<h1>Todo list</h1>
			<hr />
			<input onKeyDown={handleOnKeyDown} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			{
				todoList.map((singleTodo, index) => {
					return <ul style={{ margin: "3rem" }}>
						<section style={{ display: "flex", justifyContent: "space-between" }}>
							<li key={index}>{singleTodo.label}</li>
							<button onClick={() => handleDeleteTodo(index)}>{`Eliminar ${singleTodo.label}`}</button>
						</section>
					</ul>
				})
				//
			}
		</div>
	);
};
export default Home;