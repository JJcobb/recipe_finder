-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: sulley.cah.ucf.edu
-- Generation Time: Apr 29, 2017 at 01:45 PM
-- Server version: 5.5.54-0ubuntu0.14.04.1
-- PHP Version: 7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dig4503group4`
--

-- --------------------------------------------------------

--
-- Table structure for table `favrecipes`
--

CREATE TABLE `favrecipes` (
  `userid` int(30) NOT NULL,
  `recipeid` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favrecipes`
--

INSERT INTO `favrecipes` (`userid`, `recipeid`) VALUES
(5, 106),
(5, 616860),
(12, 43),
(2, 516338);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(15) NOT NULL,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(2, 'stollk', 'stollk', 'stolleyk@knights.ucf.edu'),
(5, 'jacob', 'pass', 'jacob_vogelbacher@knights.ucf.'),
(9, 'jacobv', 'pass', 'jacob_vogelbacher@knights.ucf.'),
(10, 'jacob2', 'jacob2', 'jacob_vogelbacher@knights.ucf.'),
(11, 'jacob3', 'password', 'sdfdx1@ssds.com'),
(12, 'anthony', 'nguyen', 'bob@email.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
