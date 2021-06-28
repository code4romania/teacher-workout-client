import React from 'react'
import {CardContent, Typography} from '@material-ui/core'
import PropTypes from 'prop-types'

export const Content = ({title, thumbnail}) => <CardContent>
    <Typography gutterBottom variant={'h5'} component={'h2'}>
        {title}
    </Typography>
    <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
        {thumbnail.description}
    </Typography>
</CardContent>

Content.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
}
