const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render(){
        const {name, _id, type, weakness} = this.props.pokemon 
        return(
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Type: <input type="text" name="type" defaultValue={type}></input><br />
                    Weaknesses: <input type="text" name="weakness" defaultChecked={weakness}/> <br />
                    <input type="submit" value="Edit Pokemon" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit 