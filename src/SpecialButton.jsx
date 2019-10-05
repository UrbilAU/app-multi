import React from 'react'

class SpecialButton extends React.Component {
    render(){
        return <button onClick={this.props.handleClick}>ALDATU HIZKUNTZA</button>
    }
}

export default SpecialButton