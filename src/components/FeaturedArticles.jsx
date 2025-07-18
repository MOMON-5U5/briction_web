
import React from "react";
import { motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedArticles = () => {
  const featuredArticles = [
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
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Artikel Terbaru</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan informasi dan inspirasi tentang kepedulian lingkungan, daur ulang, dan gaya hidup berkelanjutan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/articles">
            <Button size="lg">Lihat Semua Artikel</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
