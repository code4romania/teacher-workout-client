import { useStyles } from 'admin/layout/button/hooks/use-styles'

export const useProperties = props => ({
  className: useStyles().button,
  fullWidth: true,
  onClick: props.onClick,
})
