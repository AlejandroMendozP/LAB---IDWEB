-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 24-12-2025 a las 06:46:46
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `socios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `tipo_documento` enum('dni','carnetDeExtranjeria','pasaporte') NOT NULL,
  `numero_documento` varchar(20) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` enum('Masculino','Femenino') NOT NULL,
  `email` varchar(200) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `contraseña` varchar(200) NOT NULL,
  `tarjeta` enum('credito','debito') NOT NULL,
  `numero_tarjeta` varchar(16) NOT NULL,
  `cvv` varchar(3) NOT NULL,
  `fecha_de_vencimiento` varchar(7) NOT NULL,
  `paquete` enum('Infantil','Adulto') NOT NULL,
  `terminosNoticias` tinyint(1) NOT NULL DEFAULT '0',
  `terminoTyC` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `tipo_documento`, `numero_documento`, `fecha_nacimiento`, `genero`, `email`, `direccion`, `telefono`, `contraseña`, `tarjeta`, `numero_tarjeta`, `cvv`, `fecha_de_vencimiento`, `paquete`, `terminosNoticias`, `terminoTyC`) VALUES
(1, 'Alejandro Jesus', 'Mendoza Pantigoso', 'dni', '61234705', '2007-10-12', 'Masculino', 'itsnotalejobarca20@gmail.com', 'calle colón 159, Quinta don Mateo, casa 3', '999999999', '51aa8f7f35a1d0a8da0f6f3479d68363ee8577b64b98760a4da3b175520def29', 'credito', '1234567898765432', '123', '2025-12', 'Infantil', 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
