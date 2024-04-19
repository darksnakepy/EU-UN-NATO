import './ListItem.sass'

interface ListItemProps {
  children: React.ReactNode
}

export default function ListItem({children} : ListItemProps) {
  return (
    <div className="listitem">{children}</div>
  )
}