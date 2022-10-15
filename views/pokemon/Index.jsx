const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Pokemon Index Page">
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, type, _id} = pokemon 
                            return(
                                <li key={_id}>
                                    <a href={`/pokemon/${_id}`}>
                                        {name}</a> is {type}

                                        <br/>
                                      
                                        <form method="POST" action={`/pokemon/${_id}?_method=DELETE`}>
                                            <input type="submit" value={`Delete ${type} ${name}`}/>
                                        </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index 