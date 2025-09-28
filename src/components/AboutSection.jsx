
import React from "react";
import { motion } from "framer-motion";
import { Recycle, Heart, Leaf } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Recycle className="h-10 w-10 text-primary" />,
      title: "Daur Ulang",
      description:
        "Kami mengubah kain jeans bekas menjadi produk baru yang berguna dan stylish, mengurangi limbah tekstil yang berakhir di tempat pembuangan sampah."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Ramah Lingkungan",
      description:
        "Setiap produk BRICTION dibuat dengan memperhatikan dampak lingkungan, menggunakan proses produksi yang hemat energi dan bahan-bahan ramah lingkungan."
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Berkelanjutan",
      description:
        "Kami berkomitmen untuk menciptakan produk yang tahan lama dan berkualitas tinggi, mendukung ekonomi sirkular dan gaya hidup berkelanjutan."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img  alt="Proses pembuatan tas BRICTION" className="rounded-lg shadow-xl" src="https://github.com/MOMON-5U5/foto-konten/blob/main/WhatsApp%20Image%202025-09-26%20at%2021.57.18_70075c7f.jpg?raw=true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tentang BRICTION
            </h2>
            <p className="text-muted-foreground mb-8">
              BRICTION adalah merek tas ramah lingkungan yang didedikasikan untuk
              mengurangi limbah tekstil melalui daur ulang kain jeans bekas.
              Kami percaya bahwa fashion dapat berkelanjutan tanpa mengorbankan
              gaya dan kualitas.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
