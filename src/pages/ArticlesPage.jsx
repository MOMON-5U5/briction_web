
import React, { useState } from "react";
import { motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const articles = [
    {
      id: 1,
      title: "Daur Ulang Jeans: Solusi Ramah Lingkungan untuk Mengurangi Limbah Tekstil",
      slug: "daur-ulang-jeans",
      excerpt: "Mengenal lebih dalam tentang proses daur ulang jeans dan bagaimana hal ini dapat membantu mengurangi limbah tekstil yang mencemari lingkungan.",
      imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "10 Mei 2025",
      author: "Rina Wijaya",
      category: "Daur Ulang"
    },
    {
      id: 2,
      title: "Dampak Fast Fashion Terhadap Lingkungan dan Bagaimana Mengatasinya",
      slug: "fast-fashion",
      excerpt: "Fast fashion telah menjadi salah satu industri yang paling mencemari lingkungan. Pelajari dampaknya dan bagaimana kita dapat membuat perubahan.",
      imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "5 Mei 2025",
      author: "Budi Santoso",
      category: "Lingkungan"
    },
    {
      id: 3,
      title: "5 Tips Hidup Ramah Lingkungan yang Mudah Diterapkan Sehari-hari",
      slug: "tips-ramah-lingkungan",
      excerpt: "Langkah-langkah sederhana yang dapat kita lakukan setiap hari untuk mengurangi jejak karbon dan hidup lebih ramah lingkungan.",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "1 Mei 2025",
      author: "Dian Permata",
      category: "Tips"
    },
    {
      id: 4,
      title: "Mengenal Ekonomi Sirkular dan Perannya dalam Pelestarian Lingkungan",
      slug: "ekonomi-sirkular",
      excerpt: "Ekonomi sirkular menawarkan alternatif untuk model ekonomi linear tradisional. Pelajari bagaimana konsep ini dapat membantu pelestarian lingkungan.",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "25 April 2025",
      author: "Ahmad Fauzi",
      category: "Ekonomi"
    },
    {
      id: 5,
      title: "Inovasi Tekstil Berkelanjutan: Masa Depan Industri Fashion",
      slug: "inovasi-tekstil",
      excerpt: "Perkembangan terbaru dalam inovasi tekstil berkelanjutan yang sedang mengubah industri fashion dan membuka jalan menuju masa depan yang lebih hijau.",
      imageUrl: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "20 April 2025",
      author: "Maya Indira",
      category: "Inovasi"
    },
    {
      id: 6,
      title: "Bagaimana Memilih Produk Fashion yang Benar-benar Ramah Lingkungan",
      slug: "produk-fashion-ramah-lingkungan",
      excerpt: "Panduan lengkap untuk membantu Anda memilih produk fashion yang benar-benar ramah lingkungan dan menghindari greenwashing.",
      imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 April 2025",
      author: "Siti Nurhaliza",
      category: "Tips"
    },
    {
      id: 7,
      title: "Kisah Sukses Brand Lokal yang Mengusung Konsep Berkelanjutan",
      slug: "brand-lokal-berkelanjutan",
      excerpt: "Mengenal brand-brand lokal Indonesia yang berhasil menerapkan konsep berkelanjutan dalam bisnis mereka dan menginspirasi perubahan.",
      imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "10 April 2025",
      author: "Reza Rahadian",
      category: "Inspirasi"
    },
    {
      id: 8,
      title: "Perjalanan Limbah Tekstil: Dari Tempat Sampah Hingga Lautan",
      slug: "limbah-tekstil",
      excerpt: "Menelusuri perjalanan limbah tekstil dan dampaknya terhadap ekosistem laut. Apa yang dapat kita lakukan untuk menghentikan aliran limbah ini?",
      imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "5 April 2025",
      author: "Andi Firmansyah",
      category: "Lingkungan"
    },
    {
      id: 9,
      title: "Kolaborasi BRICTION dengan Komunitas Daur Ulang Lokal",
      slug: "kolaborasi-komunitas",
      excerpt: "Melihat bagaimana BRICTION berkolaborasi dengan komunitas daur ulang lokal untuk menciptakan dampak positif yang lebih besar bagi lingkungan.",
      imageUrl: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "1 April 2025",
      author: "Dewi Lestari",
      category: "Komunitas"
    }
  ];

  const categories = [
    "Semua",
    "Daur Ulang",
    "Lingkungan",
    "Tips",
    "Ekonomi",
    "Inovasi",
    "Inspirasi",
    "Komunitas"
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Artikel</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan informasi dan inspirasi tentang kepedulian lingkungan, daur ulang, dan gaya hidup berkelanjutan.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Cari artikel..."
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

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">Tidak ada artikel yang ditemukan</h3>
            <p className="text-muted-foreground">
              Coba ubah kata kunci pencarian atau kategori yang dipilih.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
