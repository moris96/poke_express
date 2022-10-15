const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Pokemon">
            <form method="POST" action="/pokemon">
                Name: <input type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
                Type: <input type="text" name="type" placeholder='Type of Pokemon Here'></input><br/>
                Weaknesses: <input type="text" name="weakness" placeholder='Weaknesses of Pokemon Here'></input><br/>
                <input type="submit" value="Submit Pokemon"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New