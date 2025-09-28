
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ShoppingBag } from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Metro Quilt Crossbody",
      category: "Tas Selempang",
      price: 175000,
      description: "partner andalan yang menyempurnakan gaya kasual Anda. Kami mengambil siluet tas selempang yang klasik dan memberinya nyawa baru dengan teknik jahit quilting yang modern.",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/4.png?raw=true"
    },
    {
      id: 2,
      name: "Midnight Bloom Tote",
      category: "Tas Tote",
      price: 200000,
      description: "Kami menggabungkan romantisme desain ruffles dengan karakter denim hitam yang tak lekang oleh waktu, menciptakan sebuah tas yang sempurna untuk gaya Anda yang unik dan berlapis.",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/5.png?raw=true"
    },
    {
      id: 3,
      name: "Bloom Shoulder Bag",
      category: "Tas Tote",
      price: 225000,
      description: "Terinspirasi dari kelembutan kelopak bunga di pagi hari, Briction Bloom Shoulder Bag hadir untuk menambahkan sentuhan manis dan romantis pada penampilan Anda",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/7.png?raw=true"
    },
    {
      id: 4,
      name: "Wastra Tote",
      category: "Tas Tote",
      price: 250000,
      description: "Sebuah mahakarya kekayaan budaya Indonesia dalam balutan denim modern. Tas ini bukan sekadar aksesori, melainkan sebuah narasi visual di mana setiap elemen bercerita.",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/10.png?raw=true"
    },
    {
      id: 5,
      name: "Briction Orbit Pouch",
      category: "Tas Travel",
      price: 150000,
      description: "Untuk hari-hari saat Anda ingin bergerak bebas hanya dengan barang terpenting, Briction Orbit Pouch adalah solusinya. Mengambil inspirasi dari gaya waist bag klasik,",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/14.png?raw=true"
    },
    {
      id: 6,
      name: "Amara Quilt Bag",
      category: "Tas Selempang",
      price: 175000,
      description: "Terinspirasi dari desain tas klasik yang selalu relevan, kami menghadirkannya dengan sentuhan modern dan napas keberlanjutan. Pola jahit quilted yang ikonik memberikan tekstur mewah",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/12.png?raw=true"
    },
    {
      id: 7,
      name: "Voyager Hobo",
      category: "Tas Selempang",
      price: 200000,
      description: "Dengan siluet hobo yang santai namun tetap terstruktur, tas ini adalah definisi dari organizer yang sempurna. Dua saku kargo di bagian depan memberikan akses cepat untuk barang-barang esensial",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/1.png?raw=true"
    },
    {
      id: 8,
      name: "Luna Sling Bag",
      category: "Tas Selempang",
      price: 175000,
      description: "perpaduan sempurna antara gaya modern dan kesadaran lingkungan. Dibuat dari helai demi helai denim daur ulang pilihan, tas berbentuk bulan sabit ini dirancang untuk Anda yang dinamis dan peduli.",
      imageUrl: "https://github.com/MOMON-5U5/foto-konten/blob/main/Briction%20Katalog/16.png?raw=true"
    }
  ];

  const categories = [
    "Semua",
    "Tas Tote",
    "Ransel",
    "Tas Selempang",
    "Aksesoris",
    "Tas Travel"
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Produk BRICTION</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koleksi tas dan aksesoris ramah lingkungan yang terbuat dari kain jeans daur ulang. Setiap produk memiliki cerita unik dan berkontribusi pada pelestarian lingkungan.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="article-card"
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{product.name}</CardTitle>
                    <p className="text-xl font-bold text-primary">{formatPrice(product.price)}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <ShoppingBag className="mr-2 h-4 w-4" /> Tambahkan ke Keranjang
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">Tidak ada produk yang ditemukan</h3>
            <p className="text-muted-foreground">
              Coba ubah kata kunci pencarian atau kategori yang dipilih.
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-muted/30 rounded-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Produk Kustom</h2>
              <p className="text-muted-foreground mb-6">
                Ingin produk yang lebih personal? Kami menawarkan layanan kustomisasi untuk tas dan aksesoris BRICTION. Hubungi kami untuk informasi lebih lanjut.
              </p>
              <Button size="lg">Hubungi Kami</Button>
            </div>
            <div>
              <img  alt="Produk kustom BRICTION" className="rounded-lg shadow-xl" src="https://github.com/MOMON-5U5/foto-tas/blob/main/Briction_20240715_203327_0000.png?raw=true" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
