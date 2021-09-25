import * as Material from '@material-ui/core'

const useWrapperStyles = Material.makeStyles(theme => ({
  wrapper: {
    backgroundColor: '#6366F1',
    borderRadius: '6px',
    padding: theme.spacing(0.75),
    height: '36px',
    width: '36px',
  },
}))

const useTitleStyles = Material.makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'normal',
    fontSize: 14,
    color: '#6B7280',
  },
}))

const useStatisticsStyles = Material.makeStyles(theme => ({
  statistics: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
    fontSize: 24,
    color: '#111827',
  },
}))

export const useStyles = () => ({
  ...useWrapperStyles(),
  ...useTitleStyles(),
  ...useStatisticsStyles(),
})
