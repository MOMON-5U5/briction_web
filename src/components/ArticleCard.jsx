
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="article-card"
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {article.category && (
            <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {article.category}
            </span>
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-2">{article.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
          </div>
          <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Link to={`/articles/${article.slug}`} className="w-full">
            <Button variant="outline" className="w-full">
              Baca Selengkapnya
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ArticleCard;
