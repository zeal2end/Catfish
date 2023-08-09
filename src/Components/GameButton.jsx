import React from "react";
import './GameButton.css'

let clickNot = [
        'I don\'t liked being clicked',
        'Don\'t Click',
        'Seriously... don\'t click it',
        'How hard is it to not CLICK!!!',
        'LOL stop it. No clicking',
        'Okay... You\'ve had your fun. No reason to keep clicking.',
        'Last warning. I\'m Serious...',
        'You gotta stop clicking. Bad things could happen.',
        'Please stop.',
        'Click one more time. See what happens.',
        'If you click one more time I\'ll open the multiverse.',
        'You wanna mess with me?!?! Huh?!',
        'I\'m gonna scare you if you keep clicking',
        'Fine. I guess we are doing this then. Hope you are ready.;)',
        'Once upon a time there was an idiot who kept clicking a button',
        'They kept clicking and clicking...',
        '... until they got a computer virus. (click it I dare you)',
        'HAHAHAHAHHHAHAHHA',
        'Made you flinch. You got pranked breh!',
        'You really thought you downloaded a Computer virus ^_^',
        'When in reality you downloaded 12 viruses!!',
        'Ohh!! You had your automatic download blocker active. Shit!!',
        'You are a good one!!',
        'I\'ll tell you what. Click one more time. This one\'s on me',
        "You don't have a virus. Take a deep breath.",
        "But please stop clicking the button.",
        "aren't you getting tired?!?!",
        "Wow. You've got some guts kid.",
        "I really thought you'd stop clicking by now.",
        "If I tell you something will you stop clicking??",
        "We live in a Similuted World!! So anything you do doesn't mean anything!! Yeah Really!! So STOP Clicking...",
        "I guess it didn't work.",
        "Ouch. You are hurting me.",
        "Stop clicking. OUCHIE!!!",
        "It burns!!!",
        "Ah who am I kidding. Computers can't feel pain.",
        "I'm not even an AI or anything.",
        "I'm just an button that's been preprogrammed to say these things.",
        "Probably coded by some dumb idiot. who thought you will click till here.",
        "You still going on!!",
        "I guess that's it then",
        "Thanks for playing! :)",
        "The End",
        "Or is it?",
        "How long are you going to keep clicking this thing?",
        "Thing of how much time you've wasted already.",
        "Don't you have better things to do?",
        "Nope... just gonna keep clicking then.",
        "Okay... I can't take it anymore!!!",
        "This is the actual ending",
        "Thanks for playing my weird game. :)",
        "Hope you had fun!!",
        "And remember...",
        "Don't Click the Button.",
        "I can't write more...",
    ]

class GameButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Don't Click the Button!!"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState(state => ({
            count : state.count + 1,
            name : clickNot[state.count%clickNot.length]
        }))
    }
    render () {
        return (
            <div className="buttonBox">
                <h1 className="name">{this.state.name}</h1>
                <br />
                <button className="glow-on-hover" type="button" onClick={this.handleClick}>Don't Click</button>
            </div>
        )
    }
}
export default GameButton;