
import React from "react";
import { motion } from "framer-motion";
import { Droplet, Wind, Thermometer } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: <Droplet className="h-8 w-8 text-primary" />,
      value: "2,500",
      label: "Liter Air",
      description: "Air yang dihemat dari setiap produksi tas daur ulang"
    },
    {
      icon: <Wind className="h-8 w-8 text-primary" />,
      value: "60%",
      label: "Emisi CO2",
      description: "Pengurangan emisi karbon dibanding produksi tas baru"
    },
    {
      icon: <Thermometer className="h-8 w-8 text-primary" />,
      value: "500kg",
      label: "Limbah Tekstil",
      description: "Limbah tekstil yang telah didaur ulang hingga saat ini"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dampak Positif untuk Lingkungan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Setiap produk BRICTION memberikan kontribusi nyata untuk lingkungan.
            Berikut adalah dampak positif yang telah kami hasilkan bersama.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-lg p-8 shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-lg font-medium mb-3">{stat.label}</p>
              <p className="text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
