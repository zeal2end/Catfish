import React from "react";
import Grid from "./Grid";
import Buttons from "./Buttons";
import "./Convoy.css";

class Convoy extends React.Component {
    constructor() {
        super();
        this.speed = 100;
        this.rows = 20;
        this.cols = 50;
        this.state = {
            generations: 0,
            gridFull: Array(this.rows)
                .fill()
                .map(() => Array(this.cols).fill(false)),
        };
    }
    selectBox = (row, col) => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            gridFull: gridCopy,
        });
    };

    playButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.speed);
    };

    pauseButton = () => {
        clearInterval(this.intervalId);
    };

    play = () => {
        let curGen = this.state.gridFull;
        let newGen = arrayClone(this.state.gridFull);
        let dRow = [-1, 0, 1, 0, -1, 1, 1, -1];
        let dCol = [0, 1, 0, -1, -1, 1, -1, 1];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let count = 0;
                for (let k = 0; k < 8; k++) {
                    let nRow = i + dRow[k];
                    let nCol = j + dCol[k];
                    if (this.isValid(nRow, nCol) && curGen[nRow][nCol]) count++;
                }
                if (curGen[i][j] && (count < 2 || count > 3))
                    newGen[i][j] = false;
                if (!curGen[i][j] && count === 3) newGen[i][j] = true;
            }
        }
        this.setState({
            gridFull: newGen,
            generations: this.state.generations + 1,
        });
    };

    slow = () => {
        this.speed = 1000;
        this.playButton();
    };

    fast = () => {
        this.speed = 100;
        this.playButton();
    };

    clear = () => {
        let grid = Array(this.rows)
            .fill()
            .map(() => Array(this.cols).fill(false));
        this.setState({
            gridFull: grid,
            generations: 0,
        });
    };

    gridSize = (size) => {
        switch (size) {
            case "1":
                this.rows = 10;
                this.cols = 20;
                break;
            case "2":
                this.rows = 30;
                this.cols = 50;
                break;
            default:
                this.rows = 50;
                this.cols = 70;
        }
        this.clear();
    };

    isValid = (row, col) => {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    };

    seed = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({
            gridFull: gridCopy,
        });
    };

    componentDidMount() {
        this.seed();
        this.playButton();
    }

    render() {
        return (
            <div>
                <h1>Game Of Life</h1>
                <Buttons
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    slow={this.slow}
                    fast={this.fast}
                    clear={this.clear}
                    seed={this.seed}
                    gridSize={this.gridSize}
                />
                <Grid
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generations}</h2>
            </div>
        );
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}
export default Convoy;
