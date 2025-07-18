
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
      name: "Eco Tote Bag",
      category: "Tas Tote",
      price: 249000,
      description: "Tas tote serbaguna yang terbuat dari kain jeans daur ulang. Sempurna untuk kegiatan sehari-hari.",
      imageUrl: "https://github.com/MOMON-5U5/foto-tas/blob/main/33_20240831_121139_0000%20-%20Copy.png?raw=true"
    },
    {
      id: 2,
      name: "Denim Backpack",
      category: "Ransel",
      price: 399000,
      description: "Ransel stylish dengan kompartemen laptop yang terbuat dari jeans daur ulang premium.",
      imageUrl: "https://github.com/MOMON-5U5/foto-tas/blob/main/34_20240831_121140_0001%20-%20Copy.png?raw=true"
    },
    {
      id: 3,
      name: "Messenger Bag",
      category: "Tas Selempang",
      price: 329000,
      description: "Tas selempang yang nyaman dan tahan lama, sempurna untuk penggunaan sehari-hari.",
      imageUrl: "https://github.com/MOMON-5U5/foto-tas/blob/main/35_20240831_121140_0002.png?raw=true"
    },
    {
      id: 4,
      name: "Mini Crossbody",
      category: "Tas Selempang",
      price: 199000,
      description: "Tas selempang mini yang compact namun memiliki ruang yang cukup untuk barang-barang penting.",
      imageUrl: "https://github.com/MOMON-5U5/foto-tas/blob/main/36_20240831_121140_0003.png?raw=true"
    },
    {
      id: 5,
      name: "Laptop Sleeve",
      category: "Aksesoris",
      price: 179000,
      description: "Pelindung laptop yang terbuat dari jeans daur ulang dengan lapisan bantalan untuk perlindungan ekstra.",
      imageUrl: "https://github.com/MOMON-5U5/foto-tas/blob/main/38_20240831_121140_0005.png?raw=true"
    },
    {
      id: 6,
      name: "Weekender Bag",
      category: "Tas Travel",
      price: 499000,
      description: "Tas travel yang sempurna untuk perjalanan akhir pekan, dengan ruang yang cukup untuk semua kebutuhan Anda.",
      imageUrl: "https://github.com/MOMON-5U5/foto-tas/blob/main/37_20240831_121140_0004.png?raw=true"
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
