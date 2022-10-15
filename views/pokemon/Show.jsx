const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render(){
        const {name, type, weakness, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
            <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
                <p>{capName} is {type} type and weaknesses are {weakness}</p>
            </Default>
        )
    }
}

module.exports = Show 