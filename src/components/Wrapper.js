import React, { Component } from 'react'
import { Layout } from 'antd';

const layoutStyle = {
    width: "100%"
}

class Wrapper extends Component {
    render() {
        return (
            <Layout className="layout" style={layoutStyle}>
                {this.props.children}
            </Layout>
        )
    }
}

export default Wrapper
