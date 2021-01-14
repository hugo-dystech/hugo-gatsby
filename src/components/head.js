import React from "react"
import { Helmet } from "react-helmet"



class Head extends React.Component {
    render() {
        return (
        <Helmet>
             
              <meta charSet="utf-8" />
             
                <title>{this.props.title}</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={this.props.description} />
    <meta name="keywords" content={this.props.keyword} />
    <meta name="author" content="Hugo Richard" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
                </Helmet>
    )

}
}

export default Head;

