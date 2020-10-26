import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    }

    render() {
        return (
            <Layout>
                <SEO title="Home"/>
                <section className="page-section" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-black-50 mt-0">Kandila App</h2>
                                <hr className="divider light my-4"/>
                                <p className="text-black-50 mb-4">Currently in development.
                                    <br/>2021 Q1 launch</p>
                                <Img fixed={this.props.data.file.childImageSharp.fixed} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="services">
                    <div className="container">
                        <h2 className="text-center mt-0">Data Integration Layer</h2>
                        <h4 className="text-center text-muted mt-0">Kandila integrates data from many different
                            DEXs and DeFi platforms to provide a holistic look at the market.</h4>
                        <hr className="divider my-4"/>
                        <div className="row">
                            <div className="col-lg-4 col-md-3 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-project-diagram text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">APIs</h3>
                                    <p className="text-muted mb-0">Price, trade and history info</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3 text-center">
                                <div className="mt-5">
                                    <i className="fab fa-4x fa-ethereum text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Ethereum Blockchain</h3>
                                    <p className="text-muted mb-0">Statistics, transactions and other data</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-rss-square text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">RSS and Atom Feeds</h3>
                                    <p className="text-muted mb-0">Articles and News updates from multiple sources</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="mt-0">Let's Collaborate</h2>
                                <hr className="divider my-4"/>
                                <p className="text-muted mb-5">Learn more about the project</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mr-auto text-center">
                                <i className="fab fa-twitter fa-3x mb-3 text-muted"></i>
                                <a className="d-block" href="https://twitter.com/appkandila">
                                    @appkandila</a>
                            </div>
                            <div className="col-lg-6 mr-auto text-center">
                                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                <a className="d-block"
                                   href="mailto:info@kandila.app">info@kandila.app</a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}


export const query = graphql`
  query {
    file(relativePath: { eq: "kandila-logo1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 145, height: 163) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
