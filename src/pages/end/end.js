import React from "react";

export default function End({match, history}){
	const number = match.params.number;

	function reset(){
		history.push("/");
	}

	return (
		<main>
			<h1>Consegui!</h1>
			<p>Seu número era {number}!</p>
			<button onClick={reset}>Jogar de novo</button>
		</main>
	);
}