import React from "react";
import './Button.css'

const questions = [
    "Hello!!",
    "You'll be wondering kya hai yehh!! right?",
    "maybe just a silly thing to make you happy!! So are you happy?",
    "pakka na",
    "majak toh nhi kr rhe",
    "aagey kya likha dekhne ke liye toh nhi bol rhe yes!!",
    "I knew merese kitna hi time gussa rahoge. hehe",
    "iske aage yess click nhi krna.",
    "mai bola na mt krna...",
    "aree sahi mai kuch nhi hai aagey",
    "tum maanoge nhi na",
    "dekh liya kuch nhi hai yha",
    "abb click krna band bhi kro",
    "Saara gussa iss button pr hi nikaloge kya?? lol",
    "Abb sachi kehra kuch nhi hai aagey",
    "kya lagta hai kuch ho shkta hai aagey?",
    "aree nhi hai sacchi mai. mai toh majak kr rha bs",
    "acha kuch hoga toh maan jaoge and click krna band krdoge?",
    "vese No kr bhi rhe hoge tb bhi khi nhi pahchoge lol, itna toh code hi nhi kiya",
    "acha yeh last line hai, iske aagey kuch nhi hai pakka?",
    "maan jao prachu abb kuch nhi hai aagye",
    "acha love you",
    "abb bhi click kr diye yes :(",
    "Acha yeh sahi mai last hai, isse aagye likhne ka time nhi bacha",
    "bs kro prachi!! kitna click kroge",
    "mera gussa iss button pr mt nikalo, hehe",
    "see yaa!!",
    "If you reach here and smiling toh mujhe bhi rply dedo WA pr :)",
    "Bye.",
]

class ForHer extends React.Component {
    constructor() {
        super();
        this.state = {
            content: "For You",
            answer: false,
            count: 0,
            noCount: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({
            count: state.count + 1,
            content: questions[state.count%questions.length],
            noCount: 0,
        }));
    }

    handleClick2 = () => {
        let content = "";

        switch(this.state.noCount){
            case 0: content = "Atleast Give it a try!!";break;
            case 1: content = "For me.";break;
            case 3: content = "Ek baar toh?"; break;
            case 4: content = "voh dusra wala button hai yes!!";break;
            case 5: content = "bs bhi kro yr say yes to me"; break;
            default: content = "Abb Maan bhi jao, Agey sachi kuch nhi hai :)";break;
        }

        this.setState(state => ({
            content: content,
            noCount: state.noCount + 1,
        }))
    }

    render () {
        return (
            <div className="Box">
                <h1 className="content">{this.state.content}</h1>
                <hr />
                <button className="glow-on-hover" onClick={this.handleClick}>Yes</button>
                <button className="glow-on-hover" onClick={this.handleClick2}>No</button>
            </div>
        )
    }
}
export default ForHer;