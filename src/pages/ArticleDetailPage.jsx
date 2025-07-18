
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch article data
    const fetchArticle = () => {
      setLoading(true);
      
      // This would be replaced with a real API call
      setTimeout(() => {
        const allArticles = [
          {
            id: 1,
            title: "Daur Ulang Jeans: Solusi Ramah Lingkungan untuk Mengurangi Limbah Tekstil",
            slug: "daur-ulang-jeans",
            excerpt: "Mengenal lebih dalam tentang proses daur ulang jeans dan bagaimana hal ini dapat membantu mengurangi limbah tekstil yang mencemari lingkungan.",
            content: `
              <p>Industri fashion adalah salah satu industri yang paling mencemari lingkungan di dunia. Setiap tahun, jutaan ton limbah tekstil berakhir di tempat pembuangan sampah, dan salah satu kontributor terbesarnya adalah jeans. Sebuah jeans membutuhkan sekitar 7.000 liter air untuk diproduksi, belum lagi bahan kimia dan pewarna yang digunakan dalam prosesnya.</p>
              
              <p>Daur ulang jeans menjadi solusi yang efektif untuk mengurangi dampak lingkungan dari industri fashion. Dengan mendaur ulang jeans bekas, kita tidak hanya mengurangi limbah yang berakhir di tempat pembuangan sampah, tetapi juga menghemat sumber daya alam yang dibutuhkan untuk memproduksi jeans baru.</p>
              
              <h2>Proses Daur Ulang Jeans</h2>
              
              <p>Proses daur ulang jeans dimulai dengan pengumpulan jeans bekas dari berbagai sumber, seperti donasi, toko barang bekas, atau program pengumpulan khusus. Setelah dikumpulkan, jeans akan disortir berdasarkan kondisi dan kualitasnya.</p>
              
              <p>Jeans yang masih dalam kondisi baik dapat langsung digunakan kembali atau dimodifikasi menjadi produk baru, seperti tas, jaket, atau aksesori. Sementara itu, jeans yang sudah tidak layak pakai akan melalui proses daur ulang yang lebih kompleks.</p>
              
              <p>Dalam proses daur ulang, jeans akan dipotong menjadi potongan-potongan kecil, kemudian diproses menjadi serat. Serat ini kemudian dapat digunakan untuk membuat berbagai produk, mulai dari kain baru hingga bahan isolasi untuk bangunan.</p>
              
              <h2>Manfaat Daur Ulang Jeans</h2>
              
              <p>Daur ulang jeans memberikan berbagai manfaat bagi lingkungan, di antaranya:</p>
              
              <ul>
                <li>Mengurangi limbah tekstil yang berakhir di tempat pembuangan sampah</li>
                <li>Menghemat sumber daya alam, seperti air dan energi</li>
                <li>Mengurangi penggunaan bahan kimia dan pewarna berbahaya</li>
                <li>Mengurangi emisi gas rumah kaca yang dihasilkan dari produksi jeans baru</li>
              </ul>
              
              <p>Selain manfaat lingkungan, daur ulang jeans juga memberikan manfaat sosial dan ekonomi. Industri daur ulang dapat menciptakan lapangan kerja baru dan mendukung ekonomi lokal. Selain itu, produk daur ulang sering kali memiliki nilai tambah karena keunikan dan cerita di baliknya.</p>
              
              <h2>BRICTION: Mengubah Jeans Bekas Menjadi Tas Berkualitas</h2>
              
              <p>BRICTION adalah salah satu merek yang berkomitmen untuk mengurangi limbah tekstil melalui daur ulang jeans bekas. Dengan mengubah jeans bekas menjadi tas berkualitas tinggi, BRICTION tidak hanya memberikan kehidupan baru pada material yang terbuang, tetapi juga menciptakan produk yang fungsional dan stylish.</p>
              
              <p>Setiap tas BRICTION dibuat dengan teliti oleh pengrajin lokal, memastikan kualitas dan daya tahan produk. Dengan membeli produk BRICTION, konsumen tidak hanya mendapatkan tas yang unik dan berkualitas, tetapi juga berkontribusi pada upaya pelestarian lingkungan.</p>
              
              <h2>Bagaimana Anda Dapat Berkontribusi</h2>
              
              <p>Ada berbagai cara untuk berkontribusi pada upaya daur ulang jeans, di antaranya:</p>
              
              <ul>
                <li>Donasikan jeans bekas Anda ke program pengumpulan atau organisasi daur ulang</li>
                <li>Beli produk yang terbuat dari jeans daur ulang, seperti tas BRICTION</li>
                <li>Pelajari cara mendaur ulang jeans sendiri menjadi produk baru</li>
                <li>Sebarkan kesadaran tentang pentingnya daur ulang tekstil</li>
              </ul>
              
              <p>Dengan langkah-langkah kecil ini, kita dapat bersama-sama mengurangi dampak lingkungan dari industri fashion dan menciptakan masa depan yang lebih berkelanjutan.</p>
            `,
            imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "10 Mei 2025",
            author: "Rina Wijaya",
            category: "Daur Ulang",
            tags: ["daur ulang", "jeans", "fashion berkelanjutan", "limbah tekstil"]
          },
          {
            id: 2,
            title: "Dampak Fast Fashion Terhadap Lingkungan dan Bagaimana Mengatasinya",
            slug: "fast-fashion",
            excerpt: "Fast fashion telah menjadi salah satu industri yang paling mencemari lingkungan. Pelajari dampaknya dan bagaimana kita dapat membuat perubahan.",
            imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "5 Mei 2025",
            author: "Budi Santoso",
            category: "Lingkungan",
            tags: ["fast fashion", "lingkungan", "polusi", "konsumsi berkelanjutan"]
          },
          {
            id: 3,
            title: "5 Tips Hidup Ramah Lingkungan yang Mudah Diterapkan Sehari-hari",
            slug: "tips-ramah-lingkungan",
            excerpt: "Langkah-langkah sederhana yang dapat kita lakukan setiap hari untuk mengurangi jejak karbon dan hidup lebih ramah lingkungan.",
            imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "1 Mei 2025",
            author: "Dian Permata",
            category: "Tips",
            tags: ["tips", "ramah lingkungan", "gaya hidup berkelanjutan", "jejak karbon"]
          }
        ];
        
        const foundArticle = allArticles.find(a => a.slug === slug);
        setArticle(foundArticle);
        
        // Get related articles (same category but different article)
        if (foundArticle) {
          const related = allArticles
            .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
            .slice(0, 3);
          setRelatedArticles(related);
        }
        
        setLoading(false);
      }, 500);
    };
    
    fetchArticle();
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-muted-foreground mb-8">
            Maaf, artikel yang Anda cari tidak ditemukan.
          </p>
          <Link to="/articles">
            <Button>Kembali ke Daftar Artikel</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <Link to="/articles" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Daftar Artikel
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{article.category}</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden mb-8 h-[300px] md:h-[400px] lg:h-[500px]">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-2">
              {article.tags && article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-muted px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" aria-label="Bookmark">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Artikel Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
