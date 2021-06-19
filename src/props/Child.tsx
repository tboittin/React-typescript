interface ChildProps {
  color: string
  onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <h1>
      {color}
      <button onClick={onClick}>Click Me</button>
    </h1>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <h1>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </h1>
  )
}
