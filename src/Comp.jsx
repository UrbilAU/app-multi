import React from 'react'

class Comp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            language: this.props.language
        }
    }

    componentDidUpdate(prevProps){
        console.log('prevProps.language : ', prevProps.language);
        console.log('this.props.language : ', this.props.language);
        if (prevProps.language !== this.props.language){
            console.log('inside if');
            this.setState({language: this.props.language});
        }
    }

    render(){
        return <label>{this.props.language}</label>
    }

}

export default Comp