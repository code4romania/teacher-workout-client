import { makeStyles } from '@mui/styles'

const useWrapperStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: '#6366F1',
    borderRadius: '6px',
    padding: theme.spacing(0.75),
    height: '36px',
    width: '36px',
  },
}))

const useTitleStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'normal',
    fontSize: 14,
    color: '#6B7280',
  },
}))

const useStatisticsStyles = makeStyles(theme => ({
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
