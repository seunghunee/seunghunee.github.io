import React from "react"
import { Link as GatsbyLink } from "gatsby"
import MuiLink from "@material-ui/core/Link"

// TODO: any대신 GatsbyLinkProps
const Link = React.forwardRef<any, any>((props, ref) => (
  <MuiLink component={GatsbyLink} ref={ref} {...props} />
))

export default Link
