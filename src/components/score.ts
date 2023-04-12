/*

TODO:
1. implement logic
2. handle score persistance between levels
3. decide points logic

*/





class Score {
    currentScore: number

    constructor(score: number) {
        this.currentScore = score
    }

    increaseScore(pointsToAdd: number) {
        console.log("current score: ", this.currentScore)
        this.currentScore += pointsToAdd

        console.log("new score: ", this.currentScore)
    }
}

export default Score