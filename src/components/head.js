import React from "react"
import { Helmet } from "react-helmet"
import Fav32 from "../images/favicon-32x32.png"
import Fav16 from "../images/favicon-16x16.png"
import AppleTouch from "../images/apple-touch-icon.png"
import FavTab from "../images/safari-pinned-tab.svg"


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
    <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
    <link rel="icon" type="image/png" sizes="32x32" href={Fav32} />
    <link rel="icon" type="image/png" sizes="16x16" href={Fav16} />
    <link rel="mask-icon" href={FavTab} color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/zenscroll/4.0.2/zenscroll-min.js"></script> */}

                </Helmet>
    )

}
}

export default Head;

