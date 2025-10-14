
interface ErrorBallonProps {
    message:string;
}


const ErrorBallon = ({message}:ErrorBallonProps) => {
  return (
    
      <div className="absolute -top-12 left-8 flex items-center space-x-2 rounded-sm bg-stone-600 text-white px-3 py-2 shadow-lg">
        {/* Ícone */}
        <div className="flex items-center justify-center w-5 h-5 bg-orange-500 text-white font-bold rounded-sm"> ! </div>
        {/* Texto */}
        <span className="text-sm">{message}</span>
        {/* Setinha */}
        <div className="absolute -top-1 left-4 w-2 h-2 bg-stone-600 rotate-45"></div>
      </div>
    
  );
}

export default ErrorBallon
