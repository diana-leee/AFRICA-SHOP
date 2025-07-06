
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full african-gradient"></div>
              <span className="text-2xl font-bold text-primary">AfricaShop</span>
            </div>
            <p className="text-muted-foreground">
              Connecter l'artisanat africain au monde entier. 
              Authenticité, qualité et commerce équitable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Produits</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Artisans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Livraison</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Retours</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recevez nos dernières nouveautés et offres spéciales
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Votre email"
                className="w-full px-3 py-2 text-sm border rounded-md bg-background"
              />
              <Button className="w-full african-gradient border-0 hover:opacity-90 transition-opacity">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AfricaShop. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
