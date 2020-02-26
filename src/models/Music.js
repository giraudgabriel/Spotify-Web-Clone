export default class Music {
    constructor(time = String, autor = String, name = String, timeLeft = String) {
        this.time = time
        this.autor = autor
        this.name = name
        this.timeLeft = timeLeft
    }
    setTime(time = String) {
        this.time = time
    }
    setTimeLeft(timeSpent) {
        this.timeLeft = timeSpent - Number(this.time)
    }
}