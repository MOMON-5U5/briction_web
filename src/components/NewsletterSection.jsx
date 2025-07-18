
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Berhasil Berlangganan!",
        description: "Terima kasih telah berlangganan newsletter BRICTION.",
        duration: 5000,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dapatkan Inspirasi Ramah Lingkungan
            </h2>
            <p className="text-muted-foreground mb-8">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru, tips ramah lingkungan, dan informasi tentang produk BRICTION.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan alamat email Anda"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button type="submit" disabled={isSubmitting} className="flex-shrink-0">
              {isSubmitting ? (
                "Mengirim..."
              ) : (
                <>
                  Berlangganan <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-4"
          >
            Kami menghargai privasi Anda. Anda dapat berhenti berlangganan kapan saja.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
