import React, { useState } from 'react'
import './App.css'

const App = () => {
	const [team, setTeam] = useState([])
	const [money, setMoney] = useState(120)
	const [zombieFighters, setZombieFighters] = useState([
		{
			name: 'Survivor',
			price: 12,
			strength: 6,
			agility: 4,
			img: 'https://via.placeholder.com/150/92c952',
		},
		{
			name: 'Scavenger',
			price: 10,
			strength: 5,
			agility: 5,
			img: 'https://via.placeholder.com/150/771796',
		},
		{
			name: 'Shadow',
			price: 18,
			strength: 7,
			agility: 8,
			img: 'https://via.placeholder.com/150/24f355',
		},
		{
			name: 'Tracker',
			price: 14,
			strength: 7,
			agility: 6,
			img: 'https://via.placeholder.com/150/d32776',
		},
		{
			name: 'Sharpshooter',
			price: 20,
			strength: 6,
			agility: 8,
			img: 'https://via.placeholder.com/150/1ee8a4',
		},
		{
			name: 'Medic',
			price: 15,
			strength: 5,
			agility: 7,
			img: 'https://via.placeholder.com/150/66b7d2',
		},
		{
			name: 'Engineer',
			price: 16,
			strength: 6,
			agility: 5,
			img: 'https://via.placeholder.com/150/56acb2',
		},
		{
			name: 'Brawler',
			price: 11,
			strength: 8,
			agility: 3,
			img: 'https://via.placeholder.com/150/8985dc',
		},
		{
			name: 'Infiltrator',
			price: 17,
			strength: 5,
			agility: 9,
			img: 'https://via.placeholder.com/150/392537',
		},
		{
			name: 'Leader',
			price: 22,
			strength: 7,
			agility: 6,
			img: 'https://via.placeholder.com/150/602b9e',
		},
	])

	const [strength, setStrength] = useState(0)
	const [agility, setAgility] = useState(0)

	const handleAddFighter = (e) => {
		const index = parseInt(e.target.id)
		const selectedFighter = zombieFighters[index]

		if (money >= selectedFighter.price) {
			setTeam([...team, selectedFighter])
			setMoney(money - selectedFighter.price)
			setStrength(strength + selectedFighter.strength)
			setAgility(agility + selectedFighter.agility)
			setZombieFighters(zombieFighters.filter((_, i) => i !== index))
		} else {
			alert('Not enough money to add this fighter!')
		}
	}

	const handleRemoveFighter = (e) => {
		const index = parseInt(e.target.id)
		const removedFighter = team[index]
		setTeam(team.filter((_, i) => i !== index))
		setMoney(money + removedFighter.price)
		setStrength(strength - removedFighter.strength)
		setAgility(agility - removedFighter.agility)
		setZombieFighters([...zombieFighters, removedFighter])
	}

	return (
		<div className="container mx-auto my-10 text-white">
			<h1 className="text-4xl font-extrabold">Zombie Fighters</h1>
			<div className="grid grid-cols-3 gap-5 my-10">
				<div
					className="flex flex-col items-center gap-2 bg-slate-800 rounded-2xl p-6 w-full 
                      bg-clip-padding bg-opacity-60 border border-gray-100 border-opacity-15"
				>
					<h2 className="text-lg font-semibold text-center">Money</h2>
					<p>${money}</p>
				</div>
				<div
					className="flex flex-col items-center gap-2 bg-slate-800 rounded-2xl p-6 w-full 
                      bg-clip-padding bg-opacity-60 border border-gray-100 border-opacity-15"
				>
					<h2 className="text-lg font-semibold text-center">Team Strength</h2>
					<p>{strength}</p>
				</div>
				<div
					className="flex flex-col items-center gap-2 bg-slate-800 rounded-2xl p-6 w-full 
                      bg-clip-padding bg-opacity-60 border border-gray-100 border-opacity-15"
				>
					<h2 className="text-lg font-semibold text-center">Team Agility</h2>
					<p>{agility}</p>
				</div>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-5">
					<h1 className="text-2xl font-extrabold">Teams</h1>
					<div className="grid grid-cols-5 gap-6">
						{team.map((zombie, index) => (
							<div
								key={index}
								id={index}
								className="flex flex-col gap-1 bg-slate-900 p-3 rounded-2xl bg-clip-padding bg-opacity-60 border border-gray-100 
													border-opacity-15 transition ease-in-out delay-[50ms] hover:-translate-y-1 hover:scale-[102%] hover:shadow-lg"
							>
								<img
									src={zombie.img}
									alt="image"
									className="rounded-xl w-full"
								/>

								{/* Name */}
								<h3 className="text-lg font-semibold text-center mt-2">
									{zombie.name}
								</h3>

								{/* Price */}
								<p className="text-center">${zombie.price}</p>

								{/* Strength */}
								<div className="flex flex-col gap-1 mt-3">
									<p>Strength</p>
									<div className="flex gap-3 items-center justify-center">
										<div className="w-full bg-gray-700 rounded-full h-2">
											<div
												className="bg-red-600 h-2 rounded-full"
												style={{ width: `${zombie.strength * 10}%` }}
											></div>
										</div>
										<p>{zombie.strength}</p>
									</div>
								</div>

								{/* Agility */}
								<div className="flex flex-col gap-1">
									<p>Agility</p>
									<div className="flex gap-3 items-center justify-center">
										<div className="w-full bg-gray-700 rounded-full h-2">
											<div
												className="bg-blue-600 h-2 rounded-full"
												style={{ width: `${zombie.agility * 10}%` }}
											></div>
										</div>
										<p>{zombie.agility}</p>
									</div>
								</div>

								<button
									id={index}
									onClick={handleRemoveFighter}
									className="mt-4 w-full text-base font-medium bg-red-600 px-3 py-1 rounded-lg hover:bg-red-900 transition ease-in-out"
								>
									Remove
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h1 className="text-2xl font-extrabold">Fighters</h1>
					<div className="grid grid-cols-5 gap-6">
						{zombieFighters.map((zombie, index) => (
							<div
								key={index}
								id={index}
								className="flex flex-col gap-1 bg-slate-900 p-3 rounded-2xl bg-clip-padding bg-opacity-60 border border-gray-100 
													border-opacity-15 transition ease-in-out delay-[50ms] hover:-translate-y-1 hover:scale-[102%] hover:shadow-lg"
							>
								<img
									src={zombie.img}
									alt="image"
									className="rounded-xl w-full"
								/>

								{/* Name */}
								<h3 className="text-lg font-semibold text-center mt-2">
									{zombie.name}
								</h3>

								{/* Price */}
								<p className="text-center">${zombie.price}</p>

								{/* Strength */}
								<div className="flex flex-col gap-1">
									<p>Strength</p>
									<div className="flex gap-3 items-center justify-center">
										<div className="w-full bg-gray-700 rounded-full h-2">
											<div
												className="bg-red-600 h-2 rounded-full"
												style={{ width: `${zombie.strength * 10}%` }}
											></div>
										</div>
										<p>{zombie.strength}</p>
									</div>
								</div>

								{/* Agility */}
								<div className="flex flex-col gap-1">
									<p>Agility</p>
									<div className="flex gap-3 items-center justify-center">
										<div className="w-full bg-gray-700 rounded-full h-2">
											<div
												className="bg-blue-600 h-2 rounded-full"
												style={{ width: `${zombie.agility * 10}%` }}
											></div>
										</div>
										<p>{zombie.agility}</p>
									</div>
								</div>

								<button
									id={index}
									onClick={handleAddFighter}
									className="mt-4 w-full text-base font-medium bg-green-600 px-3 py-1 rounded-lg hover:bg-green-900 transition ease-in-out"
								>
									Add
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
