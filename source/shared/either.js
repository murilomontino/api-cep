class Left {
	constructor(value) {
		this.value = value
	}
	isLeft() {
		return true
	}

	isRight() {
		return false
	}
}

class Right {
	constructor(value) {
		this.value = value
	}
	isLeft() {
		return false
	}

	isRight() {
		return true
	}
}

class Either {
	static typeLeft = new Left()
	static typeRight = new Right()

	static Left(value) {
		return new Left(value)
	}

	static Right(value) {
		return new Right(value)
	}
}

module.exports = Either
