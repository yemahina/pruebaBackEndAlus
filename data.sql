DROP DATABASE alus;

CREATE DATABASE alus;

use alus

INSERT INTO categoria_producto (nombre_categoria) VALUES ("Tecnología");
INSERT INTO categoria_producto (nombre_categoria) VALUES ("Deporte");
INSERT INTO categoria_producto (nombre_categoria) VALUES ("Estilo de vida");

INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Apple iPhone 13 128gb, Color Negro", "Consigue antes que todos tu nuevo iPhone 13 128gb, Color Negro, cuenta con excelente procesardor y una cámara sorprendente.", 24000, "https://www.alus.com.mx/assets/PT/iphone.jpg", 1);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Samsung Galaxy S21+", "Dispositivo movil marca Samsung 128gb, Color Perla, con una cámara que te hará tomar fotos increíbles.", 20000, "https://www.alus.com.mx/assets/PT/samsung.jpg", 1);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Audífonos Sony", "La mejor calidad de audio, con la confianza de siempre.", 800, "https://www.alus.com.mx/assets/PT/sony.jpg", 1);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Smartwatch - pantalla LED", "Su batería rinde hasta por dos semanas, su pantalla dará color a tu día a día.", 4650, "https://www.alus.com.mx/assets/PT/smartwatch.jpg", 1);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Nintendo Switch PRO 64gb Blanco", "Lleva el entretenimiento a todos lados con la mejor consola dela actualidad", 8700, "https://www.alus.com.mx/assets/PT/nintendo.jpg", 1);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Mancuernas de 7kg", "Ejércitate desde la comodidad de tu hogar.", 530, "https://www.alus.com.mx/assets/PT/mancuernas.jpg", 2);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Balón de basketball", "Lleva momentos  de alegría a tu familia con este balón.", 270, "https://www.alus.com.mx/assets/PT/balon.jpg", 2);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Gorra de Natación", "Silicón de excelente calidad, duradera y no permite el filtrado del agua.", 180, "https://www.alus.com.mx/assets/PT/gorra.jpg", 2);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Maleta 10kg", "Pequeña por fuera y espaciosa por dentro.", 900, "https://www.alus.com.mx/assets/PT/maleta.jpg", 3);
INSERT INTO catalogo_producto (nombre, descripcion, costo, url_foto, id_categoria_producto) VALUES ("Reloj despertador moderno", "Con este nuevo reloj despertador nunca más se te hará tarde para llegar temprano a donde sea.", 1370, "https://www.alus.com.mx/assets/PT/reloj.jpg", 3);