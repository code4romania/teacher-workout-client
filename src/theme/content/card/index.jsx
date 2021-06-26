import React from 'react'
import {Card as MaterialCard, CardActionArea, CardMedia} from '@material-ui/core'
import PropTypes from 'prop-types'

import {Content} from 'theme/content/card/content'
import {useStyles} from 'theme/content/card/hooks/use-styles'

export const Card = ({theme}) => <MaterialCard className={useStyles().root}>
    <CardActionArea>
        <CardMedia className={useStyles().media} image={theme.thumbnail.url} title={theme.thumbnail.description}/>
        <Content thumbnail={theme.thumbnail} title={theme.title}/>
    </CardActionArea>
</MaterialCard>

Card.propTypes = {theme: PropTypes.object.isRequired}
