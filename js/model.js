let data = {
	selectedProgram: 0.1,
	cost: 12_000_000,
	minPrice: 375000,
	maxPrice: 100_000_000,
	programs: {
		base: 0.1,
		it: 0.047,
		gov: 0.067,
		zero: 0.12,
	},
}

let results = {
	rate: data.selectedProgram,
}

function getData() {
	return { ...data }
}

function getResults() {
	return { ...results }
}

function setData(newData) {
	data = {
		...data,
		...newData,
	}

	results = {
		rate: data.selectedProgram,
	}
}

export { getData, setData, getResults }
