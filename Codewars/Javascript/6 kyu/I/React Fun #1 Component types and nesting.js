const React = require('react');

const Hello = () => <h1>Hello</h1>
const Word = () => <h2>Word!</h2>

class Greet extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Word />
            </div>
        )
    }
}
