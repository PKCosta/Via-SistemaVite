import './../globals.css';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
      <div>
        {/* <h1>Public</h1> */}
        {children}
      </div>
    
  )
}