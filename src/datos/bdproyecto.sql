-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2024 at 12:51 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdproyecto`
--

-- --------------------------------------------------------

--
-- Table structure for table `preciosrunescape`
--

CREATE TABLE `preciosrunescape` (
  `id` int NOT NULL,
  `juego` enum('OSRS','RS3') DEFAULT NULL,
  `tipo_precio` enum('compra','venta') DEFAULT NULL,
  `precio` decimal(10,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `preciosrunescape`
--

INSERT INTO `preciosrunescape` (`id`, `juego`, `tipo_precio`, `precio`) VALUES
(1, 'OSRS', 'compra', 0.1450),
(2, 'OSRS', 'venta', 0.1650),
(3, 'RS3', 'compra', 0.0100),
(4, 'RS3', 'venta', 0.0150);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `preciosrunescape`
--
ALTER TABLE `preciosrunescape`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `preciosrunescape`
--
ALTER TABLE `preciosrunescape`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
