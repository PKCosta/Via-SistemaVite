import './../globals.css';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
      <div>
        <h1>Private</h1>
        {children}
      </div>
    
  )
}