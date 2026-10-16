import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
    <h1 className="font-display text-5xl font-bold mb-4">404</h1>
    <p className="text-muted-foreground mb-8">Página no encontrada</p>
    <Link to="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;
