import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink, Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './styles'

import SignupForm from '../../email-verification/components/SignupForm'

import aalogo from '../../../assets/advanced-algos/aa-logo-horiz-dark.svg'

class Footer extends Component {
  render () {
    let { classes, width } = this.props

    const masterApp = this.props.context.masterApp
    if (masterApp.footer.visible === false) {
      return (<div />)
    } else {
      return (
        <footer className={classNames(classes.darkSection, classes.footer)}>
          <Grid
            container
            spacing={8}
            justify='space-evenly'
            className={classes.footerContainer}
          >
            <Grid item xs={12} sm={4} md={4}>
              <NavLink to='/'>
                <img alt='' src={aalogo} width={'100%'} height={'auto'} className={classes.footerLogo} />
              </NavLink>
              <Grid container className={classes.descriptionLeft} direction='column'>
                <Typography className={classNames(classes.textLight, classes.descriptionText)} ><strong>Advanced Algos Ltd.</strong></Typography>
                <Typography className={classNames(classes.textLight, classes.descriptionText)} gutterBottom>Ground Floor, Palace Court, Church Street,<br />St. Julians&nbsp;STJ3049, Malta</Typography>
                <Typography className={classNames(classes.textLight, classes.descriptionText)}>
                  <Link to='legal-privacy-statement.shtml' className={classNames(classes.textLight, classes.descriptionText)}>Privacy Statement</Link> | <a href='legal-terms-of-service.shtml' className={classes.linkLight}>Terms of Service</a>
                </Typography>
                <Typography variant='body2' className={classNames(classes.textLight, classes.copyright)} gutterBottom>&copy; Advanced Algos, Ltd. 2018 | All Rights Reserved.</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={1} md={1} />
            <Grid item xs={12} sm={7} md={6}>
              <SignupForm displayTitle displayIntro />
              <Typography variant='subtitle1' className={classes.textWhite} style={{ textAlign: width === 'xs' ? 'center' : '' }}>Meet us on Social Networks:</Typography>
              <Grid container justify={width === 'xs' ? 'center' : 'flex-start'}>
                <Link to='https://t.me/advancedalgoscommunity' title='Join us on Telgram' className={classes.linkLight}>
                  <FontAwesomeIcon
                    icon={faTelegramPlane}
                    className={classNames(classes.icon, classes.iconHover)}
                  />
                </Link>
                <Link to='https://twitter.com/advancedalgos' title='Follow us on Twitter' className={classes.linkLight}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={classNames(classes.icon, classes.iconHover)}
                  />
                </Link>
                <Link to='https://www.facebook.com/Advanced-Algos-173249670001615/' title='Meet us on Facebook' className={classes.linkLight}>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={classNames(classes.icon, classes.iconHover)}
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </footer>
      )
    }
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    context: state.context
  }
}

const FooterWithStyles = withStyles(styles)(Footer)

export default connect(mapStateToProps)(withWidth()(FooterWithStyles))
