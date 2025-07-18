
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Alamat",
      details: "Jl. Kedungmundu No.18 50273 Semarang Jawa Tengah"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telepon",
      details: "+62 812 3456 7890"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "brictionsemarang@gmail.com"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami. Kami selalu senang mendengar dari Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      Kirim Pesan <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Jam Operasional</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Senin - Jumat</span>
                  <span className="text-muted-foreground">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sabtu</span>
                  <span className="text-muted-foreground">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Minggu</span>
                  <span className="text-muted-foreground">Tutup</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Lokasi Kami</h2>
          <div className="rounded-lg overflow-hidden h-[400px] shadow-md">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.82296752929689%2C-6.229925834441521%2C106.83369636535646%2C-6.224083742574898&amp;layer=mapnik"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="BRICTION Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
