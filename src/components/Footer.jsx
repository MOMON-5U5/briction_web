
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">BRICTION</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Mewujudkan kepedulian lingkungan melalui produk tas dari kain jeans bekas yang ramah lingkungan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-medium text-lg mb-4">Tautan</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-lg mb-4">Artikel Terbaru</p>
            <ul className="space-y-2">
              <li>
                <Link to="/articles/daur-ulang-jeans" className="text-muted-foreground hover:text-primary transition-colors">
                  Daur Ulang Jeans: Solusi Ramah Lingkungan
                </Link>
              </li>
              <li>
                <Link to="/articles/fast-fashion" className="text-muted-foreground hover:text-primary transition-colors">
                  Dampak Fast Fashion Terhadap Lingkungan
                </Link>
              </li>
              <li>
                <Link to="/articles/tips-ramah-lingkungan" className="text-muted-foreground hover:text-primary transition-colors">
                  5 Tips Hidup Ramah Lingkungan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-lg mb-4">Kontak</p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">Jl. Kedungmundu No.18 50273 Semarang Jawa Tengah</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">brictionsemarang@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} BRICTION. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
