
import React from "react";
import { motion } from "framer-motion";
import { Recycle, Heart, Leaf, Award, Users, Globe } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Recycle className="h-10 w-10 text-primary" />,
      title: "Daur Ulang",
      description:
        "Kami percaya bahwa daur ulang adalah kunci untuk mengurangi limbah dan menciptakan masa depan yang lebih berkelanjutan."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Kepedulian",
      description:
        "Kepedulian terhadap lingkungan dan masyarakat menjadi landasan dari setiap keputusan yang kami ambil."
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Keberlanjutan",
      description:
        "Kami berkomitmen untuk menciptakan produk dan praktik bisnis yang berkelanjutan untuk generasi mendatang."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Kualitas",
      description:
        "Kami tidak pernah mengorbankan kualitas. Setiap produk BRICTION dibuat dengan standar tertinggi."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Komunitas",
      description:
        "Kami percaya pada kekuatan komunitas dan bekerja sama dengan pengrajin lokal untuk menciptakan dampak positif."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Transparansi",
      description:
        "Kami berkomitmen untuk transparan tentang praktik bisnis kami dan dampak lingkungan dari produk kami."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang BRICTION</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat tentang perjalanan kami dalam menciptakan produk ramah lingkungan dan mendukung gaya hidup berkelanjutan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img  alt="Tim BRICTION" className="rounded-lg shadow-xl" src="https://github.com/MOMON-5U5/foto-tas/blob/main/3.jpg?raw=true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Cerita Kami</h2>
            <p className="text-muted-foreground mb-4">
              BRICTION dimulai dari keprihatinan kami terhadap limbah tekstil yang terus meningkat, terutama dari industri fashion. Kami melihat tumpukan jeans bekas yang terbuang dan memutuskan untuk melakukan sesuatu.
            </p>
            <p className="text-muted-foreground mb-4">
              Didirikan pada tahun 2024, BRICTION berkomitmen untuk mengubah kain jeans bekas menjadi tas berkualitas tinggi yang tidak hanya ramah lingkungan tetapi juga stylish dan fungsional. Kami bekerja sama dengan pengrajin lokal untuk menciptakan produk yang unik dan berkualitas.
            </p>
            <p className="text-muted-foreground mb-4">
              Nama BRICTION sendiri berasal dari gabungan kata "Bright" dan "Action", yang mencerminkan visi kami untuk menciptakan masa depan yang lebih cerah melalui tindakan nyata untuk lingkungan.
            </p>
            <p className="text-muted-foreground">
              Setiap tas BRICTION memiliki cerita unik di baliknya. Dari jeans bekas yang terbuang hingga menjadi tas yang bergaya dan fungsional, setiap produk kami adalah bukti bahwa limbah dapat diubah menjadi sesuatu yang berharga.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nilai-nilai ini menjadi panduan kami dalam setiap langkah yang kami ambil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-md"
            >
              <div className="flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 mx-auto w-20 h-20">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Visi & Misi</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Visi</h3>
                <p className="text-muted-foreground">
                  Menciptakan dunia di mana limbah tekstil tidak lagi menjadi masalah lingkungan, melainkan sumber daya berharga untuk produk berkualitas tinggi.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Misi</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Mengurangi limbah tekstil melalui daur ulang kain jeans bekas</li>
                  <li>Menciptakan produk berkualitas tinggi yang ramah lingkungan</li>
                  <li>Mengedukasi masyarakat tentang pentingnya daur ulang dan gaya hidup berkelanjutan</li>
                  <li>Mendukung ekonomi lokal dengan bekerja sama dengan pengrajin lokal</li>
                  <li>Menjadi inspirasi bagi bisnis lain untuk mengadopsi praktik berkelanjutan</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  alt="Proses produksi BRICTION" className="rounded-lg shadow-xl" src="https://github.com/MOMON-5U5/foto-tas/blob/main/12.jpg?raw=true" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
