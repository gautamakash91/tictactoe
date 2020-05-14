import React from "react";
import "./App.css";
import myimage from "./bg.jpg";
import snowImage from "./snow.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btn1: null,
      btn1d: false,
      btn2: null,
      btn2d: false,
      btn3: null,
      btn3d: false,
      btn4: null,
      btn4d: false,
      btn5: null,
      btn5d: false,
      btn6: null,
      btn6d: false,
      btn7: null,
      btn7d: false,
      btn8: null,
      btn8d: false,
      btn9: null,
      btn9d: false,
      index: 0,
      message: "",
      bgImage: null,
      redScore: 0,
      greenScore: 0
    }
  }

  restart=()=>{
    this.setState({
      btn1: null,
      btn1d: false,
      btn2: null,
      btn2d: false,
      btn3: null,
      btn3d: false,
      btn4: null,
      btn4d: false,
      btn5: null,
      btn5d: false,
      btn6: null,
      btn6d: false,
      btn7: null,
      btn7d: false,
      btn8: null,
      btn8d: false,
      btn9: null,
      btn9d: false,
      index: 0,
      message: "",
      bgImage: null
    })
  }

  handleBtn1 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn1: "red",
        btn1d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn1: "green",
        btn1d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  handleBtn2 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn2: "red",
        btn2d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn2: "green",
        btn2d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  handleBtn3 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn3: "red",
        btn3d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn3: "green",
        btn3d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  handleBtn4 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn4: "red",
        btn4d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn4: "green",
        btn4d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  handleBtn5 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn5: "red",
        btn5d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn5: "green",
        btn5d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  handleBtn6 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn6: "red",
        btn6d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn6: "green",
        btn6d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  handleBtn7 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn7: "red",
        btn7d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn7: "green",
        btn7d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  handleBtn8 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn8: "red",
        btn8d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn8: "green",
        btn8d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }


  handleBtn9 = () => {
    if (this.state.index % 2 == 0) {
      this.setState({
        btn9: "red",
        btn9d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    } else {
      this.setState({
        btn9: "green",
        btn9d: true,
        index: this.state.index + 1
      }, function () {
        this.checkResult();
      })
    }
  }

  checkResult = () => {

    if (this.state.btn1 === this.state.btn2 &&
      this.state.btn2 === this.state.btn3 &&
      this.state.btn1 !== null) {
      if (this.state.btn1 === "red") {
        this.setState({
          message: "red team won",
          bgImage: myimage,
          redScore: this.state.redScore+1
        })
      } else {
        this.setState({
          message: "green team won",
          bgImage: snowImage,
          greenScore: this.state.greenScore+1
        })
      }
    }

    if (this.state.btn4 === this.state.btn5 &&
      this.state.btn5 === this.state.btn6 &&
      this.state.btn4 !== null) {
      if (this.state.btn4 === "red") {
        this.setState({
          message: "red team won",
          bgImage: myimage,
          redScore: this.state.redScore+1
        })
      } else {
        this.setState({
          message: "green team won",
          bgImage: snowImage,
          greenScore: this.state.greenScore+1
        })
      }
    }

    if (this.state.btn7 === this.state.btn8 &&
      this.state.btn8 === this.state.btn9 &&
      this.state.btn7 !== null) {
      if (this.state.btn7 === "red") {
        this.setState({
          message: "red team won",
          bgImage: myimage,
          redScore: this.state.redScore+1

        })
      } else {
        this.setState({
          message: "green team won",
          bgImage: snowImage,
          greenScore: this.state.greenScore+1
        })
      }
    }

    if (this.state.btn1 === this.state.btn4 &&
      this.state.btn4 === this.state.btn7 &&
      this.state.btn7 !== null) {
      if (this.state.btn7 === "red") {
        this.setState({
          message: "red team won",
          bgImage: myimage,
          redScore: this.state.redScore+1
        })
      } else {
        this.setState({
          message: "green team won",
          bgImage: snowImage,
          greenScore: this.state.greenScore+1
        })
      }
    }

    if (this.state.btn2 === this.state.btn5 &&
      this.state.btn5 === this.state.btn8 &&
      this.state.btn8 !== null) {
      if (this.state.btn8 === "red") {
        this.setState({
          message: "red team won",
          bgImage: myimage,
          redScore: this.state.redScore+1

        })
      } else {
        this.setState({
          message: "green team won",
          bgImage: snowImage,
          greenScore: this.state.greenScore+1
        })
      }
    }

    if (this.state.btn3 === this.state.btn6 &&
      this.state.btn6 === this.state.btn9 &&
      this.state.btn9 !== null) {
      if (this.state.btn9 === "red") {
        this.setState({
          message: "red team won",
          bgImage: myimage,
          redScore: this.state.redScore+1
        })
      } else {
        this.setState({
          message: "green team won",
          bgImage: snowImage,
          greenScore: this.state.greenScore+1
        })
      }
    }
  }

  render() {
    return (
      <div 
        className="mydiv"
        style={{
          backgroundImage: "url("+this.state.bgImage+")",
          backgroundSize: "cover",
          height: 700
        }}
      >
        <h1>TIC-TAC-TOE</h1>

        <button
          style={{ backgroundColor: this.state.btn1 }}
          className="mybutton"
          onClick={this.handleBtn1}
          disabled={this.state.btn1d}
        />

        <button
          style={{ backgroundColor: this.state.btn2 }}
          className="mybutton"
          onClick={this.handleBtn2}
          disabled={this.state.btn2d}
        />

        <button
          style={{ backgroundColor: this.state.btn3 }}
          className="mybutton"
          onClick={this.handleBtn3}
          disabled={this.state.btn3d}
        />
        <br />
        <button
          style={{ backgroundColor: this.state.btn4 }}
          className="mybutton"
          onClick={this.handleBtn4}
          disabled={this.state.btn4d}
        />

        <button
          style={{ backgroundColor: this.state.btn5 }}
          className="mybutton"
          onClick={this.handleBtn5}
          disabled={this.state.btn5d}
        />

        <button
          style={{ backgroundColor: this.state.btn6 }}
          className="mybutton"
          onClick={this.handleBtn6}
          disabled={this.state.btn6d}
        />
        <br />
        <button
          style={{ backgroundColor: this.state.btn7 }}
          className="mybutton"
          onClick={this.handleBtn7}
          disabled={this.state.btn7d}
        />

        <button
          style={{ backgroundColor: this.state.btn8 }}
          className="mybutton"
          onClick={this.handleBtn8}
          disabled={this.state.btn8d}
        />

        <button
          style={{ backgroundColor: this.state.btn9 }}
          className="mybutton"
          onClick={this.handleBtn9}
          disabled={this.state.btn9d}
        />
        <br />
        <h1>
        {this.state.message}
        </h1>

        red team score: {this.state.redScore}
        <br />
        green team score: {this.state.greenScore}
        <br />

        <button
          onClick={this.restart}
        >
          restart
        </button>
      </div>
    )
  }
}