import * as React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Chip from "@material-ui/core/Chip"

import Link from "./link"

interface Props {
  frontmatter: {
    title: string
    slug: string
  }
}

const PostCard: React.FC<Props> = ({ frontmatter }) => {
  const classes = useStyles()
  return (
    <CardActionArea component={Link} to={frontmatter.slug}>
      <Card className={classes.card} elevation={0}>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
          />
        </Hidden>
        <div className={classes.content}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {frontmatter.title}
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              이 글은 무엇무엇을 이해하는데 도움이 되고 이럴 경우 어떻게하면
              좋을까 고민한 글입니다.
            </Typography>
            <Chip className={classes.chip} label="Basic" />
            <Chip className={classes.chip} label="Advanced" />
            <Chip className={classes.chip} label="Tech" />
          </CardContent>
        </div>
      </Card>
    </CardActionArea>
  )
}

export default PostCard

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
  },
  content: {
    flex: 1,
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
  },
  cardMedia: {
    width: theme.spacing(20),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))
