import { Component } from 'react'

type BarProps = {
    value: number;
    color: string;
}

export default class Bar extends Component<BarProps> {
    render() {
        return (
            <div key={this.props.value} className="bar" style={{width: 10, height: this.props.value, backgroundColor: this.props.color}}></div>
        )
    }
}