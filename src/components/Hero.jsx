
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden hero-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Peduli Lingkungan Melalui{" "}
              <span className="text-primary">Daur Ulang</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              BRICTION mengubah kain jeans bekas menjadi tas berkualitas tinggi
              yang ramah lingkungan. Bergabunglah dalam perjalanan kami untuk
              menciptakan dunia yang lebih berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Jelajahi Artikel
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Tentang BRICTION
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img  alt="Tas BRICTION dari kain jeans daur ulang" className="w-full h-auto rounded-lg" src="https://github.com/MOMON-5U5/foto-konten/blob/main/04.jpg?raw=true" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium text-lg">
                  Koleksi Tas BRICTION
                </p>
                <p className="text-white/80 text-sm">
                  Dibuat dari 100% kain jeans daur ulang
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg max-w-[200px]">
              <p className="font-bold">Selamatkan Bumi</p>
              <p className="text-sm">Setiap tas mengurangi 500g limbah tekstil</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
