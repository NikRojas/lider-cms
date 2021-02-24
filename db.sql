-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 24-02-2021 a las 10:47:32
-- Versión del servidor: 5.7.33-0ubuntu0.16.04.1
-- Versión de PHP: 7.2.28-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lider`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `about_customer_support`
--

CREATE TABLE `about_customer_support` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci,
  `description_en` text COLLATE utf8mb4_unicode_ci,
  `index` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `about_customer_support`
--

INSERT INTO `about_customer_support` (`id`, `title_es`, `title_en`, `description_es`, `description_en`, `index`, `created_at`, `updated_at`) VALUES
(1, 'Comunicate con nosotros', 'Contact us', '<p>Al teléfono (511) 208-0979 en horario de oficina (de Lunes a Viernes de 9am-1pm y 2pm-6pm) o podrán enviarnos un correo electrónico a servicioalcliente@lider.com.pe</p>', '<p>By phone (511) 208-0979 during office hours (Monday to Friday from 9 am-1pm and 2 pm-6pm) or you can send us an email to servicioalcliente@lider.com.pe</p>', 1, '2021-02-19 02:09:26', '2021-02-19 02:09:26'),
(2, 'Inspección', 'Inspection', '<p class="ql-align-justify">Se realizará una visita de inspección para evaluar el reclamo y de ser el caso se programaran los trabajos necesarios en un plazo de 15 días aproximadamente.</p>', '<p>An inspection visit will be made to evaluate the claim and, if applicable, the necessary work will be scheduled within approximately 15 days.</p>', 2, '2021-02-19 02:09:50', '2021-02-19 02:10:28'),
(3, 'Casos de emergencia', 'Cases of emergency', '<p>Al teléfono: 994 830 513. Se considera como EMERGENCIA a un problema de inundación, ausencia total de electricidad o alguna falla que impida el uso de los ascensores.</p>', '<p>By phone: 994 830 513. An EMERGENCY is considered to be a problem of flooding, total absence of electricity or some failure that prevents the use of the elevators.</p>', 3, '2021-02-19 02:10:11', '2021-02-19 02:10:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `about_projects_finished`
--

CREATE TABLE `about_projects_finished` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `index` int(11) NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci,
  `description_en` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `about_projects_finished`
--

INSERT INTO `about_projects_finished` (`id`, `name`, `active`, `index`, `image`, `description_es`, `description_en`, `created_at`, `updated_at`) VALUES
(1, '2002', 1, 1, 'pf-1613744063602fc7bfdccaa.jpg', '<p>Proyecto del Centro Comercial Mega Plaza en Independencia ubicado en una zona céntrica de Lima.</p>', '<p>Project for the Mega Plaza Shopping Center in Independencia located in a central area of Lima.</p>', '2021-02-19 14:14:23', '2021-02-19 14:14:23'),
(2, '2003', 1, 2, 'pf-1613744391602fc9076bb1d.jpg', '<p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">Paseo de los Andes – Pueblo Libre</span></p>', '<p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">Paseo de los Andes – Pueblo Libre</span></p>', '2021-02-19 14:19:51', '2021-02-19 14:19:51'),
(3, '2004', 1, 3, 'pf-1613744413602fc91d17761.jpg', '<p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">Olivaria Casa Club – Miraflores </span></p>', '<p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">Olivaria Casa Club – Miraflores </span></p>', '2021-02-19 14:20:13', '2021-02-19 14:20:13'),
(4, '2005', 1, 4, 'pf-1613744429602fc92d5dce7.jpg', '<p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">Praderas de Surco – Surco</span></p>', '<p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">Praderas de Surco – Surco</span></p>', '2021-02-19 14:20:29', '2021-02-19 14:20:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `about_texts`
--

CREATE TABLE `about_texts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_es` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci,
  `description_en` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_video` text COLLATE utf8mb4_unicode_ci,
  `quantity` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `about_texts`
--

INSERT INTO `about_texts` (`id`, `title_es`, `title_en`, `description_es`, `description_en`, `image`, `icon`, `url_video`, `quantity`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Somos una empresa peruana líder en el sector inmobiliario', 'We are a leading Peruvian company in the real estate sector', '<p>con más de 18 años de experiencia.</p>', '<p>with more than 18 years of experience.</p>', NULL, NULL, NULL, NULL, 'first-block-1', '2021-02-19 02:01:33', '2021-02-19 02:02:26'),
(2, NULL, NULL, NULL, NULL, 'f2-1613744338602fc8d29b49c.jpg', NULL, NULL, NULL, 'first-block-2', '2021-02-19 02:01:33', '2021-02-19 14:18:58'),
(3, NULL, NULL, '<p>Basándonos en las necesidades del mercado, desarrollamos proyectos y prestamos servicios inmobiliarios con alto valor agregado a precio justo.</p>', '<p>Based on the needs of the market, we develop projects and provide real estate services with high added value at a fair price.</p>', NULL, NULL, NULL, NULL, 'first-block-3', '2021-02-19 02:01:33', '2021-02-19 02:03:24'),
(4, NULL, NULL, NULL, NULL, 'f4-1613700204602f1c6cd92ff.jpg', NULL, NULL, NULL, 'first-block-4', '2021-02-19 02:01:33', '2021-02-19 02:03:24'),
(5, NULL, NULL, '<p>Queremos ser reconocidos como un ejemplo de Empresa Socialmente Responsable.</p>', '<p>We want to be recognized as an example of a Socially Responsible Company.</p>', NULL, NULL, NULL, NULL, 'first-block-5', '2021-02-19 02:01:33', '2021-02-19 02:04:41'),
(6, NULL, NULL, NULL, NULL, 'f6-1613700281602f1cb9897c3.jpg', NULL, NULL, NULL, 'first-block-6', '2021-02-19 02:01:33', '2021-02-19 02:04:41'),
(7, NULL, NULL, '<p>Familias felices que respalda su experiencia.</p>', '<p>Happy families that endorse your experience.</p>', NULL, NULL, NULL, '8,500', 'first-block-7', '2021-02-19 02:01:33', '2021-02-19 02:04:41'),
(8, NULL, NULL, '<p>Proyectos entregados</p>', '<p>Projects delivered</p>', NULL, 'f8-1613700362602f1d0a39674.png', NULL, '+30', 'first-block-8', '2021-02-19 02:01:33', '2021-02-19 02:06:02'),
(9, 'Compromiso con la calidad', 'Commitment to quality', '<p>Durante la construcción, la supervisión permanente del equipo de ingenieros garantizan el cumplimientode nuestros procesos constructivos a través de un riguroso control de campo. De la misma manera, en cada etapa de la ejecución de la obra, constantemente comprobamos el cumplimiento de nuestros protocolos de calidad. Asimismo, utilizamos proveedores reconocidos en el mercado, con lo cual garantizamos una construcción sólida, segura y de calidad.</p>', '<p>During construction, the permanent supervision of the engineering team guarantees compliance with our construction processes through rigorous field control. In the same way, at each stage of the execution of the work, we constantly check compliance with our quality protocols. Likewise, we use recognized suppliers in the market, with which we guarantee a solid, safe and quality construction.</p>', NULL, NULL, NULL, NULL, 'compromise', '2021-02-19 02:06:27', '2021-02-19 02:06:27'),
(10, 'Proyectos entregados', 'Projects delivered', NULL, NULL, NULL, NULL, NULL, NULL, 'project-finished', '2021-02-19 02:06:40', '2021-02-19 02:06:40'),
(11, 'Garantía Líder', 'Warranty Líder', '<p class="ql-align-justify">Líder pone a su disposición el área de Servicio al Cliente, por medio de este servicio atendemos las consultas de nuestros clientes después de la entrega de sus Unidades Inmobiliarias o Áreas Comunes.</p>', '<p>Líder puts at your disposal the Customer Service area, through this service we attend to the queries of our clients after the delivery of their Real Estate Units or Common Areas.</p>', 'aw-1613740843602fbb2bb06cb.jpg', NULL, NULL, NULL, 'warranty', '2021-02-19 02:08:17', '2021-02-19 13:20:43'),
(12, 'Servicio al Cliente', 'Customer service', '<p>Líder pone a su disposición el área de Servicio al Cliente, por medio de este servicio atendemos las consultas de nuestros clientes después de la entrega de sus Unidades Inmobiliarias o Áreas Comunes.</p>', '<p>Líder puts at your disposal the Customer Service area, through this service we attend to the queries of our clients after the delivery of their Real Estate Units or Common Areas.</p>', NULL, NULL, NULL, NULL, 'customer-support', '2021-02-19 02:08:54', '2021-02-19 02:08:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `about_warranty_elements`
--

CREATE TABLE `about_warranty_elements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `about_warranty_elements`
--

INSERT INTO `about_warranty_elements` (`id`, `description_es`, `description_en`, `index`, `created_at`, `updated_at`) VALUES
(1, '<p>Para facilitar la comunicación entre el área de Servicio al Cliente y nuestros clientes entregamos a cada uno de los propietarios un carnet con un código de usuario único.</p>', '<p>To facilitate communication between the Customer Service area and our clients, we give each owner a card with a unique user code.</p>', 1, '2021-02-19 02:11:57', '2021-02-19 02:11:57'),
(2, '<p class="ql-align-justify">Otorgamos un manual del cliente en donde encontrarán recomendaciones de uso y mantenimiento de su propiedad.</p>', '<p>We provide a customer manual where you will find recommendations for the use and maintenance of your property.</p>', 2, '2021-02-19 15:23:31', '2021-02-19 15:24:05'),
(3, '<p class="ql-align-justify">Planos de las instalaciones eléctricas, sanitarias y de arquitectura del inmueble adquirido; los cuales son preparados especialmente para cada unidad inmobiliaria.</p>', '<p>Plans of the electrical, sanitary and architectural installations of the acquired property; which are specially prepared for each real estate unit.</p>', 3, '2021-02-19 15:24:34', '2021-02-19 15:24:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `advisors`
--

CREATE TABLE `advisors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `advisors`
--

INSERT INTO `advisors` (`id`, `name`, `email`, `mobile`, `avatar`, `created_at`, `updated_at`) VALUES
(3, 'Vanessa Lobato Reyna', 'vlobato@lider.com.pe', '965765075', NULL, '2021-02-19 16:29:25', '2021-02-19 16:29:25'),
(4, 'Karina Ysla Coronel', 'kysla@lider.com.pe', '989530139', NULL, '2021-02-19 16:29:51', '2021-02-19 16:29:51'),
(5, 'Marco Espinoza Barrientos', 'mespinoza@lider.com.pe', '998118222', NULL, '2021-02-19 16:30:18', '2021-02-19 16:30:18'),
(6, 'Enzo Peceros López', 'epeceros@lider.com.pe', '943734854', NULL, '2021-02-19 16:30:43', '2021-02-19 16:30:43'),
(7, 'Antonio Reategui Boza', 'areategui@lider.com.pe', '938327420', NULL, '2021-02-19 16:31:06', '2021-02-19 16:31:53'),
(8, 'Percy Mariños Muñoz', 'pmarinos@lider.com.pe', '938327414', NULL, '2021-02-19 16:32:15', '2021-02-19 16:32:15'),
(9, 'Hector Damian Vilca', 'hdamian@lider.com.pe', '938327408', NULL, '2021-02-19 16:32:34', '2021-02-19 16:32:34'),
(10, 'Patricia Vera Olivos', 'pvera@lider.com.pe', '998142376', NULL, '2021-02-23 23:46:18', '2021-02-23 23:46:18'),
(11, 'Daniel Fernandez Prada', 'dfernandezp@lider.com.pe', '998170246', NULL, '2021-02-23 23:46:39', '2021-02-23 23:46:39'),
(12, 'Juan Manuel Aliaga', 'jaliaga@lider.com.pe', '940414753', NULL, '2021-02-23 23:47:11', '2021-02-23 23:47:11'),
(13, 'Elda Carpio Vera', 'ecarpio@lider.com.pe', '958798042', NULL, '2021-02-23 23:48:55', '2021-02-23 23:48:55'),
(14, 'Victor Lamela Bejarano', 'vlamela@lider.com.pe', '969978812', NULL, '2021-02-23 23:49:35', '2021-02-23 23:49:35'),
(15, 'Jorge Narvaez Gonzales', 'jnarvaez@lider.com.pe', '951366108', NULL, '2021-02-23 23:50:03', '2021-02-23 23:50:03'),
(16, 'Guillermo Veracierta', 'gveracierta@lider.com.pe', '943399102', NULL, '2021-02-23 23:50:51', '2021-02-23 23:50:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `applicants`
--

CREATE TABLE `applicants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci,
  `pdf` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banks`
--

CREATE TABLE `banks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number_account` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cci` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `banks`
--

INSERT INTO `banks` (`id`, `name`, `logo`, `number_account`, `cci`, `created_at`, `updated_at`) VALUES
(1, 'BBVA', 'b-1613749264602fdc100fcf3.png', NULL, NULL, '2021-02-19 15:33:07', '2021-02-19 15:41:04'),
(2, 'BCP', 'b-1613749022602fdb1e4f2fd.png', NULL, NULL, '2021-02-19 15:37:02', '2021-02-19 15:37:02'),
(3, 'Scotiabank', 'b-16141235966035924c62e7e.png', NULL, NULL, '2021-02-23 23:39:56', '2021-02-23 23:39:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bonds`
--

CREATE TABLE `bonds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `bonds`
--

INSERT INTO `bonds` (`id`, `name`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'Bono Verde', 'b-1613751764602fe5d4e4e9c.png', '2021-02-19 16:22:44', '2021-02-19 16:22:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cami`
--

CREATE TABLE `cami` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_video` text COLLATE utf8mb4_unicode_ci,
  `images` json NOT NULL,
  `title_projects_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_projects_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cami`
--

INSERT INTO `cami` (`id`, `logo`, `title_es`, `title_en`, `description_es`, `description_en`, `url_video`, `images`, `title_projects_es`, `title_projects_en`, `created_at`, `updated_at`) VALUES
(1, 'c-1613741388602fbd4cd43bb.png', 'Somos CAMI aprendiendo a convivir con valores', 'We are CAMI learning to live with values', '<p class="ql-align-justify">Nuestro compromiso con el cliente no concluye con la entrega de su departamento. Con ello inicia una etapa crucial y de gran expectativa, la búsqueda de una mejor calidad de vida y una nueva experiencia en comunidad.</p><p class="ql-align-justify">Esta vida en comunidad implica brindar y propiciar condiciones que logren un equilibrio entre lo material y lo social, siendo esto último el reto que asume el Grupo LÍDER a través de su programa&nbsp;<strong style="color: rgb(14, 89, 131);">Comunidad Amiga CAMI.</strong></p><p class="ql-align-justify">Para ello CAMI identifica las necesidades de los residentes en los condominios para fomentar oportunamente y fortalecer la sostenibilidad social y organización condominal de los residentes. Mediante el permanente contacto con la comunidad se busca lograr el reconocimiento del otro, propiciando la confraternidad e integración, generando un espacio donde se valore la recreación y el encuentro, a través del uso adecuado del tiempo libre. Esto se complementa con la generación de conocimientos y habilidades que permiten prever conflictos, y así facilitar una sana convivencia.</p>', '<p class="ql-align-justify">Our commitment to the client does not end with the delivery of your department. With this, a crucial stage of great expectation begins, the search for a better quality of life and a new experience in community.</p><p class="ql-align-justify">This community life implies providing and fostering conditions that achieve a balance between the material and the social, the latter being the challenge assumed by the LEADING Group through its CAMI Friend Community program.</p><p class="ql-align-justify">For this, CAMI identifies the needs of the residents in the condominiums to promptly promote and strengthen the social sustainability and community organization of the residents. Through permanent contact with the community, it seeks to achieve recognition of the other, fostering fellowship and integration, generating a space where recreation and encounter are valued, through the appropriate use of free time. This is complemented with the generation of knowledge and skills that allow to anticipate conflicts, and thus facilitate a healthy coexistence.</p>', NULL, '"[\\"cd-11613741388602fbd4cd474d.png\\",\\"cd-21613741388602fbd4cd4a8d.png\\",\\"cd-31613741388602fbd4cd4c77.png\\",\\"cd-41613741388602fbd4cd4e1d.png\\"]"', 'CAMI interviene a través de dos proyectos:', 'CAMI intervenes through two projects', '2021-02-19 13:29:48', '2021-02-24 01:49:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cami_elements`
--

CREATE TABLE `cami_elements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_video_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_video_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_elements_es` text COLLATE utf8mb4_unicode_ci,
  `title_elements_en` text COLLATE utf8mb4_unicode_ci,
  `url_video` text COLLATE utf8mb4_unicode_ci,
  `index` int(11) NOT NULL,
  `elements_es` json NOT NULL,
  `elements_en` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cami_elements`
--

INSERT INTO `cami_elements` (`id`, `name_es`, `name_en`, `description_es`, `description_en`, `image`, `description_video_es`, `description_video_en`, `title_elements_es`, `title_elements_en`, `url_video`, `index`, `elements_es`, `elements_en`, `created_at`, `updated_at`) VALUES
(1, 'Desarrollo Sociocultural', 'Sociocultural Development', '<p>Fomenta y promueve entre los niños, adolescentes y adultos la práctica de valores para una sana convivencia, el uso adecuado del tiempo libre, la revaloración del juego y el fortalecimiento de las relaciones humanas a través del <strong>desarrollo de actividades lúdicas, recreativas y artísticas.</strong></p>', '<p>It encourages and promotes among children, adolescents and adults the practice of values for a healthy coexistence, the proper use of free time, the revaluation of play and the strengthening of human relationships through the<strong> development of recreational, recreational and artistic activities.</strong></p>', 'p-1613741705602fbe89627d0.jpg', '<p class="ql-align-justify">Cuenta con un espacio físico acogedor en&nbsp;<strong style="color: rgb(14, 89, 131);">cada condominio a cargo de una monitora de desarrollo socio cultural,</strong>&nbsp;quien en coordinación con los especialistas de los diversos talleres, desarrollan las distintas actividades artísticas, deportivas y recreativas.</p><p class="ql-align-justify">Por su carácter formativo y de sensibilización, apunta a la construcción de ciudadanía en base a la práctica de valores y el reconocimiento del otro, al respeto mutuo y de las normas. Así se generan espacios acogedores de comunicación e integración entre las personas, lo cual se refleja en las buenas relaciones entre vecinos,&nbsp;<strong style="color: rgb(14, 89, 131);">la comunicación y organización; como también en el cuidado del condominio y sus áreas comunes.</strong></p>', '<p>It has a cozy physical space in <strong>each condominium in charge of a socio-cultural development monitor</strong>, who in coordination with the specialists of the various workshops, develop the different artistic, sports and recreational activities.</p><p><br></p><p>Due to its formative and awareness-raising nature, it aims to build citizenship based on the practice of values and the recognition of the other, mutual respect and the norms. Thus, welcoming spaces for communication and integration between people are generated, which is reflected in good relations between neighbors,<strong> communication and organization; as well as in the care of the condominium and its common areas.</strong></p>', 'Metodología de animación sociocultural', 'Sociocultural animation methodology', NULL, 1, '[{"file": "is-11613741705602fbe8961d82.png", "icon": "isc-11613741705602fbe89622c7.png", "title_es": "Sensibilización", "description_es": "<p>Promovemos la participación activa de los residentes en las actividades desarrolladas por CAMI para hacer del condominio un lugar acogedor para todos.</p>"}, {"file": "is-21613742315602fc0ebd9fa8.png", "icon": "isc-21613742315602fc0ebda50f.png", "title_es": "Espacios Acogedores", "description_es": "<p>Promovemos la participación activa de los residentes en las actividades desarrolladas por CAMI para hacer del condominio un lugar acogedor para todos.</p>"}, {"file": "is-31613742315602fc0ebda5a4.png", "icon": "isc-31613742315602fc0ebda9c3.png", "title_es": "Encuentros", "description_es": "<p>Facilitamos espacios de reflexión y orientación a los padres sobre temas relacionados con el desarrollo de sus hijos.</p>"}]', '[{"file": "is-11613741705602fbe8961d82.png", "icon": "isc-11613741705602fbe89622c7.png", "title_en": "Sensitization", "description_en": "<p>We promote the active participation of residents in the activities developed by CAMI to make the condominium a welcoming place for everyone.</p>"}, {"file": "is-21613742315602fc0ebd9fa8.png", "icon": "isc-21613742315602fc0ebda50f.png", "title_en": "Cozy spaces", "description_en": "<p>We promote the active participation of residents in the activities developed by CAMI to make the condominium a welcoming place for everyone.</p>"}, {"file": "is-31613742315602fc0ebda5a4.png", "icon": "isc-31613742315602fc0ebda9c3.png", "title_en": "Encounters", "description_en": "<p>We provide spaces for reflection and guidance for parents on issues related to the development of their children.</p>"}]', '2021-02-19 13:35:05', '2021-02-19 13:45:15'),
(2, 'Gestión Comunitaria', 'Community Management', '<p>Fomenta la ciudadanía responsable entre los residentes, basándose en el cumplimiento del reglamento interno y las normas de convivencia, a través de actividades de integración y capacitación que fortalezcan sus habilidades de liderazgo, organización y gestión. Trabaja con la Junta de Propietarios (propietarios del condominio) y fortalece a la Junta Directiva (representantes elegidos democráticamente), brindándole a esta última un acompañamiento periódico.</p>', '<pre class="ql-syntax" spellcheck="false">Promotes responsible citizenship among residents, based on compliance with internal regulations and coexistence standards, through integration and training activities that strengthen their leadership, organization and management skills. It works with the Board of Owners (owners of the condominium) and strengthens the Board of Directors (democratically elected representatives), providing the latter with periodic monitoring.\n</pre><p><br></p>', 'p-161417884560366a1dea8dc.jpg', '<p>"El efecto de la intervención se refleja en una Junta Directiva mejor organizada, con liderazgo y que respeta el reglamento interno; así como en residentes que respetan sus normas de convivencia"</p>', '<p>"The effect of the intervention is reflected in a better organized Board of Directors, with leadership and that respects the internal regulations; as well as in residents who respect their rules of coexistence"</p>', 'La intervención recae sobre las/los monitoras/es de gestión comunitaria y cuenta con tres fases:', 'The intervention falls on the community management monitors and has three phases:', NULL, 2, '[{"file": "is-1161417884560366a1de68f6.png", "icon": "isc-1161417884560366a1dea272.png", "title_es": "Inducción", "description_es": "<p>En la inducción se propicia la interrelación e integración entre vecinos para fomentar su participación, organización y compromiso.</p>"}]', '[{"file": "is-1161417884560366a1de68f6.png", "icon": "isc-1161417884560366a1dea272.png", "title_en": "Induction", "description_en": "<p>Induction encourages interrelation and integration between neighbors to encourage their participation, organization and commitment.</p>"}]', '2021-02-24 15:00:45', '2021-02-24 15:02:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name_es`, `name_en`, `slug_es`, `slug_en`, `created_at`, `updated_at`) VALUES
(1, 'Tips', 'Tips', 'tips', 'tips', '2021-02-18 21:34:22', '2021-02-18 21:34:22'),
(2, 'Inversión', 'Investment', 'inversion', 'investment', '2021-02-18 21:36:41', '2021-02-18 21:36:41'),
(3, 'Life Style', 'Life Style', 'life-style', 'life-style', '2021-02-18 21:36:58', '2021-02-18 21:36:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certifications`
--

CREATE TABLE `certifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `certifications`
--

INSERT INTO `certifications` (`id`, `name`, `image`, `index`, `created_at`, `updated_at`) VALUES
(2, 'Cert 2', 'p-1613673766602eb526cea8b.png', 2, '2021-02-18 18:42:46', '2021-02-18 18:42:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `complaints_book`
--

CREATE TABLE `complaints_book` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_type_id` bigint(20) UNSIGNED NOT NULL,
  `code_ubigeo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `good_contracted_amount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `good_contracted_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `claim_detail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `claim_order` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider_detail` text COLLATE utf8mb4_unicode_ci,
  `claim_type_id` bigint(20) UNSIGNED NOT NULL,
  `good_contracted_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `content`
--

CREATE TABLE `content` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  `value_es` longtext COLLATE utf8mb4_unicode_ci,
  `value_en` longtext COLLATE utf8mb4_unicode_ci,
  `master_section_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `content`
--

INSERT INTO `content` (`id`, `field`, `value`, `value_es`, `value_en`, `master_section_id`, `created_at`, `updated_at`) VALUES
(1, 'title', '', 'Últimas notas', 'Latest posts', 2, '2021-02-18 20:43:52', '2021-02-18 20:43:52'),
(2, 'image', 'p-1613681228602ed24c48963.jpg', NULL, NULL, 1, '2021-02-18 20:47:08', '2021-02-18 20:47:08'),
(3, 'image', 'p-1613681447602ed3272ef39.jpg', NULL, NULL, 17, '2021-02-18 20:50:47', '2021-02-18 20:50:47'),
(4, 'title', '', 'Nosotros', 'About us', 17, '2021-02-18 20:50:47', '2021-02-18 20:50:47'),
(5, 'image', 'p-1613681484602ed34c2116a.jpg', NULL, NULL, 16, '2021-02-18 20:51:24', '2021-02-18 20:51:24'),
(6, 'title', '', 'Proyectos', 'Projects', 16, '2021-02-18 20:51:24', '2021-02-18 20:51:24'),
(7, 'image', 'p-1613681497602ed35914df0.jpg', NULL, NULL, 18, '2021-02-18 20:51:37', '2021-02-18 20:51:37'),
(8, 'title', '', 'Cita Online', '', 18, '2021-02-18 20:51:37', '2021-02-18 20:51:37'),
(9, 'image', 'p-1613681543602ed3870422d.jpg', NULL, NULL, 5, '2021-02-18 20:52:23', '2021-02-18 20:52:23'),
(10, 'image', 'p-1613681744602ed450ccc22.jpg', NULL, NULL, 4, '2021-02-18 20:55:44', '2021-02-18 20:55:44'),
(11, 'title', '', 'Contacto', 'Contact us', 4, '2021-02-18 20:55:44', '2021-02-18 20:55:44'),
(12, 'image', 'p-1613684412602edebc3a2cf.jpg', NULL, NULL, 3, '2021-02-18 21:40:12', '2021-02-18 21:40:12'),
(13, 'title', '', 'Comunidad CAMI', 'CAMI Community', 3, '2021-02-18 21:40:12', '2021-02-18 21:40:12'),
(14, 'image', 'p-1613684429602edecdb1477.jpg', NULL, NULL, 6, '2021-02-18 21:40:29', '2021-02-18 21:40:29'),
(15, 'title', '', 'Blog', 'Blog', 6, '2021-02-18 21:40:29', '2021-02-18 21:40:29'),
(16, 'image', 'p-1613684463602edeefa60d8.jpg', NULL, NULL, 8, '2021-02-18 21:41:03', '2021-02-18 21:41:03'),
(17, 'title', '', 'Testimoniales', 'Testimonials', 8, '2021-02-18 21:41:03', '2021-02-18 21:41:03'),
(18, 'title', '', 'Conoce lo que dicen nuestros vecinos Líder', 'Know what our Líder neighbors say', 9, '2021-02-18 21:43:19', '2021-02-18 21:43:19'),
(19, 'description', '', '<p>Líder <span style="color: rgb(71, 71, 71); background-color: rgb(255, 255, 255);">Grupo Constructor, cuenta con más de 18 años de experiencia haciendo felices a muchas familias.</span></p>', '<p>Líder Construction Group<span style="color: rgb(71, 71, 71); background-color: rgb(255, 255, 255);">, </span>has more than 18 years of experience making many families happy.</p>', 9, '2021-02-18 21:43:19', '2021-02-18 21:43:19'),
(20, 'image', 'p-1613684634602edf9a647dc.jpg', NULL, NULL, 10, '2021-02-18 21:43:54', '2021-02-18 21:43:54'),
(21, 'title', '', 'Vende tu terreno', 'Sell your land', 10, '2021-02-18 21:43:54', '2021-02-18 21:43:54'),
(22, 'image', 'p-1613684651602edfab0fb83.jpg', NULL, NULL, 12, '2021-02-18 21:44:11', '2021-02-18 21:44:11'),
(23, 'title', '', 'Trabaja con nosotros', 'Work with us', 12, '2021-02-18 21:44:11', '2021-02-18 21:44:11'),
(24, 'image', 'p-1613684699602edfdb7ef36.jpg', NULL, NULL, 20, '2021-02-18 21:44:59', '2021-02-18 21:44:59'),
(25, 'title', '', 'Políticas de Privacidad', 'Privacy policies', 20, '2021-02-18 21:44:59', '2021-02-18 21:44:59'),
(26, 'image', 'p-1613684725602edff5d8720.jpg', NULL, NULL, 14, '2021-02-18 21:45:25', '2021-02-18 21:45:25'),
(27, 'title', '', 'Términos y condiciones', 'Terms and Conditions', 14, '2021-02-18 21:45:25', '2021-02-18 21:45:25'),
(28, 'description', '', '<p class="ql-align-justify"><strong>LÍDER GRUPO CONSTRUCTOR</strong>, entidad dueña de la marca&nbsp;<strong>LÍDER</strong>, garantiza la seguridad y confidencialidad en el tratamiento de la información que nos brindes, considerada datos personales de acuerdo a la Ley 29733 - Ley de Protección de Datos Personales, su Reglamento, aprobado por Decreto Supremo N° 003-2013-JUS y/o sus normas reglamentarias, complementarias, modificatorias, sustitutorias y demás disposiciones aplicables (en adelante, la Ley).</p><p class="ql-align-justify">Toda información proporcionada a&nbsp;<strong>LÍDER</strong>&nbsp;a través de su sitio web o mediante las campañas digitales de Facebook o Google será objeto de tratamiento automatizado e incorporada en una o más bases de datos de las que&nbsp;<strong>LÍDER</strong>&nbsp;será titular y responsable, conforme a los términos previstos por la Ley.</p><p class="ql-align-justify">Al confirmar su consentimiento el usuario otorga autorización libre, expresa e inequívoca a&nbsp;<strong>LÍDER</strong>&nbsp;para realizar tratamiento y hacer uso de la información personal que éste proporcione a&nbsp;<strong>LÍDER</strong>&nbsp;cuando haga una consulta en línea, participe en promociones comerciales, envíe consultas o comunique incidencias, y en general cualquier interacción web, además de la información que se derive del uso de productos y/o servicios que pudiera tener contratados con&nbsp;<strong>LÍDER</strong>&nbsp;y de cualquier información pública o que pudiera recoger a través de fuentes de acceso público, incluyendo aquellos a los que&nbsp;<strong>LÍDER</strong>&nbsp;tenga acceso como consecuencia de su navegación por esta página web (en adelante, la “Información”) para las finalidades de envío de comunicaciones comerciales, comercialización de productos y servicios, y del mantenimiento de su relación contractual con&nbsp;<strong>LÍDER</strong>; todo ello de acuerdo a los términos que aquí se establecen.</p><p class="ql-align-justify">La política de privacidad de&nbsp;<strong>LÍDER</strong>&nbsp;le asegura al usuario el ejercicio de los derechos de información, acceso, actualización, inclusión, rectificación, supresión o cancelación, oposición y revocación del consentimiento, en los términos establecidos en la Ley. En cualquier momento, el usuario tendrá el derecho a solicitar a&nbsp;<strong>LÍDER</strong>&nbsp;el ejercicio de los derechos que le confiere la Ley, así como la revocación de su consentimiento según lo previsto en la Ley.</p><p class="ql-align-justify"><strong>LÍDER</strong>&nbsp;garantiza la confidencialidad en el tratamiento de los datos de carácter personal, así como haber adoptado los niveles de seguridad de protección de los datos personales, instalando todos los medios y adoptado todas las medidas técnicas, organizativas y legales a su alcance que garanticen la seguridad y eviten la alteración, pérdida, tratamiento o acceso no autorizado a los datos personales.</p><p class="ql-align-justify">Para cualquier consulta sobre los alcances de la política sobre protección de datos personales, o en caso los usuarios deseen ejercitar los derechos de información, de acceso, actualización, inclusión, rectificación, supresión o cancelación, oposición, a impedir el suministro, al tratamiento objetivo, u otros contemplados en la Ley sobre sus datos personales, podrán enviar un correo electrónico a: info@lider.com.pe</p><p class="ql-align-justify">La información recopilada será almacenada en un banco de datos de propiedad de&nbsp;<strong>LÍDER</strong>.</p>', '<p><strong>LÍDER GRUPO CONSTRUCTOR</strong>, the entity that owns the <strong>LÍDER </strong>brand, guarantees security and confidentiality in the treatment of the information you provide us, considered personal data according to Law 29733 - Personal Data Protection Law, its Regulations, approved by Supreme Decree N ° 003-2013-JUS and / or its regulatory, complementary, modifying, substitute norms and other applicable provisions (hereinafter, the Law).</p><p>All information provided to <strong>LÍDER </strong>through its website or through Facebook or Google digital campaigns will be subject to automated processing and incorporated into one or more databases of which LÍDER will be the owner and responsible, in accordance with the terms provided by the Law.</p><p>By confirming their consent, the user grants free, express and unequivocal authorization to <strong>LÍDER </strong>to carry out treatment and make use of the personal information that he provides to <strong>LÍDER </strong>when making an online inquiry, participating in commercial promotions, sending inquiries or reporting incidents, and in general any web interaction, in addition to the information derived from the use of products and / or services that may be contracted with <strong>LÍDER </strong>and any public information or that may be collected through publicly accessible sources, including those to which <strong>LÍDER </strong>has access as a result of browsing this website (hereinafter, the "Information") for the purposes of sending commercial communications, marketing products and services, and maintaining your contractual relationship with <strong>LÍDER</strong>; all in accordance with the terms established here.</p><p>The privacy policy of <strong>LÍDER </strong>assures the user the exercise of the rights of information, access, update, inclusion, rectification, deletion or cancellation, opposition and revocation of consent, in the terms established in the Law. At any time, the user You will have the right to request <strong>LÍDER </strong>to exercise the rights conferred by the Law, as well as the revocation of your consent as provided by the Law.</p><p><strong>LÍDER </strong>guarantees confidentiality in the treatment of personal data, as well as having adopted the security levels of protection of personal data, installing all the means and adopting all the technical, organizational and legal measures at its disposal that guarantee security and avoid the alteration, loss, treatment or unauthorized access to personal data.</p><p>For any query about the scope of the policy on personal data protection, or in case users wish to exercise the rights of information, access, update, inclusion, rectification, deletion or cancellation, opposition, to prevent the supply, to the objective treatment , or others contemplated in the Law on their personal data, may send an email to: info@lider.com.pe</p><p>The information collected will be stored in a data bank owned by <strong>LÍDER</strong>.</p>', 21, '2021-02-18 21:52:28', '2021-02-18 21:52:28'),
(29, 'title', '', 'Déjanos tu consulta', 'Leave us your query', 5, '2021-02-19 15:26:56', '2021-02-19 15:26:56'),
(30, 'description', '', '<p>Envianos tus datos y tu mensaje de consulta para que un asesor pueda resolverlo.</p>', '<p>Send us your data and your query message so that an advisor can solve it.</p>', 5, '2021-02-19 15:26:56', '2021-02-19 15:26:56'),
(31, 'background', 'p-161402805460341d1668c0d.jpg', NULL, NULL, 7, '2021-02-22 21:07:34', '2021-02-22 21:07:34'),
(32, 'image', 'p-161402805460341d166a1d4.png', NULL, NULL, 7, '2021-02-22 21:07:34', '2021-02-22 21:07:34'),
(34, 'title', '', 'Déjanos tus datos para agendarte una cita online.', 'Leave us your information to schedule an online appointment.', 19, '2021-02-24 01:18:35', '2021-02-24 01:18:35'),
(35, 'image', 'p-16141295156035a96b40688.jpg', NULL, NULL, 19, '2021-02-24 01:18:35', '2021-02-24 01:18:35'),
(37, 'image', 'p-16141505046035fb685f347.jpg', NULL, NULL, 11, '2021-02-24 07:08:24', '2021-02-24 07:08:24'),
(38, 'title', '', 'Sé parte de esta gran familia', '', 13, '2021-02-24 07:08:57', '2021-02-24 07:08:57'),
(39, 'image', 'p-16141505376035fb89b22de.jpg', NULL, NULL, 13, '2021-02-24 07:08:57', '2021-02-24 07:08:57'),
(40, 'title', '', 'Información del Propietario', '', 11, '2021-02-24 07:10:21', '2021-02-24 07:10:21'),
(41, 'description', '', '<p><span style="background-color: rgb(255, 255, 255); color: rgb(39, 39, 39);">Si quieres vender tu terreno, nosotros&nbsp;tenemos interés en comprarlo.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(39, 39, 39);">Comunícate con nosotros para que juntos encontremos la mejor alternativa de compra-venta beneficiosa para ambos, solo tienes que completar y enviar la ficha de registro adjunta.</span></p>', '', 11, '2021-02-24 07:10:21', '2021-02-24 07:10:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `email_destination`
--

CREATE TABLE `email_destination` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `leads_traditional` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `leads_videocall` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `leads_sale_land` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `leads_job` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `financing_options`
--

CREATE TABLE `financing_options` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `index` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `financing_options`
--

INSERT INTO `financing_options` (`id`, `name`, `active`, `index`, `created_at`, `updated_at`) VALUES
(1, 'Test 123', 1, 1, '2021-02-22 20:17:58', '2021-02-22 20:17:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `information`
--

CREATE TABLE `information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `central_phone` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `main_office` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `whatsapp_numbers` json DEFAULT NULL,
  `phone_numbers` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `information`
--

INSERT INTO `information` (`id`, `location`, `central_phone`, `main_office`, `email`, `billing_url`, `whatsapp_numbers`, `phone_numbers`, `created_at`, `updated_at`) VALUES
(1, 'Av. Manual Olguín 501 Piso 13, Santiago de Surco, Lima', '9541223', '4433434', 'info@lider.com.pe', 'http://apps.lider.com.pe:8090/Facturacion', '[{"number": "989898999", "department": "03"}]', '[{"number": "9556466", "department": "14"}, {"number": "4656566", "department": "15"}]', '2021-02-18 18:43:53', '2021-02-18 20:34:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leads`
--

CREATE TABLE `leads` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `document_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lead_source_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leads_sale_land`
--

CREATE TABLE `leads_sale_land` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `area` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leads_videocall`
--

CREATE TABLE `leads_videocall` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_number` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `schedule` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `advisor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_claims_type`
--

CREATE TABLE `master_claims_type` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_claims_type`
--

INSERT INTO `master_claims_type` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Reclamo', NULL, NULL),
(2, 'Queja', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_currencies`
--

CREATE TABLE `master_currencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` double(8,2) NOT NULL,
  `symbol` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `default` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_currencies`
--

INSERT INTO `master_currencies` (`id`, `name`, `abbreviation`, `value`, `symbol`, `default`, `created_at`, `updated_at`) VALUES
(1, 'Nuevo Sol Peruano', 'PEN', 1.00, 'S/', 1, NULL, NULL),
(2, 'Dolar Americano', 'USD', 3.51, '$', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_documents_type`
--

CREATE TABLE `master_documents_type` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_documents_type`
--

INSERT INTO `master_documents_type` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'DNI', 'Documento Nacional de Indentidad', NULL, NULL),
(2, 'CE', 'Carnet de Extranjería', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_fields`
--

CREATE TABLE `master_fields` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `variable` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `master_section_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_fields`
--

INSERT INTO `master_fields` (`id`, `name`, `variable`, `type`, `master_section_id`, `created_at`, `updated_at`) VALUES
(1, 'Imagen', 'image', 'image', 1, NULL, NULL),
(2, 'Título', 'title', 'input', 2, NULL, NULL),
(3, 'Fondo', 'image', 'image', 3, NULL, NULL),
(4, 'Título', 'title', 'input', 3, NULL, NULL),
(5, 'Fondo', 'image', 'image', 4, NULL, NULL),
(6, 'Título', 'title', 'input', 4, NULL, NULL),
(7, 'Título', 'title', 'input', 5, NULL, NULL),
(8, 'Descripción', 'description', 'editor_small', 5, NULL, NULL),
(9, 'Imagen', 'image', 'image', 5, NULL, NULL),
(10, 'Fondo', 'image', 'image', 6, NULL, NULL),
(11, 'Título', 'title', 'input', 6, NULL, NULL),
(12, 'Fondo', 'background', 'image', 7, NULL, NULL),
(13, 'Imagen', 'image', 'image', 7, NULL, NULL),
(14, 'Fondo', 'image', 'image', 8, NULL, NULL),
(15, 'Título', 'title', 'input', 8, NULL, NULL),
(16, 'Título', 'title', 'input', 9, NULL, NULL),
(17, 'Descripción', 'description', 'editor_small', 9, NULL, NULL),
(18, 'Fondo', 'image', 'image', 10, NULL, NULL),
(19, 'Título', 'title', 'input', 10, NULL, NULL),
(20, 'Título', 'title', 'input', 11, NULL, NULL),
(21, 'Descripción', 'description', 'editor_small', 11, NULL, NULL),
(22, 'Imagen', 'image', 'image', 11, NULL, NULL),
(23, 'Fondo', 'image', 'image', 12, NULL, NULL),
(24, 'Título', 'title', 'input', 12, NULL, NULL),
(25, 'Título', 'title', 'input', 13, NULL, NULL),
(26, 'Descripción', 'description', 'editor_small', 13, NULL, NULL),
(27, 'Imagen', 'image', 'image', 13, NULL, NULL),
(28, 'Fondo', 'image', 'image', 14, NULL, NULL),
(29, 'Título', 'title', 'input', 14, NULL, NULL),
(31, 'Descripción', 'description', 'editor_large', 15, NULL, NULL),
(32, 'Fondo', 'image', 'image', 16, NULL, NULL),
(33, 'Título', 'title', 'input', 16, NULL, NULL),
(34, 'Fondo', 'image', 'image', 17, NULL, NULL),
(35, 'Título', 'title', 'input', 17, NULL, NULL),
(36, 'Fondo', 'image', 'image', 18, NULL, NULL),
(37, 'Título', 'title', 'input', 18, NULL, NULL),
(38, 'Título', 'title', 'input', 19, NULL, NULL),
(39, 'Descripción', 'description', 'editor_small', 19, NULL, NULL),
(40, 'Imagen', 'image', 'image', 19, NULL, NULL),
(41, 'Fondo', 'image', 'image', 20, NULL, NULL),
(42, 'Título', 'title', 'input', 20, NULL, NULL),
(44, 'Descripción', 'description', 'editor_large', 21, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_good_contracted_type`
--

CREATE TABLE `master_good_contracted_type` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_good_contracted_type`
--

INSERT INTO `master_good_contracted_type` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Producto', NULL, NULL),
(2, 'Servicio', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_leads_medium`
--

CREATE TABLE `master_leads_medium` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `videocall` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_leads_medium`
--

INSERT INTO `master_leads_medium` (`id`, `name`, `videocall`, `created_at`, `updated_at`) VALUES
('602e9341a777e', 'Llamada', 0, NULL, NULL),
('602e9341a7782', 'Email', 0, NULL, NULL),
('602e9341a7783', 'Whatsapp', 0, NULL, NULL),
('602e9341a7784', 'Hangout', 1, NULL, NULL),
('602e9341a7785', 'Skype', 1, NULL, NULL),
('602e9341a7786', 'Zoom', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_leads_source`
--

CREATE TABLE `master_leads_source` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_leads_source`
--

INSERT INTO `master_leads_source` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Web', NULL, NULL),
(2, 'Chatbot', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_leads_time_day`
--

CREATE TABLE `master_leads_time_day` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_leads_time_day`
--

INSERT INTO `master_leads_time_day` (`id`, `name`, `index`, `created_at`, `updated_at`) VALUES
(1, 'De 4 a 5pm', 1, '2021-02-22 20:17:52', '2021-02-22 20:17:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_modules`
--

CREATE TABLE `master_modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `icon` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `index` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_modules`
--

INSERT INTO `master_modules` (`id`, `name`, `slug`, `parent`, `icon`, `index`, `created_at`, `updated_at`) VALUES
(1, 'Dashboard', 'dashboard', NULL, 'pie-chart', 1, NULL, NULL),
(2, 'Proyectos', 'proyectos', NULL, 'building', 2, NULL, NULL),
(3, 'Clientes', 'clientes', NULL, 'id-card', 3, NULL, NULL),
(4, 'Ventas y Estad.', NULL, NULL, 'store', 4, NULL, NULL),
(5, 'Ventas', 'ventas-estadisticas/ventas', 4, NULL, 5, NULL, NULL),
(6, 'Estadísticas', 'ventas-estadisticas/estadisticas', 4, NULL, 6, NULL, NULL),
(7, 'Administración', NULL, NULL, 'magic', 7, NULL, NULL),
(8, 'Estados del Proyecto', 'administracion/estados-proyecto', 7, NULL, 1, NULL, NULL),
(9, 'Asesores', 'administracion/asesores', 7, NULL, 2, NULL, NULL),
(10, 'Entidades Financieras', 'administracion/entidades-financieras', 7, NULL, 3, NULL, NULL),
(11, 'Características Proyectos', 'administracion/caracteristicas-proyectos', 7, NULL, 4, NULL, NULL),
(12, 'Bonos', 'administracion/bonos', 7, NULL, 5, NULL, NULL),
(13, 'Contenido', NULL, NULL, 'screen', 8, NULL, NULL),
(14, 'SEO', 'contenido/seo', 13, NULL, 1, NULL, NULL),
(15, 'Inf. General, Miembros & Certificados', 'contenido/informacion-general', 13, NULL, 2, NULL, NULL),
(16, 'Contenido General', 'contenido/contenido-general', 13, NULL, 3, NULL, NULL),
(17, 'Redes Sociales', 'contenido/redes-sociales', 13, NULL, 4, NULL, NULL),
(18, 'Slider', 'contenido/slider', 13, NULL, 5, NULL, NULL),
(19, 'Cami', 'contenido/cami', 13, NULL, 6, NULL, NULL),
(20, 'Sobre Lider', 'contenido/sobre-lider', 13, NULL, 7, NULL, NULL),
(21, 'Testimoniales', 'contenido/testimoniales', 13, NULL, 8, NULL, NULL),
(22, 'Blog', NULL, NULL, 'newspaper', 9, NULL, NULL),
(23, 'Posts', 'blog/posts', 22, NULL, 1, NULL, NULL),
(24, 'Categorías', 'blog/categorias', 22, NULL, 2, NULL, NULL),
(25, 'Leads', NULL, NULL, 'database', 10, NULL, NULL),
(26, 'Tradicionales', 'leads/tradicionales', 25, NULL, 1, NULL, NULL),
(27, 'Cita Online', 'leads/cita-online', 25, NULL, 2, NULL, NULL),
(28, 'Venta Terreno', 'leads/venta-terreno', 25, NULL, 3, NULL, NULL),
(29, 'Suscripciones', 'suscripciones', NULL, 'envelope', 11, NULL, NULL),
(30, 'Libro de Reclamaciones', 'libro-de-reclamaciones', NULL, 'clipboard', 12, NULL, NULL),
(31, 'Postulantes', 'postulantes', NULL, 'book', 13, NULL, NULL),
(32, 'Configuración', NULL, NULL, 'wrench', 14, NULL, NULL),
(33, 'Configuración General', 'configuracion/general', 32, NULL, 1, NULL, NULL),
(34, 'Usuarios', 'configuracion/usuarios', 32, NULL, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_pages`
--

CREATE TABLE `master_pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_es` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_description_es` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_description_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_keywords_es` text COLLATE utf8mb4_unicode_ci,
  `seo_keywords_en` text COLLATE utf8mb4_unicode_ci,
  `seo_image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `index` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_pages`
--

INSERT INTO `master_pages` (`id`, `name`, `slug_es`, `slug_en`, `title_es`, `title_en`, `seo_description_es`, `seo_description_en`, `seo_keywords_es`, `seo_keywords_en`, `seo_image`, `index`, `created_at`, `updated_at`) VALUES
(1, 'Home', NULL, NULL, 'Líder Grupo Constructor', 'Líder Construction Group', 'Spanish Integer mattis urna ex, et commodo enim porta id. In suscipit lacus vel leo rhoncus porttitor. Nulla tellus tortor', 'Ingles Integer mattis urna ex, et commodo enim porta id. In suscipit lacus vel leo rhoncus porttitor. Nulla tellus tortor, cursus eu', 'atom,am,event,think,similar,give,graph,affect,bottom,deer,heard,arrive,race,harbor,earlier,crew,thread,came,equipment,lose,anything,another', 'ingles,lose,anything,another', 'p-1613672748602eb12c5c4d8.jpg', 0, NULL, '2021-02-18 21:43:28'),
(2, 'Nosotros', 'nosotros', 'about-us', 'Nosotros', 'About Us', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL),
(3, 'Proyectos', 'proyectos', 'projects', 'Proyectos', 'Projects', NULL, NULL, NULL, NULL, NULL, 2, NULL, NULL),
(4, 'Cita Online', 'cita-online', 'online-appointment', 'Cita Online', 'Online Appointment', NULL, NULL, NULL, NULL, NULL, 3, NULL, NULL),
(5, 'Separa tu Depa', 'separa-tu-depa', 'reserve-your-department', 'Separa tu Depa', 'Reserve your Department', NULL, NULL, NULL, NULL, NULL, 4, NULL, NULL),
(6, 'Cami', 'cami', 'cami', 'Cami', 'Cami', NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL),
(7, 'Blog', 'blog', 'blog', 'Blog', 'Blog', NULL, NULL, NULL, NULL, NULL, 6, NULL, NULL),
(8, 'Contacto', 'contacto', 'contact-us', 'Contacto', 'Contact us', NULL, NULL, NULL, NULL, NULL, 7, NULL, NULL),
(9, 'Testimoniales', 'testimoniales', 'testimonials', 'Testimoniales', 'Testimonials', NULL, NULL, NULL, NULL, NULL, 8, NULL, NULL),
(10, 'Vende tu terreno', 'vende-tu-terreno', 'sell-your-land', 'Vender tu terreno', 'Sell your land', NULL, NULL, NULL, NULL, NULL, 9, NULL, NULL),
(11, 'Trabaja con nosotros', 'trabaja-con-nosotros', 'work-with-us', 'Trabaja con nosotros', 'Work with us', NULL, NULL, NULL, NULL, NULL, 10, NULL, NULL),
(12, 'Políticas de Privacidad', 'politicas-privacidad', 'privacy-policies', 'Políticas de Privacidad', 'Privacy Policies', NULL, NULL, NULL, NULL, NULL, 11, NULL, NULL),
(13, 'Términos y Condiciones', 'terminos-condiciones', 'terms-conditions', 'Términos y Condiciones', 'Terms & Conditions', NULL, NULL, NULL, NULL, NULL, 12, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_sections`
--

CREATE TABLE `master_sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `master_page_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_sections`
--

INSERT INTO `master_sections` (`id`, `name`, `master_page_id`, `created_at`, `updated_at`) VALUES
(1, 'Cami', 1, NULL, NULL),
(2, 'Blog', 1, NULL, NULL),
(3, 'Banner', 6, NULL, NULL),
(4, 'Banner', 8, NULL, NULL),
(5, 'Información', 8, NULL, NULL),
(6, 'Banner', 7, NULL, NULL),
(7, 'Suscríbete', 7, NULL, NULL),
(8, 'Banner', 9, NULL, NULL),
(9, 'Conoce lo que dicen nuestros vecinos Líder', 9, NULL, NULL),
(10, 'Banner', 10, NULL, NULL),
(11, 'Información', 10, NULL, NULL),
(12, 'Banner', 11, NULL, NULL),
(13, 'Información', 11, NULL, NULL),
(14, 'Banner', 13, NULL, NULL),
(15, 'Información', 13, NULL, NULL),
(16, 'Banner', 3, NULL, NULL),
(17, 'Banner', 2, NULL, NULL),
(18, 'Banner', 4, NULL, NULL),
(19, 'Información', 4, NULL, NULL),
(20, 'Banner', 12, NULL, NULL),
(21, 'Información', 12, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_social_networks`
--

CREATE TABLE `master_social_networks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_social_networks`
--

INSERT INTO `master_social_networks` (`id`, `name`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'Facebook', 'facebook', NULL, NULL),
(2, 'Whatsapp', 'whatsapp', NULL, NULL),
(3, 'Youtube', 'youtube', NULL, NULL),
(4, 'LinkedIn', 'linkedin', NULL, NULL),
(5, 'Instagram', 'instagram', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_transaction_status`
--

CREATE TABLE `master_transaction_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_transaction_status`
--

INSERT INTO `master_transaction_status` (`id`, `name`) VALUES
(1, 'Pendiente'),
(2, 'Pagado'),
(3, 'Rechazado'),
(4, 'Reintegrado'),
(5, 'Anulado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_type_gallery`
--

CREATE TABLE `master_type_gallery` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_type_gallery`
--

INSERT INTO `master_type_gallery` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Áreas Comunes', NULL, NULL),
(2, 'Interiores', NULL, NULL),
(3, 'Avance de Obras', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_ubigeo`
--

CREATE TABLE `master_ubigeo` (
  `code_ubigeo` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code_department` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code_province` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `province` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code_district` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code_number` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `master_ubigeo`
--

INSERT INTO `master_ubigeo` (`code_ubigeo`, `code_department`, `department`, `code_province`, `province`, `code_district`, `district`, `code_number`, `created_at`, `updated_at`) VALUES
('010000', '01', 'Amazonas', '00', NULL, '00', NULL, '41', NULL, NULL),
('010100', '01', 'Amazonas', '01', 'Chachapoyas', '00', NULL, NULL, NULL, NULL),
('010101', '01', 'Amazonas', '01', 'Chachapoyas', '01', 'Chachapoyas', NULL, NULL, NULL),
('010102', '01', 'Amazonas', '01', 'Chachapoyas', '02', 'Asunción', NULL, NULL, NULL),
('010103', '01', 'Amazonas', '01', 'Chachapoyas', '03', 'Balsas', NULL, NULL, NULL),
('010104', '01', 'Amazonas', '01', 'Chachapoyas', '04', 'Cheto', NULL, NULL, NULL),
('010105', '01', 'Amazonas', '01', 'Chachapoyas', '05', 'Chiliquin', NULL, NULL, NULL),
('010106', '01', 'Amazonas', '01', 'Chachapoyas', '06', 'Chuquibamba', NULL, NULL, NULL),
('010107', '01', 'Amazonas', '01', 'Chachapoyas', '07', 'Granada', NULL, NULL, NULL),
('010108', '01', 'Amazonas', '01', 'Chachapoyas', '08', 'Huancas', NULL, NULL, NULL),
('010109', '01', 'Amazonas', '01', 'Chachapoyas', '09', 'La Jalca', NULL, NULL, NULL),
('010110', '01', 'Amazonas', '01', 'Chachapoyas', '10', 'Leimebamba', NULL, NULL, NULL),
('010111', '01', 'Amazonas', '01', 'Chachapoyas', '11', 'Levanto', NULL, NULL, NULL),
('010112', '01', 'Amazonas', '01', 'Chachapoyas', '12', 'Magdalena', NULL, NULL, NULL),
('010113', '01', 'Amazonas', '01', 'Chachapoyas', '13', 'Mariscal Castilla', NULL, NULL, NULL),
('010114', '01', 'Amazonas', '01', 'Chachapoyas', '14', 'Molinopampa', NULL, NULL, NULL),
('010115', '01', 'Amazonas', '01', 'Chachapoyas', '15', 'Montevideo', NULL, NULL, NULL),
('010116', '01', 'Amazonas', '01', 'Chachapoyas', '16', 'Olleros', NULL, NULL, NULL),
('010117', '01', 'Amazonas', '01', 'Chachapoyas', '17', 'Quinjalca', NULL, NULL, NULL),
('010118', '01', 'Amazonas', '01', 'Chachapoyas', '18', 'San Francisco de Daguas', NULL, NULL, NULL),
('010119', '01', 'Amazonas', '01', 'Chachapoyas', '19', 'San Isidro de Maino', NULL, NULL, NULL),
('010120', '01', 'Amazonas', '01', 'Chachapoyas', '20', 'Soloco', NULL, NULL, NULL),
('010121', '01', 'Amazonas', '01', 'Chachapoyas', '21', 'Sonche', NULL, NULL, NULL),
('010200', '01', 'Amazonas', '02', 'Bagua', '00', NULL, NULL, NULL, NULL),
('010201', '01', 'Amazonas', '02', 'Bagua', '01', 'Bagua', NULL, NULL, NULL),
('010202', '01', 'Amazonas', '02', 'Bagua', '02', 'Aramango', NULL, NULL, NULL),
('010203', '01', 'Amazonas', '02', 'Bagua', '03', 'Copallin', NULL, NULL, NULL),
('010204', '01', 'Amazonas', '02', 'Bagua', '04', 'El Parco', NULL, NULL, NULL),
('010205', '01', 'Amazonas', '02', 'Bagua', '05', 'Imaza', NULL, NULL, NULL),
('010206', '01', 'Amazonas', '02', 'Bagua', '06', 'La Peca', NULL, NULL, NULL),
('010300', '01', 'Amazonas', '03', 'Bongará', '00', NULL, NULL, NULL, NULL),
('010301', '01', 'Amazonas', '03', 'Bongará', '01', 'Jumbilla', NULL, NULL, NULL),
('010302', '01', 'Amazonas', '03', 'Bongará', '02', 'Chisquilla', NULL, NULL, NULL),
('010303', '01', 'Amazonas', '03', 'Bongará', '03', 'Churuja', NULL, NULL, NULL),
('010304', '01', 'Amazonas', '03', 'Bongará', '04', 'Corosha', NULL, NULL, NULL),
('010305', '01', 'Amazonas', '03', 'Bongará', '05', 'Cuispes', NULL, NULL, NULL),
('010306', '01', 'Amazonas', '03', 'Bongará', '06', 'Florida', NULL, NULL, NULL),
('010307', '01', 'Amazonas', '03', 'Bongará', '07', 'Jazan', NULL, NULL, NULL),
('010308', '01', 'Amazonas', '03', 'Bongará', '08', 'Recta', NULL, NULL, NULL),
('010309', '01', 'Amazonas', '03', 'Bongará', '09', 'San Carlos', NULL, NULL, NULL),
('010310', '01', 'Amazonas', '03', 'Bongará', '10', 'Shipasbamba', NULL, NULL, NULL),
('010311', '01', 'Amazonas', '03', 'Bongará', '11', 'Valera', NULL, NULL, NULL),
('010312', '01', 'Amazonas', '03', 'Bongará', '12', 'Yambrasbamba', NULL, NULL, NULL),
('010400', '01', 'Amazonas', '04', 'Condorcanqui', '00', NULL, NULL, NULL, NULL),
('010401', '01', 'Amazonas', '04', 'Condorcanqui', '01', 'Nieva', NULL, NULL, NULL),
('010402', '01', 'Amazonas', '04', 'Condorcanqui', '02', 'El Cenepa', NULL, NULL, NULL),
('010403', '01', 'Amazonas', '04', 'Condorcanqui', '03', 'Río Santiago', NULL, NULL, NULL),
('010500', '01', 'Amazonas', '05', 'Luya', '00', NULL, NULL, NULL, NULL),
('010501', '01', 'Amazonas', '05', 'Luya', '01', 'Lamud', NULL, NULL, NULL),
('010502', '01', 'Amazonas', '05', 'Luya', '02', 'Camporredondo', NULL, NULL, NULL),
('010503', '01', 'Amazonas', '05', 'Luya', '03', 'Cocabamba', NULL, NULL, NULL),
('010504', '01', 'Amazonas', '05', 'Luya', '04', 'Colcamar', NULL, NULL, NULL),
('010505', '01', 'Amazonas', '05', 'Luya', '05', 'Conila', NULL, NULL, NULL),
('010506', '01', 'Amazonas', '05', 'Luya', '06', 'Inguilpata', NULL, NULL, NULL),
('010507', '01', 'Amazonas', '05', 'Luya', '07', 'Longuita', NULL, NULL, NULL),
('010508', '01', 'Amazonas', '05', 'Luya', '08', 'Lonya Chico', NULL, NULL, NULL),
('010509', '01', 'Amazonas', '05', 'Luya', '09', 'Luya', NULL, NULL, NULL),
('010510', '01', 'Amazonas', '05', 'Luya', '10', 'Luya Viejo', NULL, NULL, NULL),
('010511', '01', 'Amazonas', '05', 'Luya', '11', 'María', NULL, NULL, NULL),
('010512', '01', 'Amazonas', '05', 'Luya', '12', 'Ocalli', NULL, NULL, NULL),
('010513', '01', 'Amazonas', '05', 'Luya', '13', 'Ocumal', NULL, NULL, NULL),
('010514', '01', 'Amazonas', '05', 'Luya', '14', 'Pisuquia', NULL, NULL, NULL),
('010515', '01', 'Amazonas', '05', 'Luya', '15', 'Providencia', NULL, NULL, NULL),
('010516', '01', 'Amazonas', '05', 'Luya', '16', 'San Cristóbal', NULL, NULL, NULL),
('010517', '01', 'Amazonas', '05', 'Luya', '17', 'San Francisco de Yeso', NULL, NULL, NULL),
('010518', '01', 'Amazonas', '05', 'Luya', '18', 'San Jerónimo', NULL, NULL, NULL),
('010519', '01', 'Amazonas', '05', 'Luya', '19', 'San Juan de Lopecancha', NULL, NULL, NULL),
('010520', '01', 'Amazonas', '05', 'Luya', '20', 'Santa Catalina', NULL, NULL, NULL),
('010521', '01', 'Amazonas', '05', 'Luya', '21', 'Santo Tomas', NULL, NULL, NULL),
('010522', '01', 'Amazonas', '05', 'Luya', '22', 'Tingo', NULL, NULL, NULL),
('010523', '01', 'Amazonas', '05', 'Luya', '23', 'Trita', NULL, NULL, NULL),
('010600', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '00', NULL, NULL, NULL, NULL),
('010601', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '01', 'San Nicolás', NULL, NULL, NULL),
('010602', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '02', 'Chirimoto', NULL, NULL, NULL),
('010603', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '03', 'Cochamal', NULL, NULL, NULL),
('010604', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '04', 'Huambo', NULL, NULL, NULL),
('010605', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '05', 'Limabamba', NULL, NULL, NULL),
('010606', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '06', 'Longar', NULL, NULL, NULL),
('010607', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '07', 'Mariscal Benavides', NULL, NULL, NULL),
('010608', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '08', 'Milpuc', NULL, NULL, NULL),
('010609', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '09', 'Omia', NULL, NULL, NULL),
('010610', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '10', 'Santa Rosa', NULL, NULL, NULL),
('010611', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '11', 'Totora', NULL, NULL, NULL),
('010612', '01', 'Amazonas', '06', 'Rodríguez de Mendoza', '12', 'Vista Alegre', NULL, NULL, NULL),
('010700', '01', 'Amazonas', '07', 'Utcubamba', '00', NULL, NULL, NULL, NULL),
('010701', '01', 'Amazonas', '07', 'Utcubamba', '01', 'Bagua Grande', NULL, NULL, NULL),
('010702', '01', 'Amazonas', '07', 'Utcubamba', '02', 'Cajaruro', NULL, NULL, NULL),
('010703', '01', 'Amazonas', '07', 'Utcubamba', '03', 'Cumba', NULL, NULL, NULL),
('010704', '01', 'Amazonas', '07', 'Utcubamba', '04', 'El Milagro', NULL, NULL, NULL),
('010705', '01', 'Amazonas', '07', 'Utcubamba', '05', 'Jamalca', NULL, NULL, NULL),
('010706', '01', 'Amazonas', '07', 'Utcubamba', '06', 'Lonya Grande', NULL, NULL, NULL),
('010707', '01', 'Amazonas', '07', 'Utcubamba', '07', 'Yamon', NULL, NULL, NULL),
('020000', '02', 'Ancash', '00', NULL, '00', NULL, '43', NULL, NULL),
('020100', '02', 'Ancash', '01', 'Huaraz', '00', NULL, NULL, NULL, NULL),
('020101', '02', 'Ancash', '01', 'Huaraz', '01', 'Huaraz', NULL, NULL, NULL),
('020102', '02', 'Ancash', '01', 'Huaraz', '02', 'Cochabamba', NULL, NULL, NULL),
('020103', '02', 'Ancash', '01', 'Huaraz', '03', 'Colcabamba', NULL, NULL, NULL),
('020104', '02', 'Ancash', '01', 'Huaraz', '04', 'Huanchay', NULL, NULL, NULL),
('020105', '02', 'Ancash', '01', 'Huaraz', '05', 'Independencia', NULL, NULL, NULL),
('020106', '02', 'Ancash', '01', 'Huaraz', '06', 'Jangas', NULL, NULL, NULL),
('020107', '02', 'Ancash', '01', 'Huaraz', '07', 'La Libertad', NULL, NULL, NULL),
('020108', '02', 'Ancash', '01', 'Huaraz', '08', 'Olleros', NULL, NULL, NULL),
('020109', '02', 'Ancash', '01', 'Huaraz', '09', 'Pampas Grande', NULL, NULL, NULL),
('020110', '02', 'Ancash', '01', 'Huaraz', '10', 'Pariacoto', NULL, NULL, NULL),
('020111', '02', 'Ancash', '01', 'Huaraz', '11', 'Pira', NULL, NULL, NULL),
('020112', '02', 'Ancash', '01', 'Huaraz', '12', 'Tarica', NULL, NULL, NULL),
('020200', '02', 'Ancash', '02', 'Aija', '00', NULL, NULL, NULL, NULL),
('020201', '02', 'Ancash', '02', 'Aija', '01', 'Aija', NULL, NULL, NULL),
('020202', '02', 'Ancash', '02', 'Aija', '02', 'Coris', NULL, NULL, NULL),
('020203', '02', 'Ancash', '02', 'Aija', '03', 'Huacllan', NULL, NULL, NULL),
('020204', '02', 'Ancash', '02', 'Aija', '04', 'La Merced', NULL, NULL, NULL),
('020205', '02', 'Ancash', '02', 'Aija', '05', 'Succha', NULL, NULL, NULL),
('020300', '02', 'Ancash', '03', 'Antonio Raymondi', '00', NULL, NULL, NULL, NULL),
('020301', '02', 'Ancash', '03', 'Antonio Raymondi', '01', 'Llamellin', NULL, NULL, NULL),
('020302', '02', 'Ancash', '03', 'Antonio Raymondi', '02', 'Aczo', NULL, NULL, NULL),
('020303', '02', 'Ancash', '03', 'Antonio Raymondi', '03', 'Chaccho', NULL, NULL, NULL),
('020304', '02', 'Ancash', '03', 'Antonio Raymondi', '04', 'Chingas', NULL, NULL, NULL),
('020305', '02', 'Ancash', '03', 'Antonio Raymondi', '05', 'Mirgas', NULL, NULL, NULL),
('020306', '02', 'Ancash', '03', 'Antonio Raymondi', '06', 'San Juan de Rontoy', NULL, NULL, NULL),
('020400', '02', 'Ancash', '04', 'Asunción', '00', NULL, NULL, NULL, NULL),
('020401', '02', 'Ancash', '04', 'Asunción', '01', 'Chacas', NULL, NULL, NULL),
('020402', '02', 'Ancash', '04', 'Asunción', '02', 'Acochaca', NULL, NULL, NULL),
('020500', '02', 'Ancash', '05', 'Bolognesi', '00', NULL, NULL, NULL, NULL),
('020501', '02', 'Ancash', '05', 'Bolognesi', '01', 'Chiquian', NULL, NULL, NULL),
('020502', '02', 'Ancash', '05', 'Bolognesi', '02', 'Abelardo Pardo Lezameta', NULL, NULL, NULL),
('020503', '02', 'Ancash', '05', 'Bolognesi', '03', 'Antonio Raymondi', NULL, NULL, NULL),
('020504', '02', 'Ancash', '05', 'Bolognesi', '04', 'Aquia', NULL, NULL, NULL),
('020505', '02', 'Ancash', '05', 'Bolognesi', '05', 'Cajacay', NULL, NULL, NULL),
('020506', '02', 'Ancash', '05', 'Bolognesi', '06', 'Canis', NULL, NULL, NULL),
('020507', '02', 'Ancash', '05', 'Bolognesi', '07', 'Colquioc', NULL, NULL, NULL),
('020508', '02', 'Ancash', '05', 'Bolognesi', '08', 'Huallanca', NULL, NULL, NULL),
('020509', '02', 'Ancash', '05', 'Bolognesi', '09', 'Huasta', NULL, NULL, NULL),
('020510', '02', 'Ancash', '05', 'Bolognesi', '10', 'Huayllacayan', NULL, NULL, NULL),
('020511', '02', 'Ancash', '05', 'Bolognesi', '11', 'La Primavera', NULL, NULL, NULL),
('020512', '02', 'Ancash', '05', 'Bolognesi', '12', 'Mangas', NULL, NULL, NULL),
('020513', '02', 'Ancash', '05', 'Bolognesi', '13', 'Pacllon', NULL, NULL, NULL),
('020514', '02', 'Ancash', '05', 'Bolognesi', '14', 'San Miguel de Corpanqui', NULL, NULL, NULL),
('020515', '02', 'Ancash', '05', 'Bolognesi', '15', 'Ticllos', NULL, NULL, NULL),
('020600', '02', 'Ancash', '06', 'Carhuaz', '00', NULL, NULL, NULL, NULL),
('020601', '02', 'Ancash', '06', 'Carhuaz', '01', 'Carhuaz', NULL, NULL, NULL),
('020602', '02', 'Ancash', '06', 'Carhuaz', '02', 'Acopampa', NULL, NULL, NULL),
('020603', '02', 'Ancash', '06', 'Carhuaz', '03', 'Amashca', NULL, NULL, NULL),
('020604', '02', 'Ancash', '06', 'Carhuaz', '04', 'Anta', NULL, NULL, NULL),
('020605', '02', 'Ancash', '06', 'Carhuaz', '05', 'Ataquero', NULL, NULL, NULL),
('020606', '02', 'Ancash', '06', 'Carhuaz', '06', 'Marcara', NULL, NULL, NULL),
('020607', '02', 'Ancash', '06', 'Carhuaz', '07', 'Pariahuanca', NULL, NULL, NULL),
('020608', '02', 'Ancash', '06', 'Carhuaz', '08', 'San Miguel de Aco', NULL, NULL, NULL),
('020609', '02', 'Ancash', '06', 'Carhuaz', '09', 'Shilla', NULL, NULL, NULL),
('020610', '02', 'Ancash', '06', 'Carhuaz', '10', 'Tinco', NULL, NULL, NULL),
('020611', '02', 'Ancash', '06', 'Carhuaz', '11', 'Yungar', NULL, NULL, NULL),
('020700', '02', 'Ancash', '07', 'Carlos Fermín Fitzcarrald', '00', NULL, NULL, NULL, NULL),
('020701', '02', 'Ancash', '07', 'Carlos Fermín Fitzcarrald', '01', 'San Luis', NULL, NULL, NULL),
('020702', '02', 'Ancash', '07', 'Carlos Fermín Fitzcarrald', '02', 'San Nicolás', NULL, NULL, NULL),
('020703', '02', 'Ancash', '07', 'Carlos Fermín Fitzcarrald', '03', 'Yauya', NULL, NULL, NULL),
('020800', '02', 'Ancash', '08', 'Casma', '00', NULL, NULL, NULL, NULL),
('020801', '02', 'Ancash', '08', 'Casma', '01', 'Casma', NULL, NULL, NULL),
('020802', '02', 'Ancash', '08', 'Casma', '02', 'Buena Vista Alta', NULL, NULL, NULL),
('020803', '02', 'Ancash', '08', 'Casma', '03', 'Comandante Noel', NULL, NULL, NULL),
('020804', '02', 'Ancash', '08', 'Casma', '04', 'Yautan', NULL, NULL, NULL),
('020900', '02', 'Ancash', '09', 'Corongo', '00', NULL, NULL, NULL, NULL),
('020901', '02', 'Ancash', '09', 'Corongo', '01', 'Corongo', NULL, NULL, NULL),
('020902', '02', 'Ancash', '09', 'Corongo', '02', 'Aco', NULL, NULL, NULL),
('020903', '02', 'Ancash', '09', 'Corongo', '03', 'Bambas', NULL, NULL, NULL),
('020904', '02', 'Ancash', '09', 'Corongo', '04', 'Cusca', NULL, NULL, NULL),
('020905', '02', 'Ancash', '09', 'Corongo', '05', 'La Pampa', NULL, NULL, NULL),
('020906', '02', 'Ancash', '09', 'Corongo', '06', 'Yanac', NULL, NULL, NULL),
('020907', '02', 'Ancash', '09', 'Corongo', '07', 'Yupan', NULL, NULL, NULL),
('021000', '02', 'Ancash', '10', 'Huari', '00', NULL, NULL, NULL, NULL),
('021001', '02', 'Ancash', '10', 'Huari', '01', 'Huari', NULL, NULL, NULL),
('021002', '02', 'Ancash', '10', 'Huari', '02', 'Anra', NULL, NULL, NULL),
('021003', '02', 'Ancash', '10', 'Huari', '03', 'Cajay', NULL, NULL, NULL),
('021004', '02', 'Ancash', '10', 'Huari', '04', 'Chavin de Huantar', NULL, NULL, NULL),
('021005', '02', 'Ancash', '10', 'Huari', '05', 'Huacachi', NULL, NULL, NULL),
('021006', '02', 'Ancash', '10', 'Huari', '06', 'Huacchis', NULL, NULL, NULL),
('021007', '02', 'Ancash', '10', 'Huari', '07', 'Huachis', NULL, NULL, NULL),
('021008', '02', 'Ancash', '10', 'Huari', '08', 'Huantar', NULL, NULL, NULL),
('021009', '02', 'Ancash', '10', 'Huari', '09', 'Masin', NULL, NULL, NULL),
('021010', '02', 'Ancash', '10', 'Huari', '10', 'Paucas', NULL, NULL, NULL),
('021011', '02', 'Ancash', '10', 'Huari', '11', 'Ponto', NULL, NULL, NULL),
('021012', '02', 'Ancash', '10', 'Huari', '12', 'Rahuapampa', NULL, NULL, NULL),
('021013', '02', 'Ancash', '10', 'Huari', '13', 'Rapayan', NULL, NULL, NULL),
('021014', '02', 'Ancash', '10', 'Huari', '14', 'San Marcos', NULL, NULL, NULL),
('021015', '02', 'Ancash', '10', 'Huari', '15', 'San Pedro de Chana', NULL, NULL, NULL),
('021016', '02', 'Ancash', '10', 'Huari', '16', 'Uco', NULL, NULL, NULL),
('021100', '02', 'Ancash', '11', 'Huarmey', '00', NULL, NULL, NULL, NULL),
('021101', '02', 'Ancash', '11', 'Huarmey', '01', 'Huarmey', NULL, NULL, NULL),
('021102', '02', 'Ancash', '11', 'Huarmey', '02', 'Cochapeti', NULL, NULL, NULL),
('021103', '02', 'Ancash', '11', 'Huarmey', '03', 'Culebras', NULL, NULL, NULL),
('021104', '02', 'Ancash', '11', 'Huarmey', '04', 'Huayan', NULL, NULL, NULL),
('021105', '02', 'Ancash', '11', 'Huarmey', '05', 'Malvas', NULL, NULL, NULL),
('021200', '02', 'Ancash', '12', 'Huaylas', '00', NULL, NULL, NULL, NULL),
('021201', '02', 'Ancash', '12', 'Huaylas', '01', 'Caraz', NULL, NULL, NULL),
('021202', '02', 'Ancash', '12', 'Huaylas', '02', 'Huallanca', NULL, NULL, NULL),
('021203', '02', 'Ancash', '12', 'Huaylas', '03', 'Huata', NULL, NULL, NULL),
('021204', '02', 'Ancash', '12', 'Huaylas', '04', 'Huaylas', NULL, NULL, NULL),
('021205', '02', 'Ancash', '12', 'Huaylas', '05', 'Mato', NULL, NULL, NULL),
('021206', '02', 'Ancash', '12', 'Huaylas', '06', 'Pamparomas', NULL, NULL, NULL),
('021207', '02', 'Ancash', '12', 'Huaylas', '07', 'Pueblo Libre', NULL, NULL, NULL),
('021208', '02', 'Ancash', '12', 'Huaylas', '08', 'Santa Cruz', NULL, NULL, NULL),
('021209', '02', 'Ancash', '12', 'Huaylas', '09', 'Santo Toribio', NULL, NULL, NULL),
('021210', '02', 'Ancash', '12', 'Huaylas', '10', 'Yuracmarca', NULL, NULL, NULL),
('021300', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '00', NULL, NULL, NULL, NULL),
('021301', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '01', 'Piscobamba', NULL, NULL, NULL),
('021302', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '02', 'Casca', NULL, NULL, NULL),
('021303', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '03', 'Eleazar Guzmán Barron', NULL, NULL, NULL),
('021304', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '04', 'Fidel Olivas Escudero', NULL, NULL, NULL),
('021305', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '05', 'Llama', NULL, NULL, NULL),
('021306', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '06', 'Llumpa', NULL, NULL, NULL),
('021307', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '07', 'Lucma', NULL, NULL, NULL),
('021308', '02', 'Ancash', '13', 'Mariscal Luzuriaga', '08', 'Musga', NULL, NULL, NULL),
('021400', '02', 'Ancash', '14', 'Ocros', '00', NULL, NULL, NULL, NULL),
('021401', '02', 'Ancash', '14', 'Ocros', '01', 'Ocros', NULL, NULL, NULL),
('021402', '02', 'Ancash', '14', 'Ocros', '02', 'Acas', NULL, NULL, NULL),
('021403', '02', 'Ancash', '14', 'Ocros', '03', 'Cajamarquilla', NULL, NULL, NULL),
('021404', '02', 'Ancash', '14', 'Ocros', '04', 'Carhuapampa', NULL, NULL, NULL),
('021405', '02', 'Ancash', '14', 'Ocros', '05', 'Cochas', NULL, NULL, NULL),
('021406', '02', 'Ancash', '14', 'Ocros', '06', 'Congas', NULL, NULL, NULL),
('021407', '02', 'Ancash', '14', 'Ocros', '07', 'Llipa', NULL, NULL, NULL),
('021408', '02', 'Ancash', '14', 'Ocros', '08', 'San Cristóbal de Rajan', NULL, NULL, NULL),
('021409', '02', 'Ancash', '14', 'Ocros', '09', 'San Pedro', NULL, NULL, NULL),
('021410', '02', 'Ancash', '14', 'Ocros', '10', 'Santiago de Chilcas', NULL, NULL, NULL),
('021500', '02', 'Ancash', '15', 'Pallasca', '00', NULL, NULL, NULL, NULL),
('021501', '02', 'Ancash', '15', 'Pallasca', '01', 'Cabana', NULL, NULL, NULL),
('021502', '02', 'Ancash', '15', 'Pallasca', '02', 'Bolognesi', NULL, NULL, NULL),
('021503', '02', 'Ancash', '15', 'Pallasca', '03', 'Conchucos', NULL, NULL, NULL),
('021504', '02', 'Ancash', '15', 'Pallasca', '04', 'Huacaschuque', NULL, NULL, NULL),
('021505', '02', 'Ancash', '15', 'Pallasca', '05', 'Huandoval', NULL, NULL, NULL),
('021506', '02', 'Ancash', '15', 'Pallasca', '06', 'Lacabamba', NULL, NULL, NULL),
('021507', '02', 'Ancash', '15', 'Pallasca', '07', 'Llapo', NULL, NULL, NULL),
('021508', '02', 'Ancash', '15', 'Pallasca', '08', 'Pallasca', NULL, NULL, NULL),
('021509', '02', 'Ancash', '15', 'Pallasca', '09', 'Pampas', NULL, NULL, NULL),
('021510', '02', 'Ancash', '15', 'Pallasca', '10', 'Santa Rosa', NULL, NULL, NULL),
('021511', '02', 'Ancash', '15', 'Pallasca', '11', 'Tauca', NULL, NULL, NULL),
('021600', '02', 'Ancash', '16', 'Pomabamba', '00', NULL, NULL, NULL, NULL),
('021601', '02', 'Ancash', '16', 'Pomabamba', '01', 'Pomabamba', NULL, NULL, NULL),
('021602', '02', 'Ancash', '16', 'Pomabamba', '02', 'Huayllan', NULL, NULL, NULL),
('021603', '02', 'Ancash', '16', 'Pomabamba', '03', 'Parobamba', NULL, NULL, NULL),
('021604', '02', 'Ancash', '16', 'Pomabamba', '04', 'Quinuabamba', NULL, NULL, NULL),
('021700', '02', 'Ancash', '17', 'Recuay', '00', NULL, NULL, NULL, NULL),
('021701', '02', 'Ancash', '17', 'Recuay', '01', 'Recuay', NULL, NULL, NULL),
('021702', '02', 'Ancash', '17', 'Recuay', '02', 'Catac', NULL, NULL, NULL),
('021703', '02', 'Ancash', '17', 'Recuay', '03', 'Cotaparaco', NULL, NULL, NULL),
('021704', '02', 'Ancash', '17', 'Recuay', '04', 'Huayllapampa', NULL, NULL, NULL),
('021705', '02', 'Ancash', '17', 'Recuay', '05', 'Llacllin', NULL, NULL, NULL),
('021706', '02', 'Ancash', '17', 'Recuay', '06', 'Marca', NULL, NULL, NULL),
('021707', '02', 'Ancash', '17', 'Recuay', '07', 'Pampas', NULL, NULL, NULL),
('021708', '02', 'Ancash', '17', 'Recuay', '08', 'Pararin', NULL, NULL, NULL),
('021709', '02', 'Ancash', '17', 'Recuay', '09', 'Tapacocha', NULL, NULL, NULL),
('021710', '02', 'Ancash', '17', 'Recuay', '10', 'Ticapampa', NULL, NULL, NULL),
('021800', '02', 'Ancash', '18', 'Santa', '00', NULL, NULL, NULL, NULL),
('021801', '02', 'Ancash', '18', 'Santa', '01', 'Chimbote', NULL, NULL, NULL),
('021802', '02', 'Ancash', '18', 'Santa', '02', 'Cáceres del Perú', NULL, NULL, NULL),
('021803', '02', 'Ancash', '18', 'Santa', '03', 'Coishco', NULL, NULL, NULL),
('021804', '02', 'Ancash', '18', 'Santa', '04', 'Macate', NULL, NULL, NULL),
('021805', '02', 'Ancash', '18', 'Santa', '05', 'Moro', NULL, NULL, NULL),
('021806', '02', 'Ancash', '18', 'Santa', '06', 'Nepeña', NULL, NULL, NULL),
('021807', '02', 'Ancash', '18', 'Santa', '07', 'Samanco', NULL, NULL, NULL),
('021808', '02', 'Ancash', '18', 'Santa', '08', 'Santa', NULL, NULL, NULL),
('021809', '02', 'Ancash', '18', 'Santa', '09', 'Nuevo Chimbote', NULL, NULL, NULL),
('021900', '02', 'Ancash', '19', 'Sihuas', '00', NULL, NULL, NULL, NULL),
('021901', '02', 'Ancash', '19', 'Sihuas', '01', 'Sihuas', NULL, NULL, NULL),
('021902', '02', 'Ancash', '19', 'Sihuas', '02', 'Acobamba', NULL, NULL, NULL),
('021903', '02', 'Ancash', '19', 'Sihuas', '03', 'Alfonso Ugarte', NULL, NULL, NULL),
('021904', '02', 'Ancash', '19', 'Sihuas', '04', 'Cashapampa', NULL, NULL, NULL),
('021905', '02', 'Ancash', '19', 'Sihuas', '05', 'Chingalpo', NULL, NULL, NULL),
('021906', '02', 'Ancash', '19', 'Sihuas', '06', 'Huayllabamba', NULL, NULL, NULL),
('021907', '02', 'Ancash', '19', 'Sihuas', '07', 'Quiches', NULL, NULL, NULL),
('021908', '02', 'Ancash', '19', 'Sihuas', '08', 'Ragash', NULL, NULL, NULL),
('021909', '02', 'Ancash', '19', 'Sihuas', '09', 'San Juan', NULL, NULL, NULL),
('021910', '02', 'Ancash', '19', 'Sihuas', '10', 'Sicsibamba', NULL, NULL, NULL),
('022000', '02', 'Ancash', '20', 'Yungay', '00', NULL, NULL, NULL, NULL),
('022001', '02', 'Ancash', '20', 'Yungay', '01', 'Yungay', NULL, NULL, NULL),
('022002', '02', 'Ancash', '20', 'Yungay', '02', 'Cascapara', NULL, NULL, NULL),
('022003', '02', 'Ancash', '20', 'Yungay', '03', 'Mancos', NULL, NULL, NULL),
('022004', '02', 'Ancash', '20', 'Yungay', '04', 'Matacoto', NULL, NULL, NULL),
('022005', '02', 'Ancash', '20', 'Yungay', '05', 'Quillo', NULL, NULL, NULL),
('022006', '02', 'Ancash', '20', 'Yungay', '06', 'Ranrahirca', NULL, NULL, NULL),
('022007', '02', 'Ancash', '20', 'Yungay', '07', 'Shupluy', NULL, NULL, NULL),
('022008', '02', 'Ancash', '20', 'Yungay', '08', 'Yanama', NULL, NULL, NULL),
('030000', '03', 'Apurímac', '00', NULL, '00', NULL, '83', NULL, NULL),
('030100', '03', 'Apurímac', '01', 'Abancay', '00', NULL, NULL, NULL, NULL),
('030101', '03', 'Apurímac', '01', 'Abancay', '01', 'Abancay', NULL, NULL, NULL),
('030102', '03', 'Apurímac', '01', 'Abancay', '02', 'Chacoche', NULL, NULL, NULL),
('030103', '03', 'Apurímac', '01', 'Abancay', '03', 'Circa', NULL, NULL, NULL),
('030104', '03', 'Apurímac', '01', 'Abancay', '04', 'Curahuasi', NULL, NULL, NULL),
('030105', '03', 'Apurímac', '01', 'Abancay', '05', 'Huanipaca', NULL, NULL, NULL),
('030106', '03', 'Apurímac', '01', 'Abancay', '06', 'Lambrama', NULL, NULL, NULL),
('030107', '03', 'Apurímac', '01', 'Abancay', '07', 'Pichirhua', NULL, NULL, NULL),
('030108', '03', 'Apurímac', '01', 'Abancay', '08', 'San Pedro de Cachora', NULL, NULL, NULL),
('030109', '03', 'Apurímac', '01', 'Abancay', '09', 'Tamburco', NULL, NULL, NULL),
('030200', '03', 'Apurímac', '02', 'Andahuaylas', '00', NULL, NULL, NULL, NULL),
('030201', '03', 'Apurímac', '02', 'Andahuaylas', '01', 'Andahuaylas', NULL, NULL, NULL),
('030202', '03', 'Apurímac', '02', 'Andahuaylas', '02', 'Andarapa', NULL, NULL, NULL),
('030203', '03', 'Apurímac', '02', 'Andahuaylas', '03', 'Chiara', NULL, NULL, NULL),
('030204', '03', 'Apurímac', '02', 'Andahuaylas', '04', 'Huancarama', NULL, NULL, NULL),
('030205', '03', 'Apurímac', '02', 'Andahuaylas', '05', 'Huancaray', NULL, NULL, NULL),
('030206', '03', 'Apurímac', '02', 'Andahuaylas', '06', 'Huayana', NULL, NULL, NULL),
('030207', '03', 'Apurímac', '02', 'Andahuaylas', '07', 'Kishuara', NULL, NULL, NULL),
('030208', '03', 'Apurímac', '02', 'Andahuaylas', '08', 'Pacobamba', NULL, NULL, NULL),
('030209', '03', 'Apurímac', '02', 'Andahuaylas', '09', 'Pacucha', NULL, NULL, NULL),
('030210', '03', 'Apurímac', '02', 'Andahuaylas', '10', 'Pampachiri', NULL, NULL, NULL),
('030211', '03', 'Apurímac', '02', 'Andahuaylas', '11', 'Pomacocha', NULL, NULL, NULL),
('030212', '03', 'Apurímac', '02', 'Andahuaylas', '12', 'San Antonio de Cachi', NULL, NULL, NULL),
('030213', '03', 'Apurímac', '02', 'Andahuaylas', '13', 'San Jerónimo', NULL, NULL, NULL),
('030214', '03', 'Apurímac', '02', 'Andahuaylas', '14', 'San Miguel de Chaccrampa', NULL, NULL, NULL),
('030215', '03', 'Apurímac', '02', 'Andahuaylas', '15', 'Santa María de Chicmo', NULL, NULL, NULL),
('030216', '03', 'Apurímac', '02', 'Andahuaylas', '16', 'Talavera', NULL, NULL, NULL),
('030217', '03', 'Apurímac', '02', 'Andahuaylas', '17', 'Tumay Huaraca', NULL, NULL, NULL),
('030218', '03', 'Apurímac', '02', 'Andahuaylas', '18', 'Turpo', NULL, NULL, NULL),
('030219', '03', 'Apurímac', '02', 'Andahuaylas', '19', 'Kaquiabamba', NULL, NULL, NULL),
('030220', '03', 'Apurímac', '02', 'Andahuaylas', '20', 'José María Arguedas', NULL, NULL, NULL),
('030300', '03', 'Apurímac', '03', 'Antabamba', '00', NULL, NULL, NULL, NULL),
('030301', '03', 'Apurímac', '03', 'Antabamba', '01', 'Antabamba', NULL, NULL, NULL),
('030302', '03', 'Apurímac', '03', 'Antabamba', '02', 'El Oro', NULL, NULL, NULL),
('030303', '03', 'Apurímac', '03', 'Antabamba', '03', 'Huaquirca', NULL, NULL, NULL),
('030304', '03', 'Apurímac', '03', 'Antabamba', '04', 'Juan Espinoza Medrano', NULL, NULL, NULL),
('030305', '03', 'Apurímac', '03', 'Antabamba', '05', 'Oropesa', NULL, NULL, NULL),
('030306', '03', 'Apurímac', '03', 'Antabamba', '06', 'Pachaconas', NULL, NULL, NULL),
('030307', '03', 'Apurímac', '03', 'Antabamba', '07', 'Sabaino', NULL, NULL, NULL),
('030400', '03', 'Apurímac', '04', 'Aymaraes', '00', NULL, NULL, NULL, NULL),
('030401', '03', 'Apurímac', '04', 'Aymaraes', '01', 'Chalhuanca', NULL, NULL, NULL),
('030402', '03', 'Apurímac', '04', 'Aymaraes', '02', 'Capaya', NULL, NULL, NULL),
('030403', '03', 'Apurímac', '04', 'Aymaraes', '03', 'Caraybamba', NULL, NULL, NULL),
('030404', '03', 'Apurímac', '04', 'Aymaraes', '04', 'Chapimarca', NULL, NULL, NULL),
('030405', '03', 'Apurímac', '04', 'Aymaraes', '05', 'Colcabamba', NULL, NULL, NULL),
('030406', '03', 'Apurímac', '04', 'Aymaraes', '06', 'Cotaruse', NULL, NULL, NULL),
('030407', '03', 'Apurímac', '04', 'Aymaraes', '07', 'Huayllo', NULL, NULL, NULL),
('030408', '03', 'Apurímac', '04', 'Aymaraes', '08', 'Justo Apu Sahuaraura', NULL, NULL, NULL),
('030409', '03', 'Apurímac', '04', 'Aymaraes', '09', 'Lucre', NULL, NULL, NULL),
('030410', '03', 'Apurímac', '04', 'Aymaraes', '10', 'Pocohuanca', NULL, NULL, NULL),
('030411', '03', 'Apurímac', '04', 'Aymaraes', '11', 'San Juan de Chacña', NULL, NULL, NULL),
('030412', '03', 'Apurímac', '04', 'Aymaraes', '12', 'Sañayca', NULL, NULL, NULL),
('030413', '03', 'Apurímac', '04', 'Aymaraes', '13', 'Soraya', NULL, NULL, NULL),
('030414', '03', 'Apurímac', '04', 'Aymaraes', '14', 'Tapairihua', NULL, NULL, NULL),
('030415', '03', 'Apurímac', '04', 'Aymaraes', '15', 'Tintay', NULL, NULL, NULL),
('030416', '03', 'Apurímac', '04', 'Aymaraes', '16', 'Toraya', NULL, NULL, NULL),
('030417', '03', 'Apurímac', '04', 'Aymaraes', '17', 'Yanaca', NULL, NULL, NULL),
('030500', '03', 'Apurímac', '05', 'Cotabambas', '00', NULL, NULL, NULL, NULL),
('030501', '03', 'Apurímac', '05', 'Cotabambas', '01', 'Tambobamba', NULL, NULL, NULL),
('030502', '03', 'Apurímac', '05', 'Cotabambas', '02', 'Cotabambas', NULL, NULL, NULL),
('030503', '03', 'Apurímac', '05', 'Cotabambas', '03', 'Coyllurqui', NULL, NULL, NULL),
('030504', '03', 'Apurímac', '05', 'Cotabambas', '04', 'Haquira', NULL, NULL, NULL),
('030505', '03', 'Apurímac', '05', 'Cotabambas', '05', 'Mara', NULL, NULL, NULL),
('030506', '03', 'Apurímac', '05', 'Cotabambas', '06', 'Challhuahuacho', NULL, NULL, NULL),
('030600', '03', 'Apurímac', '06', 'Chincheros', '00', NULL, NULL, NULL, NULL),
('030601', '03', 'Apurímac', '06', 'Chincheros', '01', 'Chincheros', NULL, NULL, NULL),
('030602', '03', 'Apurímac', '06', 'Chincheros', '02', 'Anco_Huallo', NULL, NULL, NULL),
('030603', '03', 'Apurímac', '06', 'Chincheros', '03', 'Cocharcas', NULL, NULL, NULL),
('030604', '03', 'Apurímac', '06', 'Chincheros', '04', 'Huaccana', NULL, NULL, NULL),
('030605', '03', 'Apurímac', '06', 'Chincheros', '05', 'Ocobamba', NULL, NULL, NULL),
('030606', '03', 'Apurímac', '06', 'Chincheros', '06', 'Ongoy', NULL, NULL, NULL),
('030607', '03', 'Apurímac', '06', 'Chincheros', '07', 'Uranmarca', NULL, NULL, NULL),
('030608', '03', 'Apurímac', '06', 'Chincheros', '08', 'Ranracancha', NULL, NULL, NULL),
('030700', '03', 'Apurímac', '07', 'Grau', '00', NULL, NULL, NULL, NULL),
('030701', '03', 'Apurímac', '07', 'Grau', '01', 'Chuquibambilla', NULL, NULL, NULL),
('030702', '03', 'Apurímac', '07', 'Grau', '02', 'Curpahuasi', NULL, NULL, NULL),
('030703', '03', 'Apurímac', '07', 'Grau', '03', 'Gamarra', NULL, NULL, NULL),
('030704', '03', 'Apurímac', '07', 'Grau', '04', 'Huayllati', NULL, NULL, NULL),
('030705', '03', 'Apurímac', '07', 'Grau', '05', 'Mamara', NULL, NULL, NULL),
('030706', '03', 'Apurímac', '07', 'Grau', '06', 'Micaela Bastidas', NULL, NULL, NULL),
('030707', '03', 'Apurímac', '07', 'Grau', '07', 'Pataypampa', NULL, NULL, NULL),
('030708', '03', 'Apurímac', '07', 'Grau', '08', 'Progreso', NULL, NULL, NULL),
('030709', '03', 'Apurímac', '07', 'Grau', '09', 'San Antonio', NULL, NULL, NULL),
('030710', '03', 'Apurímac', '07', 'Grau', '10', 'Santa Rosa', NULL, NULL, NULL),
('030711', '03', 'Apurímac', '07', 'Grau', '11', 'Turpay', NULL, NULL, NULL),
('030712', '03', 'Apurímac', '07', 'Grau', '12', 'Vilcabamba', NULL, NULL, NULL),
('030713', '03', 'Apurímac', '07', 'Grau', '13', 'Virundo', NULL, NULL, NULL),
('030714', '03', 'Apurímac', '07', 'Grau', '14', 'Curasco', NULL, NULL, NULL),
('040000', '04', 'Arequipa', '00', NULL, '00', NULL, '54', NULL, NULL),
('040100', '04', 'Arequipa', '01', 'Arequipa', '00', NULL, NULL, NULL, NULL),
('040101', '04', 'Arequipa', '01', 'Arequipa', '01', 'Arequipa', NULL, NULL, NULL),
('040102', '04', 'Arequipa', '01', 'Arequipa', '02', 'Alto Selva Alegre', NULL, NULL, NULL),
('040103', '04', 'Arequipa', '01', 'Arequipa', '03', 'Cayma', NULL, NULL, NULL),
('040104', '04', 'Arequipa', '01', 'Arequipa', '04', 'Cerro Colorado', NULL, NULL, NULL),
('040105', '04', 'Arequipa', '01', 'Arequipa', '05', 'Characato', NULL, NULL, NULL),
('040106', '04', 'Arequipa', '01', 'Arequipa', '06', 'Chiguata', NULL, NULL, NULL),
('040107', '04', 'Arequipa', '01', 'Arequipa', '07', 'Jacobo Hunter', NULL, NULL, NULL),
('040108', '04', 'Arequipa', '01', 'Arequipa', '08', 'La Joya', NULL, NULL, NULL),
('040109', '04', 'Arequipa', '01', 'Arequipa', '09', 'Mariano Melgar', NULL, NULL, NULL),
('040110', '04', 'Arequipa', '01', 'Arequipa', '10', 'Miraflores', NULL, NULL, NULL),
('040111', '04', 'Arequipa', '01', 'Arequipa', '11', 'Mollebaya', NULL, NULL, NULL),
('040112', '04', 'Arequipa', '01', 'Arequipa', '12', 'Paucarpata', NULL, NULL, NULL),
('040113', '04', 'Arequipa', '01', 'Arequipa', '13', 'Pocsi', NULL, NULL, NULL),
('040114', '04', 'Arequipa', '01', 'Arequipa', '14', 'Polobaya', NULL, NULL, NULL),
('040115', '04', 'Arequipa', '01', 'Arequipa', '15', 'Quequeña', NULL, NULL, NULL),
('040116', '04', 'Arequipa', '01', 'Arequipa', '16', 'Sabandia', NULL, NULL, NULL),
('040117', '04', 'Arequipa', '01', 'Arequipa', '17', 'Sachaca', NULL, NULL, NULL),
('040118', '04', 'Arequipa', '01', 'Arequipa', '18', 'San Juan de Siguas', NULL, NULL, NULL),
('040119', '04', 'Arequipa', '01', 'Arequipa', '19', 'San Juan de Tarucani', NULL, NULL, NULL),
('040120', '04', 'Arequipa', '01', 'Arequipa', '20', 'Santa Isabel de Siguas', NULL, NULL, NULL),
('040121', '04', 'Arequipa', '01', 'Arequipa', '21', 'Santa Rita de Siguas', NULL, NULL, NULL),
('040122', '04', 'Arequipa', '01', 'Arequipa', '22', 'Socabaya', NULL, NULL, NULL),
('040123', '04', 'Arequipa', '01', 'Arequipa', '23', 'Tiabaya', NULL, NULL, NULL),
('040124', '04', 'Arequipa', '01', 'Arequipa', '24', 'Uchumayo', NULL, NULL, NULL),
('040125', '04', 'Arequipa', '01', 'Arequipa', '25', 'Vitor', NULL, NULL, NULL),
('040126', '04', 'Arequipa', '01', 'Arequipa', '26', 'Yanahuara', NULL, NULL, NULL),
('040127', '04', 'Arequipa', '01', 'Arequipa', '27', 'Yarabamba', NULL, NULL, NULL),
('040128', '04', 'Arequipa', '01', 'Arequipa', '28', 'Yura', NULL, NULL, NULL),
('040129', '04', 'Arequipa', '01', 'Arequipa', '29', 'José Luis Bustamante Y Rivero', NULL, NULL, NULL),
('040200', '04', 'Arequipa', '02', 'Camaná', '00', NULL, NULL, NULL, NULL),
('040201', '04', 'Arequipa', '02', 'Camaná', '01', 'Camaná', NULL, NULL, NULL),
('040202', '04', 'Arequipa', '02', 'Camaná', '02', 'José María Quimper', NULL, NULL, NULL),
('040203', '04', 'Arequipa', '02', 'Camaná', '03', 'Mariano Nicolás Valcárcel', NULL, NULL, NULL),
('040204', '04', 'Arequipa', '02', 'Camaná', '04', 'Mariscal Cáceres', NULL, NULL, NULL),
('040205', '04', 'Arequipa', '02', 'Camaná', '05', 'Nicolás de Pierola', NULL, NULL, NULL),
('040206', '04', 'Arequipa', '02', 'Camaná', '06', 'Ocoña', NULL, NULL, NULL),
('040207', '04', 'Arequipa', '02', 'Camaná', '07', 'Quilca', NULL, NULL, NULL),
('040208', '04', 'Arequipa', '02', 'Camaná', '08', 'Samuel Pastor', NULL, NULL, NULL),
('040300', '04', 'Arequipa', '03', 'Caravelí', '00', NULL, NULL, NULL, NULL),
('040301', '04', 'Arequipa', '03', 'Caravelí', '01', 'Caravelí', NULL, NULL, NULL),
('040302', '04', 'Arequipa', '03', 'Caravelí', '02', 'Acarí', NULL, NULL, NULL),
('040303', '04', 'Arequipa', '03', 'Caravelí', '03', 'Atico', NULL, NULL, NULL),
('040304', '04', 'Arequipa', '03', 'Caravelí', '04', 'Atiquipa', NULL, NULL, NULL),
('040305', '04', 'Arequipa', '03', 'Caravelí', '05', 'Bella Unión', NULL, NULL, NULL),
('040306', '04', 'Arequipa', '03', 'Caravelí', '06', 'Cahuacho', NULL, NULL, NULL),
('040307', '04', 'Arequipa', '03', 'Caravelí', '07', 'Chala', NULL, NULL, NULL),
('040308', '04', 'Arequipa', '03', 'Caravelí', '08', 'Chaparra', NULL, NULL, NULL),
('040309', '04', 'Arequipa', '03', 'Caravelí', '09', 'Huanuhuanu', NULL, NULL, NULL),
('040310', '04', 'Arequipa', '03', 'Caravelí', '10', 'Jaqui', NULL, NULL, NULL),
('040311', '04', 'Arequipa', '03', 'Caravelí', '11', 'Lomas', NULL, NULL, NULL),
('040312', '04', 'Arequipa', '03', 'Caravelí', '12', 'Quicacha', NULL, NULL, NULL),
('040313', '04', 'Arequipa', '03', 'Caravelí', '13', 'Yauca', NULL, NULL, NULL),
('040400', '04', 'Arequipa', '04', 'Castilla', '00', NULL, NULL, NULL, NULL),
('040401', '04', 'Arequipa', '04', 'Castilla', '01', 'Aplao', NULL, NULL, NULL),
('040402', '04', 'Arequipa', '04', 'Castilla', '02', 'Andagua', NULL, NULL, NULL),
('040403', '04', 'Arequipa', '04', 'Castilla', '03', 'Ayo', NULL, NULL, NULL),
('040404', '04', 'Arequipa', '04', 'Castilla', '04', 'Chachas', NULL, NULL, NULL),
('040405', '04', 'Arequipa', '04', 'Castilla', '05', 'Chilcaymarca', NULL, NULL, NULL),
('040406', '04', 'Arequipa', '04', 'Castilla', '06', 'Choco', NULL, NULL, NULL),
('040407', '04', 'Arequipa', '04', 'Castilla', '07', 'Huancarqui', NULL, NULL, NULL),
('040408', '04', 'Arequipa', '04', 'Castilla', '08', 'Machaguay', NULL, NULL, NULL),
('040409', '04', 'Arequipa', '04', 'Castilla', '09', 'Orcopampa', NULL, NULL, NULL),
('040410', '04', 'Arequipa', '04', 'Castilla', '10', 'Pampacolca', NULL, NULL, NULL),
('040411', '04', 'Arequipa', '04', 'Castilla', '11', 'Tipan', NULL, NULL, NULL),
('040412', '04', 'Arequipa', '04', 'Castilla', '12', 'Uñon', NULL, NULL, NULL),
('040413', '04', 'Arequipa', '04', 'Castilla', '13', 'Uraca', NULL, NULL, NULL),
('040414', '04', 'Arequipa', '04', 'Castilla', '14', 'Viraco', NULL, NULL, NULL),
('040500', '04', 'Arequipa', '05', 'Caylloma', '00', NULL, NULL, NULL, NULL),
('040501', '04', 'Arequipa', '05', 'Caylloma', '01', 'Chivay', NULL, NULL, NULL),
('040502', '04', 'Arequipa', '05', 'Caylloma', '02', 'Achoma', NULL, NULL, NULL),
('040503', '04', 'Arequipa', '05', 'Caylloma', '03', 'Cabanaconde', NULL, NULL, NULL),
('040504', '04', 'Arequipa', '05', 'Caylloma', '04', 'Callalli', NULL, NULL, NULL),
('040505', '04', 'Arequipa', '05', 'Caylloma', '05', 'Caylloma', NULL, NULL, NULL),
('040506', '04', 'Arequipa', '05', 'Caylloma', '06', 'Coporaque', NULL, NULL, NULL),
('040507', '04', 'Arequipa', '05', 'Caylloma', '07', 'Huambo', NULL, NULL, NULL),
('040508', '04', 'Arequipa', '05', 'Caylloma', '08', 'Huanca', NULL, NULL, NULL),
('040509', '04', 'Arequipa', '05', 'Caylloma', '09', 'Ichupampa', NULL, NULL, NULL),
('040510', '04', 'Arequipa', '05', 'Caylloma', '10', 'Lari', NULL, NULL, NULL),
('040511', '04', 'Arequipa', '05', 'Caylloma', '11', 'Lluta', NULL, NULL, NULL),
('040512', '04', 'Arequipa', '05', 'Caylloma', '12', 'Maca', NULL, NULL, NULL),
('040513', '04', 'Arequipa', '05', 'Caylloma', '13', 'Madrigal', NULL, NULL, NULL),
('040514', '04', 'Arequipa', '05', 'Caylloma', '14', 'San Antonio de Chuca', NULL, NULL, NULL),
('040515', '04', 'Arequipa', '05', 'Caylloma', '15', 'Sibayo', NULL, NULL, NULL),
('040516', '04', 'Arequipa', '05', 'Caylloma', '16', 'Tapay', NULL, NULL, NULL),
('040517', '04', 'Arequipa', '05', 'Caylloma', '17', 'Tisco', NULL, NULL, NULL),
('040518', '04', 'Arequipa', '05', 'Caylloma', '18', 'Tuti', NULL, NULL, NULL),
('040519', '04', 'Arequipa', '05', 'Caylloma', '19', 'Yanque', NULL, NULL, NULL),
('040520', '04', 'Arequipa', '05', 'Caylloma', '20', 'Majes', NULL, NULL, NULL),
('040600', '04', 'Arequipa', '06', 'Condesuyos', '00', NULL, NULL, NULL, NULL),
('040601', '04', 'Arequipa', '06', 'Condesuyos', '01', 'Chuquibamba', NULL, NULL, NULL),
('040602', '04', 'Arequipa', '06', 'Condesuyos', '02', 'Andaray', NULL, NULL, NULL),
('040603', '04', 'Arequipa', '06', 'Condesuyos', '03', 'Cayarani', NULL, NULL, NULL),
('040604', '04', 'Arequipa', '06', 'Condesuyos', '04', 'Chichas', NULL, NULL, NULL),
('040605', '04', 'Arequipa', '06', 'Condesuyos', '05', 'Iray', NULL, NULL, NULL),
('040606', '04', 'Arequipa', '06', 'Condesuyos', '06', 'Río Grande', NULL, NULL, NULL),
('040607', '04', 'Arequipa', '06', 'Condesuyos', '07', 'Salamanca', NULL, NULL, NULL),
('040608', '04', 'Arequipa', '06', 'Condesuyos', '08', 'Yanaquihua', NULL, NULL, NULL),
('040700', '04', 'Arequipa', '07', 'Islay', '00', NULL, NULL, NULL, NULL),
('040701', '04', 'Arequipa', '07', 'Islay', '01', 'Mollendo', NULL, NULL, NULL),
('040702', '04', 'Arequipa', '07', 'Islay', '02', 'Cocachacra', NULL, NULL, NULL),
('040703', '04', 'Arequipa', '07', 'Islay', '03', 'Dean Valdivia', NULL, NULL, NULL),
('040704', '04', 'Arequipa', '07', 'Islay', '04', 'Islay', NULL, NULL, NULL),
('040705', '04', 'Arequipa', '07', 'Islay', '05', 'Mejia', NULL, NULL, NULL),
('040706', '04', 'Arequipa', '07', 'Islay', '06', 'Punta de Bombón', NULL, NULL, NULL),
('040800', '04', 'Arequipa', '08', 'La Unión', '00', NULL, NULL, NULL, NULL),
('040801', '04', 'Arequipa', '08', 'La Unión', '01', 'Cotahuasi', NULL, NULL, NULL),
('040802', '04', 'Arequipa', '08', 'La Unión', '02', 'Alca', NULL, NULL, NULL),
('040803', '04', 'Arequipa', '08', 'La Unión', '03', 'Charcana', NULL, NULL, NULL),
('040804', '04', 'Arequipa', '08', 'La Unión', '04', 'Huaynacotas', NULL, NULL, NULL),
('040805', '04', 'Arequipa', '08', 'La Unión', '05', 'Pampamarca', NULL, NULL, NULL),
('040806', '04', 'Arequipa', '08', 'La Unión', '06', 'Puyca', NULL, NULL, NULL),
('040807', '04', 'Arequipa', '08', 'La Unión', '07', 'Quechualla', NULL, NULL, NULL),
('040808', '04', 'Arequipa', '08', 'La Unión', '08', 'Sayla', NULL, NULL, NULL),
('040809', '04', 'Arequipa', '08', 'La Unión', '09', 'Tauria', NULL, NULL, NULL),
('040810', '04', 'Arequipa', '08', 'La Unión', '10', 'Tomepampa', NULL, NULL, NULL),
('040811', '04', 'Arequipa', '08', 'La Unión', '11', 'Toro', NULL, NULL, NULL),
('050000', '05', 'Ayacucho', '00', NULL, '00', NULL, '66', NULL, NULL),
('050100', '05', 'Ayacucho', '01', 'Huamanga', '00', NULL, NULL, NULL, NULL),
('050101', '05', 'Ayacucho', '01', 'Huamanga', '01', 'Ayacucho', NULL, NULL, NULL),
('050102', '05', 'Ayacucho', '01', 'Huamanga', '02', 'Acocro', NULL, NULL, NULL),
('050103', '05', 'Ayacucho', '01', 'Huamanga', '03', 'Acos Vinchos', NULL, NULL, NULL),
('050104', '05', 'Ayacucho', '01', 'Huamanga', '04', 'Carmen Alto', NULL, NULL, NULL),
('050105', '05', 'Ayacucho', '01', 'Huamanga', '05', 'Chiara', NULL, NULL, NULL),
('050106', '05', 'Ayacucho', '01', 'Huamanga', '06', 'Ocros', NULL, NULL, NULL),
('050107', '05', 'Ayacucho', '01', 'Huamanga', '07', 'Pacaycasa', NULL, NULL, NULL),
('050108', '05', 'Ayacucho', '01', 'Huamanga', '08', 'Quinua', NULL, NULL, NULL),
('050109', '05', 'Ayacucho', '01', 'Huamanga', '09', 'San José de Ticllas', NULL, NULL, NULL),
('050110', '05', 'Ayacucho', '01', 'Huamanga', '10', 'San Juan Bautista', NULL, NULL, NULL),
('050111', '05', 'Ayacucho', '01', 'Huamanga', '11', 'Santiago de Pischa', NULL, NULL, NULL),
('050112', '05', 'Ayacucho', '01', 'Huamanga', '12', 'Socos', NULL, NULL, NULL),
('050113', '05', 'Ayacucho', '01', 'Huamanga', '13', 'Tambillo', NULL, NULL, NULL),
('050114', '05', 'Ayacucho', '01', 'Huamanga', '14', 'Vinchos', NULL, NULL, NULL),
('050115', '05', 'Ayacucho', '01', 'Huamanga', '15', 'Jesús Nazareno', NULL, NULL, NULL),
('050116', '05', 'Ayacucho', '01', 'Huamanga', '16', 'Andrés Avelino Cáceres Dorregaray', NULL, NULL, NULL),
('050200', '05', 'Ayacucho', '02', 'Cangallo', '00', NULL, NULL, NULL, NULL),
('050201', '05', 'Ayacucho', '02', 'Cangallo', '01', 'Cangallo', NULL, NULL, NULL),
('050202', '05', 'Ayacucho', '02', 'Cangallo', '02', 'Chuschi', NULL, NULL, NULL),
('050203', '05', 'Ayacucho', '02', 'Cangallo', '03', 'Los Morochucos', NULL, NULL, NULL),
('050204', '05', 'Ayacucho', '02', 'Cangallo', '04', 'María Parado de Bellido', NULL, NULL, NULL),
('050205', '05', 'Ayacucho', '02', 'Cangallo', '05', 'Paras', NULL, NULL, NULL),
('050206', '05', 'Ayacucho', '02', 'Cangallo', '06', 'Totos', NULL, NULL, NULL),
('050300', '05', 'Ayacucho', '03', 'Huanca Sancos', '00', NULL, NULL, NULL, NULL),
('050301', '05', 'Ayacucho', '03', 'Huanca Sancos', '01', 'Sancos', NULL, NULL, NULL),
('050302', '05', 'Ayacucho', '03', 'Huanca Sancos', '02', 'Carapo', NULL, NULL, NULL),
('050303', '05', 'Ayacucho', '03', 'Huanca Sancos', '03', 'Sacsamarca', NULL, NULL, NULL),
('050304', '05', 'Ayacucho', '03', 'Huanca Sancos', '04', 'Santiago de Lucanamarca', NULL, NULL, NULL),
('050400', '05', 'Ayacucho', '04', 'Huanta', '00', NULL, NULL, NULL, NULL),
('050401', '05', 'Ayacucho', '04', 'Huanta', '01', 'Huanta', NULL, NULL, NULL),
('050402', '05', 'Ayacucho', '04', 'Huanta', '02', 'Ayahuanco', NULL, NULL, NULL),
('050403', '05', 'Ayacucho', '04', 'Huanta', '03', 'Huamanguilla', NULL, NULL, NULL),
('050404', '05', 'Ayacucho', '04', 'Huanta', '04', 'Iguain', NULL, NULL, NULL),
('050405', '05', 'Ayacucho', '04', 'Huanta', '05', 'Luricocha', NULL, NULL, NULL),
('050406', '05', 'Ayacucho', '04', 'Huanta', '06', 'Santillana', NULL, NULL, NULL),
('050407', '05', 'Ayacucho', '04', 'Huanta', '07', 'Sivia', NULL, NULL, NULL),
('050408', '05', 'Ayacucho', '04', 'Huanta', '08', 'Llochegua', NULL, NULL, NULL),
('050409', '05', 'Ayacucho', '04', 'Huanta', '09', 'Canayre', NULL, NULL, NULL),
('050410', '05', 'Ayacucho', '04', 'Huanta', '10', 'Uchuraccay', NULL, NULL, NULL),
('050411', '05', 'Ayacucho', '04', 'Huanta', '11', 'Pucacolpa', NULL, NULL, NULL),
('050500', '05', 'Ayacucho', '05', 'La Mar', '00', NULL, NULL, NULL, NULL),
('050501', '05', 'Ayacucho', '05', 'La Mar', '01', 'San Miguel', NULL, NULL, NULL),
('050502', '05', 'Ayacucho', '05', 'La Mar', '02', 'Anco', NULL, NULL, NULL),
('050503', '05', 'Ayacucho', '05', 'La Mar', '03', 'Ayna', NULL, NULL, NULL),
('050504', '05', 'Ayacucho', '05', 'La Mar', '04', 'Chilcas', NULL, NULL, NULL),
('050505', '05', 'Ayacucho', '05', 'La Mar', '05', 'Chungui', NULL, NULL, NULL),
('050506', '05', 'Ayacucho', '05', 'La Mar', '06', 'Luis Carranza', NULL, NULL, NULL),
('050507', '05', 'Ayacucho', '05', 'La Mar', '07', 'Santa Rosa', NULL, NULL, NULL),
('050508', '05', 'Ayacucho', '05', 'La Mar', '08', 'Tambo', NULL, NULL, NULL),
('050509', '05', 'Ayacucho', '05', 'La Mar', '09', 'Samugari', NULL, NULL, NULL),
('050510', '05', 'Ayacucho', '05', 'La Mar', '10', 'Anchihuay', NULL, NULL, NULL),
('050600', '05', 'Ayacucho', '06', 'Lucanas', '00', NULL, NULL, NULL, NULL),
('050601', '05', 'Ayacucho', '06', 'Lucanas', '01', 'Puquio', NULL, NULL, NULL),
('050602', '05', 'Ayacucho', '06', 'Lucanas', '02', 'Aucara', NULL, NULL, NULL),
('050603', '05', 'Ayacucho', '06', 'Lucanas', '03', 'Cabana', NULL, NULL, NULL),
('050604', '05', 'Ayacucho', '06', 'Lucanas', '04', 'Carmen Salcedo', NULL, NULL, NULL),
('050605', '05', 'Ayacucho', '06', 'Lucanas', '05', 'Chaviña', NULL, NULL, NULL),
('050606', '05', 'Ayacucho', '06', 'Lucanas', '06', 'Chipao', NULL, NULL, NULL),
('050607', '05', 'Ayacucho', '06', 'Lucanas', '07', 'Huac-Huas', NULL, NULL, NULL),
('050608', '05', 'Ayacucho', '06', 'Lucanas', '08', 'Laramate', NULL, NULL, NULL),
('050609', '05', 'Ayacucho', '06', 'Lucanas', '09', 'Leoncio Prado', NULL, NULL, NULL),
('050610', '05', 'Ayacucho', '06', 'Lucanas', '10', 'Llauta', NULL, NULL, NULL),
('050611', '05', 'Ayacucho', '06', 'Lucanas', '11', 'Lucanas', NULL, NULL, NULL),
('050612', '05', 'Ayacucho', '06', 'Lucanas', '12', 'Ocaña', NULL, NULL, NULL),
('050613', '05', 'Ayacucho', '06', 'Lucanas', '13', 'Otoca', NULL, NULL, NULL),
('050614', '05', 'Ayacucho', '06', 'Lucanas', '14', 'Saisa', NULL, NULL, NULL),
('050615', '05', 'Ayacucho', '06', 'Lucanas', '15', 'San Cristóbal', NULL, NULL, NULL),
('050616', '05', 'Ayacucho', '06', 'Lucanas', '16', 'San Juan', NULL, NULL, NULL),
('050617', '05', 'Ayacucho', '06', 'Lucanas', '17', 'San Pedro', NULL, NULL, NULL),
('050618', '05', 'Ayacucho', '06', 'Lucanas', '18', 'San Pedro de Palco', NULL, NULL, NULL),
('050619', '05', 'Ayacucho', '06', 'Lucanas', '19', 'Sancos', NULL, NULL, NULL),
('050620', '05', 'Ayacucho', '06', 'Lucanas', '20', 'Santa Ana de Huaycahuacho', NULL, NULL, NULL),
('050621', '05', 'Ayacucho', '06', 'Lucanas', '21', 'Santa Lucia', NULL, NULL, NULL),
('050700', '05', 'Ayacucho', '07', 'Parinacochas', '00', NULL, NULL, NULL, NULL),
('050701', '05', 'Ayacucho', '07', 'Parinacochas', '01', 'Coracora', NULL, NULL, NULL),
('050702', '05', 'Ayacucho', '07', 'Parinacochas', '02', 'Chumpi', NULL, NULL, NULL),
('050703', '05', 'Ayacucho', '07', 'Parinacochas', '03', 'Coronel Castañeda', NULL, NULL, NULL),
('050704', '05', 'Ayacucho', '07', 'Parinacochas', '04', 'Pacapausa', NULL, NULL, NULL),
('050705', '05', 'Ayacucho', '07', 'Parinacochas', '05', 'Pullo', NULL, NULL, NULL),
('050706', '05', 'Ayacucho', '07', 'Parinacochas', '06', 'Puyusca', NULL, NULL, NULL),
('050707', '05', 'Ayacucho', '07', 'Parinacochas', '07', 'San Francisco de Ravacayco', NULL, NULL, NULL),
('050708', '05', 'Ayacucho', '07', 'Parinacochas', '08', 'Upahuacho', NULL, NULL, NULL),
('050800', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '00', NULL, NULL, NULL, NULL),
('050801', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '01', 'Pausa', NULL, NULL, NULL),
('050802', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '02', 'Colta', NULL, NULL, NULL),
('050803', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '03', 'Corculla', NULL, NULL, NULL),
('050804', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '04', 'Lampa', NULL, NULL, NULL),
('050805', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '05', 'Marcabamba', NULL, NULL, NULL),
('050806', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '06', 'Oyolo', NULL, NULL, NULL),
('050807', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '07', 'Pararca', NULL, NULL, NULL),
('050808', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '08', 'San Javier de Alpabamba', NULL, NULL, NULL),
('050809', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '09', 'San José de Ushua', NULL, NULL, NULL),
('050810', '05', 'Ayacucho', '08', 'Pàucar del Sara Sara', '10', 'Sara Sara', NULL, NULL, NULL),
('050900', '05', 'Ayacucho', '09', 'Sucre', '00', NULL, NULL, NULL, NULL),
('050901', '05', 'Ayacucho', '09', 'Sucre', '01', 'Querobamba', NULL, NULL, NULL),
('050902', '05', 'Ayacucho', '09', 'Sucre', '02', 'Belén', NULL, NULL, NULL),
('050903', '05', 'Ayacucho', '09', 'Sucre', '03', 'Chalcos', NULL, NULL, NULL),
('050904', '05', 'Ayacucho', '09', 'Sucre', '04', 'Chilcayoc', NULL, NULL, NULL),
('050905', '05', 'Ayacucho', '09', 'Sucre', '05', 'Huacaña', NULL, NULL, NULL),
('050906', '05', 'Ayacucho', '09', 'Sucre', '06', 'Morcolla', NULL, NULL, NULL),
('050907', '05', 'Ayacucho', '09', 'Sucre', '07', 'Paico', NULL, NULL, NULL),
('050908', '05', 'Ayacucho', '09', 'Sucre', '08', 'San Pedro de Larcay', NULL, NULL, NULL),
('050909', '05', 'Ayacucho', '09', 'Sucre', '09', 'San Salvador de Quije', NULL, NULL, NULL),
('050910', '05', 'Ayacucho', '09', 'Sucre', '10', 'Santiago de Paucaray', NULL, NULL, NULL),
('050911', '05', 'Ayacucho', '09', 'Sucre', '11', 'Soras', NULL, NULL, NULL),
('051000', '05', 'Ayacucho', '10', 'Víctor Fajardo', '00', NULL, NULL, NULL, NULL),
('051001', '05', 'Ayacucho', '10', 'Víctor Fajardo', '01', 'Huancapi', NULL, NULL, NULL),
('051002', '05', 'Ayacucho', '10', 'Víctor Fajardo', '02', 'Alcamenca', NULL, NULL, NULL),
('051003', '05', 'Ayacucho', '10', 'Víctor Fajardo', '03', 'Apongo', NULL, NULL, NULL),
('051004', '05', 'Ayacucho', '10', 'Víctor Fajardo', '04', 'Asquipata', NULL, NULL, NULL),
('051005', '05', 'Ayacucho', '10', 'Víctor Fajardo', '05', 'Canaria', NULL, NULL, NULL),
('051006', '05', 'Ayacucho', '10', 'Víctor Fajardo', '06', 'Cayara', NULL, NULL, NULL),
('051007', '05', 'Ayacucho', '10', 'Víctor Fajardo', '07', 'Colca', NULL, NULL, NULL),
('051008', '05', 'Ayacucho', '10', 'Víctor Fajardo', '08', 'Huamanquiquia', NULL, NULL, NULL),
('051009', '05', 'Ayacucho', '10', 'Víctor Fajardo', '09', 'Huancaraylla', NULL, NULL, NULL),
('051010', '05', 'Ayacucho', '10', 'Víctor Fajardo', '10', 'Huaya', NULL, NULL, NULL),
('051011', '05', 'Ayacucho', '10', 'Víctor Fajardo', '11', 'Sarhua', NULL, NULL, NULL),
('051012', '05', 'Ayacucho', '10', 'Víctor Fajardo', '12', 'Vilcanchos', NULL, NULL, NULL);
INSERT INTO `master_ubigeo` (`code_ubigeo`, `code_department`, `department`, `code_province`, `province`, `code_district`, `district`, `code_number`, `created_at`, `updated_at`) VALUES
('051100', '05', 'Ayacucho', '11', 'Vilcas Huamán', '00', NULL, NULL, NULL, NULL),
('051101', '05', 'Ayacucho', '11', 'Vilcas Huamán', '01', 'Vilcas Huaman', NULL, NULL, NULL),
('051102', '05', 'Ayacucho', '11', 'Vilcas Huamán', '02', 'Accomarca', NULL, NULL, NULL),
('051103', '05', 'Ayacucho', '11', 'Vilcas Huamán', '03', 'Carhuanca', NULL, NULL, NULL),
('051104', '05', 'Ayacucho', '11', 'Vilcas Huamán', '04', 'Concepción', NULL, NULL, NULL),
('051105', '05', 'Ayacucho', '11', 'Vilcas Huamán', '05', 'Huambalpa', NULL, NULL, NULL),
('051106', '05', 'Ayacucho', '11', 'Vilcas Huamán', '06', 'Independencia', NULL, NULL, NULL),
('051107', '05', 'Ayacucho', '11', 'Vilcas Huamán', '07', 'Saurama', NULL, NULL, NULL),
('051108', '05', 'Ayacucho', '11', 'Vilcas Huamán', '08', 'Vischongo', NULL, NULL, NULL),
('060000', '06', 'Cajamarca', '00', NULL, '00', NULL, '76', NULL, NULL),
('060100', '06', 'Cajamarca', '01', 'Cajamarca', '00', NULL, NULL, NULL, NULL),
('060101', '06', 'Cajamarca', '01', 'Cajamarca', '01', 'Cajamarca', NULL, NULL, NULL),
('060102', '06', 'Cajamarca', '01', 'Cajamarca', '02', 'Asunción', NULL, NULL, NULL),
('060103', '06', 'Cajamarca', '01', 'Cajamarca', '03', 'Chetilla', NULL, NULL, NULL),
('060104', '06', 'Cajamarca', '01', 'Cajamarca', '04', 'Cospan', NULL, NULL, NULL),
('060105', '06', 'Cajamarca', '01', 'Cajamarca', '05', 'Encañada', NULL, NULL, NULL),
('060106', '06', 'Cajamarca', '01', 'Cajamarca', '06', 'Jesús', NULL, NULL, NULL),
('060107', '06', 'Cajamarca', '01', 'Cajamarca', '07', 'Llacanora', NULL, NULL, NULL),
('060108', '06', 'Cajamarca', '01', 'Cajamarca', '08', 'Los Baños del Inca', NULL, NULL, NULL),
('060109', '06', 'Cajamarca', '01', 'Cajamarca', '09', 'Magdalena', NULL, NULL, NULL),
('060110', '06', 'Cajamarca', '01', 'Cajamarca', '10', 'Matara', NULL, NULL, NULL),
('060111', '06', 'Cajamarca', '01', 'Cajamarca', '11', 'Namora', NULL, NULL, NULL),
('060112', '06', 'Cajamarca', '01', 'Cajamarca', '12', 'San Juan', NULL, NULL, NULL),
('060200', '06', 'Cajamarca', '02', 'Cajabamba', '00', NULL, NULL, NULL, NULL),
('060201', '06', 'Cajamarca', '02', 'Cajabamba', '01', 'Cajabamba', NULL, NULL, NULL),
('060202', '06', 'Cajamarca', '02', 'Cajabamba', '02', 'Cachachi', NULL, NULL, NULL),
('060203', '06', 'Cajamarca', '02', 'Cajabamba', '03', 'Condebamba', NULL, NULL, NULL),
('060204', '06', 'Cajamarca', '02', 'Cajabamba', '04', 'Sitacocha', NULL, NULL, NULL),
('060300', '06', 'Cajamarca', '03', 'Celendín', '00', NULL, NULL, NULL, NULL),
('060301', '06', 'Cajamarca', '03', 'Celendín', '01', 'Celendín', NULL, NULL, NULL),
('060302', '06', 'Cajamarca', '03', 'Celendín', '02', 'Chumuch', NULL, NULL, NULL),
('060303', '06', 'Cajamarca', '03', 'Celendín', '03', 'Cortegana', NULL, NULL, NULL),
('060304', '06', 'Cajamarca', '03', 'Celendín', '04', 'Huasmin', NULL, NULL, NULL),
('060305', '06', 'Cajamarca', '03', 'Celendín', '05', 'Jorge Chávez', NULL, NULL, NULL),
('060306', '06', 'Cajamarca', '03', 'Celendín', '06', 'José Gálvez', NULL, NULL, NULL),
('060307', '06', 'Cajamarca', '03', 'Celendín', '07', 'Miguel Iglesias', NULL, NULL, NULL),
('060308', '06', 'Cajamarca', '03', 'Celendín', '08', 'Oxamarca', NULL, NULL, NULL),
('060309', '06', 'Cajamarca', '03', 'Celendín', '09', 'Sorochuco', NULL, NULL, NULL),
('060310', '06', 'Cajamarca', '03', 'Celendín', '10', 'Sucre', NULL, NULL, NULL),
('060311', '06', 'Cajamarca', '03', 'Celendín', '11', 'Utco', NULL, NULL, NULL),
('060312', '06', 'Cajamarca', '03', 'Celendín', '12', 'La Libertad de Pallan', NULL, NULL, NULL),
('060400', '06', 'Cajamarca', '04', 'Chota', '00', NULL, NULL, NULL, NULL),
('060401', '06', 'Cajamarca', '04', 'Chota', '01', 'Chota', NULL, NULL, NULL),
('060402', '06', 'Cajamarca', '04', 'Chota', '02', 'Anguia', NULL, NULL, NULL),
('060403', '06', 'Cajamarca', '04', 'Chota', '03', 'Chadin', NULL, NULL, NULL),
('060404', '06', 'Cajamarca', '04', 'Chota', '04', 'Chiguirip', NULL, NULL, NULL),
('060405', '06', 'Cajamarca', '04', 'Chota', '05', 'Chimban', NULL, NULL, NULL),
('060406', '06', 'Cajamarca', '04', 'Chota', '06', 'Choropampa', NULL, NULL, NULL),
('060407', '06', 'Cajamarca', '04', 'Chota', '07', 'Cochabamba', NULL, NULL, NULL),
('060408', '06', 'Cajamarca', '04', 'Chota', '08', 'Conchan', NULL, NULL, NULL),
('060409', '06', 'Cajamarca', '04', 'Chota', '09', 'Huambos', NULL, NULL, NULL),
('060410', '06', 'Cajamarca', '04', 'Chota', '10', 'Lajas', NULL, NULL, NULL),
('060411', '06', 'Cajamarca', '04', 'Chota', '11', 'Llama', NULL, NULL, NULL),
('060412', '06', 'Cajamarca', '04', 'Chota', '12', 'Miracosta', NULL, NULL, NULL),
('060413', '06', 'Cajamarca', '04', 'Chota', '13', 'Paccha', NULL, NULL, NULL),
('060414', '06', 'Cajamarca', '04', 'Chota', '14', 'Pion', NULL, NULL, NULL),
('060415', '06', 'Cajamarca', '04', 'Chota', '15', 'Querocoto', NULL, NULL, NULL),
('060416', '06', 'Cajamarca', '04', 'Chota', '16', 'San Juan de Licupis', NULL, NULL, NULL),
('060417', '06', 'Cajamarca', '04', 'Chota', '17', 'Tacabamba', NULL, NULL, NULL),
('060418', '06', 'Cajamarca', '04', 'Chota', '18', 'Tocmoche', NULL, NULL, NULL),
('060419', '06', 'Cajamarca', '04', 'Chota', '19', 'Chalamarca', NULL, NULL, NULL),
('060500', '06', 'Cajamarca', '05', 'Contumazá', '00', NULL, NULL, NULL, NULL),
('060501', '06', 'Cajamarca', '05', 'Contumazá', '01', 'Contumaza', NULL, NULL, NULL),
('060502', '06', 'Cajamarca', '05', 'Contumazá', '02', 'Chilete', NULL, NULL, NULL),
('060503', '06', 'Cajamarca', '05', 'Contumazá', '03', 'Cupisnique', NULL, NULL, NULL),
('060504', '06', 'Cajamarca', '05', 'Contumazá', '04', 'Guzmango', NULL, NULL, NULL),
('060505', '06', 'Cajamarca', '05', 'Contumazá', '05', 'San Benito', NULL, NULL, NULL),
('060506', '06', 'Cajamarca', '05', 'Contumazá', '06', 'Santa Cruz de Toledo', NULL, NULL, NULL),
('060507', '06', 'Cajamarca', '05', 'Contumazá', '07', 'Tantarica', NULL, NULL, NULL),
('060508', '06', 'Cajamarca', '05', 'Contumazá', '08', 'Yonan', NULL, NULL, NULL),
('060600', '06', 'Cajamarca', '06', 'Cutervo', '00', NULL, NULL, NULL, NULL),
('060601', '06', 'Cajamarca', '06', 'Cutervo', '01', 'Cutervo', NULL, NULL, NULL),
('060602', '06', 'Cajamarca', '06', 'Cutervo', '02', 'Callayuc', NULL, NULL, NULL),
('060603', '06', 'Cajamarca', '06', 'Cutervo', '03', 'Choros', NULL, NULL, NULL),
('060604', '06', 'Cajamarca', '06', 'Cutervo', '04', 'Cujillo', NULL, NULL, NULL),
('060605', '06', 'Cajamarca', '06', 'Cutervo', '05', 'La Ramada', NULL, NULL, NULL),
('060606', '06', 'Cajamarca', '06', 'Cutervo', '06', 'Pimpingos', NULL, NULL, NULL),
('060607', '06', 'Cajamarca', '06', 'Cutervo', '07', 'Querocotillo', NULL, NULL, NULL),
('060608', '06', 'Cajamarca', '06', 'Cutervo', '08', 'San Andrés de Cutervo', NULL, NULL, NULL),
('060609', '06', 'Cajamarca', '06', 'Cutervo', '09', 'San Juan de Cutervo', NULL, NULL, NULL),
('060610', '06', 'Cajamarca', '06', 'Cutervo', '10', 'San Luis de Lucma', NULL, NULL, NULL),
('060611', '06', 'Cajamarca', '06', 'Cutervo', '11', 'Santa Cruz', NULL, NULL, NULL),
('060612', '06', 'Cajamarca', '06', 'Cutervo', '12', 'Santo Domingo de la Capilla', NULL, NULL, NULL),
('060613', '06', 'Cajamarca', '06', 'Cutervo', '13', 'Santo Tomas', NULL, NULL, NULL),
('060614', '06', 'Cajamarca', '06', 'Cutervo', '14', 'Socota', NULL, NULL, NULL),
('060615', '06', 'Cajamarca', '06', 'Cutervo', '15', 'Toribio Casanova', NULL, NULL, NULL),
('060700', '06', 'Cajamarca', '07', 'Hualgayoc', '00', NULL, NULL, NULL, NULL),
('060701', '06', 'Cajamarca', '07', 'Hualgayoc', '01', 'Bambamarca', NULL, NULL, NULL),
('060702', '06', 'Cajamarca', '07', 'Hualgayoc', '02', 'Chugur', NULL, NULL, NULL),
('060703', '06', 'Cajamarca', '07', 'Hualgayoc', '03', 'Hualgayoc', NULL, NULL, NULL),
('060800', '06', 'Cajamarca', '08', 'Jaén', '00', NULL, NULL, NULL, NULL),
('060801', '06', 'Cajamarca', '08', 'Jaén', '01', 'Jaén', NULL, NULL, NULL),
('060802', '06', 'Cajamarca', '08', 'Jaén', '02', 'Bellavista', NULL, NULL, NULL),
('060803', '06', 'Cajamarca', '08', 'Jaén', '03', 'Chontali', NULL, NULL, NULL),
('060804', '06', 'Cajamarca', '08', 'Jaén', '04', 'Colasay', NULL, NULL, NULL),
('060805', '06', 'Cajamarca', '08', 'Jaén', '05', 'Huabal', NULL, NULL, NULL),
('060806', '06', 'Cajamarca', '08', 'Jaén', '06', 'Las Pirias', NULL, NULL, NULL),
('060807', '06', 'Cajamarca', '08', 'Jaén', '07', 'Pomahuaca', NULL, NULL, NULL),
('060808', '06', 'Cajamarca', '08', 'Jaén', '08', 'Pucara', NULL, NULL, NULL),
('060809', '06', 'Cajamarca', '08', 'Jaén', '09', 'Sallique', NULL, NULL, NULL),
('060810', '06', 'Cajamarca', '08', 'Jaén', '10', 'San Felipe', NULL, NULL, NULL),
('060811', '06', 'Cajamarca', '08', 'Jaén', '11', 'San José del Alto', NULL, NULL, NULL),
('060812', '06', 'Cajamarca', '08', 'Jaén', '12', 'Santa Rosa', NULL, NULL, NULL),
('060900', '06', 'Cajamarca', '09', 'San Ignacio', '00', NULL, NULL, NULL, NULL),
('060901', '06', 'Cajamarca', '09', 'San Ignacio', '01', 'San Ignacio', NULL, NULL, NULL),
('060902', '06', 'Cajamarca', '09', 'San Ignacio', '02', 'Chirinos', NULL, NULL, NULL),
('060903', '06', 'Cajamarca', '09', 'San Ignacio', '03', 'Huarango', NULL, NULL, NULL),
('060904', '06', 'Cajamarca', '09', 'San Ignacio', '04', 'La Coipa', NULL, NULL, NULL),
('060905', '06', 'Cajamarca', '09', 'San Ignacio', '05', 'Namballe', NULL, NULL, NULL),
('060906', '06', 'Cajamarca', '09', 'San Ignacio', '06', 'San José de Lourdes', NULL, NULL, NULL),
('060907', '06', 'Cajamarca', '09', 'San Ignacio', '07', 'Tabaconas', NULL, NULL, NULL),
('061000', '06', 'Cajamarca', '10', 'San Marcos', '00', NULL, NULL, NULL, NULL),
('061001', '06', 'Cajamarca', '10', 'San Marcos', '01', 'Pedro Gálvez', NULL, NULL, NULL),
('061002', '06', 'Cajamarca', '10', 'San Marcos', '02', 'Chancay', NULL, NULL, NULL),
('061003', '06', 'Cajamarca', '10', 'San Marcos', '03', 'Eduardo Villanueva', NULL, NULL, NULL),
('061004', '06', 'Cajamarca', '10', 'San Marcos', '04', 'Gregorio Pita', NULL, NULL, NULL),
('061005', '06', 'Cajamarca', '10', 'San Marcos', '05', 'Ichocan', NULL, NULL, NULL),
('061006', '06', 'Cajamarca', '10', 'San Marcos', '06', 'José Manuel Quiroz', NULL, NULL, NULL),
('061007', '06', 'Cajamarca', '10', 'San Marcos', '07', 'José Sabogal', NULL, NULL, NULL),
('061100', '06', 'Cajamarca', '11', 'San Miguel', '00', NULL, NULL, NULL, NULL),
('061101', '06', 'Cajamarca', '11', 'San Miguel', '01', 'San Miguel', NULL, NULL, NULL),
('061102', '06', 'Cajamarca', '11', 'San Miguel', '02', 'Bolívar', NULL, NULL, NULL),
('061103', '06', 'Cajamarca', '11', 'San Miguel', '03', 'Calquis', NULL, NULL, NULL),
('061104', '06', 'Cajamarca', '11', 'San Miguel', '04', 'Catilluc', NULL, NULL, NULL),
('061105', '06', 'Cajamarca', '11', 'San Miguel', '05', 'El Prado', NULL, NULL, NULL),
('061106', '06', 'Cajamarca', '11', 'San Miguel', '06', 'La Florida', NULL, NULL, NULL),
('061107', '06', 'Cajamarca', '11', 'San Miguel', '07', 'Llapa', NULL, NULL, NULL),
('061108', '06', 'Cajamarca', '11', 'San Miguel', '08', 'Nanchoc', NULL, NULL, NULL),
('061109', '06', 'Cajamarca', '11', 'San Miguel', '09', 'Niepos', NULL, NULL, NULL),
('061110', '06', 'Cajamarca', '11', 'San Miguel', '10', 'San Gregorio', NULL, NULL, NULL),
('061111', '06', 'Cajamarca', '11', 'San Miguel', '11', 'San Silvestre de Cochan', NULL, NULL, NULL),
('061112', '06', 'Cajamarca', '11', 'San Miguel', '12', 'Tongod', NULL, NULL, NULL),
('061113', '06', 'Cajamarca', '11', 'San Miguel', '13', 'Unión Agua Blanca', NULL, NULL, NULL),
('061200', '06', 'Cajamarca', '12', 'San Pablo', '00', NULL, NULL, NULL, NULL),
('061201', '06', 'Cajamarca', '12', 'San Pablo', '01', 'San Pablo', NULL, NULL, NULL),
('061202', '06', 'Cajamarca', '12', 'San Pablo', '02', 'San Bernardino', NULL, NULL, NULL),
('061203', '06', 'Cajamarca', '12', 'San Pablo', '03', 'San Luis', NULL, NULL, NULL),
('061204', '06', 'Cajamarca', '12', 'San Pablo', '04', 'Tumbaden', NULL, NULL, NULL),
('061300', '06', 'Cajamarca', '13', 'Santa Cruz', '00', NULL, NULL, NULL, NULL),
('061301', '06', 'Cajamarca', '13', 'Santa Cruz', '01', 'Santa Cruz', NULL, NULL, NULL),
('061302', '06', 'Cajamarca', '13', 'Santa Cruz', '02', 'Andabamba', NULL, NULL, NULL),
('061303', '06', 'Cajamarca', '13', 'Santa Cruz', '03', 'Catache', NULL, NULL, NULL),
('061304', '06', 'Cajamarca', '13', 'Santa Cruz', '04', 'Chancaybaños', NULL, NULL, NULL),
('061305', '06', 'Cajamarca', '13', 'Santa Cruz', '05', 'La Esperanza', NULL, NULL, NULL),
('061306', '06', 'Cajamarca', '13', 'Santa Cruz', '06', 'Ninabamba', NULL, NULL, NULL),
('061307', '06', 'Cajamarca', '13', 'Santa Cruz', '07', 'Pulan', NULL, NULL, NULL),
('061308', '06', 'Cajamarca', '13', 'Santa Cruz', '08', 'Saucepampa', NULL, NULL, NULL),
('061309', '06', 'Cajamarca', '13', 'Santa Cruz', '09', 'Sexi', NULL, NULL, NULL),
('061310', '06', 'Cajamarca', '13', 'Santa Cruz', '10', 'Uticyacu', NULL, NULL, NULL),
('061311', '06', 'Cajamarca', '13', 'Santa Cruz', '11', 'Yauyucan', NULL, NULL, NULL),
('070000', '07', 'Callao', '00', NULL, '00', NULL, '1', NULL, NULL),
('070100', '07', 'Callao', '01', 'Prov. Const. del Callao', '00', NULL, NULL, NULL, NULL),
('070101', '07', 'Callao', '01', 'Prov. Const. del Callao', '01', 'Callao', NULL, NULL, NULL),
('070102', '07', 'Callao', '01', 'Prov. Const. del Callao', '02', 'Bellavista', NULL, NULL, NULL),
('070103', '07', 'Callao', '01', 'Prov. Const. del Callao', '03', 'Carmen de la Legua Reynoso', NULL, NULL, NULL),
('070104', '07', 'Callao', '01', 'Prov. Const. del Callao', '04', 'La Perla', NULL, NULL, NULL),
('070105', '07', 'Callao', '01', 'Prov. Const. del Callao', '05', 'La Punta', NULL, NULL, NULL),
('070106', '07', 'Callao', '01', 'Prov. Const. del Callao', '06', 'Ventanilla', NULL, NULL, NULL),
('070107', '07', 'Callao', '01', 'Prov. Const. del Callao', '07', 'Mi Perú', NULL, NULL, NULL),
('080000', '08', 'Cusco', '00', NULL, '00', NULL, '84', NULL, NULL),
('080100', '08', 'Cusco', '01', 'Cusco', '00', NULL, NULL, NULL, NULL),
('080101', '08', 'Cusco', '01', 'Cusco', '01', 'Cusco', NULL, NULL, NULL),
('080102', '08', 'Cusco', '01', 'Cusco', '02', 'Ccorca', NULL, NULL, NULL),
('080103', '08', 'Cusco', '01', 'Cusco', '03', 'Poroy', NULL, NULL, NULL),
('080104', '08', 'Cusco', '01', 'Cusco', '04', 'San Jerónimo', NULL, NULL, NULL),
('080105', '08', 'Cusco', '01', 'Cusco', '05', 'San Sebastian', NULL, NULL, NULL),
('080106', '08', 'Cusco', '01', 'Cusco', '06', 'Santiago', NULL, NULL, NULL),
('080107', '08', 'Cusco', '01', 'Cusco', '07', 'Saylla', NULL, NULL, NULL),
('080108', '08', 'Cusco', '01', 'Cusco', '08', 'Wanchaq', NULL, NULL, NULL),
('080200', '08', 'Cusco', '02', 'Acomayo', '00', NULL, NULL, NULL, NULL),
('080201', '08', 'Cusco', '02', 'Acomayo', '01', 'Acomayo', NULL, NULL, NULL),
('080202', '08', 'Cusco', '02', 'Acomayo', '02', 'Acopia', NULL, NULL, NULL),
('080203', '08', 'Cusco', '02', 'Acomayo', '03', 'Acos', NULL, NULL, NULL),
('080204', '08', 'Cusco', '02', 'Acomayo', '04', 'Mosoc Llacta', NULL, NULL, NULL),
('080205', '08', 'Cusco', '02', 'Acomayo', '05', 'Pomacanchi', NULL, NULL, NULL),
('080206', '08', 'Cusco', '02', 'Acomayo', '06', 'Rondocan', NULL, NULL, NULL),
('080207', '08', 'Cusco', '02', 'Acomayo', '07', 'Sangarara', NULL, NULL, NULL),
('080300', '08', 'Cusco', '03', 'Anta', '00', NULL, NULL, NULL, NULL),
('080301', '08', 'Cusco', '03', 'Anta', '01', 'Anta', NULL, NULL, NULL),
('080302', '08', 'Cusco', '03', 'Anta', '02', 'Ancahuasi', NULL, NULL, NULL),
('080303', '08', 'Cusco', '03', 'Anta', '03', 'Cachimayo', NULL, NULL, NULL),
('080304', '08', 'Cusco', '03', 'Anta', '04', 'Chinchaypujio', NULL, NULL, NULL),
('080305', '08', 'Cusco', '03', 'Anta', '05', 'Huarocondo', NULL, NULL, NULL),
('080306', '08', 'Cusco', '03', 'Anta', '06', 'Limatambo', NULL, NULL, NULL),
('080307', '08', 'Cusco', '03', 'Anta', '07', 'Mollepata', NULL, NULL, NULL),
('080308', '08', 'Cusco', '03', 'Anta', '08', 'Pucyura', NULL, NULL, NULL),
('080309', '08', 'Cusco', '03', 'Anta', '09', 'Zurite', NULL, NULL, NULL),
('080400', '08', 'Cusco', '04', 'Calca', '00', NULL, NULL, NULL, NULL),
('080401', '08', 'Cusco', '04', 'Calca', '01', 'Calca', NULL, NULL, NULL),
('080402', '08', 'Cusco', '04', 'Calca', '02', 'Coya', NULL, NULL, NULL),
('080403', '08', 'Cusco', '04', 'Calca', '03', 'Lamay', NULL, NULL, NULL),
('080404', '08', 'Cusco', '04', 'Calca', '04', 'Lares', NULL, NULL, NULL),
('080405', '08', 'Cusco', '04', 'Calca', '05', 'Pisac', NULL, NULL, NULL),
('080406', '08', 'Cusco', '04', 'Calca', '06', 'San Salvador', NULL, NULL, NULL),
('080407', '08', 'Cusco', '04', 'Calca', '07', 'Taray', NULL, NULL, NULL),
('080408', '08', 'Cusco', '04', 'Calca', '08', 'Yanatile', NULL, NULL, NULL),
('080500', '08', 'Cusco', '05', 'Canas', '00', NULL, NULL, NULL, NULL),
('080501', '08', 'Cusco', '05', 'Canas', '01', 'Yanaoca', NULL, NULL, NULL),
('080502', '08', 'Cusco', '05', 'Canas', '02', 'Checca', NULL, NULL, NULL),
('080503', '08', 'Cusco', '05', 'Canas', '03', 'Kunturkanki', NULL, NULL, NULL),
('080504', '08', 'Cusco', '05', 'Canas', '04', 'Langui', NULL, NULL, NULL),
('080505', '08', 'Cusco', '05', 'Canas', '05', 'Layo', NULL, NULL, NULL),
('080506', '08', 'Cusco', '05', 'Canas', '06', 'Pampamarca', NULL, NULL, NULL),
('080507', '08', 'Cusco', '05', 'Canas', '07', 'Quehue', NULL, NULL, NULL),
('080508', '08', 'Cusco', '05', 'Canas', '08', 'Tupac Amaru', NULL, NULL, NULL),
('080600', '08', 'Cusco', '06', 'Canchis', '00', NULL, NULL, NULL, NULL),
('080601', '08', 'Cusco', '06', 'Canchis', '01', 'Sicuani', NULL, NULL, NULL),
('080602', '08', 'Cusco', '06', 'Canchis', '02', 'Checacupe', NULL, NULL, NULL),
('080603', '08', 'Cusco', '06', 'Canchis', '03', 'Combapata', NULL, NULL, NULL),
('080604', '08', 'Cusco', '06', 'Canchis', '04', 'Marangani', NULL, NULL, NULL),
('080605', '08', 'Cusco', '06', 'Canchis', '05', 'Pitumarca', NULL, NULL, NULL),
('080606', '08', 'Cusco', '06', 'Canchis', '06', 'San Pablo', NULL, NULL, NULL),
('080607', '08', 'Cusco', '06', 'Canchis', '07', 'San Pedro', NULL, NULL, NULL),
('080608', '08', 'Cusco', '06', 'Canchis', '08', 'Tinta', NULL, NULL, NULL),
('080700', '08', 'Cusco', '07', 'Chumbivilcas', '00', NULL, NULL, NULL, NULL),
('080701', '08', 'Cusco', '07', 'Chumbivilcas', '01', 'Santo Tomas', NULL, NULL, NULL),
('080702', '08', 'Cusco', '07', 'Chumbivilcas', '02', 'Capacmarca', NULL, NULL, NULL),
('080703', '08', 'Cusco', '07', 'Chumbivilcas', '03', 'Chamaca', NULL, NULL, NULL),
('080704', '08', 'Cusco', '07', 'Chumbivilcas', '04', 'Colquemarca', NULL, NULL, NULL),
('080705', '08', 'Cusco', '07', 'Chumbivilcas', '05', 'Livitaca', NULL, NULL, NULL),
('080706', '08', 'Cusco', '07', 'Chumbivilcas', '06', 'Llusco', NULL, NULL, NULL),
('080707', '08', 'Cusco', '07', 'Chumbivilcas', '07', 'Quiñota', NULL, NULL, NULL),
('080708', '08', 'Cusco', '07', 'Chumbivilcas', '08', 'Velille', NULL, NULL, NULL),
('080800', '08', 'Cusco', '08', 'Espinar', '00', NULL, NULL, NULL, NULL),
('080801', '08', 'Cusco', '08', 'Espinar', '01', 'Espinar', NULL, NULL, NULL),
('080802', '08', 'Cusco', '08', 'Espinar', '02', 'Condoroma', NULL, NULL, NULL),
('080803', '08', 'Cusco', '08', 'Espinar', '03', 'Coporaque', NULL, NULL, NULL),
('080804', '08', 'Cusco', '08', 'Espinar', '04', 'Ocoruro', NULL, NULL, NULL),
('080805', '08', 'Cusco', '08', 'Espinar', '05', 'Pallpata', NULL, NULL, NULL),
('080806', '08', 'Cusco', '08', 'Espinar', '06', 'Pichigua', NULL, NULL, NULL),
('080807', '08', 'Cusco', '08', 'Espinar', '07', 'Suyckutambo', NULL, NULL, NULL),
('080808', '08', 'Cusco', '08', 'Espinar', '08', 'Alto Pichigua', NULL, NULL, NULL),
('080900', '08', 'Cusco', '09', 'La Convención', '00', NULL, NULL, NULL, NULL),
('080901', '08', 'Cusco', '09', 'La Convención', '01', 'Santa Ana', NULL, NULL, NULL),
('080902', '08', 'Cusco', '09', 'La Convención', '02', 'Echarate', NULL, NULL, NULL),
('080903', '08', 'Cusco', '09', 'La Convención', '03', 'Huayopata', NULL, NULL, NULL),
('080904', '08', 'Cusco', '09', 'La Convención', '04', 'Maranura', NULL, NULL, NULL),
('080905', '08', 'Cusco', '09', 'La Convención', '05', 'Ocobamba', NULL, NULL, NULL),
('080906', '08', 'Cusco', '09', 'La Convención', '06', 'Quellouno', NULL, NULL, NULL),
('080907', '08', 'Cusco', '09', 'La Convención', '07', 'Kimbiri', NULL, NULL, NULL),
('080908', '08', 'Cusco', '09', 'La Convención', '08', 'Santa Teresa', NULL, NULL, NULL),
('080909', '08', 'Cusco', '09', 'La Convención', '09', 'Vilcabamba', NULL, NULL, NULL),
('080910', '08', 'Cusco', '09', 'La Convención', '10', 'Pichari', NULL, NULL, NULL),
('080911', '08', 'Cusco', '09', 'La Convención', '11', 'Inkawasi', NULL, NULL, NULL),
('080912', '08', 'Cusco', '09', 'La Convención', '12', 'Villa Virgen', NULL, NULL, NULL),
('080913', '08', 'Cusco', '09', 'La Convención', '13', 'Villa Kintiarina', NULL, NULL, NULL),
('081000', '08', 'Cusco', '10', 'Paruro', '00', NULL, NULL, NULL, NULL),
('081001', '08', 'Cusco', '10', 'Paruro', '01', 'Paruro', NULL, NULL, NULL),
('081002', '08', 'Cusco', '10', 'Paruro', '02', 'Accha', NULL, NULL, NULL),
('081003', '08', 'Cusco', '10', 'Paruro', '03', 'Ccapi', NULL, NULL, NULL),
('081004', '08', 'Cusco', '10', 'Paruro', '04', 'Colcha', NULL, NULL, NULL),
('081005', '08', 'Cusco', '10', 'Paruro', '05', 'Huanoquite', NULL, NULL, NULL),
('081006', '08', 'Cusco', '10', 'Paruro', '06', 'Omacha', NULL, NULL, NULL),
('081007', '08', 'Cusco', '10', 'Paruro', '07', 'Paccaritambo', NULL, NULL, NULL),
('081008', '08', 'Cusco', '10', 'Paruro', '08', 'Pillpinto', NULL, NULL, NULL),
('081009', '08', 'Cusco', '10', 'Paruro', '09', 'Yaurisque', NULL, NULL, NULL),
('081100', '08', 'Cusco', '11', 'Paucartambo', '00', NULL, NULL, NULL, NULL),
('081101', '08', 'Cusco', '11', 'Paucartambo', '01', 'Paucartambo', NULL, NULL, NULL),
('081102', '08', 'Cusco', '11', 'Paucartambo', '02', 'Caicay', NULL, NULL, NULL),
('081103', '08', 'Cusco', '11', 'Paucartambo', '03', 'Challabamba', NULL, NULL, NULL),
('081104', '08', 'Cusco', '11', 'Paucartambo', '04', 'Colquepata', NULL, NULL, NULL),
('081105', '08', 'Cusco', '11', 'Paucartambo', '05', 'Huancarani', NULL, NULL, NULL),
('081106', '08', 'Cusco', '11', 'Paucartambo', '06', 'Kosñipata', NULL, NULL, NULL),
('081200', '08', 'Cusco', '12', 'Quispicanchi', '00', NULL, NULL, NULL, NULL),
('081201', '08', 'Cusco', '12', 'Quispicanchi', '01', 'Urcos', NULL, NULL, NULL),
('081202', '08', 'Cusco', '12', 'Quispicanchi', '02', 'Andahuaylillas', NULL, NULL, NULL),
('081203', '08', 'Cusco', '12', 'Quispicanchi', '03', 'Camanti', NULL, NULL, NULL),
('081204', '08', 'Cusco', '12', 'Quispicanchi', '04', 'Ccarhuayo', NULL, NULL, NULL),
('081205', '08', 'Cusco', '12', 'Quispicanchi', '05', 'Ccatca', NULL, NULL, NULL),
('081206', '08', 'Cusco', '12', 'Quispicanchi', '06', 'Cusipata', NULL, NULL, NULL),
('081207', '08', 'Cusco', '12', 'Quispicanchi', '07', 'Huaro', NULL, NULL, NULL),
('081208', '08', 'Cusco', '12', 'Quispicanchi', '08', 'Lucre', NULL, NULL, NULL),
('081209', '08', 'Cusco', '12', 'Quispicanchi', '09', 'Marcapata', NULL, NULL, NULL),
('081210', '08', 'Cusco', '12', 'Quispicanchi', '10', 'Ocongate', NULL, NULL, NULL),
('081211', '08', 'Cusco', '12', 'Quispicanchi', '11', 'Oropesa', NULL, NULL, NULL),
('081212', '08', 'Cusco', '12', 'Quispicanchi', '12', 'Quiquijana', NULL, NULL, NULL),
('081300', '08', 'Cusco', '13', 'Urubamba', '00', NULL, NULL, NULL, NULL),
('081301', '08', 'Cusco', '13', 'Urubamba', '01', 'Urubamba', NULL, NULL, NULL),
('081302', '08', 'Cusco', '13', 'Urubamba', '02', 'Chinchero', NULL, NULL, NULL),
('081303', '08', 'Cusco', '13', 'Urubamba', '03', 'Huayllabamba', NULL, NULL, NULL),
('081304', '08', 'Cusco', '13', 'Urubamba', '04', 'Machupicchu', NULL, NULL, NULL),
('081305', '08', 'Cusco', '13', 'Urubamba', '05', 'Maras', NULL, NULL, NULL),
('081306', '08', 'Cusco', '13', 'Urubamba', '06', 'Ollantaytambo', NULL, NULL, NULL),
('081307', '08', 'Cusco', '13', 'Urubamba', '07', 'Yucay', NULL, NULL, NULL),
('090000', '09', 'Huancavelica', '00', NULL, '00', NULL, '67', NULL, NULL),
('090100', '09', 'Huancavelica', '01', 'Huancavelica', '00', NULL, NULL, NULL, NULL),
('090101', '09', 'Huancavelica', '01', 'Huancavelica', '01', 'Huancavelica', NULL, NULL, NULL),
('090102', '09', 'Huancavelica', '01', 'Huancavelica', '02', 'Acobambilla', NULL, NULL, NULL),
('090103', '09', 'Huancavelica', '01', 'Huancavelica', '03', 'Acoria', NULL, NULL, NULL),
('090104', '09', 'Huancavelica', '01', 'Huancavelica', '04', 'Conayca', NULL, NULL, NULL),
('090105', '09', 'Huancavelica', '01', 'Huancavelica', '05', 'Cuenca', NULL, NULL, NULL),
('090106', '09', 'Huancavelica', '01', 'Huancavelica', '06', 'Huachocolpa', NULL, NULL, NULL),
('090107', '09', 'Huancavelica', '01', 'Huancavelica', '07', 'Huayllahuara', NULL, NULL, NULL),
('090108', '09', 'Huancavelica', '01', 'Huancavelica', '08', 'Izcuchaca', NULL, NULL, NULL),
('090109', '09', 'Huancavelica', '01', 'Huancavelica', '09', 'Laria', NULL, NULL, NULL),
('090110', '09', 'Huancavelica', '01', 'Huancavelica', '10', 'Manta', NULL, NULL, NULL),
('090111', '09', 'Huancavelica', '01', 'Huancavelica', '11', 'Mariscal Cáceres', NULL, NULL, NULL),
('090112', '09', 'Huancavelica', '01', 'Huancavelica', '12', 'Moya', NULL, NULL, NULL),
('090113', '09', 'Huancavelica', '01', 'Huancavelica', '13', 'Nuevo Occoro', NULL, NULL, NULL),
('090114', '09', 'Huancavelica', '01', 'Huancavelica', '14', 'Palca', NULL, NULL, NULL),
('090115', '09', 'Huancavelica', '01', 'Huancavelica', '15', 'Pilchaca', NULL, NULL, NULL),
('090116', '09', 'Huancavelica', '01', 'Huancavelica', '16', 'Vilca', NULL, NULL, NULL),
('090117', '09', 'Huancavelica', '01', 'Huancavelica', '17', 'Yauli', NULL, NULL, NULL),
('090118', '09', 'Huancavelica', '01', 'Huancavelica', '18', 'Ascensión', NULL, NULL, NULL),
('090119', '09', 'Huancavelica', '01', 'Huancavelica', '19', 'Huando', NULL, NULL, NULL),
('090200', '09', 'Huancavelica', '02', 'Acobamba', '00', NULL, NULL, NULL, NULL),
('090201', '09', 'Huancavelica', '02', 'Acobamba', '01', 'Acobamba', NULL, NULL, NULL),
('090202', '09', 'Huancavelica', '02', 'Acobamba', '02', 'Andabamba', NULL, NULL, NULL),
('090203', '09', 'Huancavelica', '02', 'Acobamba', '03', 'Anta', NULL, NULL, NULL),
('090204', '09', 'Huancavelica', '02', 'Acobamba', '04', 'Caja', NULL, NULL, NULL),
('090205', '09', 'Huancavelica', '02', 'Acobamba', '05', 'Marcas', NULL, NULL, NULL),
('090206', '09', 'Huancavelica', '02', 'Acobamba', '06', 'Paucara', NULL, NULL, NULL),
('090207', '09', 'Huancavelica', '02', 'Acobamba', '07', 'Pomacocha', NULL, NULL, NULL),
('090208', '09', 'Huancavelica', '02', 'Acobamba', '08', 'Rosario', NULL, NULL, NULL),
('090300', '09', 'Huancavelica', '03', 'Angaraes', '00', NULL, NULL, NULL, NULL),
('090301', '09', 'Huancavelica', '03', 'Angaraes', '01', 'Lircay', NULL, NULL, NULL),
('090302', '09', 'Huancavelica', '03', 'Angaraes', '02', 'Anchonga', NULL, NULL, NULL),
('090303', '09', 'Huancavelica', '03', 'Angaraes', '03', 'Callanmarca', NULL, NULL, NULL),
('090304', '09', 'Huancavelica', '03', 'Angaraes', '04', 'Ccochaccasa', NULL, NULL, NULL),
('090305', '09', 'Huancavelica', '03', 'Angaraes', '05', 'Chincho', NULL, NULL, NULL),
('090306', '09', 'Huancavelica', '03', 'Angaraes', '06', 'Congalla', NULL, NULL, NULL),
('090307', '09', 'Huancavelica', '03', 'Angaraes', '07', 'Huanca-Huanca', NULL, NULL, NULL),
('090308', '09', 'Huancavelica', '03', 'Angaraes', '08', 'Huayllay Grande', NULL, NULL, NULL),
('090309', '09', 'Huancavelica', '03', 'Angaraes', '09', 'Julcamarca', NULL, NULL, NULL),
('090310', '09', 'Huancavelica', '03', 'Angaraes', '10', 'San Antonio de Antaparco', NULL, NULL, NULL),
('090311', '09', 'Huancavelica', '03', 'Angaraes', '11', 'Santo Tomas de Pata', NULL, NULL, NULL),
('090312', '09', 'Huancavelica', '03', 'Angaraes', '12', 'Secclla', NULL, NULL, NULL),
('090400', '09', 'Huancavelica', '04', 'Castrovirreyna', '00', ' ', NULL, NULL, NULL),
('090401', '09', 'Huancavelica', '04', 'Castrovirreyna', '01', 'Castrovirreyna', NULL, NULL, NULL),
('090402', '09', 'Huancavelica', '04', 'Castrovirreyna', '02', 'Arma', NULL, NULL, NULL),
('090403', '09', 'Huancavelica', '04', 'Castrovirreyna', '03', 'Aurahua', NULL, NULL, NULL),
('090404', '09', 'Huancavelica', '04', 'Castrovirreyna', '04', 'Capillas', NULL, NULL, NULL),
('090405', '09', 'Huancavelica', '04', 'Castrovirreyna', '05', 'Chupamarca', NULL, NULL, NULL),
('090406', '09', 'Huancavelica', '04', 'Castrovirreyna', '06', 'Cocas', NULL, NULL, NULL),
('090407', '09', 'Huancavelica', '04', 'Castrovirreyna', '07', 'Huachos', NULL, NULL, NULL),
('090408', '09', 'Huancavelica', '04', 'Castrovirreyna', '08', 'Huamatambo', NULL, NULL, NULL),
('090409', '09', 'Huancavelica', '04', 'Castrovirreyna', '09', 'Mollepampa', NULL, NULL, NULL),
('090410', '09', 'Huancavelica', '04', 'Castrovirreyna', '10', 'San Juan', NULL, NULL, NULL),
('090411', '09', 'Huancavelica', '04', 'Castrovirreyna', '11', 'Santa Ana', NULL, NULL, NULL),
('090412', '09', 'Huancavelica', '04', 'Castrovirreyna', '12', 'Tantara', NULL, NULL, NULL),
('090413', '09', 'Huancavelica', '04', 'Castrovirreyna', '13', 'Ticrapo', NULL, NULL, NULL),
('090500', '09', 'Huancavelica', '05', 'Churcampa', '00', ' ', NULL, NULL, NULL),
('090501', '09', 'Huancavelica', '05', 'Churcampa', '01', 'Churcampa', NULL, NULL, NULL),
('090502', '09', 'Huancavelica', '05', 'Churcampa', '02', 'Anco', NULL, NULL, NULL),
('090503', '09', 'Huancavelica', '05', 'Churcampa', '03', 'Chinchihuasi', NULL, NULL, NULL),
('090504', '09', 'Huancavelica', '05', 'Churcampa', '04', 'El Carmen', NULL, NULL, NULL),
('090505', '09', 'Huancavelica', '05', 'Churcampa', '05', 'La Merced', NULL, NULL, NULL),
('090506', '09', 'Huancavelica', '05', 'Churcampa', '06', 'Locroja', NULL, NULL, NULL),
('090507', '09', 'Huancavelica', '05', 'Churcampa', '07', 'Paucarbamba', NULL, NULL, NULL),
('090508', '09', 'Huancavelica', '05', 'Churcampa', '08', 'San Miguel de Mayocc', NULL, NULL, NULL),
('090509', '09', 'Huancavelica', '05', 'Churcampa', '09', 'San Pedro de Coris', NULL, NULL, NULL),
('090510', '09', 'Huancavelica', '05', 'Churcampa', '10', 'Pachamarca', NULL, NULL, NULL),
('090511', '09', 'Huancavelica', '05', 'Churcampa', '11', 'Cosme', NULL, NULL, NULL),
('090600', '09', 'Huancavelica', '06', 'Huaytará', '00', '   ', NULL, NULL, NULL),
('090601', '09', 'Huancavelica', '06', 'Huaytará', '01', 'Huaytara', NULL, NULL, NULL),
('090602', '09', 'Huancavelica', '06', 'Huaytará', '02', 'Ayavi', NULL, NULL, NULL),
('090603', '09', 'Huancavelica', '06', 'Huaytará', '03', 'Córdova', NULL, NULL, NULL),
('090604', '09', 'Huancavelica', '06', 'Huaytará', '04', 'Huayacundo Arma', NULL, NULL, NULL),
('090605', '09', 'Huancavelica', '06', 'Huaytará', '05', 'Laramarca', NULL, NULL, NULL),
('090606', '09', 'Huancavelica', '06', 'Huaytará', '06', 'Ocoyo', NULL, NULL, NULL),
('090607', '09', 'Huancavelica', '06', 'Huaytará', '07', 'Pilpichaca', NULL, NULL, NULL),
('090608', '09', 'Huancavelica', '06', 'Huaytará', '08', 'Querco', NULL, NULL, NULL),
('090609', '09', 'Huancavelica', '06', 'Huaytará', '09', 'Quito-Arma', NULL, NULL, NULL),
('090610', '09', 'Huancavelica', '06', 'Huaytará', '10', 'San Antonio de Cusicancha', NULL, NULL, NULL),
('090611', '09', 'Huancavelica', '06', 'Huaytará', '11', 'San Francisco de Sangayaico', NULL, NULL, NULL),
('090612', '09', 'Huancavelica', '06', 'Huaytará', '12', 'San Isidro', NULL, NULL, NULL),
('090613', '09', 'Huancavelica', '06', 'Huaytará', '13', 'Santiago de Chocorvos', NULL, NULL, NULL),
('090614', '09', 'Huancavelica', '06', 'Huaytará', '14', 'Santiago de Quirahuara', NULL, NULL, NULL),
('090615', '09', 'Huancavelica', '06', 'Huaytará', '15', 'Santo Domingo de Capillas', NULL, NULL, NULL),
('090616', '09', 'Huancavelica', '06', 'Huaytará', '16', 'Tambo', NULL, NULL, NULL),
('090700', '09', 'Huancavelica', '07', 'Tayacaja', '00', '    ', NULL, NULL, NULL),
('090701', '09', 'Huancavelica', '07', 'Tayacaja', '01', 'Pampas', NULL, NULL, NULL),
('090702', '09', 'Huancavelica', '07', 'Tayacaja', '02', 'Acostambo', NULL, NULL, NULL),
('090703', '09', 'Huancavelica', '07', 'Tayacaja', '03', 'Acraquia', NULL, NULL, NULL),
('090704', '09', 'Huancavelica', '07', 'Tayacaja', '04', 'Ahuaycha', NULL, NULL, NULL),
('090705', '09', 'Huancavelica', '07', 'Tayacaja', '05', 'Colcabamba', NULL, NULL, NULL),
('090706', '09', 'Huancavelica', '07', 'Tayacaja', '06', 'Daniel Hernández', NULL, NULL, NULL),
('090707', '09', 'Huancavelica', '07', 'Tayacaja', '07', 'Huachocolpa', NULL, NULL, NULL),
('090709', '09', 'Huancavelica', '07', 'Tayacaja', '09', 'Huaribamba', NULL, NULL, NULL),
('090710', '09', 'Huancavelica', '07', 'Tayacaja', '10', 'Ñahuimpuquio', NULL, NULL, NULL),
('090711', '09', 'Huancavelica', '07', 'Tayacaja', '11', 'Pazos', NULL, NULL, NULL),
('090713', '09', 'Huancavelica', '07', 'Tayacaja', '13', 'Quishuar', NULL, NULL, NULL),
('090714', '09', 'Huancavelica', '07', 'Tayacaja', '14', 'Salcabamba', NULL, NULL, NULL),
('090715', '09', 'Huancavelica', '07', 'Tayacaja', '15', 'Salcahuasi', NULL, NULL, NULL),
('090716', '09', 'Huancavelica', '07', 'Tayacaja', '16', 'San Marcos de Rocchac', NULL, NULL, NULL),
('090717', '09', 'Huancavelica', '07', 'Tayacaja', '17', 'Surcubamba', NULL, NULL, NULL),
('090718', '09', 'Huancavelica', '07', 'Tayacaja', '18', 'Tintay Puncu', NULL, NULL, NULL),
('090719', '09', 'Huancavelica', '07', 'Tayacaja', '19', 'Quichuas', NULL, NULL, NULL),
('090720', '09', 'Huancavelica', '07', 'Tayacaja', '20', 'Andaymarca', NULL, NULL, NULL),
('100000', '10', 'Huánuco', '00', NULL, '00', NULL, '62', NULL, NULL),
('100100', '10', 'Huánuco', '01', 'Huánuco', '00', '    ', NULL, NULL, NULL),
('100101', '10', 'Huánuco', '01', 'Huánuco', '01', 'Huanuco', NULL, NULL, NULL),
('100102', '10', 'Huánuco', '01', 'Huánuco', '02', 'Amarilis', NULL, NULL, NULL),
('100103', '10', 'Huánuco', '01', 'Huánuco', '03', 'Chinchao', NULL, NULL, NULL),
('100104', '10', 'Huánuco', '01', 'Huánuco', '04', 'Churubamba', NULL, NULL, NULL),
('100105', '10', 'Huánuco', '01', 'Huánuco', '05', 'Margos', NULL, NULL, NULL),
('100106', '10', 'Huánuco', '01', 'Huánuco', '06', 'Quisqui (Kichki)', NULL, NULL, NULL),
('100107', '10', 'Huánuco', '01', 'Huánuco', '07', 'San Francisco de Cayran', NULL, NULL, NULL),
('100108', '10', 'Huánuco', '01', 'Huánuco', '08', 'San Pedro de Chaulan', NULL, NULL, NULL),
('100109', '10', 'Huánuco', '01', 'Huánuco', '09', 'Santa María del Valle', NULL, NULL, NULL),
('100110', '10', 'Huánuco', '01', 'Huánuco', '10', 'Yarumayo', NULL, NULL, NULL),
('100111', '10', 'Huánuco', '01', 'Huánuco', '11', 'Pillco Marca', NULL, NULL, NULL),
('100112', '10', 'Huánuco', '01', 'Huánuco', '12', 'Yacus', NULL, NULL, NULL),
('100200', '10', 'Huánuco', '02', 'Ambo', '00', '     ', NULL, NULL, NULL),
('100201', '10', 'Huánuco', '02', 'Ambo', '01', 'Ambo', NULL, NULL, NULL),
('100202', '10', 'Huánuco', '02', 'Ambo', '02', 'Cayna', NULL, NULL, NULL),
('100203', '10', 'Huánuco', '02', 'Ambo', '03', 'Colpas', NULL, NULL, NULL),
('100204', '10', 'Huánuco', '02', 'Ambo', '04', 'Conchamarca', NULL, NULL, NULL),
('100205', '10', 'Huánuco', '02', 'Ambo', '05', 'Huacar', NULL, NULL, NULL),
('100206', '10', 'Huánuco', '02', 'Ambo', '06', 'San Francisco', NULL, NULL, NULL),
('100207', '10', 'Huánuco', '02', 'Ambo', '07', 'San Rafael', NULL, NULL, NULL),
('100208', '10', 'Huánuco', '02', 'Ambo', '08', 'Tomay Kichwa', NULL, NULL, NULL),
('100300', '10', 'Huánuco', '03', 'Dos de Mayo', '00', '    ', NULL, NULL, NULL),
('100301', '10', 'Huánuco', '03', 'Dos de Mayo', '01', 'La Unión', NULL, NULL, NULL),
('100307', '10', 'Huánuco', '03', 'Dos de Mayo', '07', 'Chuquis', NULL, NULL, NULL),
('100311', '10', 'Huánuco', '03', 'Dos de Mayo', '11', 'Marías', NULL, NULL, NULL),
('100313', '10', 'Huánuco', '03', 'Dos de Mayo', '13', 'Pachas', NULL, NULL, NULL),
('100316', '10', 'Huánuco', '03', 'Dos de Mayo', '16', 'Quivilla', NULL, NULL, NULL),
('100317', '10', 'Huánuco', '03', 'Dos de Mayo', '17', 'Ripan', NULL, NULL, NULL),
('100321', '10', 'Huánuco', '03', 'Dos de Mayo', '21', 'Shunqui', NULL, NULL, NULL),
('100322', '10', 'Huánuco', '03', 'Dos de Mayo', '22', 'Sillapata', NULL, NULL, NULL),
('100323', '10', 'Huánuco', '03', 'Dos de Mayo', '23', 'Yanas', NULL, NULL, NULL),
('100400', '10', 'Huánuco', '04', 'Huacaybamba', '00', '    ', NULL, NULL, NULL),
('100401', '10', 'Huánuco', '04', 'Huacaybamba', '01', 'Huacaybamba', NULL, NULL, NULL),
('100402', '10', 'Huánuco', '04', 'Huacaybamba', '02', 'Canchabamba', NULL, NULL, NULL),
('100403', '10', 'Huánuco', '04', 'Huacaybamba', '03', 'Cochabamba', NULL, NULL, NULL),
('100404', '10', 'Huánuco', '04', 'Huacaybamba', '04', 'Pinra', NULL, NULL, NULL),
('100500', '10', 'Huánuco', '05', 'Huamalíes', '00', '  ', NULL, NULL, NULL),
('100501', '10', 'Huánuco', '05', 'Huamalíes', '01', 'Llata', NULL, NULL, NULL),
('100502', '10', 'Huánuco', '05', 'Huamalíes', '02', 'Arancay', NULL, NULL, NULL),
('100503', '10', 'Huánuco', '05', 'Huamalíes', '03', 'Chavín de Pariarca', NULL, NULL, NULL),
('100504', '10', 'Huánuco', '05', 'Huamalíes', '04', 'Jacas Grande', NULL, NULL, NULL),
('100505', '10', 'Huánuco', '05', 'Huamalíes', '05', 'Jircan', NULL, NULL, NULL),
('100506', '10', 'Huánuco', '05', 'Huamalíes', '06', 'Miraflores', NULL, NULL, NULL),
('100507', '10', 'Huánuco', '05', 'Huamalíes', '07', 'Monzón', NULL, NULL, NULL),
('100508', '10', 'Huánuco', '05', 'Huamalíes', '08', 'Punchao', NULL, NULL, NULL),
('100509', '10', 'Huánuco', '05', 'Huamalíes', '09', 'Puños', NULL, NULL, NULL),
('100510', '10', 'Huánuco', '05', 'Huamalíes', '10', 'Singa', NULL, NULL, NULL),
('100511', '10', 'Huánuco', '05', 'Huamalíes', '11', 'Tantamayo', NULL, NULL, NULL),
('100600', '10', 'Huánuco', '06', 'Leoncio Prado', '00', '    ', NULL, NULL, NULL),
('100601', '10', 'Huánuco', '06', 'Leoncio Prado', '01', 'Rupa-Rupa', NULL, NULL, NULL),
('100602', '10', 'Huánuco', '06', 'Leoncio Prado', '02', 'Daniel Alomía Robles', NULL, NULL, NULL),
('100603', '10', 'Huánuco', '06', 'Leoncio Prado', '03', 'Hermílio Valdizan', NULL, NULL, NULL),
('100604', '10', 'Huánuco', '06', 'Leoncio Prado', '04', 'José Crespo y Castillo', NULL, NULL, NULL),
('100605', '10', 'Huánuco', '06', 'Leoncio Prado', '05', 'Luyando', NULL, NULL, NULL),
('100606', '10', 'Huánuco', '06', 'Leoncio Prado', '06', 'Mariano Damaso Beraun', NULL, NULL, NULL),
('100700', '10', 'Huánuco', '07', 'Marañón', '00', ' ', NULL, NULL, NULL),
('100701', '10', 'Huánuco', '07', 'Marañón', '01', 'Huacrachuco', NULL, NULL, NULL),
('100702', '10', 'Huánuco', '07', 'Marañón', '02', 'Cholon', NULL, NULL, NULL),
('100703', '10', 'Huánuco', '07', 'Marañón', '03', 'San Buenaventura', NULL, NULL, NULL),
('100800', '10', 'Huánuco', '08', 'Pachitea', '00', '     ', NULL, NULL, NULL),
('100801', '10', 'Huánuco', '08', 'Pachitea', '01', 'Panao', NULL, NULL, NULL),
('100802', '10', 'Huánuco', '08', 'Pachitea', '02', 'Chaglla', NULL, NULL, NULL),
('100803', '10', 'Huánuco', '08', 'Pachitea', '03', 'Molino', NULL, NULL, NULL),
('100804', '10', 'Huánuco', '08', 'Pachitea', '04', 'Umari', NULL, NULL, NULL),
('100900', '10', 'Huánuco', '09', 'Puerto Inca', '00', ' ', NULL, NULL, NULL),
('100901', '10', 'Huánuco', '09', 'Puerto Inca', '01', 'Puerto Inca', NULL, NULL, NULL),
('100902', '10', 'Huánuco', '09', 'Puerto Inca', '02', 'Codo del Pozuzo', NULL, NULL, NULL),
('100903', '10', 'Huánuco', '09', 'Puerto Inca', '03', 'Honoria', NULL, NULL, NULL),
('100904', '10', 'Huánuco', '09', 'Puerto Inca', '04', 'Tournavista', NULL, NULL, NULL),
('100905', '10', 'Huánuco', '09', 'Puerto Inca', '05', 'Yuyapichis', NULL, NULL, NULL),
('101000', '10', 'Huánuco', '10', 'Lauricocha', '00', ' ', NULL, NULL, NULL),
('101001', '10', 'Huánuco', '10', 'Lauricocha', '01', 'Jesús', NULL, NULL, NULL),
('101002', '10', 'Huánuco', '10', 'Lauricocha', '02', 'Baños', NULL, NULL, NULL),
('101003', '10', 'Huánuco', '10', 'Lauricocha', '03', 'Jivia', NULL, NULL, NULL),
('101004', '10', 'Huánuco', '10', 'Lauricocha', '04', 'Queropalca', NULL, NULL, NULL),
('101005', '10', 'Huánuco', '10', 'Lauricocha', '05', 'Rondos', NULL, NULL, NULL),
('101006', '10', 'Huánuco', '10', 'Lauricocha', '06', 'San Francisco de Asís', NULL, NULL, NULL),
('101007', '10', 'Huánuco', '10', 'Lauricocha', '07', 'San Miguel de Cauri', NULL, NULL, NULL),
('101100', '10', 'Huánuco', '11', 'Yarowilca', '00', '   ', NULL, NULL, NULL),
('101101', '10', 'Huánuco', '11', 'Yarowilca', '01', 'Chavinillo', NULL, NULL, NULL),
('101102', '10', 'Huánuco', '11', 'Yarowilca', '02', 'Cahuac', NULL, NULL, NULL),
('101103', '10', 'Huánuco', '11', 'Yarowilca', '03', 'Chacabamba', NULL, NULL, NULL),
('101104', '10', 'Huánuco', '11', 'Yarowilca', '04', 'Aparicio Pomares', NULL, NULL, NULL),
('101105', '10', 'Huánuco', '11', 'Yarowilca', '05', 'Jacas Chico', NULL, NULL, NULL),
('101106', '10', 'Huánuco', '11', 'Yarowilca', '06', 'Obas', NULL, NULL, NULL),
('101107', '10', 'Huánuco', '11', 'Yarowilca', '07', 'Pampamarca', NULL, NULL, NULL),
('101108', '10', 'Huánuco', '11', 'Yarowilca', '08', 'Choras', NULL, NULL, NULL),
('110000', '11', 'Ica', '00', NULL, '00', NULL, '56', NULL, NULL),
('110100', '11', 'Ica', '01', 'Ica', '00', '    ', NULL, NULL, NULL),
('110101', '11', 'Ica', '01', 'Ica', '01', 'Ica', NULL, NULL, NULL),
('110102', '11', 'Ica', '01', 'Ica', '02', 'La Tinguiña', NULL, NULL, NULL),
('110103', '11', 'Ica', '01', 'Ica', '03', 'Los Aquijes', NULL, NULL, NULL),
('110104', '11', 'Ica', '01', 'Ica', '04', 'Ocucaje', NULL, NULL, NULL),
('110105', '11', 'Ica', '01', 'Ica', '05', 'Pachacutec', NULL, NULL, NULL),
('110106', '11', 'Ica', '01', 'Ica', '06', 'Parcona', NULL, NULL, NULL),
('110107', '11', 'Ica', '01', 'Ica', '07', 'Pueblo Nuevo', NULL, NULL, NULL),
('110108', '11', 'Ica', '01', 'Ica', '08', 'Salas', NULL, NULL, NULL),
('110109', '11', 'Ica', '01', 'Ica', '09', 'San José de Los Molinos', NULL, NULL, NULL),
('110110', '11', 'Ica', '01', 'Ica', '10', 'San Juan Bautista', NULL, NULL, NULL),
('110111', '11', 'Ica', '01', 'Ica', '11', 'Santiago', NULL, NULL, NULL),
('110112', '11', 'Ica', '01', 'Ica', '12', 'Subtanjalla', NULL, NULL, NULL),
('110113', '11', 'Ica', '01', 'Ica', '13', 'Tate', NULL, NULL, NULL),
('110114', '11', 'Ica', '01', 'Ica', '14', 'Yauca del Rosario', NULL, NULL, NULL),
('110200', '11', 'Ica', '02', 'Chincha', '00', NULL, NULL, NULL, NULL),
('110201', '11', 'Ica', '02', 'Chincha', '01', 'Chincha Alta', NULL, NULL, NULL),
('110202', '11', 'Ica', '02', 'Chincha', '02', 'Alto Laran', NULL, NULL, NULL),
('110203', '11', 'Ica', '02', 'Chincha', '03', 'Chavin', NULL, NULL, NULL),
('110204', '11', 'Ica', '02', 'Chincha', '04', 'Chincha Baja', NULL, NULL, NULL),
('110205', '11', 'Ica', '02', 'Chincha', '05', 'El Carmen', NULL, NULL, NULL),
('110206', '11', 'Ica', '02', 'Chincha', '06', 'Grocio Prado', NULL, NULL, NULL),
('110207', '11', 'Ica', '02', 'Chincha', '07', 'Pueblo Nuevo', NULL, NULL, NULL),
('110208', '11', 'Ica', '02', 'Chincha', '08', 'San Juan de Yanac', NULL, NULL, NULL),
('110209', '11', 'Ica', '02', 'Chincha', '09', 'San Pedro de Huacarpana', NULL, NULL, NULL),
('110210', '11', 'Ica', '02', 'Chincha', '10', 'Sunampe', NULL, NULL, NULL),
('110211', '11', 'Ica', '02', 'Chincha', '11', 'Tambo de Mora', NULL, NULL, NULL),
('110300', '11', 'Ica', '03', 'Nazca', '00', NULL, NULL, NULL, NULL),
('110301', '11', 'Ica', '03', 'Nazca', '01', 'Nasca', NULL, NULL, NULL),
('110302', '11', 'Ica', '03', 'Nazca', '02', 'Changuillo', NULL, NULL, NULL),
('110303', '11', 'Ica', '03', 'Nazca', '03', 'El Ingenio', NULL, NULL, NULL),
('110304', '11', 'Ica', '03', 'Nazca', '04', 'Marcona', NULL, NULL, NULL),
('110305', '11', 'Ica', '03', 'Nazca', '05', 'Vista Alegre', NULL, NULL, NULL),
('110400', '11', 'Ica', '04', 'Palpa', '00', '  ', NULL, NULL, NULL),
('110401', '11', 'Ica', '04', 'Palpa', '01', 'Palpa', NULL, NULL, NULL),
('110402', '11', 'Ica', '04', 'Palpa', '02', 'Llipata', NULL, NULL, NULL),
('110403', '11', 'Ica', '04', 'Palpa', '03', 'Río Grande', NULL, NULL, NULL),
('110404', '11', 'Ica', '04', 'Palpa', '04', 'Santa Cruz', NULL, NULL, NULL),
('110405', '11', 'Ica', '04', 'Palpa', '05', 'Tibillo', NULL, NULL, NULL),
('110500', '11', 'Ica', '05', 'Pisco', '00', '    ', NULL, NULL, NULL),
('110501', '11', 'Ica', '05', 'Pisco', '01', 'Pisco', NULL, NULL, NULL),
('110502', '11', 'Ica', '05', 'Pisco', '02', 'Huancano', NULL, NULL, NULL),
('110503', '11', 'Ica', '05', 'Pisco', '03', 'Humay', NULL, NULL, NULL),
('110504', '11', 'Ica', '05', 'Pisco', '04', 'Independencia', NULL, NULL, NULL),
('110505', '11', 'Ica', '05', 'Pisco', '05', 'Paracas', NULL, NULL, NULL),
('110506', '11', 'Ica', '05', 'Pisco', '06', 'San Andrés', NULL, NULL, NULL),
('110507', '11', 'Ica', '05', 'Pisco', '07', 'San Clemente', NULL, NULL, NULL),
('110508', '11', 'Ica', '05', 'Pisco', '08', 'Tupac Amaru Inca', NULL, NULL, NULL),
('120000', '12', 'Junín', '00', NULL, '00', NULL, '64', NULL, NULL),
('120100', '12', 'Junín', '01', 'Huancayo', '00', '       ', NULL, NULL, NULL),
('120101', '12', 'Junín', '01', 'Huancayo', '01', 'Huancayo', NULL, NULL, NULL),
('120104', '12', 'Junín', '01', 'Huancayo', '04', 'Carhuacallanga', NULL, NULL, NULL),
('120105', '12', 'Junín', '01', 'Huancayo', '05', 'Chacapampa', NULL, NULL, NULL),
('120106', '12', 'Junín', '01', 'Huancayo', '06', 'Chicche', NULL, NULL, NULL),
('120107', '12', 'Junín', '01', 'Huancayo', '07', 'Chilca', NULL, NULL, NULL),
('120108', '12', 'Junín', '01', 'Huancayo', '08', 'Chongos Alto', NULL, NULL, NULL),
('120111', '12', 'Junín', '01', 'Huancayo', '11', 'Chupuro', NULL, NULL, NULL),
('120112', '12', 'Junín', '01', 'Huancayo', '12', 'Colca', NULL, NULL, NULL),
('120113', '12', 'Junín', '01', 'Huancayo', '13', 'Cullhuas', NULL, NULL, NULL),
('120114', '12', 'Junín', '01', 'Huancayo', '14', 'El Tambo', NULL, NULL, NULL),
('120116', '12', 'Junín', '01', 'Huancayo', '16', 'Huacrapuquio', NULL, NULL, NULL),
('120117', '12', 'Junín', '01', 'Huancayo', '17', 'Hualhuas', NULL, NULL, NULL),
('120119', '12', 'Junín', '01', 'Huancayo', '19', 'Huancan', NULL, NULL, NULL),
('120120', '12', 'Junín', '01', 'Huancayo', '20', 'Huasicancha', NULL, NULL, NULL),
('120121', '12', 'Junín', '01', 'Huancayo', '21', 'Huayucachi', NULL, NULL, NULL),
('120122', '12', 'Junín', '01', 'Huancayo', '22', 'Ingenio', NULL, NULL, NULL),
('120124', '12', 'Junín', '01', 'Huancayo', '24', 'Pariahuanca', NULL, NULL, NULL),
('120125', '12', 'Junín', '01', 'Huancayo', '25', 'Pilcomayo', NULL, NULL, NULL),
('120126', '12', 'Junín', '01', 'Huancayo', '26', 'Pucara', NULL, NULL, NULL),
('120127', '12', 'Junín', '01', 'Huancayo', '27', 'Quichuay', NULL, NULL, NULL),
('120128', '12', 'Junín', '01', 'Huancayo', '28', 'Quilcas', NULL, NULL, NULL),
('120129', '12', 'Junín', '01', 'Huancayo', '29', 'San Agustín', NULL, NULL, NULL),
('120130', '12', 'Junín', '01', 'Huancayo', '30', 'San Jerónimo de Tunan', NULL, NULL, NULL),
('120132', '12', 'Junín', '01', 'Huancayo', '32', 'Saño', NULL, NULL, NULL),
('120133', '12', 'Junín', '01', 'Huancayo', '33', 'Sapallanga', NULL, NULL, NULL),
('120134', '12', 'Junín', '01', 'Huancayo', '34', 'Sicaya', NULL, NULL, NULL),
('120135', '12', 'Junín', '01', 'Huancayo', '35', 'Santo Domingo de Acobamba', NULL, NULL, NULL),
('120136', '12', 'Junín', '01', 'Huancayo', '36', 'Viques', NULL, NULL, NULL),
('120200', '12', 'Junín', '02', 'Concepción', '00', '     ', NULL, NULL, NULL),
('120201', '12', 'Junín', '02', 'Concepción', '01', 'Concepción', NULL, NULL, NULL),
('120202', '12', 'Junín', '02', 'Concepción', '02', 'Aco', NULL, NULL, NULL),
('120203', '12', 'Junín', '02', 'Concepción', '03', 'Andamarca', NULL, NULL, NULL),
('120204', '12', 'Junín', '02', 'Concepción', '04', 'Chambara', NULL, NULL, NULL),
('120205', '12', 'Junín', '02', 'Concepción', '05', 'Cochas', NULL, NULL, NULL),
('120206', '12', 'Junín', '02', 'Concepción', '06', 'Comas', NULL, NULL, NULL),
('120207', '12', 'Junín', '02', 'Concepción', '07', 'Heroínas Toledo', NULL, NULL, NULL),
('120208', '12', 'Junín', '02', 'Concepción', '08', 'Manzanares', NULL, NULL, NULL),
('120209', '12', 'Junín', '02', 'Concepción', '09', 'Mariscal Castilla', NULL, NULL, NULL),
('120210', '12', 'Junín', '02', 'Concepción', '10', 'Matahuasi', NULL, NULL, NULL),
('120211', '12', 'Junín', '02', 'Concepción', '11', 'Mito', NULL, NULL, NULL),
('120212', '12', 'Junín', '02', 'Concepción', '12', 'Nueve de Julio', NULL, NULL, NULL),
('120213', '12', 'Junín', '02', 'Concepción', '13', 'Orcotuna', NULL, NULL, NULL),
('120214', '12', 'Junín', '02', 'Concepción', '14', 'San José de Quero', NULL, NULL, NULL),
('120215', '12', 'Junín', '02', 'Concepción', '15', 'Santa Rosa de Ocopa', NULL, NULL, NULL),
('120300', '12', 'Junín', '03', 'Chanchamayo', '00', '    ', NULL, NULL, NULL),
('120301', '12', 'Junín', '03', 'Chanchamayo', '01', 'Chanchamayo', NULL, NULL, NULL),
('120302', '12', 'Junín', '03', 'Chanchamayo', '02', 'Perene', NULL, NULL, NULL),
('120303', '12', 'Junín', '03', 'Chanchamayo', '03', 'Pichanaqui', NULL, NULL, NULL),
('120304', '12', 'Junín', '03', 'Chanchamayo', '04', 'San Luis de Shuaro', NULL, NULL, NULL),
('120305', '12', 'Junín', '03', 'Chanchamayo', '05', 'San Ramón', NULL, NULL, NULL),
('120306', '12', 'Junín', '03', 'Chanchamayo', '06', 'Vitoc', NULL, NULL, NULL),
('120400', '12', 'Junín', '04', 'Jauja', '00', NULL, NULL, NULL, NULL),
('120401', '12', 'Junín', '04', 'Jauja', '01', 'Jauja', NULL, NULL, NULL),
('120402', '12', 'Junín', '04', 'Jauja', '02', 'Acolla', NULL, NULL, NULL),
('120403', '12', 'Junín', '04', 'Jauja', '03', 'Apata', NULL, NULL, NULL),
('120404', '12', 'Junín', '04', 'Jauja', '04', 'Ataura', NULL, NULL, NULL),
('120405', '12', 'Junín', '04', 'Jauja', '05', 'Canchayllo', NULL, NULL, NULL),
('120406', '12', 'Junín', '04', 'Jauja', '06', 'Curicaca', NULL, NULL, NULL),
('120407', '12', 'Junín', '04', 'Jauja', '07', 'El Mantaro', NULL, NULL, NULL),
('120408', '12', 'Junín', '04', 'Jauja', '08', 'Huamali', NULL, NULL, NULL),
('120409', '12', 'Junín', '04', 'Jauja', '09', 'Huaripampa', NULL, NULL, NULL),
('120410', '12', 'Junín', '04', 'Jauja', '10', 'Huertas', NULL, NULL, NULL),
('120411', '12', 'Junín', '04', 'Jauja', '11', 'Janjaillo', NULL, NULL, NULL),
('120412', '12', 'Junín', '04', 'Jauja', '12', 'Julcán', NULL, NULL, NULL),
('120413', '12', 'Junín', '04', 'Jauja', '13', 'Leonor Ordóñez', NULL, NULL, NULL),
('120414', '12', 'Junín', '04', 'Jauja', '14', 'Llocllapampa', NULL, NULL, NULL),
('120415', '12', 'Junín', '04', 'Jauja', '15', 'Marco', NULL, NULL, NULL),
('120416', '12', 'Junín', '04', 'Jauja', '16', 'Masma', NULL, NULL, NULL),
('120417', '12', 'Junín', '04', 'Jauja', '17', 'Masma Chicche', NULL, NULL, NULL),
('120418', '12', 'Junín', '04', 'Jauja', '18', 'Molinos', NULL, NULL, NULL),
('120419', '12', 'Junín', '04', 'Jauja', '19', 'Monobamba', NULL, NULL, NULL),
('120420', '12', 'Junín', '04', 'Jauja', '20', 'Muqui', NULL, NULL, NULL),
('120421', '12', 'Junín', '04', 'Jauja', '21', 'Muquiyauyo', NULL, NULL, NULL),
('120422', '12', 'Junín', '04', 'Jauja', '22', 'Paca', NULL, NULL, NULL),
('120423', '12', 'Junín', '04', 'Jauja', '23', 'Paccha', NULL, NULL, NULL);
INSERT INTO `master_ubigeo` (`code_ubigeo`, `code_department`, `department`, `code_province`, `province`, `code_district`, `district`, `code_number`, `created_at`, `updated_at`) VALUES
('120424', '12', 'Junín', '04', 'Jauja', '24', 'Pancan', NULL, NULL, NULL),
('120425', '12', 'Junín', '04', 'Jauja', '25', 'Parco', NULL, NULL, NULL),
('120426', '12', 'Junín', '04', 'Jauja', '26', 'Pomacancha', NULL, NULL, NULL),
('120427', '12', 'Junín', '04', 'Jauja', '27', 'Ricran', NULL, NULL, NULL),
('120428', '12', 'Junín', '04', 'Jauja', '28', 'San Lorenzo', NULL, NULL, NULL),
('120429', '12', 'Junín', '04', 'Jauja', '29', 'San Pedro de Chunan', NULL, NULL, NULL),
('120430', '12', 'Junín', '04', 'Jauja', '30', 'Sausa', NULL, NULL, NULL),
('120431', '12', 'Junín', '04', 'Jauja', '31', 'Sincos', NULL, NULL, NULL),
('120432', '12', 'Junín', '04', 'Jauja', '32', 'Tunan Marca', NULL, NULL, NULL),
('120433', '12', 'Junín', '04', 'Jauja', '33', 'Yauli', NULL, NULL, NULL),
('120434', '12', 'Junín', '04', 'Jauja', '34', 'Yauyos', NULL, NULL, NULL),
('120500', '12', 'Junín', '05', 'Junín', '00', '  ', NULL, NULL, NULL),
('120501', '12', 'Junín', '05', 'Junín', '01', 'Junin', NULL, NULL, NULL),
('120502', '12', 'Junín', '05', 'Junín', '02', 'Carhuamayo', NULL, NULL, NULL),
('120503', '12', 'Junín', '05', 'Junín', '03', 'Ondores', NULL, NULL, NULL),
('120504', '12', 'Junín', '05', 'Junín', '04', 'Ulcumayo', NULL, NULL, NULL),
('120600', '12', 'Junín', '06', 'Satipo', '00', '     ', NULL, NULL, NULL),
('120601', '12', 'Junín', '06', 'Satipo', '01', 'Satipo', NULL, NULL, NULL),
('120602', '12', 'Junín', '06', 'Satipo', '02', 'Coviriali', NULL, NULL, NULL),
('120603', '12', 'Junín', '06', 'Satipo', '03', 'Llaylla', NULL, NULL, NULL),
('120604', '12', 'Junín', '06', 'Satipo', '04', 'Mazamari', NULL, NULL, NULL),
('120605', '12', 'Junín', '06', 'Satipo', '05', 'Pampa Hermosa', NULL, NULL, NULL),
('120606', '12', 'Junín', '06', 'Satipo', '06', 'Pangoa', NULL, NULL, NULL),
('120607', '12', 'Junín', '06', 'Satipo', '07', 'Río Negro', NULL, NULL, NULL),
('120608', '12', 'Junín', '06', 'Satipo', '08', 'Río Tambo', NULL, NULL, NULL),
('120609', '12', 'Junín', '06', 'Satipo', '09', 'Vizcatan del Ene', NULL, NULL, NULL),
('120700', '12', 'Junín', '07', 'Tarma', '00', '    ', NULL, NULL, NULL),
('120701', '12', 'Junín', '07', 'Tarma', '01', 'Tarma', NULL, NULL, NULL),
('120702', '12', 'Junín', '07', 'Tarma', '02', 'Acobamba', NULL, NULL, NULL),
('120703', '12', 'Junín', '07', 'Tarma', '03', 'Huaricolca', NULL, NULL, NULL),
('120704', '12', 'Junín', '07', 'Tarma', '04', 'Huasahuasi', NULL, NULL, NULL),
('120705', '12', 'Junín', '07', 'Tarma', '05', 'La Unión', NULL, NULL, NULL),
('120706', '12', 'Junín', '07', 'Tarma', '06', 'Palca', NULL, NULL, NULL),
('120707', '12', 'Junín', '07', 'Tarma', '07', 'Palcamayo', NULL, NULL, NULL),
('120708', '12', 'Junín', '07', 'Tarma', '08', 'San Pedro de Cajas', NULL, NULL, NULL),
('120709', '12', 'Junín', '07', 'Tarma', '09', 'Tapo', NULL, NULL, NULL),
('120800', '12', 'Junín', '08', 'Yauli', '00', '    ', NULL, NULL, NULL),
('120801', '12', 'Junín', '08', 'Yauli', '01', 'La Oroya', NULL, NULL, NULL),
('120802', '12', 'Junín', '08', 'Yauli', '02', 'Chacapalpa', NULL, NULL, NULL),
('120803', '12', 'Junín', '08', 'Yauli', '03', 'Huay-Huay', NULL, NULL, NULL),
('120804', '12', 'Junín', '08', 'Yauli', '04', 'Marcapomacocha', NULL, NULL, NULL),
('120805', '12', 'Junín', '08', 'Yauli', '05', 'Morococha', NULL, NULL, NULL),
('120806', '12', 'Junín', '08', 'Yauli', '06', 'Paccha', NULL, NULL, NULL),
('120807', '12', 'Junín', '08', 'Yauli', '07', 'Santa Bárbara de Carhuacayan', NULL, NULL, NULL),
('120808', '12', 'Junín', '08', 'Yauli', '08', 'Santa Rosa de Sacco', NULL, NULL, NULL),
('120809', '12', 'Junín', '08', 'Yauli', '09', 'Suitucancha', NULL, NULL, NULL),
('120810', '12', 'Junín', '08', 'Yauli', '10', 'Yauli', NULL, NULL, NULL),
('120900', '12', 'Junín', '09', 'Chupaca', '00', '    ', NULL, NULL, NULL),
('120901', '12', 'Junín', '09', 'Chupaca', '01', 'Chupaca', NULL, NULL, NULL),
('120902', '12', 'Junín', '09', 'Chupaca', '02', 'Ahuac', NULL, NULL, NULL),
('120903', '12', 'Junín', '09', 'Chupaca', '03', 'Chongos Bajo', NULL, NULL, NULL),
('120904', '12', 'Junín', '09', 'Chupaca', '04', 'Huachac', NULL, NULL, NULL),
('120905', '12', 'Junín', '09', 'Chupaca', '05', 'Huamancaca Chico', NULL, NULL, NULL),
('120906', '12', 'Junín', '09', 'Chupaca', '06', 'San Juan de Iscos', NULL, NULL, NULL),
('120907', '12', 'Junín', '09', 'Chupaca', '07', 'San Juan de Jarpa', NULL, NULL, NULL),
('120908', '12', 'Junín', '09', 'Chupaca', '08', 'Tres de Diciembre', NULL, NULL, NULL),
('120909', '12', 'Junín', '09', 'Chupaca', '09', 'Yanacancha', NULL, NULL, NULL),
('130000', '13', 'La Libertad', '00', '         ', '00', NULL, '44', NULL, NULL),
('130100', '13', 'La Libertad', '01', 'Trujillo', '00', '     ', NULL, NULL, NULL),
('130101', '13', 'La Libertad', '01', 'Trujillo', '01', 'Trujillo', NULL, NULL, NULL),
('130102', '13', 'La Libertad', '01', 'Trujillo', '02', 'El Porvenir', NULL, NULL, NULL),
('130103', '13', 'La Libertad', '01', 'Trujillo', '03', 'Florencia de Mora', NULL, NULL, NULL),
('130104', '13', 'La Libertad', '01', 'Trujillo', '04', 'Huanchaco', NULL, NULL, NULL),
('130105', '13', 'La Libertad', '01', 'Trujillo', '05', 'La Esperanza', NULL, NULL, NULL),
('130106', '13', 'La Libertad', '01', 'Trujillo', '06', 'Laredo', NULL, NULL, NULL),
('130107', '13', 'La Libertad', '01', 'Trujillo', '07', 'Moche', NULL, NULL, NULL),
('130108', '13', 'La Libertad', '01', 'Trujillo', '08', 'Poroto', NULL, NULL, NULL),
('130109', '13', 'La Libertad', '01', 'Trujillo', '09', 'Salaverry', NULL, NULL, NULL),
('130110', '13', 'La Libertad', '01', 'Trujillo', '10', 'Simbal', NULL, NULL, NULL),
('130111', '13', 'La Libertad', '01', 'Trujillo', '11', 'Victor Larco Herrera', NULL, NULL, NULL),
('130200', '13', 'La Libertad', '02', 'Ascope', '00', '       ', NULL, NULL, NULL),
('130201', '13', 'La Libertad', '02', 'Ascope', '01', 'Ascope', NULL, NULL, NULL),
('130202', '13', 'La Libertad', '02', 'Ascope', '02', 'Chicama', NULL, NULL, NULL),
('130203', '13', 'La Libertad', '02', 'Ascope', '03', 'Chocope', NULL, NULL, NULL),
('130204', '13', 'La Libertad', '02', 'Ascope', '04', 'Magdalena de Cao', NULL, NULL, NULL),
('130205', '13', 'La Libertad', '02', 'Ascope', '05', 'Paijan', NULL, NULL, NULL),
('130206', '13', 'La Libertad', '02', 'Ascope', '06', 'Rázuri', NULL, NULL, NULL),
('130207', '13', 'La Libertad', '02', 'Ascope', '07', 'Santiago de Cao', NULL, NULL, NULL),
('130208', '13', 'La Libertad', '02', 'Ascope', '08', 'Casa Grande', NULL, NULL, NULL),
('130300', '13', 'La Libertad', '03', 'Bolívar', '00', '        ', NULL, NULL, NULL),
('130301', '13', 'La Libertad', '03', 'Bolívar', '01', 'Bolívar', NULL, NULL, NULL),
('130302', '13', 'La Libertad', '03', 'Bolívar', '02', 'Bambamarca', NULL, NULL, NULL),
('130303', '13', 'La Libertad', '03', 'Bolívar', '03', 'Condormarca', NULL, NULL, NULL),
('130304', '13', 'La Libertad', '03', 'Bolívar', '04', 'Longotea', NULL, NULL, NULL),
('130305', '13', 'La Libertad', '03', 'Bolívar', '05', 'Uchumarca', NULL, NULL, NULL),
('130306', '13', 'La Libertad', '03', 'Bolívar', '06', 'Ucuncha', NULL, NULL, NULL),
('130400', '13', 'La Libertad', '04', 'Chepén', '00', '     ', NULL, NULL, NULL),
('130401', '13', 'La Libertad', '04', 'Chepén', '01', 'Chepen', NULL, NULL, NULL),
('130402', '13', 'La Libertad', '04', 'Chepén', '02', 'Pacanga', NULL, NULL, NULL),
('130403', '13', 'La Libertad', '04', 'Chepén', '03', 'Pueblo Nuevo', NULL, NULL, NULL),
('130500', '13', 'La Libertad', '05', 'Julcán', '00', NULL, NULL, NULL, NULL),
('130501', '13', 'La Libertad', '05', 'Julcán', '01', 'Julcan', NULL, NULL, NULL),
('130502', '13', 'La Libertad', '05', 'Julcán', '02', 'Calamarca', NULL, NULL, NULL),
('130503', '13', 'La Libertad', '05', 'Julcán', '03', 'Carabamba', NULL, NULL, NULL),
('130504', '13', 'La Libertad', '05', 'Julcán', '04', 'Huaso', NULL, NULL, NULL),
('130600', '13', 'La Libertad', '06', 'Otuzco', '00', '       ', NULL, NULL, NULL),
('130601', '13', 'La Libertad', '06', 'Otuzco', '01', 'Otuzco', NULL, NULL, NULL),
('130602', '13', 'La Libertad', '06', 'Otuzco', '02', 'Agallpampa', NULL, NULL, NULL),
('130604', '13', 'La Libertad', '06', 'Otuzco', '04', 'Charat', NULL, NULL, NULL),
('130605', '13', 'La Libertad', '06', 'Otuzco', '05', 'Huaranchal', NULL, NULL, NULL),
('130606', '13', 'La Libertad', '06', 'Otuzco', '06', 'La Cuesta', NULL, NULL, NULL),
('130608', '13', 'La Libertad', '06', 'Otuzco', '08', 'Mache', NULL, NULL, NULL),
('130610', '13', 'La Libertad', '06', 'Otuzco', '10', 'Paranday', NULL, NULL, NULL),
('130611', '13', 'La Libertad', '06', 'Otuzco', '11', 'Salpo', NULL, NULL, NULL),
('130613', '13', 'La Libertad', '06', 'Otuzco', '13', 'Sinsicap', NULL, NULL, NULL),
('130614', '13', 'La Libertad', '06', 'Otuzco', '14', 'Usquil', NULL, NULL, NULL),
('130700', '13', 'La Libertad', '07', 'Pacasmayo', '00', '    ', NULL, NULL, NULL),
('130701', '13', 'La Libertad', '07', 'Pacasmayo', '01', 'San Pedro de Lloc', NULL, NULL, NULL),
('130702', '13', 'La Libertad', '07', 'Pacasmayo', '02', 'Guadalupe', NULL, NULL, NULL),
('130703', '13', 'La Libertad', '07', 'Pacasmayo', '03', 'Jequetepeque', NULL, NULL, NULL),
('130704', '13', 'La Libertad', '07', 'Pacasmayo', '04', 'Pacasmayo', NULL, NULL, NULL),
('130705', '13', 'La Libertad', '07', 'Pacasmayo', '05', 'San José', NULL, NULL, NULL),
('130800', '13', 'La Libertad', '08', 'Pataz', '00', '     ', NULL, NULL, NULL),
('130801', '13', 'La Libertad', '08', 'Pataz', '01', 'Tayabamba', NULL, NULL, NULL),
('130802', '13', 'La Libertad', '08', 'Pataz', '02', 'Buldibuyo', NULL, NULL, NULL),
('130803', '13', 'La Libertad', '08', 'Pataz', '03', 'Chillia', NULL, NULL, NULL),
('130804', '13', 'La Libertad', '08', 'Pataz', '04', 'Huancaspata', NULL, NULL, NULL),
('130805', '13', 'La Libertad', '08', 'Pataz', '05', 'Huaylillas', NULL, NULL, NULL),
('130806', '13', 'La Libertad', '08', 'Pataz', '06', 'Huayo', NULL, NULL, NULL),
('130807', '13', 'La Libertad', '08', 'Pataz', '07', 'Ongon', NULL, NULL, NULL),
('130808', '13', 'La Libertad', '08', 'Pataz', '08', 'Parcoy', NULL, NULL, NULL),
('130809', '13', 'La Libertad', '08', 'Pataz', '09', 'Pataz', NULL, NULL, NULL),
('130810', '13', 'La Libertad', '08', 'Pataz', '10', 'Pias', NULL, NULL, NULL),
('130811', '13', 'La Libertad', '08', 'Pataz', '11', 'Santiago de Challas', NULL, NULL, NULL),
('130812', '13', 'La Libertad', '08', 'Pataz', '12', 'Taurija', NULL, NULL, NULL),
('130813', '13', 'La Libertad', '08', 'Pataz', '13', 'Urpay', NULL, NULL, NULL),
('130900', '13', 'La Libertad', '09', 'Sánchez Carrión', '00', '  ', NULL, NULL, NULL),
('130901', '13', 'La Libertad', '09', 'Sánchez Carrión', '01', 'Huamachuco', NULL, NULL, NULL),
('130902', '13', 'La Libertad', '09', 'Sánchez Carrión', '02', 'Chugay', NULL, NULL, NULL),
('130903', '13', 'La Libertad', '09', 'Sánchez Carrión', '03', 'Cochorco', NULL, NULL, NULL),
('130904', '13', 'La Libertad', '09', 'Sánchez Carrión', '04', 'Curgos', NULL, NULL, NULL),
('130905', '13', 'La Libertad', '09', 'Sánchez Carrión', '05', 'Marcabal', NULL, NULL, NULL),
('130906', '13', 'La Libertad', '09', 'Sánchez Carrión', '06', 'Sanagoran', NULL, NULL, NULL),
('130907', '13', 'La Libertad', '09', 'Sánchez Carrión', '07', 'Sarin', NULL, NULL, NULL),
('130908', '13', 'La Libertad', '09', 'Sánchez Carrión', '08', 'Sartimbamba', NULL, NULL, NULL),
('131000', '13', 'La Libertad', '10', 'Santiago de Chuco', '00', NULL, NULL, NULL, NULL),
('131001', '13', 'La Libertad', '10', 'Santiago de Chuco', '01', 'Santiago de Chuco', NULL, NULL, NULL),
('131002', '13', 'La Libertad', '10', 'Santiago de Chuco', '02', 'Angasmarca', NULL, NULL, NULL),
('131003', '13', 'La Libertad', '10', 'Santiago de Chuco', '03', 'Cachicadan', NULL, NULL, NULL),
('131004', '13', 'La Libertad', '10', 'Santiago de Chuco', '04', 'Mollebamba', NULL, NULL, NULL),
('131005', '13', 'La Libertad', '10', 'Santiago de Chuco', '05', 'Mollepata', NULL, NULL, NULL),
('131006', '13', 'La Libertad', '10', 'Santiago de Chuco', '06', 'Quiruvilca', NULL, NULL, NULL),
('131007', '13', 'La Libertad', '10', 'Santiago de Chuco', '07', 'Santa Cruz de Chuca', NULL, NULL, NULL),
('131008', '13', 'La Libertad', '10', 'Santiago de Chuco', '08', 'Sitabamba', NULL, NULL, NULL),
('131100', '13', 'La Libertad', '11', 'Gran Chimú', '00', '       ', NULL, NULL, NULL),
('131101', '13', 'La Libertad', '11', 'Gran Chimú', '01', 'Cascas', NULL, NULL, NULL),
('131102', '13', 'La Libertad', '11', 'Gran Chimú', '02', 'Lucma', NULL, NULL, NULL),
('131103', '13', 'La Libertad', '11', 'Gran Chimú', '03', 'Marmot', NULL, NULL, NULL),
('131104', '13', 'La Libertad', '11', 'Gran Chimú', '04', 'Sayapullo', NULL, NULL, NULL),
('131200', '13', 'La Libertad', '12', 'Virú', '00', '       ', NULL, NULL, NULL),
('131201', '13', 'La Libertad', '12', 'Virú', '01', 'Viru', NULL, NULL, NULL),
('131202', '13', 'La Libertad', '12', 'Virú', '02', 'Chao', NULL, NULL, NULL),
('131203', '13', 'La Libertad', '12', 'Virú', '03', 'Guadalupito', NULL, NULL, NULL),
('140000', '14', 'Lambayeque', '00', NULL, '00', NULL, '74', NULL, NULL),
('140100', '14', 'Lambayeque', '01', 'Chiclayo', '00', NULL, NULL, NULL, NULL),
('140101', '14', 'Lambayeque', '01', 'Chiclayo', '01', 'Chiclayo', NULL, NULL, NULL),
('140102', '14', 'Lambayeque', '01', 'Chiclayo', '02', 'Chongoyape', NULL, NULL, NULL),
('140103', '14', 'Lambayeque', '01', 'Chiclayo', '03', 'Eten', NULL, NULL, NULL),
('140104', '14', 'Lambayeque', '01', 'Chiclayo', '04', 'Eten Puerto', NULL, NULL, NULL),
('140105', '14', 'Lambayeque', '01', 'Chiclayo', '05', 'José Leonardo Ortiz', NULL, NULL, NULL),
('140106', '14', 'Lambayeque', '01', 'Chiclayo', '06', 'La Victoria', NULL, NULL, NULL),
('140107', '14', 'Lambayeque', '01', 'Chiclayo', '07', 'Lagunas', NULL, NULL, NULL),
('140108', '14', 'Lambayeque', '01', 'Chiclayo', '08', 'Monsefu', NULL, NULL, NULL),
('140109', '14', 'Lambayeque', '01', 'Chiclayo', '09', 'Nueva Arica', NULL, NULL, NULL),
('140110', '14', 'Lambayeque', '01', 'Chiclayo', '10', 'Oyotun', NULL, NULL, NULL),
('140111', '14', 'Lambayeque', '01', 'Chiclayo', '11', 'Picsi', NULL, NULL, NULL),
('140112', '14', 'Lambayeque', '01', 'Chiclayo', '12', 'Pimentel', NULL, NULL, NULL),
('140113', '14', 'Lambayeque', '01', 'Chiclayo', '13', 'Reque', NULL, NULL, NULL),
('140114', '14', 'Lambayeque', '01', 'Chiclayo', '14', 'Santa Rosa', NULL, NULL, NULL),
('140115', '14', 'Lambayeque', '01', 'Chiclayo', '15', 'Saña', NULL, NULL, NULL),
('140116', '14', 'Lambayeque', '01', 'Chiclayo', '16', 'Cayalti', NULL, NULL, NULL),
('140117', '14', 'Lambayeque', '01', 'Chiclayo', '17', 'Patapo', NULL, NULL, NULL),
('140118', '14', 'Lambayeque', '01', 'Chiclayo', '18', 'Pomalca', NULL, NULL, NULL),
('140119', '14', 'Lambayeque', '01', 'Chiclayo', '19', 'Pucala', NULL, NULL, NULL),
('140120', '14', 'Lambayeque', '01', 'Chiclayo', '20', 'Tuman', NULL, NULL, NULL),
('140200', '14', 'Lambayeque', '02', 'Ferreñafe', '00', '       ', NULL, NULL, NULL),
('140201', '14', 'Lambayeque', '02', 'Ferreñafe', '01', 'Ferreñafe', NULL, NULL, NULL),
('140202', '14', 'Lambayeque', '02', 'Ferreñafe', '02', 'Cañaris', NULL, NULL, NULL),
('140203', '14', 'Lambayeque', '02', 'Ferreñafe', '03', 'Incahuasi', NULL, NULL, NULL),
('140204', '14', 'Lambayeque', '02', 'Ferreñafe', '04', 'Manuel Antonio Mesones Muro', NULL, NULL, NULL),
('140205', '14', 'Lambayeque', '02', 'Ferreñafe', '05', 'Pitipo', NULL, NULL, NULL),
('140206', '14', 'Lambayeque', '02', 'Ferreñafe', '06', 'Pueblo Nuevo', NULL, NULL, NULL),
('140300', '14', 'Lambayeque', '03', 'Lambayeque', '00', NULL, NULL, NULL, NULL),
('140301', '14', 'Lambayeque', '03', 'Lambayeque', '01', 'Lambayeque', NULL, NULL, NULL),
('140302', '14', 'Lambayeque', '03', 'Lambayeque', '02', 'Chochope', NULL, NULL, NULL),
('140303', '14', 'Lambayeque', '03', 'Lambayeque', '03', 'Illimo', NULL, NULL, NULL),
('140304', '14', 'Lambayeque', '03', 'Lambayeque', '04', 'Jayanca', NULL, NULL, NULL),
('140305', '14', 'Lambayeque', '03', 'Lambayeque', '05', 'Mochumi', NULL, NULL, NULL),
('140306', '14', 'Lambayeque', '03', 'Lambayeque', '06', 'Morrope', NULL, NULL, NULL),
('140307', '14', 'Lambayeque', '03', 'Lambayeque', '07', 'Motupe', NULL, NULL, NULL),
('140308', '14', 'Lambayeque', '03', 'Lambayeque', '08', 'Olmos', NULL, NULL, NULL),
('140309', '14', 'Lambayeque', '03', 'Lambayeque', '09', 'Pacora', NULL, NULL, NULL),
('140310', '14', 'Lambayeque', '03', 'Lambayeque', '10', 'Salas', NULL, NULL, NULL),
('140311', '14', 'Lambayeque', '03', 'Lambayeque', '11', 'San José', NULL, NULL, NULL),
('140312', '14', 'Lambayeque', '03', 'Lambayeque', '12', 'Tucume', NULL, NULL, NULL),
('150000', '15', 'Lima', '00', NULL, '00', NULL, '1', NULL, NULL),
('150100', '15', 'Lima', '01', 'Lima', '00', '    ', NULL, NULL, NULL),
('150101', '15', 'Lima', '01', 'Lima', '01', 'Lima', NULL, NULL, NULL),
('150102', '15', 'Lima', '01', 'Lima', '02', 'Ancón', NULL, NULL, NULL),
('150103', '15', 'Lima', '01', 'Lima', '03', 'Ate', NULL, NULL, NULL),
('150104', '15', 'Lima', '01', 'Lima', '04', 'Barranco', NULL, NULL, NULL),
('150105', '15', 'Lima', '01', 'Lima', '05', 'Breña', NULL, NULL, NULL),
('150106', '15', 'Lima', '01', 'Lima', '06', 'Carabayllo', NULL, NULL, NULL),
('150107', '15', 'Lima', '01', 'Lima', '07', 'Chaclacayo', NULL, NULL, NULL),
('150108', '15', 'Lima', '01', 'Lima', '08', 'Chorrillos', NULL, NULL, NULL),
('150109', '15', 'Lima', '01', 'Lima', '09', 'Cieneguilla', NULL, NULL, NULL),
('150110', '15', 'Lima', '01', 'Lima', '10', 'Comas', NULL, NULL, NULL),
('150111', '15', 'Lima', '01', 'Lima', '11', 'El Agustino', NULL, NULL, NULL),
('150112', '15', 'Lima', '01', 'Lima', '12', 'Independencia', NULL, NULL, NULL),
('150113', '15', 'Lima', '01', 'Lima', '13', 'Jesús María', NULL, NULL, NULL),
('150114', '15', 'Lima', '01', 'Lima', '14', 'La Molina', NULL, NULL, NULL),
('150115', '15', 'Lima', '01', 'Lima', '15', 'La Victoria', NULL, NULL, NULL),
('150116', '15', 'Lima', '01', 'Lima', '16', 'Lince', NULL, NULL, NULL),
('150117', '15', 'Lima', '01', 'Lima', '17', 'Los Olivos', NULL, NULL, NULL),
('150118', '15', 'Lima', '01', 'Lima', '18', 'Lurigancho', NULL, NULL, NULL),
('150119', '15', 'Lima', '01', 'Lima', '19', 'Lurin', NULL, NULL, NULL),
('150120', '15', 'Lima', '01', 'Lima', '20', 'Magdalena del Mar', NULL, NULL, NULL),
('150121', '15', 'Lima', '01', 'Lima', '21', 'Pueblo Libre', NULL, NULL, NULL),
('150122', '15', 'Lima', '01', 'Lima', '22', 'Miraflores', NULL, NULL, NULL),
('150123', '15', 'Lima', '01', 'Lima', '23', 'Pachacamac', NULL, NULL, NULL),
('150124', '15', 'Lima', '01', 'Lima', '24', 'Pucusana', NULL, NULL, NULL),
('150125', '15', 'Lima', '01', 'Lima', '25', 'Puente Piedra', NULL, NULL, NULL),
('150126', '15', 'Lima', '01', 'Lima', '26', 'Punta Hermosa', NULL, NULL, NULL),
('150127', '15', 'Lima', '01', 'Lima', '27', 'Punta Negra', NULL, NULL, NULL),
('150128', '15', 'Lima', '01', 'Lima', '28', 'Rímac', NULL, NULL, NULL),
('150129', '15', 'Lima', '01', 'Lima', '29', 'San Bartolo', NULL, NULL, NULL),
('150130', '15', 'Lima', '01', 'Lima', '30', 'San Borja', NULL, NULL, NULL),
('150131', '15', 'Lima', '01', 'Lima', '31', 'San Isidro', NULL, NULL, NULL),
('150132', '15', 'Lima', '01', 'Lima', '32', 'San Juan de Lurigancho', NULL, NULL, NULL),
('150133', '15', 'Lima', '01', 'Lima', '33', 'San Juan de Miraflores', NULL, NULL, NULL),
('150134', '15', 'Lima', '01', 'Lima', '34', 'San Luis', NULL, NULL, NULL),
('150135', '15', 'Lima', '01', 'Lima', '35', 'San Martín de Porres', NULL, NULL, NULL),
('150136', '15', 'Lima', '01', 'Lima', '36', 'San Miguel', NULL, NULL, NULL),
('150137', '15', 'Lima', '01', 'Lima', '37', 'Santa Anita', NULL, NULL, NULL),
('150138', '15', 'Lima', '01', 'Lima', '38', 'Santa María del Mar', NULL, NULL, NULL),
('150139', '15', 'Lima', '01', 'Lima', '39', 'Santa Rosa', NULL, NULL, NULL),
('150140', '15', 'Lima', '01', 'Lima', '40', 'Santiago de Surco', NULL, NULL, NULL),
('150141', '15', 'Lima', '01', 'Lima', '41', 'Surquillo', NULL, NULL, NULL),
('150142', '15', 'Lima', '01', 'Lima', '42', 'Villa El Salvador', NULL, NULL, NULL),
('150143', '15', 'Lima', '01', 'Lima', '43', 'Villa María del Triunfo', NULL, NULL, NULL),
('150200', '15', 'Lima', '02', 'Barraca', '00', '     ', NULL, NULL, NULL),
('150201', '15', 'Lima', '02', 'Barranca', '01', 'Barranca', NULL, NULL, NULL),
('150202', '15', 'Lima', '02', 'Barranca', '02', 'Paramonga', NULL, NULL, NULL),
('150203', '15', 'Lima', '02', 'Barranca', '03', 'Pativilca', NULL, NULL, NULL),
('150204', '15', 'Lima', '02', 'Barranca', '04', 'Supe', NULL, NULL, NULL),
('150205', '15', 'Lima', '02', 'Barranca', '05', 'Supe Puerto', NULL, NULL, NULL),
('150300', '15', 'Lima', '03', 'Cajatambo', '00', '   ', NULL, NULL, NULL),
('150301', '15', 'Lima', '03', 'Cajatambo', '01', 'Cajatambo', NULL, NULL, NULL),
('150302', '15', 'Lima', '03', 'Cajatambo', '02', 'Copa', NULL, NULL, NULL),
('150303', '15', 'Lima', '03', 'Cajatambo', '03', 'Gorgor', NULL, NULL, NULL),
('150304', '15', 'Lima', '03', 'Cajatambo', '04', 'Huancapon', NULL, NULL, NULL),
('150305', '15', 'Lima', '03', 'Cajatambo', '05', 'Manas', NULL, NULL, NULL),
('150400', '15', 'Lima', '04', 'Canta', '00', '   ', NULL, NULL, NULL),
('150401', '15', 'Lima', '04', 'Canta', '01', 'Canta', NULL, NULL, NULL),
('150402', '15', 'Lima', '04', 'Canta', '02', 'Arahuay', NULL, NULL, NULL),
('150403', '15', 'Lima', '04', 'Canta', '03', 'Huamantanga', NULL, NULL, NULL),
('150404', '15', 'Lima', '04', 'Canta', '04', 'Huaros', NULL, NULL, NULL),
('150405', '15', 'Lima', '04', 'Canta', '05', 'Lachaqui', NULL, NULL, NULL),
('150406', '15', 'Lima', '04', 'Canta', '06', 'San Buenaventura', NULL, NULL, NULL),
('150407', '15', 'Lima', '04', 'Canta', '07', 'Santa Rosa de Quives', NULL, NULL, NULL),
('150500', '15', 'Lima', '05', 'Cañete', '00', '    ', NULL, NULL, NULL),
('150501', '15', 'Lima', '05', 'Cañete', '01', 'San Vicente de Cañete', NULL, NULL, NULL),
('150502', '15', 'Lima', '05', 'Cañete', '02', 'Asia', NULL, NULL, NULL),
('150503', '15', 'Lima', '05', 'Cañete', '03', 'Calango', NULL, NULL, NULL),
('150504', '15', 'Lima', '05', 'Cañete', '04', 'Cerro Azul', NULL, NULL, NULL),
('150505', '15', 'Lima', '05', 'Cañete', '05', 'Chilca', NULL, NULL, NULL),
('150506', '15', 'Lima', '05', 'Cañete', '06', 'Coayllo', NULL, NULL, NULL),
('150507', '15', 'Lima', '05', 'Cañete', '07', 'Imperial', NULL, NULL, NULL),
('150508', '15', 'Lima', '05', 'Cañete', '08', 'Lunahuana', NULL, NULL, NULL),
('150509', '15', 'Lima', '05', 'Cañete', '09', 'Mala', NULL, NULL, NULL),
('150510', '15', 'Lima', '05', 'Cañete', '10', 'Nuevo Imperial', NULL, NULL, NULL),
('150511', '15', 'Lima', '05', 'Cañete', '11', 'Pacaran', NULL, NULL, NULL),
('150512', '15', 'Lima', '05', 'Cañete', '12', 'Quilmana', NULL, NULL, NULL),
('150513', '15', 'Lima', '05', 'Cañete', '13', 'San Antonio', NULL, NULL, NULL),
('150514', '15', 'Lima', '05', 'Cañete', '14', 'San Luis', NULL, NULL, NULL),
('150515', '15', 'Lima', '05', 'Cañete', '15', 'Santa Cruz de Flores', NULL, NULL, NULL),
('150516', '15', 'Lima', '05', 'Cañete', '16', 'Zúñiga', NULL, NULL, NULL),
('150600', '15', 'Lima', '06', 'Huaral', '00', '    ', NULL, NULL, NULL),
('150601', '15', 'Lima', '06', 'Huaral', '01', 'Huaral', NULL, NULL, NULL),
('150602', '15', 'Lima', '06', 'Huaral', '02', 'Atavillos Alto', NULL, NULL, NULL),
('150603', '15', 'Lima', '06', 'Huaral', '03', 'Atavillos Bajo', NULL, NULL, NULL),
('150604', '15', 'Lima', '06', 'Huaral', '04', 'Aucallama', NULL, NULL, NULL),
('150605', '15', 'Lima', '06', 'Huaral', '05', 'Chancay', NULL, NULL, NULL),
('150606', '15', 'Lima', '06', 'Huaral', '06', 'Ihuari', NULL, NULL, NULL),
('150607', '15', 'Lima', '06', 'Huaral', '07', 'Lampian', NULL, NULL, NULL),
('150608', '15', 'Lima', '06', 'Huaral', '08', 'Pacaraos', NULL, NULL, NULL),
('150609', '15', 'Lima', '06', 'Huaral', '09', 'San Miguel de Acos', NULL, NULL, NULL),
('150610', '15', 'Lima', '06', 'Huaral', '10', 'Santa Cruz de Andamarca', NULL, NULL, NULL),
('150611', '15', 'Lima', '06', 'Huaral', '11', 'Sumbilca', NULL, NULL, NULL),
('150612', '15', 'Lima', '06', 'Huaral', '12', 'Veintisiete de Noviembre', NULL, NULL, NULL),
('150700', '15', 'Lima', '07', 'Huarochirí', '00', '  ', NULL, NULL, NULL),
('150701', '15', 'Lima', '07', 'Huarochirí', '01', 'Matucana', NULL, NULL, NULL),
('150702', '15', 'Lima', '07', 'Huarochirí', '02', 'Antioquia', NULL, NULL, NULL),
('150703', '15', 'Lima', '07', 'Huarochirí', '03', 'Callahuanca', NULL, NULL, NULL),
('150704', '15', 'Lima', '07', 'Huarochirí', '04', 'Carampoma', NULL, NULL, NULL),
('150705', '15', 'Lima', '07', 'Huarochirí', '05', 'Chicla', NULL, NULL, NULL),
('150706', '15', 'Lima', '07', 'Huarochirí', '06', 'Cuenca', NULL, NULL, NULL),
('150707', '15', 'Lima', '07', 'Huarochirí', '07', 'Huachupampa', NULL, NULL, NULL),
('150708', '15', 'Lima', '07', 'Huarochirí', '08', 'Huanza', NULL, NULL, NULL),
('150709', '15', 'Lima', '07', 'Huarochirí', '09', 'Huarochiri', NULL, NULL, NULL),
('150710', '15', 'Lima', '07', 'Huarochirí', '10', 'Lahuaytambo', NULL, NULL, NULL),
('150711', '15', 'Lima', '07', 'Huarochirí', '11', 'Langa', NULL, NULL, NULL),
('150712', '15', 'Lima', '07', 'Huarochirí', '12', 'Laraos', NULL, NULL, NULL),
('150713', '15', 'Lima', '07', 'Huarochirí', '13', 'Mariatana', NULL, NULL, NULL),
('150714', '15', 'Lima', '07', 'Huarochirí', '14', 'Ricardo Palma', NULL, NULL, NULL),
('150715', '15', 'Lima', '07', 'Huarochirí', '15', 'San Andrés de Tupicocha', NULL, NULL, NULL),
('150716', '15', 'Lima', '07', 'Huarochirí', '16', 'San Antonio', NULL, NULL, NULL),
('150717', '15', 'Lima', '07', 'Huarochirí', '17', 'San Bartolomé', NULL, NULL, NULL),
('150718', '15', 'Lima', '07', 'Huarochirí', '18', 'San Damian', NULL, NULL, NULL),
('150719', '15', 'Lima', '07', 'Huarochirí', '19', 'San Juan de Iris', NULL, NULL, NULL),
('150720', '15', 'Lima', '07', 'Huarochirí', '20', 'San Juan de Tantaranche', NULL, NULL, NULL),
('150721', '15', 'Lima', '07', 'Huarochirí', '21', 'San Lorenzo de Quinti', NULL, NULL, NULL),
('150722', '15', 'Lima', '07', 'Huarochirí', '22', 'San Mateo', NULL, NULL, NULL),
('150723', '15', 'Lima', '07', 'Huarochirí', '23', 'San Mateo de Otao', NULL, NULL, NULL),
('150724', '15', 'Lima', '07', 'Huarochirí', '24', 'San Pedro de Casta', NULL, NULL, NULL),
('150725', '15', 'Lima', '07', 'Huarochirí', '25', 'San Pedro de Huancayre', NULL, NULL, NULL),
('150726', '15', 'Lima', '07', 'Huarochirí', '26', 'Sangallaya', NULL, NULL, NULL),
('150727', '15', 'Lima', '07', 'Huarochirí', '27', 'Santa Cruz de Cocachacra', NULL, NULL, NULL),
('150728', '15', 'Lima', '07', 'Huarochirí', '28', 'Santa Eulalia', NULL, NULL, NULL),
('150729', '15', 'Lima', '07', 'Huarochirí', '29', 'Santiago de Anchucaya', NULL, NULL, NULL),
('150730', '15', 'Lima', '07', 'Huarochirí', '30', 'Santiago de Tuna', NULL, NULL, NULL),
('150731', '15', 'Lima', '07', 'Huarochirí', '31', 'Santo Domingo de Los Olleros', NULL, NULL, NULL),
('150732', '15', 'Lima', '07', 'Huarochirí', '32', 'Surco', NULL, NULL, NULL),
('150800', '15', 'Lima', '08', 'Huaura', '00', '    ', NULL, NULL, NULL),
('150801', '15', 'Lima', '08', 'Huaura', '01', 'Huacho', NULL, NULL, NULL),
('150802', '15', 'Lima', '08', 'Huaura', '02', 'Ambar', NULL, NULL, NULL),
('150803', '15', 'Lima', '08', 'Huaura', '03', 'Caleta de Carquin', NULL, NULL, NULL),
('150804', '15', 'Lima', '08', 'Huaura', '04', 'Checras', NULL, NULL, NULL),
('150805', '15', 'Lima', '08', 'Huaura', '05', 'Hualmay', NULL, NULL, NULL),
('150806', '15', 'Lima', '08', 'Huaura', '06', 'Huaura', NULL, NULL, NULL),
('150807', '15', 'Lima', '08', 'Huaura', '07', 'Leoncio Prado', NULL, NULL, NULL),
('150808', '15', 'Lima', '08', 'Huaura', '08', 'Paccho', NULL, NULL, NULL),
('150809', '15', 'Lima', '08', 'Huaura', '09', 'Santa Leonor', NULL, NULL, NULL),
('150810', '15', 'Lima', '08', 'Huaura', '10', 'Santa María', NULL, NULL, NULL),
('150811', '15', 'Lima', '08', 'Huaura', '11', 'Sayan', NULL, NULL, NULL),
('150812', '15', 'Lima', '08', 'Huaura', '12', 'Vegueta', NULL, NULL, NULL),
('150900', '15', 'Lima', '09', 'Oyón', '00', '    ', NULL, NULL, NULL),
('150901', '15', 'Lima', '09', 'Oyón', '01', 'Oyon', NULL, NULL, NULL),
('150902', '15', 'Lima', '09', 'Oyón', '02', 'Andajes', NULL, NULL, NULL),
('150903', '15', 'Lima', '09', 'Oyón', '03', 'Caujul', NULL, NULL, NULL),
('150904', '15', 'Lima', '09', 'Oyón', '04', 'Cochamarca', NULL, NULL, NULL),
('150905', '15', 'Lima', '09', 'Oyón', '05', 'Navan', NULL, NULL, NULL),
('150906', '15', 'Lima', '09', 'Oyón', '06', 'Pachangara', NULL, NULL, NULL),
('151000', '15', 'Lima', '10', 'Yauyos', '00', NULL, NULL, NULL, NULL),
('151001', '15', 'Lima', '10', 'Yauyos', '01', 'Yauyos', NULL, NULL, NULL),
('151002', '15', 'Lima', '10', 'Yauyos', '02', 'Alis', NULL, NULL, NULL),
('151003', '15', 'Lima', '10', 'Yauyos', '03', 'Allauca', NULL, NULL, NULL),
('151004', '15', 'Lima', '10', 'Yauyos', '04', 'Ayaviri', NULL, NULL, NULL),
('151005', '15', 'Lima', '10', 'Yauyos', '05', 'Azángaro', NULL, NULL, NULL),
('151006', '15', 'Lima', '10', 'Yauyos', '06', 'Cacra', NULL, NULL, NULL),
('151007', '15', 'Lima', '10', 'Yauyos', '07', 'Carania', NULL, NULL, NULL),
('151008', '15', 'Lima', '10', 'Yauyos', '08', 'Catahuasi', NULL, NULL, NULL),
('151009', '15', 'Lima', '10', 'Yauyos', '09', 'Chocos', NULL, NULL, NULL),
('151010', '15', 'Lima', '10', 'Yauyos', '10', 'Cochas', NULL, NULL, NULL),
('151011', '15', 'Lima', '10', 'Yauyos', '11', 'Colonia', NULL, NULL, NULL),
('151012', '15', 'Lima', '10', 'Yauyos', '12', 'Hongos', NULL, NULL, NULL),
('151013', '15', 'Lima', '10', 'Yauyos', '13', 'Huampara', NULL, NULL, NULL),
('151014', '15', 'Lima', '10', 'Yauyos', '14', 'Huancaya', NULL, NULL, NULL),
('151015', '15', 'Lima', '10', 'Yauyos', '15', 'Huangascar', NULL, NULL, NULL),
('151016', '15', 'Lima', '10', 'Yauyos', '16', 'Huantan', NULL, NULL, NULL),
('151017', '15', 'Lima', '10', 'Yauyos', '17', 'Huañec', NULL, NULL, NULL),
('151018', '15', 'Lima', '10', 'Yauyos', '18', 'Laraos', NULL, NULL, NULL),
('151019', '15', 'Lima', '10', 'Yauyos', '19', 'Lincha', NULL, NULL, NULL),
('151020', '15', 'Lima', '10', 'Yauyos', '20', 'Madean', NULL, NULL, NULL),
('151021', '15', 'Lima', '10', 'Yauyos', '21', 'Miraflores', NULL, NULL, NULL),
('151022', '15', 'Lima', '10', 'Yauyos', '22', 'Omas', NULL, NULL, NULL),
('151023', '15', 'Lima', '10', 'Yauyos', '23', 'Putinza', NULL, NULL, NULL),
('151024', '15', 'Lima', '10', 'Yauyos', '24', 'Quinches', NULL, NULL, NULL),
('151025', '15', 'Lima', '10', 'Yauyos', '25', 'Quinocay', NULL, NULL, NULL),
('151026', '15', 'Lima', '10', 'Yauyos', '26', 'San Joaquín', NULL, NULL, NULL),
('151027', '15', 'Lima', '10', 'Yauyos', '27', 'San Pedro de Pilas', NULL, NULL, NULL),
('151028', '15', 'Lima', '10', 'Yauyos', '28', 'Tanta', NULL, NULL, NULL),
('151029', '15', 'Lima', '10', 'Yauyos', '29', 'Tauripampa', NULL, NULL, NULL),
('151030', '15', 'Lima', '10', 'Yauyos', '30', 'Tomas', NULL, NULL, NULL),
('151031', '15', 'Lima', '10', 'Yauyos', '31', 'Tupe', NULL, NULL, NULL),
('151032', '15', 'Lima', '10', 'Yauyos', '32', 'Viñac', NULL, NULL, NULL),
('151033', '15', 'Lima', '10', 'Yauyos', '33', 'Vitis', NULL, NULL, NULL),
('160000', '16', 'Loreto', '00', NULL, '00', NULL, '65', NULL, NULL),
('160100', '16', 'Loreto', '01', 'Maynas', '00', '    ', NULL, NULL, NULL),
('160101', '16', 'Loreto', '01', 'Maynas', '01', 'Iquitos', NULL, NULL, NULL),
('160102', '16', 'Loreto', '01', 'Maynas', '02', 'Alto Nanay', NULL, NULL, NULL),
('160103', '16', 'Loreto', '01', 'Maynas', '03', 'Fernando Lores', NULL, NULL, NULL),
('160104', '16', 'Loreto', '01', 'Maynas', '04', 'Indiana', NULL, NULL, NULL),
('160105', '16', 'Loreto', '01', 'Maynas', '05', 'Las Amazonas', NULL, NULL, NULL),
('160106', '16', 'Loreto', '01', 'Maynas', '06', 'Mazan', NULL, NULL, NULL),
('160107', '16', 'Loreto', '01', 'Maynas', '07', 'Napo', NULL, NULL, NULL),
('160108', '16', 'Loreto', '01', 'Maynas', '08', 'Punchana', NULL, NULL, NULL),
('160110', '16', 'Loreto', '01', 'Maynas', '10', 'Torres Causana', NULL, NULL, NULL),
('160112', '16', 'Loreto', '01', 'Maynas', '12', 'Belén', NULL, NULL, NULL),
('160113', '16', 'Loreto', '01', 'Maynas', '13', 'San Juan Bautista', NULL, NULL, NULL),
('160200', '16', 'Loreto', '02', 'Alto Amazonas', '00', '   ', NULL, NULL, NULL),
('160201', '16', 'Loreto', '02', 'Alto Amazonas', '01', 'Yurimaguas', NULL, NULL, NULL),
('160202', '16', 'Loreto', '02', 'Alto Amazonas', '02', 'Balsapuerto', NULL, NULL, NULL),
('160205', '16', 'Loreto', '02', 'Alto Amazonas', '05', 'Jeberos', NULL, NULL, NULL),
('160206', '16', 'Loreto', '02', 'Alto Amazonas', '06', 'Lagunas', NULL, NULL, NULL),
('160210', '16', 'Loreto', '02', 'Alto Amazonas', '10', 'Santa Cruz', NULL, NULL, NULL),
('160211', '16', 'Loreto', '02', 'Alto Amazonas', '11', 'Teniente Cesar López Rojas', NULL, NULL, NULL),
('160300', '16', 'Loreto', '03', 'Loreto', '00', NULL, NULL, NULL, NULL),
('160301', '16', 'Loreto', '03', 'Loreto', '01', 'Nauta', NULL, NULL, NULL),
('160302', '16', 'Loreto', '03', 'Loreto', '02', 'Parinari', NULL, NULL, NULL),
('160303', '16', 'Loreto', '03', 'Loreto', '03', 'Tigre', NULL, NULL, NULL),
('160304', '16', 'Loreto', '03', 'Loreto', '04', 'Trompeteros', NULL, NULL, NULL),
('160305', '16', 'Loreto', '03', 'Loreto', '05', 'Urarinas', NULL, NULL, NULL),
('160400', '16', 'Loreto', '04', 'Mariscal Ramón Castilla', '00', '   ', NULL, NULL, NULL),
('160401', '16', 'Loreto', '04', 'Mariscal Ramón Castilla', '01', 'Ramón Castilla', NULL, NULL, NULL),
('160402', '16', 'Loreto', '04', 'Mariscal Ramón Castilla', '02', 'Pebas', NULL, NULL, NULL),
('160403', '16', 'Loreto', '04', 'Mariscal Ramón Castilla', '03', 'Yavari', NULL, NULL, NULL),
('160404', '16', 'Loreto', '04', 'Mariscal Ramón Castilla', '04', 'San Pablo', NULL, NULL, NULL),
('160500', '16', 'Loreto', '05', 'Requena', '00', '   ', NULL, NULL, NULL),
('160501', '16', 'Loreto', '05', 'Requena', '01', 'Requena', NULL, NULL, NULL),
('160502', '16', 'Loreto', '05', 'Requena', '02', 'Alto Tapiche', NULL, NULL, NULL),
('160503', '16', 'Loreto', '05', 'Requena', '03', 'Capelo', NULL, NULL, NULL),
('160504', '16', 'Loreto', '05', 'Requena', '04', 'Emilio San Martín', NULL, NULL, NULL),
('160505', '16', 'Loreto', '05', 'Requena', '05', 'Maquia', NULL, NULL, NULL),
('160506', '16', 'Loreto', '05', 'Requena', '06', 'Puinahua', NULL, NULL, NULL),
('160507', '16', 'Loreto', '05', 'Requena', '07', 'Saquena', NULL, NULL, NULL),
('160508', '16', 'Loreto', '05', 'Requena', '08', 'Soplin', NULL, NULL, NULL),
('160509', '16', 'Loreto', '05', 'Requena', '09', 'Tapiche', NULL, NULL, NULL),
('160510', '16', 'Loreto', '05', 'Requena', '10', 'Jenaro Herrera', NULL, NULL, NULL),
('160511', '16', 'Loreto', '05', 'Requena', '11', 'Yaquerana', NULL, NULL, NULL),
('160600', '16', 'Loreto', '06', 'Ucayali', '00', '   ', NULL, NULL, NULL),
('160601', '16', 'Loreto', '06', 'Ucayali', '01', 'Contamana', NULL, NULL, NULL),
('160602', '16', 'Loreto', '06', 'Ucayali', '02', 'Inahuaya', NULL, NULL, NULL),
('160603', '16', 'Loreto', '06', 'Ucayali', '03', 'Padre Márquez', NULL, NULL, NULL),
('160604', '16', 'Loreto', '06', 'Ucayali', '04', 'Pampa Hermosa', NULL, NULL, NULL),
('160605', '16', 'Loreto', '06', 'Ucayali', '05', 'Sarayacu', NULL, NULL, NULL),
('160606', '16', 'Loreto', '06', 'Ucayali', '06', 'Vargas Guerra', NULL, NULL, NULL),
('160700', '16', 'Loreto', '07', 'Datem del Marañón', '00', '  ', NULL, NULL, NULL),
('160701', '16', 'Loreto', '07', 'Datem del Marañón', '01', 'Barranca', NULL, NULL, NULL),
('160702', '16', 'Loreto', '07', 'Datem del Marañón', '02', 'Cahuapanas', NULL, NULL, NULL),
('160703', '16', 'Loreto', '07', 'Datem del Marañón', '03', 'Manseriche', NULL, NULL, NULL),
('160704', '16', 'Loreto', '07', 'Datem del Marañón', '04', 'Morona', NULL, NULL, NULL),
('160705', '16', 'Loreto', '07', 'Datem del Marañón', '05', 'Pastaza', NULL, NULL, NULL),
('160706', '16', 'Loreto', '07', 'Datem del Marañón', '06', 'Andoas', NULL, NULL, NULL),
('160800', '16', 'Loreto', '08', 'Putumayo', '00', '  ', NULL, NULL, NULL),
('160801', '16', 'Loreto', '08', 'Putumayo', '01', 'Putumayo', NULL, NULL, NULL),
('160802', '16', 'Loreto', '08', 'Putumayo', '02', 'Rosa Panduro', NULL, NULL, NULL),
('160803', '16', 'Loreto', '08', 'Putumayo', '03', 'Teniente Manuel Clavero', NULL, NULL, NULL),
('160804', '16', 'Loreto', '08', 'Putumayo', '04', 'Yaguas', NULL, NULL, NULL),
('170000', '17', 'Madre de Dios', '00', '            ', '00', NULL, '82', NULL, NULL),
('170100', '17', 'Madre de Dios', '01', 'Tambopata', '00', NULL, NULL, NULL, NULL),
('170101', '17', 'Madre de Dios', '01', 'Tambopata', '01', 'Tambopata', NULL, NULL, NULL),
('170102', '17', 'Madre de Dios', '01', 'Tambopata', '02', 'Inambari', NULL, NULL, NULL),
('170103', '17', 'Madre de Dios', '01', 'Tambopata', '03', 'Las Piedras', NULL, NULL, NULL),
('170104', '17', 'Madre de Dios', '01', 'Tambopata', '04', 'Laberinto', NULL, NULL, NULL),
('170200', '17', 'Madre de Dios', '02', 'Manu', '00', '     ', NULL, NULL, NULL),
('170201', '17', 'Madre de Dios', '02', 'Manu', '01', 'Manu', NULL, NULL, NULL),
('170202', '17', 'Madre de Dios', '02', 'Manu', '02', 'Fitzcarrald', NULL, NULL, NULL),
('170203', '17', 'Madre de Dios', '02', 'Manu', '03', 'Madre de Dios', NULL, NULL, NULL),
('170204', '17', 'Madre de Dios', '02', 'Manu', '04', 'Huepetuhe', NULL, NULL, NULL),
('170300', '17', 'Madre de Dios', '03', 'Tahuamanu', '00', NULL, NULL, NULL, NULL),
('170301', '17', 'Madre de Dios', '03', 'Tahuamanu', '01', 'Iñapari', NULL, NULL, NULL),
('170302', '17', 'Madre de Dios', '03', 'Tahuamanu', '02', 'Iberia', NULL, NULL, NULL),
('170303', '17', 'Madre de Dios', '03', 'Tahuamanu', '03', 'Tahuamanu', NULL, NULL, NULL),
('180000', '18', 'Moquegua', '00', NULL, '00', NULL, '53', NULL, NULL),
('180100', '18', 'Moquegua', '01', 'Mariscal Nieto', '00', NULL, NULL, NULL, NULL),
('180101', '18', 'Moquegua', '01', 'Mariscal Nieto', '01', 'Moquegua', NULL, NULL, NULL),
('180102', '18', 'Moquegua', '01', 'Mariscal Nieto', '02', 'Carumas', NULL, NULL, NULL),
('180103', '18', 'Moquegua', '01', 'Mariscal Nieto', '03', 'Cuchumbaya', NULL, NULL, NULL),
('180104', '18', 'Moquegua', '01', 'Mariscal Nieto', '04', 'Samegua', NULL, NULL, NULL),
('180105', '18', 'Moquegua', '01', 'Mariscal Nieto', '05', 'San Cristóbal', NULL, NULL, NULL),
('180106', '18', 'Moquegua', '01', 'Mariscal Nieto', '06', 'Torata', NULL, NULL, NULL),
('180200', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '00', NULL, NULL, NULL, NULL),
('180201', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '01', 'Omate', NULL, NULL, NULL),
('180202', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '02', 'Chojata', NULL, NULL, NULL),
('180203', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '03', 'Coalaque', NULL, NULL, NULL),
('180204', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '04', 'Ichuña', NULL, NULL, NULL),
('180205', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '05', 'La Capilla', NULL, NULL, NULL),
('180206', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '06', 'Lloque', NULL, NULL, NULL),
('180207', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '07', 'Matalaque', NULL, NULL, NULL),
('180208', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '08', 'Puquina', NULL, NULL, NULL),
('180209', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '09', 'Quinistaquillas', NULL, NULL, NULL),
('180210', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '10', 'Ubinas', NULL, NULL, NULL),
('180211', '18', 'Moquegua', '02', 'General Sánchez Cerro ', '11', 'Yunga', NULL, NULL, NULL),
('180300', '18', 'Moquegua', '03', 'Ilo', '00', '     ', NULL, NULL, NULL),
('180301', '18', 'Moquegua', '03', 'Ilo', '01', 'Ilo', NULL, NULL, NULL),
('180302', '18', 'Moquegua', '03', 'Ilo', '02', 'El Algarrobal', NULL, NULL, NULL),
('180303', '18', 'Moquegua', '03', 'Ilo', '03', 'Pacocha', NULL, NULL, NULL),
('190000', '19', 'Pasco', '00', NULL, '00', NULL, '63', NULL, NULL),
('190100', '19', 'Pasco', '01', 'Pasco', '00', NULL, NULL, NULL, NULL),
('190101', '19', 'Pasco', '01', 'Pasco', '01', 'Chaupimarca', NULL, NULL, NULL),
('190102', '19', 'Pasco', '01', 'Pasco', '02', 'Huachon', NULL, NULL, NULL),
('190103', '19', 'Pasco', '01', 'Pasco', '03', 'Huariaca', NULL, NULL, NULL),
('190104', '19', 'Pasco', '01', 'Pasco', '04', 'Huayllay', NULL, NULL, NULL),
('190105', '19', 'Pasco', '01', 'Pasco', '05', 'Ninacaca', NULL, NULL, NULL),
('190106', '19', 'Pasco', '01', 'Pasco', '06', 'Pallanchacra', NULL, NULL, NULL),
('190107', '19', 'Pasco', '01', 'Pasco', '07', 'Paucartambo', NULL, NULL, NULL),
('190108', '19', 'Pasco', '01', 'Pasco', '08', 'San Francisco de Asís de Yarusyacan', NULL, NULL, NULL),
('190109', '19', 'Pasco', '01', 'Pasco', '09', 'Simon Bolívar', NULL, NULL, NULL),
('190110', '19', 'Pasco', '01', 'Pasco', '10', 'Ticlacayan', NULL, NULL, NULL),
('190111', '19', 'Pasco', '01', 'Pasco', '11', 'Tinyahuarco', NULL, NULL, NULL),
('190112', '19', 'Pasco', '01', 'Pasco', '12', 'Vicco', NULL, NULL, NULL),
('190113', '19', 'Pasco', '01', 'Pasco', '13', 'Yanacancha', NULL, NULL, NULL),
('190200', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '00', '     ', NULL, NULL, NULL),
('190201', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '01', 'Yanahuanca', NULL, NULL, NULL),
('190202', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '02', 'Chacayan', NULL, NULL, NULL),
('190203', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '03', 'Goyllarisquizga', NULL, NULL, NULL),
('190204', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '04', 'Paucar', NULL, NULL, NULL),
('190205', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '05', 'San Pedro de Pillao', NULL, NULL, NULL),
('190206', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '06', 'Santa Ana de Tusi', NULL, NULL, NULL),
('190207', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '07', 'Tapuc', NULL, NULL, NULL),
('190208', '19', 'Pasco', '02', 'Daniel Alcides Carrión', '08', 'Vilcabamba', NULL, NULL, NULL),
('190300', '19', 'Pasco', '03', 'Oxapampa', '00', '     ', NULL, NULL, NULL),
('190301', '19', 'Pasco', '03', 'Oxapampa', '01', 'Oxapampa', NULL, NULL, NULL),
('190302', '19', 'Pasco', '03', 'Oxapampa', '02', 'Chontabamba', NULL, NULL, NULL),
('190303', '19', 'Pasco', '03', 'Oxapampa', '03', 'Huancabamba', NULL, NULL, NULL),
('190304', '19', 'Pasco', '03', 'Oxapampa', '04', 'Palcazu', NULL, NULL, NULL),
('190305', '19', 'Pasco', '03', 'Oxapampa', '05', 'Pozuzo', NULL, NULL, NULL),
('190306', '19', 'Pasco', '03', 'Oxapampa', '06', 'Puerto Bermúdez', NULL, NULL, NULL),
('190307', '19', 'Pasco', '03', 'Oxapampa', '07', 'Villa Rica', NULL, NULL, NULL),
('190308', '19', 'Pasco', '03', 'Oxapampa', '08', 'Constitución', NULL, NULL, NULL),
('200000', '20', 'Piura', '00', NULL, '00', NULL, '73', NULL, NULL),
('200100', '20', 'Piura', '01', 'Piura', '00', '    ', NULL, NULL, NULL),
('200101', '20', 'Piura', '01', 'Piura', '01', 'Piura', NULL, NULL, NULL),
('200104', '20', 'Piura', '01', 'Piura', '04', 'Castilla', NULL, NULL, NULL),
('200105', '20', 'Piura', '01', 'Piura', '05', 'Catacaos', NULL, NULL, NULL),
('200107', '20', 'Piura', '01', 'Piura', '07', 'Cura Mori', NULL, NULL, NULL),
('200108', '20', 'Piura', '01', 'Piura', '08', 'El Tallan', NULL, NULL, NULL),
('200109', '20', 'Piura', '01', 'Piura', '09', 'La Arena', NULL, NULL, NULL),
('200110', '20', 'Piura', '01', 'Piura', '10', 'La Unión', NULL, NULL, NULL),
('200111', '20', 'Piura', '01', 'Piura', '11', 'Las Lomas', NULL, NULL, NULL),
('200114', '20', 'Piura', '01', 'Piura', '14', 'Tambo Grande', NULL, NULL, NULL),
('200115', '20', 'Piura', '01', 'Piura', '15', 'Veintiseis de Octubre', NULL, NULL, NULL),
('200200', '20', 'Piura', '02', 'Ayabaca', '00', NULL, NULL, NULL, NULL),
('200201', '20', 'Piura', '02', 'Ayabaca', '01', 'Ayabaca', NULL, NULL, NULL),
('200202', '20', 'Piura', '02', 'Ayabaca', '02', 'Frias', NULL, NULL, NULL),
('200203', '20', 'Piura', '02', 'Ayabaca', '03', 'Jilili', NULL, NULL, NULL),
('200204', '20', 'Piura', '02', 'Ayabaca', '04', 'Lagunas', NULL, NULL, NULL),
('200205', '20', 'Piura', '02', 'Ayabaca', '05', 'Montero', NULL, NULL, NULL),
('200206', '20', 'Piura', '02', 'Ayabaca', '06', 'Pacaipampa', NULL, NULL, NULL),
('200207', '20', 'Piura', '02', 'Ayabaca', '07', 'Paimas', NULL, NULL, NULL),
('200208', '20', 'Piura', '02', 'Ayabaca', '08', 'Sapillica', NULL, NULL, NULL),
('200209', '20', 'Piura', '02', 'Ayabaca', '09', 'Sicchez', NULL, NULL, NULL),
('200210', '20', 'Piura', '02', 'Ayabaca', '10', 'Suyo', NULL, NULL, NULL),
('200300', '20', 'Piura', '03', 'Huancabamba', '00', NULL, NULL, NULL, NULL),
('200301', '20', 'Piura', '03', 'Huancabamba', '01', 'Huancabamba', NULL, NULL, NULL),
('200302', '20', 'Piura', '03', 'Huancabamba', '02', 'Canchaque', NULL, NULL, NULL),
('200303', '20', 'Piura', '03', 'Huancabamba', '03', 'El Carmen de la Frontera', NULL, NULL, NULL),
('200304', '20', 'Piura', '03', 'Huancabamba', '04', 'Huarmaca', NULL, NULL, NULL),
('200305', '20', 'Piura', '03', 'Huancabamba', '05', 'Lalaquiz', NULL, NULL, NULL),
('200306', '20', 'Piura', '03', 'Huancabamba', '06', 'San Miguel de El Faique', NULL, NULL, NULL),
('200307', '20', 'Piura', '03', 'Huancabamba', '07', 'Sondor', NULL, NULL, NULL),
('200308', '20', 'Piura', '03', 'Huancabamba', '08', 'Sondorillo', NULL, NULL, NULL),
('200400', '20', 'Piura', '04', 'Morropón', '00', '         ', NULL, NULL, NULL),
('200401', '20', 'Piura', '04', 'Morropón', '01', 'Chulucanas', NULL, NULL, NULL),
('200402', '20', 'Piura', '04', 'Morropón', '02', 'Buenos Aires', NULL, NULL, NULL),
('200403', '20', 'Piura', '04', 'Morropón', '03', 'Chalaco', NULL, NULL, NULL),
('200404', '20', 'Piura', '04', 'Morropón', '04', 'La Matanza', NULL, NULL, NULL),
('200405', '20', 'Piura', '04', 'Morropón', '05', 'Morropon', NULL, NULL, NULL),
('200406', '20', 'Piura', '04', 'Morropón', '06', 'Salitral', NULL, NULL, NULL),
('200407', '20', 'Piura', '04', 'Morropón', '07', 'San Juan de Bigote', NULL, NULL, NULL),
('200408', '20', 'Piura', '04', 'Morropón', '08', 'Santa Catalina de Mossa', NULL, NULL, NULL),
('200409', '20', 'Piura', '04', 'Morropón', '09', 'Santo Domingo', NULL, NULL, NULL),
('200410', '20', 'Piura', '04', 'Morropón', '10', 'Yamango', NULL, NULL, NULL),
('200500', '20', 'Piura', '05', 'Paita', '00', NULL, NULL, NULL, NULL),
('200501', '20', 'Piura', '05', 'Paita', '01', 'Paita', NULL, NULL, NULL),
('200502', '20', 'Piura', '05', 'Paita', '02', 'Amotape', NULL, NULL, NULL),
('200503', '20', 'Piura', '05', 'Paita', '03', 'Arenal', NULL, NULL, NULL),
('200504', '20', 'Piura', '05', 'Paita', '04', 'Colan', NULL, NULL, NULL),
('200505', '20', 'Piura', '05', 'Paita', '05', 'La Huaca', NULL, NULL, NULL),
('200506', '20', 'Piura', '05', 'Paita', '06', 'Tamarindo', NULL, NULL, NULL),
('200507', '20', 'Piura', '05', 'Paita', '07', 'Vichayal', NULL, NULL, NULL),
('200600', '20', 'Piura', '06', 'Sullana', '00', NULL, NULL, NULL, NULL),
('200601', '20', 'Piura', '06', 'Sullana', '01', 'Sullana', NULL, NULL, NULL),
('200602', '20', 'Piura', '06', 'Sullana', '02', 'Bellavista', NULL, NULL, NULL),
('200603', '20', 'Piura', '06', 'Sullana', '03', 'Ignacio Escudero', NULL, NULL, NULL),
('200604', '20', 'Piura', '06', 'Sullana', '04', 'Lancones', NULL, NULL, NULL),
('200605', '20', 'Piura', '06', 'Sullana', '05', 'Marcavelica', NULL, NULL, NULL),
('200606', '20', 'Piura', '06', 'Sullana', '06', 'Miguel Checa', NULL, NULL, NULL),
('200607', '20', 'Piura', '06', 'Sullana', '07', 'Querecotillo', NULL, NULL, NULL),
('200608', '20', 'Piura', '06', 'Sullana', '08', 'Salitral', NULL, NULL, NULL),
('200700', '20', 'Piura', '07', 'Talara', '00', '   ', NULL, NULL, NULL),
('200701', '20', 'Piura', '07', 'Talara', '01', 'Pariñas', NULL, NULL, NULL),
('200702', '20', 'Piura', '07', 'Talara', '02', 'El Alto', NULL, NULL, NULL),
('200703', '20', 'Piura', '07', 'Talara', '03', 'La Brea', NULL, NULL, NULL),
('200704', '20', 'Piura', '07', 'Talara', '04', 'Lobitos', NULL, NULL, NULL),
('200705', '20', 'Piura', '07', 'Talara', '05', 'Los Organos', NULL, NULL, NULL),
('200706', '20', 'Piura', '07', 'Talara', '06', 'Mancora', NULL, NULL, NULL),
('200800', '20', 'Piura', '08', 'Sechura', '00', '    ', NULL, NULL, NULL),
('200801', '20', 'Piura', '08', 'Sechura', '01', 'Sechura', NULL, NULL, NULL),
('200802', '20', 'Piura', '08', 'Sechura', '02', 'Bellavista de la Unión', NULL, NULL, NULL),
('200803', '20', 'Piura', '08', 'Sechura', '03', 'Bernal', NULL, NULL, NULL),
('200804', '20', 'Piura', '08', 'Sechura', '04', 'Cristo Nos Valga', NULL, NULL, NULL),
('200805', '20', 'Piura', '08', 'Sechura', '05', 'Vice', NULL, NULL, NULL),
('200806', '20', 'Piura', '08', 'Sechura', '06', 'Rinconada Llicuar', NULL, NULL, NULL),
('210000', '21', 'Puno', '00', NULL, '00', NULL, '51', NULL, NULL),
('210100', '21', 'Puno', '01', 'Puno', '00', '    ', NULL, NULL, NULL),
('210101', '21', 'Puno', '01', 'Puno', '01', 'Puno', NULL, NULL, NULL),
('210102', '21', 'Puno', '01', 'Puno', '02', 'Acora', NULL, NULL, NULL),
('210103', '21', 'Puno', '01', 'Puno', '03', 'Amantani', NULL, NULL, NULL),
('210104', '21', 'Puno', '01', 'Puno', '04', 'Atuncolla', NULL, NULL, NULL),
('210105', '21', 'Puno', '01', 'Puno', '05', 'Capachica', NULL, NULL, NULL),
('210106', '21', 'Puno', '01', 'Puno', '06', 'Chucuito', NULL, NULL, NULL),
('210107', '21', 'Puno', '01', 'Puno', '07', 'Coata', NULL, NULL, NULL),
('210108', '21', 'Puno', '01', 'Puno', '08', 'Huata', NULL, NULL, NULL),
('210109', '21', 'Puno', '01', 'Puno', '09', 'Mañazo', NULL, NULL, NULL),
('210110', '21', 'Puno', '01', 'Puno', '10', 'Paucarcolla', NULL, NULL, NULL),
('210111', '21', 'Puno', '01', 'Puno', '11', 'Pichacani', NULL, NULL, NULL),
('210112', '21', 'Puno', '01', 'Puno', '12', 'Plateria', NULL, NULL, NULL),
('210113', '21', 'Puno', '01', 'Puno', '13', 'San Antonio', NULL, NULL, NULL),
('210114', '21', 'Puno', '01', 'Puno', '14', 'Tiquillaca', NULL, NULL, NULL),
('210115', '21', 'Puno', '01', 'Puno', '15', 'Vilque', NULL, NULL, NULL),
('210200', '21', 'Puno', '02', 'Azángaro', '00', NULL, NULL, NULL, NULL),
('210201', '21', 'Puno', '02', 'Azángaro', '01', 'Azángaro', NULL, NULL, NULL),
('210202', '21', 'Puno', '02', 'Azángaro', '02', 'Achaya', NULL, NULL, NULL),
('210203', '21', 'Puno', '02', 'Azángaro', '03', 'Arapa', NULL, NULL, NULL),
('210204', '21', 'Puno', '02', 'Azángaro', '04', 'Asillo', NULL, NULL, NULL),
('210205', '21', 'Puno', '02', 'Azángaro', '05', 'Caminaca', NULL, NULL, NULL),
('210206', '21', 'Puno', '02', 'Azángaro', '06', 'Chupa', NULL, NULL, NULL),
('210207', '21', 'Puno', '02', 'Azángaro', '07', 'José Domingo Choquehuanca', NULL, NULL, NULL),
('210208', '21', 'Puno', '02', 'Azángaro', '08', 'Muñani', NULL, NULL, NULL),
('210209', '21', 'Puno', '02', 'Azángaro', '09', 'Potoni', NULL, NULL, NULL),
('210210', '21', 'Puno', '02', 'Azángaro', '10', 'Saman', NULL, NULL, NULL),
('210211', '21', 'Puno', '02', 'Azángaro', '11', 'San Anton', NULL, NULL, NULL),
('210212', '21', 'Puno', '02', 'Azángaro', '12', 'San José', NULL, NULL, NULL),
('210213', '21', 'Puno', '02', 'Azángaro', '13', 'San Juan de Salinas', NULL, NULL, NULL);
INSERT INTO `master_ubigeo` (`code_ubigeo`, `code_department`, `department`, `code_province`, `province`, `code_district`, `district`, `code_number`, `created_at`, `updated_at`) VALUES
('210214', '21', 'Puno', '02', 'Azángaro', '14', 'Santiago de Pupuja', NULL, NULL, NULL),
('210215', '21', 'Puno', '02', 'Azángaro', '15', 'Tirapata', NULL, NULL, NULL),
('210300', '21', 'Puno', '03', 'Carabaya', '00', '     ', NULL, NULL, NULL),
('210301', '21', 'Puno', '03', 'Carabaya', '01', 'Macusani', NULL, NULL, NULL),
('210302', '21', 'Puno', '03', 'Carabaya', '02', 'Ajoyani', NULL, NULL, NULL),
('210303', '21', 'Puno', '03', 'Carabaya', '03', 'Ayapata', NULL, NULL, NULL),
('210304', '21', 'Puno', '03', 'Carabaya', '04', 'Coasa', NULL, NULL, NULL),
('210305', '21', 'Puno', '03', 'Carabaya', '05', 'Corani', NULL, NULL, NULL),
('210306', '21', 'Puno', '03', 'Carabaya', '06', 'Crucero', NULL, NULL, NULL),
('210307', '21', 'Puno', '03', 'Carabaya', '07', 'Ituata', NULL, NULL, NULL),
('210308', '21', 'Puno', '03', 'Carabaya', '08', 'Ollachea', NULL, NULL, NULL),
('210309', '21', 'Puno', '03', 'Carabaya', '09', 'San Gaban', NULL, NULL, NULL),
('210310', '21', 'Puno', '03', 'Carabaya', '10', 'Usicayos', NULL, NULL, NULL),
('210400', '21', 'Puno', '04', 'Chucuito', '00', NULL, NULL, NULL, NULL),
('210401', '21', 'Puno', '04', 'Chucuito', '01', 'Juli', NULL, NULL, NULL),
('210402', '21', 'Puno', '04', 'Chucuito', '02', 'Desaguadero', NULL, NULL, NULL),
('210403', '21', 'Puno', '04', 'Chucuito', '03', 'Huacullani', NULL, NULL, NULL),
('210404', '21', 'Puno', '04', 'Chucuito', '04', 'Kelluyo', NULL, NULL, NULL),
('210405', '21', 'Puno', '04', 'Chucuito', '05', 'Pisacoma', NULL, NULL, NULL),
('210406', '21', 'Puno', '04', 'Chucuito', '06', 'Pomata', NULL, NULL, NULL),
('210407', '21', 'Puno', '04', 'Chucuito', '07', 'Zepita', NULL, NULL, NULL),
('210500', '21', 'Puno', '05', 'El Collao', '00', '       ', NULL, NULL, NULL),
('210501', '21', 'Puno', '05', 'El Collao', '01', 'Ilave', NULL, NULL, NULL),
('210502', '21', 'Puno', '05', 'El Collao', '02', 'Capazo', NULL, NULL, NULL),
('210503', '21', 'Puno', '05', 'El Collao', '03', 'Pilcuyo', NULL, NULL, NULL),
('210504', '21', 'Puno', '05', 'El Collao', '04', 'Santa Rosa', NULL, NULL, NULL),
('210505', '21', 'Puno', '05', 'El Collao', '05', 'Conduriri', NULL, NULL, NULL),
('210600', '21', 'Puno', '06', 'Huancané', '00', '        ', NULL, NULL, NULL),
('210601', '21', 'Puno', '06', 'Huancané', '01', 'Huancane', NULL, NULL, NULL),
('210602', '21', 'Puno', '06', 'Huancané', '02', 'Cojata', NULL, NULL, NULL),
('210603', '21', 'Puno', '06', 'Huancané', '03', 'Huatasani', NULL, NULL, NULL),
('210604', '21', 'Puno', '06', 'Huancané', '04', 'Inchupalla', NULL, NULL, NULL),
('210605', '21', 'Puno', '06', 'Huancané', '05', 'Pusi', NULL, NULL, NULL),
('210606', '21', 'Puno', '06', 'Huancané', '06', 'Rosaspata', NULL, NULL, NULL),
('210607', '21', 'Puno', '06', 'Huancané', '07', 'Taraco', NULL, NULL, NULL),
('210608', '21', 'Puno', '06', 'Huancané', '08', 'Vilque Chico', NULL, NULL, NULL),
('210700', '21', 'Puno', '07', 'Lampa', '00', '       ', NULL, NULL, NULL),
('210701', '21', 'Puno', '07', 'Lampa', '01', 'Lampa', NULL, NULL, NULL),
('210702', '21', 'Puno', '07', 'Lampa', '02', 'Cabanilla', NULL, NULL, NULL),
('210703', '21', 'Puno', '07', 'Lampa', '03', 'Calapuja', NULL, NULL, NULL),
('210704', '21', 'Puno', '07', 'Lampa', '04', 'Nicasio', NULL, NULL, NULL),
('210705', '21', 'Puno', '07', 'Lampa', '05', 'Ocuviri', NULL, NULL, NULL),
('210706', '21', 'Puno', '07', 'Lampa', '06', 'Palca', NULL, NULL, NULL),
('210707', '21', 'Puno', '07', 'Lampa', '07', 'Paratia', NULL, NULL, NULL),
('210708', '21', 'Puno', '07', 'Lampa', '08', 'Pucara', NULL, NULL, NULL),
('210709', '21', 'Puno', '07', 'Lampa', '09', 'Santa Lucia', NULL, NULL, NULL),
('210710', '21', 'Puno', '07', 'Lampa', '10', 'Vilavila', NULL, NULL, NULL),
('210800', '21', 'Puno', '08', 'Melgar', '00', NULL, NULL, NULL, NULL),
('210801', '21', 'Puno', '08', 'Melgar', '01', 'Ayaviri', NULL, NULL, NULL),
('210802', '21', 'Puno', '08', 'Melgar', '02', 'Antauta', NULL, NULL, NULL),
('210803', '21', 'Puno', '08', 'Melgar', '03', 'Cupi', NULL, NULL, NULL),
('210804', '21', 'Puno', '08', 'Melgar', '04', 'Llalli', NULL, NULL, NULL),
('210805', '21', 'Puno', '08', 'Melgar', '05', 'Macari', NULL, NULL, NULL),
('210806', '21', 'Puno', '08', 'Melgar', '06', 'Nuñoa', NULL, NULL, NULL),
('210807', '21', 'Puno', '08', 'Melgar', '07', 'Orurillo', NULL, NULL, NULL),
('210808', '21', 'Puno', '08', 'Melgar', '08', 'Santa Rosa', NULL, NULL, NULL),
('210809', '21', 'Puno', '08', 'Melgar', '09', 'Umachiri', NULL, NULL, NULL),
('210900', '21', 'Puno', '09', 'Moho', '00', '    ', NULL, NULL, NULL),
('210901', '21', 'Puno', '09', 'Moho', '01', 'Moho', NULL, NULL, NULL),
('210902', '21', 'Puno', '09', 'Moho', '02', 'Conima', NULL, NULL, NULL),
('210903', '21', 'Puno', '09', 'Moho', '03', 'Huayrapata', NULL, NULL, NULL),
('210904', '21', 'Puno', '09', 'Moho', '04', 'Tilali', NULL, NULL, NULL),
('211000', '21', 'Puno', '10', 'San Antonio de Putina', '00', '     ', NULL, NULL, NULL),
('211001', '21', 'Puno', '10', 'San Antonio de Putina', '01', 'Putina', NULL, NULL, NULL),
('211002', '21', 'Puno', '10', 'San Antonio de Putina', '02', 'Ananea', NULL, NULL, NULL),
('211003', '21', 'Puno', '10', 'San Antonio de Putina', '03', 'Pedro Vilca Apaza', NULL, NULL, NULL),
('211004', '21', 'Puno', '10', 'San Antonio de Putina', '04', 'Quilcapuncu', NULL, NULL, NULL),
('211005', '21', 'Puno', '10', 'San Antonio de Putina', '05', 'Sina', NULL, NULL, NULL),
('211100', '21', 'Puno', '11', 'San Román', '00', '     ', NULL, NULL, NULL),
('211101', '21', 'Puno', '11', 'San Román', '01', 'Juliaca', NULL, NULL, NULL),
('211102', '21', 'Puno', '11', 'San Román', '02', 'Cabana', NULL, NULL, NULL),
('211103', '21', 'Puno', '11', 'San Román', '03', 'Cabanillas', NULL, NULL, NULL),
('211104', '21', 'Puno', '11', 'San Román', '04', 'Caracoto', NULL, NULL, NULL),
('211200', '21', 'Puno', '12', 'Sandia', '00', '    ', NULL, NULL, NULL),
('211201', '21', 'Puno', '12', 'Sandia', '01', 'Sandia', NULL, NULL, NULL),
('211202', '21', 'Puno', '12', 'Sandia', '02', 'Cuyocuyo', NULL, NULL, NULL),
('211203', '21', 'Puno', '12', 'Sandia', '03', 'Limbani', NULL, NULL, NULL),
('211204', '21', 'Puno', '12', 'Sandia', '04', 'Patambuco', NULL, NULL, NULL),
('211205', '21', 'Puno', '12', 'Sandia', '05', 'Phara', NULL, NULL, NULL),
('211206', '21', 'Puno', '12', 'Sandia', '06', 'Quiaca', NULL, NULL, NULL),
('211207', '21', 'Puno', '12', 'Sandia', '07', 'San Juan del Oro', NULL, NULL, NULL),
('211208', '21', 'Puno', '12', 'Sandia', '08', 'Yanahuaya', NULL, NULL, NULL),
('211209', '21', 'Puno', '12', 'Sandia', '09', 'Alto Inambari', NULL, NULL, NULL),
('211210', '21', 'Puno', '12', 'Sandia', '10', 'San Pedro de Putina Punco', NULL, NULL, NULL),
('211300', '21', 'Puno', '13', 'Yunguyo', '00', '     ', NULL, NULL, NULL),
('211301', '21', 'Puno', '13', 'Yunguyo', '01', 'Yunguyo', NULL, NULL, NULL),
('211302', '21', 'Puno', '13', 'Yunguyo', '02', 'Anapia', NULL, NULL, NULL),
('211303', '21', 'Puno', '13', 'Yunguyo', '03', 'Copani', NULL, NULL, NULL),
('211304', '21', 'Puno', '13', 'Yunguyo', '04', 'Cuturapi', NULL, NULL, NULL),
('211305', '21', 'Puno', '13', 'Yunguyo', '05', 'Ollaraya', NULL, NULL, NULL),
('211306', '21', 'Puno', '13', 'Yunguyo', '06', 'Tinicachi', NULL, NULL, NULL),
('211307', '21', 'Puno', '13', 'Yunguyo', '07', 'Unicachi', NULL, NULL, NULL),
('220000', '22', 'San Martín', '00', NULL, '00', NULL, '42', NULL, NULL),
('220100', '22', 'San Martín', '01', 'Moyobamba', '00', '       ', NULL, NULL, NULL),
('220101', '22', 'San Martín', '01', 'Moyobamba', '01', 'Moyobamba', NULL, NULL, NULL),
('220102', '22', 'San Martín', '01', 'Moyobamba', '02', 'Calzada', NULL, NULL, NULL),
('220103', '22', 'San Martín', '01', 'Moyobamba', '03', 'Habana', NULL, NULL, NULL),
('220104', '22', 'San Martín', '01', 'Moyobamba', '04', 'Jepelacio', NULL, NULL, NULL),
('220105', '22', 'San Martín', '01', 'Moyobamba', '05', 'Soritor', NULL, NULL, NULL),
('220106', '22', 'San Martín', '01', 'Moyobamba', '06', 'Yantalo', NULL, NULL, NULL),
('220200', '22', 'San Martín', '02', 'Bellavista', '00', NULL, NULL, NULL, NULL),
('220201', '22', 'San Martín', '02', 'Bellavista', '01', 'Bellavista', NULL, NULL, NULL),
('220202', '22', 'San Martín', '02', 'Bellavista', '02', 'Alto Biavo', NULL, NULL, NULL),
('220203', '22', 'San Martín', '02', 'Bellavista', '03', 'Bajo Biavo', NULL, NULL, NULL),
('220204', '22', 'San Martín', '02', 'Bellavista', '04', 'Huallaga', NULL, NULL, NULL),
('220205', '22', 'San Martín', '02', 'Bellavista', '05', 'San Pablo', NULL, NULL, NULL),
('220206', '22', 'San Martín', '02', 'Bellavista', '06', 'San Rafael', NULL, NULL, NULL),
('220300', '22', 'San Martín', '03', 'El Dorado', '00', '       ', NULL, NULL, NULL),
('220301', '22', 'San Martín', '03', 'El Dorado', '01', 'San José de Sisa', NULL, NULL, NULL),
('220302', '22', 'San Martín', '03', 'El Dorado', '02', 'Agua Blanca', NULL, NULL, NULL),
('220303', '22', 'San Martín', '03', 'El Dorado', '03', 'San Martín', NULL, NULL, NULL),
('220304', '22', 'San Martín', '03', 'El Dorado', '04', 'Santa Rosa', NULL, NULL, NULL),
('220305', '22', 'San Martín', '03', 'El Dorado', '05', 'Shatoja', NULL, NULL, NULL),
('220400', '22', 'San Martín', '04', 'Huallaga', '00', NULL, NULL, NULL, NULL),
('220401', '22', 'San Martín', '04', 'Huallaga', '01', 'Saposoa', NULL, NULL, NULL),
('220402', '22', 'San Martín', '04', 'Huallaga', '02', 'Alto Saposoa', NULL, NULL, NULL),
('220403', '22', 'San Martín', '04', 'Huallaga', '03', 'El Eslabón', NULL, NULL, NULL),
('220404', '22', 'San Martín', '04', 'Huallaga', '04', 'Piscoyacu', NULL, NULL, NULL),
('220405', '22', 'San Martín', '04', 'Huallaga', '05', 'Sacanche', NULL, NULL, NULL),
('220406', '22', 'San Martín', '04', 'Huallaga', '06', 'Tingo de Saposoa', NULL, NULL, NULL),
('220500', '22', 'San Martín', '05', 'Lamas', '00', '     ', NULL, NULL, NULL),
('220501', '22', 'San Martín', '05', 'Lamas', '01', 'Lamas', NULL, NULL, NULL),
('220502', '22', 'San Martín', '05', 'Lamas', '02', 'Alonso de Alvarado', NULL, NULL, NULL),
('220503', '22', 'San Martín', '05', 'Lamas', '03', 'Barranquita', NULL, NULL, NULL),
('220504', '22', 'San Martín', '05', 'Lamas', '04', 'Caynarachi', NULL, NULL, NULL),
('220505', '22', 'San Martín', '05', 'Lamas', '05', 'Cuñumbuqui', NULL, NULL, NULL),
('220506', '22', 'San Martín', '05', 'Lamas', '06', 'Pinto Recodo', NULL, NULL, NULL),
('220507', '22', 'San Martín', '05', 'Lamas', '07', 'Rumisapa', NULL, NULL, NULL),
('220508', '22', 'San Martín', '05', 'Lamas', '08', 'San Roque de Cumbaza', NULL, NULL, NULL),
('220509', '22', 'San Martín', '05', 'Lamas', '09', 'Shanao', NULL, NULL, NULL),
('220510', '22', 'San Martín', '05', 'Lamas', '10', 'Tabalosos', NULL, NULL, NULL),
('220511', '22', 'San Martín', '05', 'Lamas', '11', 'Zapatero', NULL, NULL, NULL),
('220600', '22', 'San Martín', '06', 'Mariscal Cáceres', '00', '   ', NULL, NULL, NULL),
('220601', '22', 'San Martín', '06', 'Mariscal Cáceres', '01', 'Juanjuí', NULL, NULL, NULL),
('220602', '22', 'San Martín', '06', 'Mariscal Cáceres', '02', 'Campanilla', NULL, NULL, NULL),
('220603', '22', 'San Martín', '06', 'Mariscal Cáceres', '03', 'Huicungo', NULL, NULL, NULL),
('220604', '22', 'San Martín', '06', 'Mariscal Cáceres', '04', 'Pachiza', NULL, NULL, NULL),
('220605', '22', 'San Martín', '06', 'Mariscal Cáceres', '05', 'Pajarillo', NULL, NULL, NULL),
('220700', '22', 'San Martín', '07', 'Picota', '00', '    ', NULL, NULL, NULL),
('220701', '22', 'San Martín', '07', 'Picota', '01', 'Picota', NULL, NULL, NULL),
('220702', '22', 'San Martín', '07', 'Picota', '02', 'Buenos Aires', NULL, NULL, NULL),
('220703', '22', 'San Martín', '07', 'Picota', '03', 'Caspisapa', NULL, NULL, NULL),
('220704', '22', 'San Martín', '07', 'Picota', '04', 'Pilluana', NULL, NULL, NULL),
('220705', '22', 'San Martín', '07', 'Picota', '05', 'Pucacaca', NULL, NULL, NULL),
('220706', '22', 'San Martín', '07', 'Picota', '06', 'San Cristóbal', NULL, NULL, NULL),
('220707', '22', 'San Martín', '07', 'Picota', '07', 'San Hilarión', NULL, NULL, NULL),
('220708', '22', 'San Martín', '07', 'Picota', '08', 'Shamboyacu', NULL, NULL, NULL),
('220709', '22', 'San Martín', '07', 'Picota', '09', 'Tingo de Ponasa', NULL, NULL, NULL),
('220710', '22', 'San Martín', '07', 'Picota', '10', 'Tres Unidos', NULL, NULL, NULL),
('220800', '22', 'San Martín', '08', 'Rioja', '00', '     ', NULL, NULL, NULL),
('220801', '22', 'San Martín', '08', 'Rioja', '01', 'Rioja', NULL, NULL, NULL),
('220802', '22', 'San Martín', '08', 'Rioja', '02', 'Awajun', NULL, NULL, NULL),
('220803', '22', 'San Martín', '08', 'Rioja', '03', 'Elías Soplin Vargas', NULL, NULL, NULL),
('220804', '22', 'San Martín', '08', 'Rioja', '04', 'Nueva Cajamarca', NULL, NULL, NULL),
('220805', '22', 'San Martín', '08', 'Rioja', '05', 'Pardo Miguel', NULL, NULL, NULL),
('220806', '22', 'San Martín', '08', 'Rioja', '06', 'Posic', NULL, NULL, NULL),
('220807', '22', 'San Martín', '08', 'Rioja', '07', 'San Fernando', NULL, NULL, NULL),
('220808', '22', 'San Martín', '08', 'Rioja', '08', 'Yorongos', NULL, NULL, NULL),
('220809', '22', 'San Martín', '08', 'Rioja', '09', 'Yuracyacu', NULL, NULL, NULL),
('220900', '22', 'San Martín', '09', 'San Matín', '00', '    ', NULL, NULL, NULL),
('220901', '22', 'San Martín', '09', 'San Matín', '01', 'Tarapoto', NULL, NULL, NULL),
('220902', '22', 'San Martín', '09', 'San Matín', '02', 'Alberto Leveau', NULL, NULL, NULL),
('220903', '22', 'San Martín', '09', 'San Matín', '03', 'Cacatachi', NULL, NULL, NULL),
('220904', '22', 'San Martín', '09', 'San Matín', '04', 'Chazuta', NULL, NULL, NULL),
('220905', '22', 'San Martín', '09', 'San Matín', '05', 'Chipurana', NULL, NULL, NULL),
('220906', '22', 'San Martín', '09', 'San Matín', '06', 'El Porvenir', NULL, NULL, NULL),
('220907', '22', 'San Martín', '09', 'San Matín', '07', 'Huimbayoc', NULL, NULL, NULL),
('220908', '22', 'San Martín', '09', 'San Matín', '08', 'Juan Guerra', NULL, NULL, NULL),
('220909', '22', 'San Martín', '09', 'San Matín', '09', 'La Banda de Shilcayo', NULL, NULL, NULL),
('220910', '22', 'San Martín', '09', 'San Matín', '10', 'Morales', NULL, NULL, NULL),
('220911', '22', 'San Martín', '09', 'San Matín', '11', 'Papaplaya', NULL, NULL, NULL),
('220912', '22', 'San Martín', '09', 'San Matín', '12', 'San Antonio', NULL, NULL, NULL),
('220913', '22', 'San Martín', '09', 'San Matín', '13', 'Sauce', NULL, NULL, NULL),
('220914', '22', 'San Martín', '09', 'San Matín', '14', 'Shapaja', NULL, NULL, NULL),
('221000', '22', 'San Martín', '10', 'Tocache', '00', '    ', NULL, NULL, NULL),
('221001', '22', 'San Martín', '10', 'Tocache', '01', 'Tocache', NULL, NULL, NULL),
('221002', '22', 'San Martín', '10', 'Tocache', '02', 'Nuevo Progreso', NULL, NULL, NULL),
('221003', '22', 'San Martín', '10', 'Tocache', '03', 'Polvora', NULL, NULL, NULL),
('221004', '22', 'San Martín', '10', 'Tocache', '04', 'Shunte', NULL, NULL, NULL),
('221005', '22', 'San Martín', '10', 'Tocache', '05', 'Uchiza', NULL, NULL, NULL),
('230000', '23', 'Tacna', '00', NULL, '00', NULL, '52', NULL, NULL),
('230100', '23', 'Tacna', '01', 'Tacna', '00', NULL, NULL, NULL, NULL),
('230101', '23', 'Tacna', '01', 'Tacna', '01', 'Tacna', NULL, NULL, NULL),
('230102', '23', 'Tacna', '01', 'Tacna', '02', 'Alto de la Alianza', NULL, NULL, NULL),
('230103', '23', 'Tacna', '01', 'Tacna', '03', 'Calana', NULL, NULL, NULL),
('230104', '23', 'Tacna', '01', 'Tacna', '04', 'Ciudad Nueva', NULL, NULL, NULL),
('230105', '23', 'Tacna', '01', 'Tacna', '05', 'Inclan', NULL, NULL, NULL),
('230106', '23', 'Tacna', '01', 'Tacna', '06', 'Pachia', NULL, NULL, NULL),
('230107', '23', 'Tacna', '01', 'Tacna', '07', 'Palca', NULL, NULL, NULL),
('230108', '23', 'Tacna', '01', 'Tacna', '08', 'Pocollay', NULL, NULL, NULL),
('230109', '23', 'Tacna', '01', 'Tacna', '09', 'Sama', NULL, NULL, NULL),
('230110', '23', 'Tacna', '01', 'Tacna', '10', 'Coronel Gregorio Albarracín Lanchipa', NULL, NULL, NULL),
('230200', '23', 'Tacna', '02', 'Candarave', '00', NULL, NULL, NULL, NULL),
('230201', '23', 'Tacna', '02', 'Candarave', '01', 'Candarave', NULL, NULL, NULL),
('230202', '23', 'Tacna', '02', 'Candarave', '02', 'Cairani', NULL, NULL, NULL),
('230203', '23', 'Tacna', '02', 'Candarave', '03', 'Camilaca', NULL, NULL, NULL),
('230204', '23', 'Tacna', '02', 'Candarave', '04', 'Curibaya', NULL, NULL, NULL),
('230205', '23', 'Tacna', '02', 'Candarave', '05', 'Huanuara', NULL, NULL, NULL),
('230206', '23', 'Tacna', '02', 'Candarave', '06', 'Quilahuani', NULL, NULL, NULL),
('230300', '23', 'Tacna', '03', 'Jorge Basadre', '00', NULL, NULL, NULL, NULL),
('230301', '23', 'Tacna', '03', 'Jorge Basadre', '01', 'Locumba', NULL, NULL, NULL),
('230302', '23', 'Tacna', '03', 'Jorge Basadre', '02', 'Ilabaya', NULL, NULL, NULL),
('230303', '23', 'Tacna', '03', 'Jorge Basadre', '03', 'Ite', NULL, NULL, NULL),
('230400', '23', 'Tacna', '04', 'Tarata', '00', '       ', NULL, NULL, NULL),
('230401', '23', 'Tacna', '04', 'Tarata', '01', 'Tarata', NULL, NULL, NULL),
('230402', '23', 'Tacna', '04', 'Tarata', '02', 'Héroes Albarracín', NULL, NULL, NULL),
('230403', '23', 'Tacna', '04', 'Tarata', '03', 'Estique', NULL, NULL, NULL),
('230404', '23', 'Tacna', '04', 'Tarata', '04', 'Estique-Pampa', NULL, NULL, NULL),
('230405', '23', 'Tacna', '04', 'Tarata', '05', 'Sitajara', NULL, NULL, NULL),
('230406', '23', 'Tacna', '04', 'Tarata', '06', 'Susapaya', NULL, NULL, NULL),
('230407', '23', 'Tacna', '04', 'Tarata', '07', 'Tarucachi', NULL, NULL, NULL),
('230408', '23', 'Tacna', '04', 'Tarata', '08', 'Ticaco', NULL, NULL, NULL),
('240000', '24', 'Tumbes', '00', NULL, '00', NULL, '72', NULL, NULL),
('240100', '24', 'Tumbes', '01', 'Tumbes', '00', '     ', NULL, NULL, NULL),
('240101', '24', 'Tumbes', '01', 'Tumbes', '01', 'Tumbes', NULL, NULL, NULL),
('240102', '24', 'Tumbes', '01', 'Tumbes', '02', 'Corrales', NULL, NULL, NULL),
('240103', '24', 'Tumbes', '01', 'Tumbes', '03', 'La Cruz', NULL, NULL, NULL),
('240104', '24', 'Tumbes', '01', 'Tumbes', '04', 'Pampas de Hospital', NULL, NULL, NULL),
('240105', '24', 'Tumbes', '01', 'Tumbes', '05', 'San Jacinto', NULL, NULL, NULL),
('240106', '24', 'Tumbes', '01', 'Tumbes', '06', 'San Juan de la Virgen', NULL, NULL, NULL),
('240200', '24', 'Tumbes', '02', 'Contralmirante Villar', '00', '   ', NULL, NULL, NULL),
('240201', '24', 'Tumbes', '02', 'Contralmirante Villar', '01', 'Zorritos', NULL, NULL, NULL),
('240202', '24', 'Tumbes', '02', 'Contralmirante Villar', '02', 'Casitas', NULL, NULL, NULL),
('240203', '24', 'Tumbes', '02', 'Contralmirante Villar', '03', 'Canoas de Punta Sal', NULL, NULL, NULL),
('240300', '24', 'Tumbes', '03', 'Zarumilla', '00', NULL, NULL, NULL, NULL),
('240301', '24', 'Tumbes', '03', 'Zarumilla', '01', 'Zarumilla', NULL, NULL, NULL),
('240302', '24', 'Tumbes', '03', 'Zarumilla', '02', 'Aguas Verdes', NULL, NULL, NULL),
('240303', '24', 'Tumbes', '03', 'Zarumilla', '03', 'Matapalo', NULL, NULL, NULL),
('240304', '24', 'Tumbes', '03', 'Zarumilla', '04', 'Papayal', NULL, NULL, NULL),
('250000', '25', 'Ucayali', '00', NULL, '00', NULL, '61', NULL, NULL),
('250100', '25', 'Ucayali', '01', 'Coronel Portillo', '00', NULL, NULL, NULL, NULL),
('250101', '25', 'Ucayali', '01', 'Coronel Portillo', '01', 'Calleria', NULL, NULL, NULL),
('250102', '25', 'Ucayali', '01', 'Coronel Portillo', '02', 'Campoverde', NULL, NULL, NULL),
('250103', '25', 'Ucayali', '01', 'Coronel Portillo', '03', 'Iparia', NULL, NULL, NULL),
('250104', '25', 'Ucayali', '01', 'Coronel Portillo', '04', 'Masisea', NULL, NULL, NULL),
('250105', '25', 'Ucayali', '01', 'Coronel Portillo', '05', 'Yarinacocha', NULL, NULL, NULL),
('250106', '25', 'Ucayali', '01', 'Coronel Portillo', '06', 'Nueva Requena', NULL, NULL, NULL),
('250107', '25', 'Ucayali', '01', 'Coronel Portillo', '07', 'Manantay', NULL, NULL, NULL),
('250200', '25', 'Ucayali', '02', 'Atalaya', '00', '     ', NULL, NULL, NULL),
('250201', '25', 'Ucayali', '02', 'Atalaya', '01', 'Raymondi', NULL, NULL, NULL),
('250202', '25', 'Ucayali', '02', 'Atalaya', '02', 'Sepahua', NULL, NULL, NULL),
('250203', '25', 'Ucayali', '02', 'Atalaya', '03', 'Tahuania', NULL, NULL, NULL),
('250204', '25', 'Ucayali', '02', 'Atalaya', '04', 'Yurua', NULL, NULL, NULL),
('250300', '25', 'Ucayali', '03', 'Padre Abad', '00', '        ', NULL, NULL, NULL),
('250301', '25', 'Ucayali', '03', 'Padre Abad', '01', 'Padre Abad', NULL, NULL, NULL),
('250302', '25', 'Ucayali', '03', 'Padre Abad', '02', 'Irazola', NULL, NULL, NULL),
('250303', '25', 'Ucayali', '03', 'Padre Abad', '03', 'Curimana', NULL, NULL, NULL),
('250304', '25', 'Ucayali', '03', 'Padre Abad', '04', 'Neshuya', NULL, NULL, NULL),
('250305', '25', 'Ucayali', '03', 'Padre Abad', '05', 'Alexander Von Humboldt', NULL, NULL, NULL),
('250400', '25', 'Ucayali', '04', 'Purús', '00', ' ', NULL, NULL, NULL),
('250401', '25', 'Ucayali', '04', 'Purús', '01', 'Purus', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `members`
--

CREATE TABLE `members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `members`
--

INSERT INTO `members` (`id`, `name`, `image`, `index`, `created_at`, `updated_at`) VALUES
(3, 'Miembro 2', 'p-1613673738602eb50aa4900.png', 3, '2021-02-18 18:42:18', '2021-02-18 18:42:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_04_223746_create_users_table', 1),
(4, '2019_12_04_223755_create_master_modules_table', 1),
(5, '2019_12_04_223920_create_master_pages_table', 1),
(6, '2019_12_04_223921_create_master_sections_table', 1),
(7, '2019_12_04_223928_create_master_fields_table', 1),
(8, '2019_12_04_223938_create_content_table', 1),
(9, '2019_12_04_224017_create_information_table', 1),
(10, '2019_12_04_224040_create_master_social_networks_table', 1),
(11, '2019_12_04_224053_create_social_networks_table', 1),
(12, '2019_12_04_224128_create_categories_table', 1),
(13, '2019_12_04_224129_create_posts_table', 1),
(14, '2019_12_12_155838_create_master_leads_medium_table', 1),
(15, '2019_12_12_155839_create_master_leads_source_table', 1),
(16, '2019_12_12_171447_create_applicants_table', 1),
(17, '2019_12_13_092211_create_email_destination_table', 1),
(18, '2019_12_23_175813_create_testimonials_table', 1),
(19, '2020_01_14_130913_create_jobs_table', 1),
(20, '2020_07_27_112253_create_master_ubigeo_table', 1),
(21, '2020_07_27_113021_create_slider_table', 1),
(22, '2020_07_27_113104_create_leads_sale_land_table', 1),
(23, '2020_07_27_113124_create_members_table', 1),
(24, '2020_07_27_113125_create_certifications_table', 1),
(25, '2020_07_27_113438_create_leads_table', 1),
(26, '2020_07_27_113446_create_banks_table', 1),
(27, '2020_07_27_113454_create_advisors_table', 1),
(28, '2020_07_27_114025_create_project_features_table', 1),
(29, '2020_07_27_115315_master_leads_time_day_table', 1),
(30, '2020_07_27_115500_create_project_statuses_table', 1),
(31, '2020_07_27_115553_create_projects_table', 1),
(32, '2020_07_27_122157_create_master_currencies_table', 1),
(33, '2020_07_27_125500_create_project_type_departments_table', 1),
(34, '2020_07_27_125600_create_type_department_blueprints_table', 1),
(35, '2020_07_27_130349_create_master_type_gallery_table', 1),
(36, '2020_07_27_130350_create_project_gallery_table', 1),
(37, '2020_07_27_130751_create_projects_banks_table', 1),
(38, '2020_07_27_130845_create_projects_advisors_table', 1),
(39, '2020_07_27_130942_create_projects_project_features_table', 1),
(40, '2020_07_27_150710_create_project_quotation_table', 1),
(41, '2020_07_28_115425_create_leads_videocall_table', 1),
(42, '2020_08_19_133923_create_project_files_table', 1),
(43, '2020_08_25_132958_create_tags_table', 1),
(44, '2020_08_31_094444_create_master_documents_type_table', 1),
(45, '2020_08_31_101216_create_master_claims_type_table', 1),
(46, '2020_08_31_102153_create_master_good_contracted_type_table', 1),
(47, '2020_08_31_112211_create_complaints_book_table', 1),
(48, '2020_09_01_091323_create_cami_table', 1),
(49, '2020_09_01_091400_create_cami_elements_table', 1),
(50, '2020_09_03_114633_create_suscribers_table', 1),
(51, '2020_09_03_164058_create_master_transaction_status_table', 1),
(52, '2020_09_04_133646_create_customers_table', 1),
(53, '2020_09_04_133741_create_orders_table', 1),
(54, '2020_09_04_133754_create_order_details_table', 1),
(55, '2020_09_04_133811_create_transactions_table', 1),
(56, '2020_09_15_185325_create_notifications_table', 1),
(57, '2021_01_22_182540_create_financing_options_table', 1),
(58, '2021_01_25_104246_create_about_projects_finished_table', 1),
(59, '2021_01_25_122531_create_about_customer_support_table', 1),
(60, '2021_01_25_143522_create_about_warranty_elements_table', 1),
(61, '2021_01_25_151310_create_about_texts_table', 1),
(62, '2021_01_27_090420_create_bonds_table', 1),
(63, '2021_01_27_090437_create_projects_bonds_table', 1),
(64, '2021_01_28_105430_create_project_virtual_tour_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `total` double(8,2) NOT NULL,
  `proforma_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `project_type_department_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double(8,2) NOT NULL,
  `discount` double(8,2) DEFAULT NULL,
  `total` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_es` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_en` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `published` tinyint(1) NOT NULL,
  `seo_keywords_es` text COLLATE utf8mb4_unicode_ci,
  `seo_keywords_en` text COLLATE utf8mb4_unicode_ci,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title_es`, `title_en`, `slug_es`, `slug_en`, `excerpt_es`, `excerpt_en`, `content_es`, `content_en`, `image`, `thumbnail`, `published`, `seo_keywords_es`, `seo_keywords_en`, `user_id`, `category_id`, `created_at`, `updated_at`) VALUES
(1, '5 ideas para decorar tu departamento con plantas', '5 ideas to decorate your apartment with plants', '5-ideas-para-decorar-tu-departamento-con-plantas', '5-ideas-to-decorate-your-apartment-with-plants', 'Ahora que ya estás próxima a tener tu propio departamento con Líder, tendrás la libertad de decorarlo como más desees sin limitaciones de ningún tipo.', 'Now that you are close to having your own apartment with Líder, you will have the freedom to decorate it as you wish without limitations of any kind.', '<p>Ahora que ya estás próxima a tener tu propio departamento con Líder, tendrás la libertad de decorarlo como más desees sin limitaciones de ningún tipo. Y es que el objetivo es que puedas impregnar tu personalidad en cada uno de tus espacios y hacer de tu casa, tu hogar.</p><p>Ahora, una buena opción para decorar con poca inversión y grandes resultados es utilizar plantas, porque le brindan una imagen elegante y sofisticada a tu departamento. Sin embargo, debes tener en cuenta que este tipo de decoración requiere cierto tiempo a la semana para su cuidado. Así que, si estás dispuesta a brindarle un tiempo a estas plantas, podrás obtener no sólo una decoración atractiva, sino también beneficios para tu salud y la de tu familia, además de mejorar tu estado de ánimo y aumentar tu calidad de vida.</p><p>Sin contar que oxigenarás tu ambiente y aprovecharás al máximo cada uno de los espacios de tu nuevo departamento. Teniendo en cuenta lo anterior, veamos estas 5 ideas que hemos preparado para ti sobre cómo decorar tu departamento con plantas.</p><h2><strong>Usa las plantas como separadores de espacios</strong></h2><p>¿Quieres separar áreas dentro de tu sala? Pues no es necesario colocar una nueva pared o un mueble, puedes hacerlo también colocando una o dos macetas grandes. De esta manera podrás generar armonía en tu espacio. Eso sí, trata de no excederte en el tamaño de la maceta para que permita el paso y la fluidez dentro de tu sala.</p><p class="ql-align-center"><img src="https://lider-admin.playgroup.pe/storage/img/posts/pi-1613685577602ee349c8d70.jpg"></p><p class="ql-align-center"><br></p><p><br></p><h2><strong>Un comedor con personalidad</strong></h2><p>Una planta puede darle un toque único a tu centro de mesa. Elige una planta que se adapte bien a ambientes interiores y que florezca cada año, es mejor si puede recibir luz, pero no directa. Colócala en una maceta con un tono que contraste con tu mantel o el color de la mesa. Si tu mesa es de vidrio tienes más opciones.</p><p class="ql-align-center"><img src="https://lider-admin.playgroup.pe/storage/img/posts/pi-1613685632602ee3808b38a.jpg"></p><p class="ql-align-center"><br></p><h2><strong style="color: rgb(56, 56, 56); background-color: rgb(248, 248, 248);">Macetas de vidrio</strong></h2><p>Orquídeas, helechos enanos y más. Todo se ve bien en estas pequeñas macetas de vidrio. Te recomendamos elegir una planta pequeña y que no crezca mucho, así obtendrás un toque exclusivo y único dentro de tu espacio.</p><p class="ql-align-center"><img src="https://lider-admin.playgroup.pe/storage/img/posts/pi-1613685747602ee3f3dcc28.jpg"></p><p class="ql-align-center"><br></p><h2><strong>Piedras blancas alrededor</strong></h2><p>En esta opción puedes colocar una planta pequeña dentro de un jarrón de cristal y adornarla con piedras blancas alrededor. Genera una imagen natural que resalta a la planta en su interior, sólo necesita luz natural y colocarlas en un lugar cerca a la ventana.</p><p class="ql-align-center"><img src="https://lider-admin.playgroup.pe/storage/img/posts/pi-1613685793602ee4219323f.jpg"></p><p class="ql-align-center"><br></p><h2><strong>Color en la cocina</strong></h2><p>Pequeñas plantas harán que este espacio sea el más cálido de la casa. Puedes utilizar diversos tipos de maceteros pequeños que combinen o contrasten con el color que usas dentro de tu cocina. Unos pequeños helechos o plantas que no requieran mucha luz son una buena opción.</p><p><br></p><p class="ql-align-center"><img src="https://lider-admin.playgroup.pe/storage/img/posts/pi-1613685822602ee43ecf12d.jpg"></p><p><br></p><p><br></p><p><br></p>', '<p>Now that you are close to having your own apartment with Líder, you will have the freedom to decorate it as you wish without limitations of any kind. And the goal is that you can permeate your personality in each of your spaces and make your house your home.</p><p>Now, a good option to decorate with little investment and great results is to use plants, because they give an elegant and sophisticated image to your apartment. However, you must bear in mind that this type of decoration requires a certain time a week for its care. So, if you are willing to give these plants some time, you can obtain not only an attractive decoration, but also benefits for your health and that of your family, in addition to improving your mood and increasing your quality of life.</p><p>Not to mention that you will oxygenate your environment and make the most of each of the spaces in your new apartment. With the above in mind, let\'s see these 5 ideas that we have prepared for you on how to decorate your apartment with plants.</p><h2>Use plants as space dividers</h2>', 'b-1613686982602ee8c61ef29.jpg', 'bt-1613686982602ee8c61f186.jpg', 1, 'lider, departamento, plantas, decorar, tips', 'lider, department, apartment, plants, decoration, tips', 1, 1, '2021-02-18 22:23:02', '2021-02-18 22:23:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo_colour` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` json NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `description_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_es` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rooms_es` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rooms_en` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `footage_es` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `footage_en` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brochure` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_place_es` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text_place_en` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_google_maps` text COLLATE utf8mb4_unicode_ci,
  `url_video` text COLLATE utf8mb4_unicode_ci,
  `url_waze` text COLLATE utf8mb4_unicode_ci,
  `map_indications_es` text COLLATE utf8mb4_unicode_ci,
  `map_indications_en` text COLLATE utf8mb4_unicode_ci,
  `sales_room_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales_room_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `schedule_attention_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `schedule_attention_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_total` decimal(11,2) DEFAULT NULL,
  `price_total_foreign` decimal(11,2) DEFAULT NULL,
  `index` bigint(20) NOT NULL,
  `slug_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `form_videocall` tinyint(1) NOT NULL DEFAULT '0',
  `price_parking` text COLLATE utf8mb4_unicode_ci,
  `projects_related` text COLLATE utf8mb4_unicode_ci,
  `condition_quotation` text COLLATE utf8mb4_unicode_ci,
  `commentary_quotation` text COLLATE utf8mb4_unicode_ci,
  `excerpt_quotation` text COLLATE utf8mb4_unicode_ci,
  `iframe_map` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_status_id` bigint(20) UNSIGNED NOT NULL,
  `code_ubigeo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_title_es` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_title_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_description_en` text COLLATE utf8mb4_unicode_ci,
  `seo_description_es` text COLLATE utf8mb4_unicode_ci,
  `seo_keywords_es` text COLLATE utf8mb4_unicode_ci,
  `seo_keywords_en` text COLLATE utf8mb4_unicode_ci,
  `seo_image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `logo`, `logo_colour`, `images`, `active`, `description_es`, `description_en`, `location`, `name_es`, `name_en`, `rooms_es`, `rooms_en`, `footage_es`, `footage_en`, `brochure`, `banner`, `text_place_es`, `text_place_en`, `url_google_maps`, `url_video`, `url_waze`, `map_indications_es`, `map_indications_en`, `sales_room_es`, `sales_room_en`, `schedule_attention_en`, `schedule_attention_es`, `price_total`, `price_total_foreign`, `index`, `slug_es`, `slug_en`, `form_videocall`, `price_parking`, `projects_related`, `condition_quotation`, `commentary_quotation`, `excerpt_quotation`, `iframe_map`, `project_status_id`, `code_ubigeo`, `seo_title_es`, `seo_title_en`, `seo_description_en`, `seo_description_es`, `seo_keywords_es`, `seo_keywords_en`, `seo_image`, `created_at`, `updated_at`) VALUES
(1, 'l-1613753538602fecc238549.png', 'l-1613753581602feced2859e.png', '"[\\"is-11613753160602feb48ba431.jpg\\",\\"is-21613753160602feb48ba5c9.jpg\\",\\"is-31613753160602feb48ba6de.jpg\\"]"', 1, '<h2><strong>Un condominio versátil para continuar o empezar a vivir tu independencia.</strong></h2><p>Diseñado pensando en tu independencia, con áreas comunes y parques que rodean el condominio y pueden ser vistos desde la comodidad de tu departamento. Ideal para una vida plena y tranquila. Mambo es ideal para aquellos que quieren dar el siguiente paso. Cuotas desde S/ 1250*.</p>', '<p>Designed with your independence in mind, with common areas and parks that surround the condominium and can be viewed from the comfort of your apartment. Ideal for a full and quiet life. Mambo is ideal for those who want to take the next step. Fees from S / 1250 *.</p>', 'Av. Los Ángeles 702', 'UNNO - Condominios Mambo', 'UNNO - Condominios Mambo', '1 dormitorio', '1 room', 'De 52 a 77 m2', 'From 52 to 77 m2', 'ben-161412267460358eb2c4618.pdf', 'bes-1613753160602feb48ba180.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://www.google.com/maps/place/Unno+-+Condominio+Mambo+en+Lima+Norte+%7C+L%C3%ADder+Grupo+Constructor/@-11.9377327,-77.0696002,17z/data=!3m1!4b1!4m5!3m4!1s0x9105d10b49a0ebc9:0x868e14dae91d6ec1!8m2!3d-11.9377327!4d-77.0674115', NULL, NULL, '<p>A espaldas del nuevo Mallplaza Comas</p>', '<p>Behind the new Mallplaza Comas</p>', '<p>Av. Los Ángeles 702, Urb. El Retablo, Comas</p><p>Calle 18 S/N, Urb. El Retablo, Comas</p>', '<p>Av. Los Ángeles 702, Urb. El Retablo, Comas</p><p>Calle 18 S/N, Urb. El Retablo, Comas</p>', '<p>Monday - Friday de 9:00 a.m. a 6:00 p.m.</p><p>Saturday y Sunday de 10:30 a.m. a 6:00 p.m.</p>', '<p>Lunes - viernes de 9:00 a.m. a 6:00 p.m.</p><p>Sábado y domingos de 10:30 a.m. a 6:00 p.m.</p>', '178000.00', '50000.00', 2, 'unno-condominios-mambo', 'unno-condominios-mambo', 1, NULL, '"[2,9]"', NULL, NULL, NULL, 'ml-1613753160602feb48ba2e1.jpg', 4, '150110', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-19 16:46:00', '2021-02-24 01:01:58'),
(2, 'l-1613754298602fefba47a15.png', 'lc-1613754298602fefba47838.png', '"[\\"is-11613754298602fefba47d60.jpg\\",\\"is-21613754298602fefba47e22.jpg\\",\\"is-31613754298602fefba47f64.jpg\\"]"', 1, '<h2>Un condominio seguro sin perder el sabor del barrio</h2><p>Diseñado pensando en los más pequeños del hogar: áreas comunes y parques que rodean el condominio pueden ser vistos desde la comodidad de tu departamento, estacionamientos en sótanos para mayor seguridad y plaza interna con bancas y jardines crean el lugar ideal para una vida plena y tranquila. Mambo es ideal para aquellos que quieren dar el siguiente paso. Cuotas desde S/ 1950.</p>', '<h2>A safe condominium without losing the flavor of the neighborhood</h2><p>Designed with the smallest of the home in mind: common areas and parks that surround the condominium can be seen from the comfort of your apartment, parking in basements for greater security and an internal plaza with benches and gardens create the ideal place for a full and quiet life . Mambo is ideal for those who want to take the next step. Fees from S / 1950.</p>', 'Av. Los Ángeles 702', 'DOSS - Condominios Mambo', 'DOSS - Condominios Mambo', '3 Dormitorios', '3 Rooms', 'De 82 a 135m2', 'From 82 to 135m2', 'ben-161412247060358de69ebc4.pdf', 'bes-1613754298602fefba47ab7.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://www.google.com/maps/place/Unno+-+Condominio+Mambo+en+Lima+Norte+%7C+L%C3%ADder+Grupo+Constructor/@-11.9377327,-77.0696002,17z/data=!3m1!4b1!4m5!3m4!1s0x9105d10b49a0ebc9:0x868e14dae91d6ec1!8m2!3d-11.9377327!4d-77.0674115', NULL, NULL, '<p>A espaldas del nuevo Mallplaza Comas</p>', '<p>Behind the new Mallplaza Comas</p>', '<p>Av. Los Ángeles 702, Urb. El Retablo, Comas</p><p>Calle 18 S/N, Urb. El Retablo, Comas</p>', '<p>Av. Los Ángeles 702, Urb. El Retablo, Comas</p><p>Calle 18 S/N, Urb. El Retablo, Comas</p>', '<p>Monday - Friday de 9:00 a.m. a 6:00 p.m.</p><p>Saturday y Sunday de 10:30 a.m. a 6:00 p.m.</p>', '<p>Lunes - viernes de 9:00 a.m. a 6:00 p.m.</p><p>Sábado y domingos de 10:30 a.m. a 6:00 p.m.</p>', '242500.00', '68000.00', 3, 'doss-condominios-mambo', 'doss-condominios-mambo', 1, NULL, '"[1,9]"', NULL, NULL, NULL, 'ml-1613754298602fefba47b99.jpg', 4, '150110', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-19 17:04:58', '2021-02-24 01:02:22'),
(3, 'l-1613755504602ff4701ee26.png', 'lc-1613755430602ff4268268d.png', '"[\\"is-11613755430602ff42682ad4.jpg\\",\\"is-21613755430602ff42682b81.jpg\\",\\"is-31613755430602ff42682ca0.jpg\\"]"', 1, '<p>MoDO ha sido desarrollado teniendo en cuenta las necesidades de sus dos principales stakeholders: Jóvenes profesionales e inversionistas. Los espacios están pensados para lograr una mayor rentabilidad y un bajo mantenimiento. Diseñados en función a las necesidades de nuestro público para darles la comodidad que necesitan. Las habitaciones de todos los departamentos son de similar tamaño y se ha buscado priorizar los espacios privados, siendo estos los más valorados por este público.</p>', '<p>MoDO has been developed keeping in mind the needs of its two main stakeholders: Young professionals and investors. The spaces are designed to achieve greater profitability and low maintenance. Designed according to the needs of our public to give them the comfort they need. The rooms of all the departments are of a similar size and private spaces have been prioritized, these being the most valued by this public.</p>', 'Av. Universitaria esquina con Av. Tulipanes. Urb. Pando', 'MoDO Coliving', 'MoDO Coliving', '1 y 2 Dormitorios', '1 & 2 Rooms', 'De 47 a 57m2', 'From 47 to 57m2', 'ben-161412258560358e59b5ddf.pdf', 'bes-1613755430602ff426828e7.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://www.google.com/maps/place/MoDO+Student+Residence/@-12.0641706,-77.0807604,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c93feb8a9a97:0x1d3c793ee900514e!8m2!3d-12.0641759!4d-77.0785717', NULL, NULL, NULL, NULL, '<p>Av. Universitaria esquina con Av. Tulipanes. Urb. Pando – San Miguel</p>', '<p>Av. Universitaria esquina con Av. Tulipanes. Urb. Pando – San Miguel</p>', '<p>Monday - Saturday from 10:00 a.m. to 6:00 p.m.</p>', '<p>Lunes - Sábado de 10:00 a.m. a 6:00 p.m.</p>', '367000.00', NULL, 1, 'modo-coliving', 'modo-coliving', 0, NULL, NULL, NULL, NULL, NULL, 'ml-1613755430602ff42682a21.jpg', 2, '150136', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-19 17:23:50', '2021-02-24 01:00:07'),
(4, 'l-1613756334602ff7aed65f3.png', 'lc-1613756334602ff7aed6357.png', '"[\\"is-11613756334602ff7aed6809.jpg\\",\\"is-21613756334602ff7aed6875.jpg\\",\\"is-31613756334602ff7aed693e.jpg\\",\\"is-41613756334602ff7aed69f0.jpg\\"]"', 1, '<h2>Vive en el Sur Chico</h2><p>Departamentos de tres dormitorios desde 136 m2 hasta Dúplex de 311 m2. Todos con vista panorámica al mar del Sur Chico. Namua es el escenario ideal para desconectarse del caos de la ciudad y relajarse con el sonido de las olas. Departamentos equipados con mamparas europeas de características thermo-acústicas que permiten sellar completamente el espacio para mayor tranquilidad si así lo desean. Acceso vía ascensor directo y dormitorio principal equipado con aire acondicionado.</p><p>Amplias terrazas privadas con enchapes de bambú, pisos de porcelanato con formato de listones tipo madera, cocina abierta integrada con sala-comedor y equipada con tablero de cuarzo. Área de servicio con dormitorio y baño completo.</p><p>Visite nuestro departamento piloto diseñado por la reconocida interiorista Ana Teresa Vega Soyer.</p>', '<h2>Live in the "Sur Chico"</h2><p>Three bedroom apartments from 136 m2 to Duplex of 311 m2. All with panoramic views of the South Chico sea. Namua is the ideal setting to disconnect from the chaos of the city and relax with the sound of the waves. Departments equipped with European partitions with thermo-acoustic characteristics that allow the space to be completely sealed for greater tranquility if they so wish. Access via direct elevator and master bedroom equipped with air conditioning.</p><p>Large private terraces with bamboo veneers, porcelain floors with wood-type slat format, open kitchen integrated with living room-dining room and equipped with quartz tabletop. Service area with bedroom and full bathroom.</p><p>Visit our pilot department designed by the renowned interior designer Ana Teresa Vega Soyer.</p>', 'Los Acantilados S/N Urbanización El Peñascal', 'Namua', 'Namua', '3 Dormitorios', '3 Rooms', 'De 136 a 311m2', 'From 136 to 311m2', 'ben-161412255160358e375d456.pdf', 'bes-1613756334602ff7aed6689.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://goo.gl/maps/9xFjMNXMR9TVNt2G6', NULL, NULL, '<p>Los Acantilados S/N Urbanización El Peñascal, San Bartolo</p><p>A la altura del km, 46 de la Panamericana Sur, a solo 30 minutos de Lima.</p>', '<p>Los Acantilado S / N Urbanization El Peñascal, San Bartolo</p><p>At km 46 of the Panamericana Sur, just 30 minutes from Lima.</p>', '<p>Atención Previa Cita</p><p>Los Acantilados S/N Urbanización El Peñascal</p>', '<p>Prior Care Appointment</p><p>Los Acantilados S/N Urbanización El Peñascal</p>', '<p>Monday - Sunday from 10:00 a.m. at 6:00 p.m.</p>', '<p>Lunes -&nbsp;Domingo de 10:00 a.m. a 6:00 p.m.</p>', '347550.00', NULL, 9, 'namua', 'namua', 0, NULL, '"[3]"', NULL, NULL, NULL, 'ml-1613756334602ff7aed6778.jpg', 2, '150129', 'Namua - Vive en el Sur Chico', 'Namua - Live in the "Sur Chico"', NULL, NULL, NULL, NULL, NULL, '2021-02-19 17:38:54', '2021-02-24 01:07:04'),
(5, 'l-16141485946035f3f2c8796.png', 'l-16141485946035f3f2c8a44.png', '"[\\"is-11614112741603567e5ba689.jpg\\",\\"is-21614112741603567e5ba71c.jpg\\",\\"is-31614112741603567e5ba7e5.jpg\\"]"', 1, '<p>Vivir en Miraflores, es vivir en el eje de la ciudad</p><p>Diecinueve exclusivos departamentos flats y dúplex desde 224 m2 componen este edificio de dieciséis pisos. Departamentos equipados con domótica en ambientes sociales, ascensor directo y carga eléctrica preparada para equipamiento a gusto del propietario. Todos los ambientes principales cuentan con vista hacia el malecón.</p><p>Amenities incluyen lobby de 7 metros de altura, gimnasio, terraza interior, piscina temperada techada con sistema de nado contracorriente, lounge, salón social, entre otros. La decoración de los amenities está a cargo del arquitecto y diseñador de interiores Jordi Puig.</p>', '<h2>Living in Miraflores is living in the hub of the city</h2><p>Nineteen exclusive flats and duplex apartments from 224 m2 make up this sixteen-story building. Apartments equipped with home automation in social environments, direct elevator and electric charge prepared for equipment to suit the owner. All main rooms have views of the boardwalk.</p><p>Amenities include a 7-meter-high lobby, gym, interior terrace, heated indoor pool with counter-current swimming system, lounge, social room, among others. The decoration of the amenities is in charge of the architect and interior designer Jordi Puig.</p>', 'Av. Malecón de la Marina Cuadra 6. Miraflores', 'Infinitum', 'Infinitum', '3 Dormitorios', '3 Rooms', 'De 224 a 359m2', 'From 224 to 359m2', 'ben-161412261860358e7aa6e30.pdf', 'bes-1614112741603567e5ba4c8.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://goo.gl/maps/tp6AzbGPvNm3327h6', NULL, NULL, '<p>Av. Malecón de la Marina Cuadra 6. Miraflores</p><p>Frente al Parque María Reiche y a pocas cuadras de San Isidro</p>', '<p>Av. Malecón de la Marina Cuadra 6. Miraflores</p><p>In front of María Reiche Park and a few blocks from San Isidro</p>', '<p>Atención previa cita en oficina principal: Avenida Manuel Olguin 501, Piso 13. Santiago de Surco</p>', '<p>Attention by appointment at the main office: Avenida Manuel Olguin 501, Piso 13. Santiago de Surco</p>', '<p>Monday -&nbsp;Friday from0 10:00 a.m. to 6:00 p.m.</p>', '<p>Lunes -&nbsp;Viernes de 10:00 a.m. a 6:00 p.m.</p>', NULL, '920000.00', 8, 'infinitum', 'infinitum', 0, NULL, '"[4]"', NULL, NULL, NULL, 'ml-1614112741603567e5ba59c.jpg', 4, '150122', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-23 20:39:01', '2021-02-24 06:36:34'),
(6, 'l-161411379160356bffb032c.png', 'lc-161411379160356bffb0154.png', '"[\\"is-1161411379160356bffb055e.jpg\\",\\"is-2161411379160356bffb05eb.jpg\\",\\"is-3161411379160356bffb06ed.jpg\\"]"', 1, '<p>Los mejores precios de Lima Este. Departamentos de 3 dormitorios en un condominio seguro y lleno de áreas verdes en Santa Clara, Ate. Áreas comunes para disfrutar con total seguridad.</p>', '<p>The best prices in East Lima. 3 bedroom apartments in a secure condominium full of green areas in Santa Clara, Ate. Common areas to enjoy in complete safety.</p>', 'Av. Daniel Alcides Carrión cruce con Av. NN-1, Santa Clara, Ate.', 'Kampu', 'Kampu', '3 Dormitorios', '3 Rooms', '65m2', '65m2', 'ben-161412263360358e89f10a1.pdf', 'bes-161411379160356bffb0385.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://goo.gl/maps/5vTWwctQFiBUZBrZ6', NULL, NULL, '<p>Daniel Alcides Carrión cruce con Av. NN-1. Nuevo ingreso desde Carretera Central hasta el proyecto por Av. NN-1. (A 5 min del C.C. Real Plaza Santa Clara). Ate.</p>', '<p>Daniel Alcides Carrión intersection with Av. NN-1. New entrance from Carretera Central to the project through Av. NN-1. (5 min from C.C. Real Plaza Santa Clara). Ate.</p>', '<p>Condominio Kampu, Puerta 2</p>', '<p>Kampu Condominium, Gate 2</p>', '<p>Monday -&nbsp;Friday from 10:00 a.m. to 6:00 p.m.</p><p>Saturday &amp; Sunday de 10:00 am to 5:00 pm</p>', '<p>Lunes -&nbsp;Viernes de 10:00 a.m. a 6:00 p.m.</p><p>Sábado y Domingo de 10:00 am a 5:00 pm</p>', '170000.00', NULL, 5, 'kampu', 'kampu', 1, NULL, '"[2,1]"', NULL, NULL, NULL, 'ml-161411379160356bffb0464.jpg', 4, '150103', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-23 20:56:31', '2021-02-24 01:03:56'),
(7, 'l-16141491466035f61ae200d.png', 'l-16141491466035f61ae2212.png', '"[\\"is-116141148286035700c1463d.jpg\\",\\"is-216141148286035700c146f7.jpg\\",\\"is-316141148286035700c148da.jpg\\",\\"is-416141148286035700c14a42.jpg\\"]"', 1, '<h2>Espacio para disfrutar</h2><p>Proyecto ubicado en la mejor zona residencial del distrito de Hunter, a 10 minutos del centro de la ciudad y a pocos metros de la zona comercial del distrito, donde se encuentran bancos, supermercado, etc.</p><p>La ubicación del terreno permite que el condominio tenga una de las mejores vistas de la campiña y de la ciudad de Arequipa, además de seguridad y tranquilidad.</p>', '<h2>Space to enjoy</h2><p>Project located in the best residential area of ​​the Hunter district, 10 minutes from the city center and a few meters from the commercial area of ​​the district, where there are banks, supermarket, etc.</p><p>The location of the land allows the condominium to have one of the best views of the countryside and the city of Arequipa, as well as security and tranquility.</p>', 'Urbanización Quinta Nueva Colina - Sub Lote B - 04 - Hunter', 'Almira', 'Almira', '3 y 4 Dormitorios', '3 & 4 Rooms', 'De 75 a 93m2', 'From 75 to 93m2', 'ben-161412278060358f1c4afa3.pdf', 'bes-16141148286035700c143f3.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', NULL, NULL, NULL, NULL, NULL, '<p>Previa cita</p>', '<p>By appointment</p>', '<p>From 9am to 6pm, Monday through Sunday</p>', '<p>De 9am a 6 pm, de lunes a domingo</p>', '236000.00', NULL, 7, 'almira', 'almira', 1, NULL, NULL, NULL, NULL, NULL, 'ml-16141148286035700c1455c.jpg', 5, '040101', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-23 21:13:48', '2021-02-24 06:45:46'),
(8, 'l-16141489846035f5786df97.png', 'l-16141489846035f5786e184.png', '"[\\"is-11614115538603572d28f90a.jpg\\",\\"is-21614115538603572d28f9ae.jpg\\",\\"is-31614115538603572d28fac0.jpg\\",\\"is-41614115538603572d28fbc0.jpg\\"]"', 1, '<p>Condominio A, es un proyecto inspirado en los valores de la buena convivencia, donde tu familia crecerá en un entorno moderno, acogedor y seguro. </p>', '<p>Condominium A, is a project inspired by the values ​​of good coexistence, where your family will grow up in a modern, cozy and safe environment.</p>', 'Av. Pizarro 115 - José Luis Bustamante y Rivero - Arequipa', 'Condominio A', 'Condominio A', '3 Dormitorios', '3 Rooms', '84, 90 y 97m2', '84, 90 & 97m2', 'ben-161412281960358f4338f07.pdf', 'bes-1614115538603572d28f69d.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://goo.gl/maps/PbhuFc96Z4dQoD7T6', NULL, NULL, '<p>Av. Pizarro 115 - José Luis Bustamante y Rivero (a 3 cuadras del Mall Aventura Plaza Porongoche)</p>', '<p>Av. Pizarro 115 - José Luis Bustamante y Rivero (3 blocks from Mall Aventura Plaza Porongoche)</p>', '<p>Previa cita</p>', '<p>By appointment</p><p><br></p>', '<p>Monday to Friday from 9 a.m. to 1 p.m. and 2 p.m. at 6 p.m.</p><p>Saturdays 10 a.m. to 1 p.m. and 2 p.m. at 6 p.m.</p>', '<p>Lunes a Viernes de 9 am 1 p.m. y 2 p.m. a 6 p.m.</p><p>Sábados 10 am a 1 p.m. y 2 p.m. a 6 p.m.</p>', '275000.00', NULL, 6, 'condominio-a', 'condominio-a', 1, NULL, NULL, NULL, NULL, NULL, 'ml-1614115538603572d28f833.jpg', 2, '040129', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-23 21:25:38', '2021-02-24 06:43:04'),
(9, 'l-1614117051603578bb6d42f.png', 'lc-1614117051603578bb6d236.png', '"[\\"is-11614117051603578bb6d7a3.jpg\\",\\"is-21614117051603578bb6d871.jpg\\",\\"is-31614117051603578bb6d971.jpg\\"]"', 1, '<h2>Un condominio amplio, exclusivo y privado. Bienvenidos a casa.</h2><p>Diseñado pensando para las grandes familias: áreas comunes y parques que rodean el condominio pueden ser vistos desde la comodidad de tu departamento, estacionamientos en sótanos para mayor seguridad y plaza interna con bancas y jardines crean el lugar ideal para una vida plena y tranquila. Mambo es ideal para aquellos que quieren dar el siguiente paso. Cuotas desde S/ 2300.</p>', '<h2>A spacious, exclusive and private condominium. Welcome home.</h2><p>Designed with large families in mind: common areas and parks that surround the condominium can be seen from the comfort of your apartment, basement parking for greater security and an internal plaza with benches and gardens create the ideal place for a full and quiet life. Mambo is ideal for those who want to take the next step. Fees from S / 2300.</p>', 'Av. Los Angeles 702 Comas', 'TRESS - Condominios Mambo', 'TRESS - Condominios Mambo', '3 a 4 Dormitorios', '3 & 4 Rooms', 'Desde 100 a 110m2', 'From 100 to 110m2', 'ben-161412242860358dbcd1b5b.pdf', 'bes-1614117051603578bb6d4b5.jpg', 'Conoce el lugar donde crearás tus recuerdos', 'Know the place where you will create your memories', 'https://www.google.com/maps/place/Unno+-+Condominio+Mambo+en+Lima+Norte+%7C+L%C3%ADder+Grupo+Constructor/@-11.9377327,-77.0696002,17z/data=!3m1!4b1!4m5!3m4!1s0x9105d10b49a0ebc9:0x868e14dae91d6ec1!8m2!3d-11.9377327!4d-77.0674115', NULL, NULL, '<p>Av. Los Angeles 702 - Comas</p><p>A espaldas del nuevo Mallplaza Comas</p>', NULL, '<p>Av. Los Ángeles 702, Urb. El Retablo, Comas</p><p>Calle 18 S/N, Urb. El Retablo, Comas</p>', '<p>Av. Los Ángeles 702, Urb. El Retablo, Comas</p><p>Calle 18 S/N, Urb. El Retablo, Comas</p>', '<p><span style="color: rgb(0, 0, 0); background-color: transparent;">Monday - Friday from 9:00 a.m. to 6:00 p.m.</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">Saturday &amp; Sunday from 10:30 a.m. to 6:00 p.m.</span></p>', '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">Lunes - viernes de 9:00 a.m. a 6:00 p.m.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Sábado y domingos de 10:30 a.m. a 6:00 p.m.</span></p>', '323500.00', NULL, 4, 'tress-condominios-mambo', 'tress-condominios-mambo', 1, NULL, '"[2,1]"', NULL, NULL, NULL, 'ml-1614117051603578bb6d601.jpg', 4, '150110', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-02-23 21:50:51', '2021-02-24 01:02:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects_advisors`
--

CREATE TABLE `projects_advisors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `advisor_id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `projects_advisors`
--

INSERT INTO `projects_advisors` (`id`, `advisor_id`, `project_id`, `created_at`, `updated_at`) VALUES
(144, 15, 3, NULL, NULL),
(145, 14, 3, NULL, NULL),
(160, 3, 1, NULL, NULL),
(161, 4, 1, NULL, NULL),
(162, 5, 1, NULL, NULL),
(163, 6, 1, NULL, NULL),
(164, 7, 1, NULL, NULL),
(165, 8, 1, NULL, NULL),
(166, 9, 1, NULL, NULL),
(167, 3, 2, NULL, NULL),
(168, 6, 2, NULL, NULL),
(169, 9, 2, NULL, NULL),
(170, 7, 2, NULL, NULL),
(171, 4, 2, NULL, NULL),
(172, 5, 2, NULL, NULL),
(173, 8, 2, NULL, NULL),
(174, 3, 9, NULL, NULL),
(175, 4, 9, NULL, NULL),
(176, 8, 9, NULL, NULL),
(177, 7, 9, NULL, NULL),
(178, 9, 9, NULL, NULL),
(179, 5, 9, NULL, NULL),
(180, 6, 9, NULL, NULL),
(181, 10, 6, NULL, NULL),
(182, 11, 6, NULL, NULL),
(186, 12, 4, NULL, NULL),
(187, 12, 5, NULL, NULL),
(188, 13, 8, NULL, NULL),
(189, 16, 7, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects_banks`
--

CREATE TABLE `projects_banks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bank_id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `projects_banks`
--

INSERT INTO `projects_banks` (`id`, `bank_id`, `project_id`, `created_at`, `updated_at`) VALUES
(49, 1, 3, NULL, NULL),
(52, 1, 1, NULL, NULL),
(53, 1, 2, NULL, NULL),
(54, 1, 9, NULL, NULL),
(55, 3, 6, NULL, NULL),
(59, 1, 4, NULL, NULL),
(60, 3, 5, NULL, NULL),
(61, 3, 8, NULL, NULL),
(62, 2, 7, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects_bonds`
--

CREATE TABLE `projects_bonds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bond_id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `projects_bonds`
--

INSERT INTO `projects_bonds` (`id`, `bond_id`, `project_id`, `created_at`, `updated_at`) VALUES
(31, 1, 1, NULL, NULL),
(32, 1, 2, NULL, NULL),
(33, 1, 9, NULL, NULL),
(36, 1, 8, NULL, NULL),
(37, 1, 7, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects_project_features`
--

CREATE TABLE `projects_project_features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `feature_id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `projects_project_features`
--

INSERT INTO `projects_project_features` (`id`, `feature_id`, `project_id`, `created_at`, `updated_at`) VALUES
(68, 4, 3, NULL, NULL),
(69, 22, 3, NULL, NULL),
(70, 20, 3, NULL, NULL),
(71, 15, 3, NULL, NULL),
(81, 6, 1, NULL, NULL),
(82, 4, 1, NULL, NULL),
(83, 1, 1, NULL, NULL),
(84, 20, 1, NULL, NULL),
(85, 22, 1, NULL, NULL),
(86, 21, 1, NULL, NULL),
(87, 6, 2, NULL, NULL),
(88, 22, 2, NULL, NULL),
(89, 20, 2, NULL, NULL),
(90, 6, 9, NULL, NULL),
(91, 20, 9, NULL, NULL),
(92, 2, 9, NULL, NULL),
(93, 13, 9, NULL, NULL),
(94, 2, 6, NULL, NULL),
(95, 21, 6, NULL, NULL),
(108, 6, 4, NULL, NULL),
(109, 7, 4, NULL, NULL),
(110, 9, 4, NULL, NULL),
(111, 11, 4, NULL, NULL),
(112, 12, 4, NULL, NULL),
(113, 17, 4, NULL, NULL),
(114, 20, 4, NULL, NULL),
(115, 6, 5, NULL, NULL),
(116, 8, 5, NULL, NULL),
(117, 9, 5, NULL, NULL),
(118, 14, 5, NULL, NULL),
(119, 18, 5, NULL, NULL),
(120, 6, 8, NULL, NULL),
(121, 2, 8, NULL, NULL),
(122, 19, 8, NULL, NULL),
(123, 21, 8, NULL, NULL),
(124, 20, 8, NULL, NULL),
(125, 2, 7, NULL, NULL),
(126, 20, 7, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_features`
--

CREATE TABLE `project_features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `project_features`
--

INSERT INTO `project_features` (`id`, `name_es`, `name_en`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Karaoke', 'Karaoke', 'u-161411951416141195146035825ab84d1.png', '2021-02-19 15:51:00', '2021-02-23 22:31:54'),
(2, 'Salón de usos múltiples', 'Multipurpose room', 'u-16141195361614119536603582700f239.png', '2021-02-19 15:51:45', '2021-02-23 22:32:16'),
(3, 'Biblioteca de objetos', 'Object Library', 'u-16141195551614119555603582835d866.png', '2021-02-19 15:52:01', '2021-02-23 22:32:35'),
(4, 'Coworking', 'Coworking', 'f-1613749936602fdeb04ed5b.png', '2021-02-19 15:52:16', '2021-02-19 15:52:16'),
(5, 'Pet Friendly', 'Pet Friendly', 'u-161411958116141195816035829d11650.png', '2021-02-19 15:52:28', '2021-02-23 22:33:01'),
(6, 'Gimnasio', 'Gym', 'f-1613749998602fdeee03e01.png', '2021-02-19 15:53:18', '2021-02-19 15:53:18'),
(7, 'Piscina Infinita', 'Infinity Pool', 'f-1614119672603582f843e20.png', '2021-02-23 22:34:32', '2021-02-23 22:34:32'),
(8, 'Piscina temperada con nado contra corriente', 'Heated pool with swim against the current', 'f-16141197116035831f442a8.png', '2021-02-23 22:35:11', '2021-02-23 22:35:11'),
(9, 'Lounge', 'Lounge', 'f-1614119731603583332e643.png', '2021-02-23 22:35:31', '2021-02-23 22:35:31'),
(10, 'Salón social', 'Social room', 'f-161411976860358358dae92.png', '2021-02-23 22:36:08', '2021-02-23 22:36:08'),
(11, 'Yoga Room', 'Yoga Room', 'f-1614120379603585bb50f20.png', '2021-02-23 22:46:19', '2021-02-23 22:46:19'),
(12, 'Saunas', 'Saunas', 'f-16141207096035870557562.png', '2021-02-23 22:51:49', '2021-02-23 22:51:49'),
(13, 'Salón de eventos', 'Events room', 'f-16141209696035880942051.png', '2021-02-23 22:56:09', '2021-02-23 22:56:09'),
(14, 'Estacionamientos para autos eléctricos', 'Parking for electric cars', 'f-161412101260358834ef88d.png', '2021-02-23 22:56:52', '2021-02-23 22:56:52'),
(15, 'Exercise room', 'Exercise room', 'f-161412102960358845b2de6.png', '2021-02-23 22:57:09', '2021-02-23 22:57:09'),
(16, 'Terraza de estudio', 'Study terrace', 'f-1614121072603588707f433.png', '2021-02-23 22:57:52', '2021-02-23 22:57:52'),
(17, 'Beach locker', 'Beach locker', 'f-161412109060358882e7dfb.png', '2021-02-23 22:58:10', '2021-02-23 22:58:10'),
(18, 'Lobby triple altura', 'Triple height lobby', 'f-1614121125603588a588f20.png', '2021-02-23 22:58:45', '2021-02-23 22:58:45'),
(19, 'Juegos para niños', 'Games for kids', 'f-1614121147603588bb5db04.png', '2021-02-23 22:59:07', '2021-02-23 22:59:07'),
(20, 'Parrilla', 'Grill', 'f-161412390860359384a933e.png', '2021-02-23 23:45:08', '2021-02-23 23:45:08'),
(21, 'Minimarket', 'Minimarket', 'f-1614124493603595cda754d.png', '2021-02-23 23:54:53', '2021-02-23 23:54:53'),
(22, 'Lavandería', 'Laundry', 'f-1614124569603596195c560.png', '2021-02-23 23:56:09', '2021-02-23 23:56:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_files`
--

CREATE TABLE `project_files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` bigint(20) NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `project_files`
--

INSERT INTO `project_files` (`id`, `name_es`, `name_en`, `file`, `index`, `project_id`, `created_at`, `updated_at`) VALUES
(1, 'Ficha RUC', 'File RUC', 'p-16141126176035676935997.pdf', 1, 4, '2021-02-23 20:36:57', '2021-02-23 20:36:57'),
(2, 'Ficha RUC', 'File RUC', 'p-161411406460356d1055f70.pdf', 1, 1, '2021-02-23 21:01:04', '2021-02-23 21:01:04'),
(3, 'Ficha RUC', 'File RUC', 'p-161411786960357beda6d26.pdf', 1, 2, '2021-02-23 22:04:29', '2021-02-23 22:04:29'),
(4, 'Ficha RUC', 'File RUC', 'p-161411851960357e778f783.pdf', 1, 9, '2021-02-23 22:15:19', '2021-02-23 22:15:19'),
(5, 'Ficha RUC', 'File RUC', 'p-16141197246035832c19046.pdf', 1, 3, '2021-02-23 22:35:24', '2021-02-23 22:35:24'),
(6, 'Ficha RUC', 'File RUC', 'p-16141202876035855f413d7.pdf', 1, 6, '2021-02-23 22:44:47', '2021-02-23 22:44:47'),
(7, 'Ficha RUC', 'File RUC', 'p-1614121141603588b5b8f0c.pdf', 1, 5, '2021-02-23 22:59:01', '2021-02-23 22:59:01'),
(8, 'Ficha CRI', 'File CRI', 'p-161412245860358dda39b30.pdf', 1, 8, '2021-02-23 23:20:58', '2021-02-23 23:20:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_gallery`
--

CREATE TABLE `project_gallery` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` bigint(20) NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `master_type_gallery_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `project_gallery`
--

INSERT INTO `project_gallery` (`id`, `title_es`, `title_en`, `image`, `index`, `project_id`, `master_type_gallery_id`, `created_at`, `updated_at`) VALUES
(1, 'AC 1', 'AC 1', 'i-1613757801602ffd694580e.jpg', 1, 4, 1, '2021-02-19 18:03:21', '2021-02-19 18:03:21'),
(2, 'AC 2', 'AC 2', 'i-1613757816602ffd7879e1b.jpg', 2, 4, 1, '2021-02-19 18:03:36', '2021-02-19 18:03:36'),
(3, 'AC 3', 'AC 3', 'i-1613757838602ffd8e38913.jpg', 3, 4, 1, '2021-02-19 18:03:58', '2021-02-19 18:03:58'),
(4, 'AC 4', 'AC 4', 'i-1613757846602ffd96aacd5.jpg', 4, 4, 1, '2021-02-19 18:04:06', '2021-02-19 18:04:06'),
(5, 'AC 5', 'AC 5', 'i-1613757855602ffd9f656fb.jpg', 5, 4, 1, '2021-02-19 18:04:15', '2021-02-19 18:04:15'),
(6, 'AC 6', 'AC 6', 'i-1613757865602ffda996991.jpg', 6, 4, 1, '2021-02-19 18:04:25', '2021-02-19 18:04:25'),
(7, 'Beach Lockers', 'Beach Lockers', 'i-1613757880602ffdb835d1a.jpg', 7, 4, 1, '2021-02-19 18:04:40', '2021-02-19 18:04:40'),
(8, 'Canchita', 'Court', 'i-1613757913602ffdd918b99.jpg', 8, 4, 1, '2021-02-19 18:05:13', '2021-02-19 18:05:13'),
(9, 'Parrillas', 'Barbecue', 'i-1613757936602ffdf0c4e26.jpg', 9, 4, 1, '2021-02-19 18:05:36', '2021-02-19 18:05:36'),
(10, 'Interior 1', 'Interior 1', 'i-1614113222603569c632ab0.jpg', 10, 4, 2, '2021-02-23 20:47:02', '2021-02-23 20:47:02'),
(11, 'Interior 2', 'Interior 2', 'i-161411329060356a0acfcd8.jpg', 11, 4, 2, '2021-02-23 20:48:10', '2021-02-23 20:48:10'),
(12, 'Interior 3', 'Interior 3', 'i-161411331160356a1f15818.jpg', 12, 4, 2, '2021-02-23 20:48:31', '2021-02-23 20:48:31'),
(13, 'Interior 4', 'Interior 4', 'i-161411332660356a2e4e443.jpg', 13, 4, 2, '2021-02-23 20:48:46', '2021-02-23 20:48:46'),
(14, 'Interior 5', 'Interior 5', 'i-161411333860356a3a6e02a.jpg', 14, 4, 2, '2021-02-23 20:48:58', '2021-02-23 20:48:58'),
(15, 'Interior 6', 'Interior 6', 'i-161411335060356a46476c5.jpg', 15, 4, 2, '2021-02-23 20:49:10', '2021-02-23 20:49:10'),
(16, 'Interior 7', 'Interior 7', 'i-161411338260356a66577f9.jpg', 16, 4, 2, '2021-02-23 20:49:42', '2021-02-23 20:49:42'),
(17, 'Interior 8', 'Interior 8', 'i-161411339360356a711974c.jpg', 17, 4, 2, '2021-02-23 20:49:53', '2021-02-23 20:49:53'),
(18, 'Librería de Objetos', 'Object Library', 'i-161411418160356d850bb7a.jpg', 1, 1, 1, '2021-02-23 21:03:01', '2021-02-23 21:03:01'),
(19, 'Karaoke', 'Karaoke', 'i-161411425660356dd04f7a7.jpg', 2, 1, 1, '2021-02-23 21:04:16', '2021-02-23 21:04:16'),
(20, 'Lavandería', 'Laundry', 'i-161411432160356e114db14.jpg', 3, 1, 1, '2021-02-23 21:05:21', '2021-02-23 21:05:21'),
(21, 'Minimarket', 'Minimarket', 'i-161411436660356e3ecc0db.jpg', 4, 1, 1, '2021-02-23 21:06:06', '2021-02-23 21:06:06'),
(22, 'Coworking', 'Coworking', 'i-161411439560356e5b31aed.jpg', 5, 1, 1, '2021-02-23 21:06:35', '2021-02-23 21:06:35'),
(23, 'GYM', 'GYM', 'i-161411441060356e6aa9dc3.jpg', 6, 1, 1, '2021-02-23 21:06:50', '2021-02-23 21:06:50'),
(24, 'Parrilla', 'Grill', 'i-161411444960356e91b6920.jpg', 7, 1, 1, '2021-02-23 21:07:29', '2021-02-23 21:07:29'),
(25, 'FLAT - Baño Lavandería', 'FLAT - Bathroom Laundry', 'i-1614114819603570035975b.jpg', 8, 1, 2, '2021-02-23 21:13:39', '2021-02-23 21:13:39'),
(26, 'FLAT - Cocina', 'FLAT - Kitchen Room', 'i-161411486460357030722b1.jpg', 9, 1, 2, '2021-02-23 21:14:24', '2021-02-23 21:14:24'),
(27, 'FLAT - Dormitorio Principal', 'FLAT - Main Bedroom', 'i-1614115499603572ab8f0ae.jpg', 10, 1, 2, '2021-02-23 21:24:59', '2021-02-23 21:24:59'),
(28, 'FLAT - Comedor', 'FLAT - Dinning Room', 'i-1614115572603572f458dd1.jpg', 11, 1, 1, '2021-02-23 21:26:12', '2021-02-23 21:26:12'),
(29, 'LOFT - Cocina', 'LOFT - Kitchen Room', 'i-1614115810603573e2113b1.jpg', 12, 1, 2, '2021-02-23 21:30:10', '2021-02-23 21:30:10'),
(30, 'LOFT - Dormitorio Principal', 'LOFT - Main Bedroom', 'i-161411585960357413328a5.jpg', 13, 1, 2, '2021-02-23 21:30:59', '2021-02-23 21:30:59'),
(31, 'LOFT - Estar', 'LOFT - Waiting', 'i-16141158996035743bb7935.jpg', 14, 1, 2, '2021-02-23 21:31:39', '2021-02-23 21:31:39'),
(32, 'LOFT - Sala Comedor', 'LOFT - Dining Room', 'i-161411595360357471723da.jpg', 15, 1, 2, '2021-02-23 21:32:33', '2021-02-23 21:32:33'),
(33, 'AC 1', 'AC 1', 'i-161411793160357c2b3122e.jpg', 1, 2, 1, '2021-02-23 22:05:31', '2021-02-23 22:05:31'),
(34, 'AC 2', 'AC 2', 'i-161411794560357c39b0d63.jpg', 2, 2, 1, '2021-02-23 22:05:45', '2021-02-23 22:05:45'),
(35, 'AC 3', 'AC 3', 'i-161411796160357c4909e08.jpg', 3, 2, 1, '2021-02-23 22:06:01', '2021-02-23 22:06:01'),
(36, 'AC 4', 'AC 4', 'i-161411797860357c5a74443.jpg', 4, 2, 1, '2021-02-23 22:06:18', '2021-02-23 22:06:18'),
(37, 'AC 5', 'AC 5', 'i-161411799360357c6975ceb.jpg', 5, 2, 1, '2021-02-23 22:06:33', '2021-02-23 22:06:33'),
(38, 'AC 6', 'AC 6', 'i-161411800760357c778bcbc.jpg', 6, 2, 1, '2021-02-23 22:06:47', '2021-02-23 22:06:47'),
(39, 'DUPLEX - Interior 1', 'DUPLEX - Interior 1', 'i-161411807460357cba36a7e.jpg', 7, 2, 2, '2021-02-23 22:07:54', '2021-02-23 22:07:54'),
(40, 'DUPLEX - Interior 8', 'DUPLEX - Interior 8', 'i-161411811360357ce18064c.jpg', 8, 2, 2, '2021-02-23 22:08:33', '2021-02-23 22:08:33'),
(41, 'DUPLEX - Interior 9', 'DUPLEX - Interior 9', 'i-161411812860357cf0163ad.jpg', 9, 2, 2, '2021-02-23 22:08:48', '2021-02-23 22:08:48'),
(42, 'FLAT - Interior 1', 'FLAT - Interior 1', 'i-161411818460357d28488a3.jpg', 10, 2, 2, '2021-02-23 22:09:44', '2021-02-23 22:12:08'),
(43, 'FLAT - Interior 5', 'FLAT - Interior 5', 'i-161411820660357d3e78507.jpg', 11, 2, 2, '2021-02-23 22:10:06', '2021-02-23 22:12:19'),
(44, 'FLAT - Interior 6', 'FLAT - Interior 6', 'i-161411821960357d4bcde14.jpg', 12, 2, 2, '2021-02-23 22:10:19', '2021-02-23 22:12:29'),
(45, 'FLAT - Interior 7', 'FLAT - Interior 7', 'i-161411824760357d6799d31.jpg', 13, 2, 2, '2021-02-23 22:10:47', '2021-02-23 22:12:38'),
(46, 'TRIPLEX - Interior 3', 'TRIPLEX - Interior 3', 'i-161411830460357da0d9230.jpg', 14, 2, 2, '2021-02-23 22:11:44', '2021-02-23 22:12:51'),
(47, 'TRIPLEX - Interior 4', 'TRIPLEX - Interior 4', 'i-161411839660357dfca0fc5.jpg', 15, 2, 2, '2021-02-23 22:13:16', '2021-02-23 22:13:16'),
(48, 'TRIPLEX - Sala Comedor', 'TRIPLEX - Dining Room', 'i-161411843960357e2773fa9.jpg', 16, 2, 2, '2021-02-23 22:13:59', '2021-02-23 22:13:59'),
(49, 'AC 1', 'AC 1', 'i-161411857260357eac44fb5.jpg', 1, 9, 1, '2021-02-23 22:16:12', '2021-02-23 22:16:12'),
(50, 'AC 2', 'AC 2', 'i-161411858660357eba6e856.jpg', 2, 9, 1, '2021-02-23 22:16:26', '2021-02-23 22:16:26'),
(51, 'AC 3', 'AC 3', 'i-161411860060357ec88ec4a.jpg', 3, 9, 1, '2021-02-23 22:16:40', '2021-02-23 22:16:40'),
(52, 'AC 4', 'AC 4', 'i-161411861860357eda2de8b.jpg', 4, 9, 1, '2021-02-23 22:16:58', '2021-02-23 22:16:58'),
(53, 'CASA - Cocina', 'HOME - Kitchen Room', 'i-161411876560357f6d0fa66.jpg', 5, 9, 2, '2021-02-23 22:19:25', '2021-02-23 22:19:25'),
(54, 'CASA - Dormitorio Principal', 'Home - Main Bedroom', 'i-161411890760357ffb4edc0.jpg', 6, 9, 2, '2021-02-23 22:21:47', '2021-02-23 22:21:47'),
(55, 'CASA - Sala Comedor', 'HOME - Dining Room', 'i-161411895060358026c84ad.jpg', 7, 9, 2, '2021-02-23 22:22:30', '2021-02-23 22:22:30'),
(56, 'FLAT - Baño Principal', 'FLAT - Main Bathroom', 'i-161411903360358079e9325.jpg', 8, 9, 2, '2021-02-23 22:23:53', '2021-02-23 22:23:53'),
(57, 'FLAT - Cocina', 'FLAT - Kitchen Room', 'i-1614119081603580a917c0b.jpg', 9, 9, 2, '2021-02-23 22:24:41', '2021-02-23 22:24:41'),
(58, 'FLAT - Dormitorio Principal', 'FLAT - Main Bedroom', 'i-1614119123603580d3e569b.jpg', 10, 9, 2, '2021-02-23 22:25:23', '2021-02-23 22:25:23'),
(59, 'FLAT - Dormitorio Secundario', 'FLAT - Secondary Bedroom', 'i-1614119154603580f22f353.jpg', 11, 9, 2, '2021-02-23 22:25:54', '2021-02-23 22:25:54'),
(60, 'FLAT - Sala Comedor', 'FLAT - Dining Room', 'i-1614119573603582959af01.jpg', 12, 9, 2, '2021-02-23 22:32:53', '2021-02-23 22:32:53'),
(61, 'Ascensores', 'Elevators', 'i-1614119843603583a3f041b.jpg', 1, 3, 1, '2021-02-23 22:37:23', '2021-02-23 22:37:23'),
(62, 'Coworking 2', 'Coworking 2', 'i-1614119858603583b2d96c2.jpg', 2, 3, 1, '2021-02-23 22:37:38', '2021-02-23 22:37:53'),
(63, 'Coworking', 'Coworking', 'i-1614119867603583bb60d3a.jpg', 3, 3, 1, '2021-02-23 22:37:47', '2021-02-23 22:37:47'),
(64, 'Lobby', 'Lobby', 'i-1614119893603583d501089.jpg', 4, 3, 1, '2021-02-23 22:38:13', '2021-02-23 22:38:13'),
(65, 'Sala Fitness', 'Fitness Room', 'i-1614119923603583f345e39.jpg', 5, 3, 1, '2021-02-23 22:38:43', '2021-02-23 22:38:43'),
(66, 'Terraza', 'Terrace', 'i-161411994560358409e2813.jpg', 6, 3, 1, '2021-02-23 22:39:05', '2021-02-23 22:39:05'),
(67, 'Terraza 2', 'Terrace 2', 'i-16141199646035841c4964f.jpg', 7, 3, 1, '2021-02-23 22:39:24', '2021-02-23 22:39:24'),
(68, 'Zona Parrilla', 'Grill Area', 'i-16141199916035843753ff3.jpg', 8, 3, 1, '2021-02-23 22:39:51', '2021-02-23 22:39:51'),
(69, 'Interior 1', 'Interior 1', 'i-16141200436035846b11a36.jpg', 9, 3, 2, '2021-02-23 22:40:43', '2021-02-23 22:40:43'),
(70, 'Interior 2', 'Interior 2', 'i-161412005560358477016fc.jpg', 10, 3, 2, '2021-02-23 22:40:55', '2021-02-23 22:40:55'),
(71, 'Interior 3', 'Interior 3', 'i-16141200666035848229e81.jpg', 11, 3, 2, '2021-02-23 22:41:06', '2021-02-23 22:41:06'),
(72, 'Interior 4', 'Interior 4', 'i-1614120080603584908da7e.jpg', 12, 3, 2, '2021-02-23 22:41:20', '2021-02-23 22:41:20'),
(73, 'Interior 5', 'Interior5', 'i-1614120096603584a0bbdfe.jpg', 13, 3, 2, '2021-02-23 22:41:36', '2021-02-23 22:41:36'),
(74, 'Interior 6', 'Interior 6', 'i-1614120108603584ac77da4.jpg', 14, 3, 2, '2021-02-23 22:41:48', '2021-02-23 22:41:48'),
(75, 'AC 1', 'AC 1', 'i-16141204616035860d11bb3.jpg', 1, 6, 1, '2021-02-23 22:47:41', '2021-02-23 22:47:41'),
(76, 'AC 2', 'AC 2', 'i-16141204716035861785e64.jpg', 2, 6, 1, '2021-02-23 22:47:51', '2021-02-23 22:47:51'),
(77, 'AC 3', 'AC 3', 'i-161412048560358625aada3.jpg', 3, 6, 1, '2021-02-23 22:48:05', '2021-02-23 22:48:05'),
(78, 'AC 4', 'AC 4', 'i-16141204956035862f9b0e3.jpg', 4, 6, 1, '2021-02-23 22:48:15', '2021-02-23 22:48:15'),
(79, 'AC 5', 'AC 5', 'i-1614120505603586398bfb7.jpg', 5, 6, 1, '2021-02-23 22:48:25', '2021-02-23 22:48:25'),
(80, 'AC 6', 'AC 6', 'i-16141205226035864a4c572.jpg', 6, 6, 1, '2021-02-23 22:48:42', '2021-02-23 22:48:42'),
(81, 'AC 7', 'AC 7', 'i-161412053260358654b2c21.jpg', 7, 6, 1, '2021-02-23 22:48:52', '2021-02-23 22:48:52'),
(82, 'Interior 1', 'Interior 1', 'i-161412058160358685146d9.jpg', 8, 6, 2, '2021-02-23 22:49:41', '2021-02-23 22:49:41'),
(83, 'Interior 2', 'Interior 2', 'i-161412059360358691721a1.jpg', 9, 6, 2, '2021-02-23 22:49:53', '2021-02-23 22:49:53'),
(84, 'Interior 3', 'Interior 3', 'i-16141206056035869d4f03b.jpg', 10, 6, 2, '2021-02-23 22:50:05', '2021-02-23 22:50:05'),
(85, 'Interior 4', 'Interior 4', 'i-1614120618603586aa0a0e3.jpg', 11, 6, 1, '2021-02-23 22:50:18', '2021-02-23 22:50:18'),
(86, 'Interior 5', 'Interior 5', 'i-1614120631603586b7b8905.jpg', 12, 6, 2, '2021-02-23 22:50:31', '2021-02-23 22:50:31'),
(87, 'Interior 6', 'Interior 6', 'i-1614120648603586c8c1937.jpg', 13, 6, 2, '2021-02-23 22:50:48', '2021-02-23 22:50:48'),
(88, 'AC 1', 'AC 1', 'i-16141213116035895f56c6e.jpg', 1, 5, 1, '2021-02-23 23:01:51', '2021-02-23 23:01:51'),
(89, 'AC 2', 'AC 2', 'i-16141213276035896fdc88e.jpg', 2, 5, 1, '2021-02-23 23:02:07', '2021-02-23 23:02:07'),
(90, 'AC 3', 'AC 3', 'i-16141213396035897bd3143.jpg', 3, 5, 1, '2021-02-23 23:02:19', '2021-02-23 23:02:19'),
(91, 'AC 4', 'AC 4', 'i-16141213556035898b469b0.jpg', 4, 5, 1, '2021-02-23 23:02:35', '2021-02-23 23:02:35'),
(92, 'AC 5', 'AC 5', 'i-161412136660358996dc4f3.jpg', 5, 5, 1, '2021-02-23 23:02:46', '2021-02-23 23:02:46'),
(93, 'AC 6', 'AC 6', 'i-1614121379603589a3a1f49.jpg', 6, 5, 1, '2021-02-23 23:02:59', '2021-02-23 23:02:59'),
(94, 'AC 7', 'AC 7', 'i-1614121391603589af91f6a.jpg', 7, 5, 1, '2021-02-23 23:03:11', '2021-02-23 23:03:11'),
(95, 'Interior 1', 'Interior 1', 'i-1614121450603589ea6c455.jpg', 8, 5, 2, '2021-02-23 23:04:10', '2021-02-23 23:05:04'),
(96, 'Interior 2', 'Interior 2', 'i-1614121462603589f6032a3.jpg', 9, 5, 2, '2021-02-23 23:04:22', '2021-02-23 23:04:55'),
(97, 'Interior 3', 'Interior 3', 'i-161412148760358a0f94cb8.jpg', 10, 5, 2, '2021-02-23 23:04:47', '2021-02-23 23:04:47'),
(98, 'Interior 4', 'Interior 4', 'i-161412152460358a34e15f1.jpg', 11, 5, 2, '2021-02-23 23:05:24', '2021-02-23 23:05:24'),
(99, 'Interior 5', 'Interior 5', 'i-161412153760358a417bf1b.jpg', 12, 5, 2, '2021-02-23 23:05:37', '2021-02-23 23:05:37'),
(100, 'Interior 6', 'Interior 6', 'i-161412155760358a5531595.jpg', 13, 5, 2, '2021-02-23 23:05:57', '2021-02-23 23:05:57'),
(101, 'AC 1', 'AC 1', 'i-161412177760358b3178b46.jpg', 1, 7, 1, '2021-02-23 23:09:37', '2021-02-23 23:09:37'),
(102, 'AC 2', 'AC 2', 'i-161412178960358b3d89cfc.jpg', 2, 7, 1, '2021-02-23 23:09:49', '2021-02-23 23:09:49'),
(103, 'AC 3', 'AC 3', 'i-161412181060358b522bcdb.jpg', 3, 7, 1, '2021-02-23 23:10:10', '2021-02-23 23:10:10'),
(104, 'AC 1', 'AC 1', 'i-161412194360358bd7d775c.jpg', 1, 8, 1, '2021-02-23 23:12:23', '2021-02-23 23:12:23'),
(105, 'AC 2', 'AC 2', 'i-161412195360358be18adbe.jpg', 2, 8, 1, '2021-02-23 23:12:33', '2021-02-23 23:12:33'),
(106, 'AC 3', 'AC 3', 'i-161412196160358be9b85c0.jpg', 3, 8, 1, '2021-02-23 23:12:41', '2021-02-23 23:12:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_quotation`
--

CREATE TABLE `project_quotation` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_number` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `project_type_department_id` bigint(20) UNSIGNED NOT NULL,
  `advisor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `project_quotation`
--

INSERT INTO `project_quotation` (`id`, `name`, `email`, `document_number`, `mobile`, `message`, `project_id`, `project_type_department_id`, `advisor_id`, `created_at`, `updated_at`) VALUES
(4, 'Felipe', 'javier@playgroup.pe', '98857488', '997965758', '5345', 2, 2, 3, '2021-02-24 01:32:42', '2021-02-24 01:32:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_statuses`
--

CREATE TABLE `project_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `project_statuses`
--

INSERT INTO `project_statuses` (`id`, `name_es`, `name_en`, `slug_es`, `slug_en`, `created_at`, `updated_at`) VALUES
(1, 'Pre-venta', 'Pre-sale', 'pre-venta', 'pre-sale', '2021-02-18 18:21:47', '2021-02-18 18:21:55'),
(2, 'Entrega Inmediata', 'Immediate Delivery', 'entrega-inmediata', 'immediate-delivery', '2021-02-18 18:22:20', '2021-02-18 18:22:20'),
(4, 'En construcción', 'In construction', 'en-construccion', 'in-construction', '2021-02-19 16:21:15', '2021-02-19 16:21:15'),
(5, 'Terminado', 'Finished', 'terminado', 'finished', '2021-02-23 21:17:18', '2021-02-23 21:17:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_type_departments`
--

CREATE TABLE `project_type_departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` bigint(20) NOT NULL,
  `price` decimal(11,2) DEFAULT NULL,
  `area` double(8,2) NOT NULL,
  `room` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '0',
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `project_type_departments`
--

INSERT INTO `project_type_departments` (`id`, `name`, `slug`, `image`, `index`, `price`, `area`, `room`, `available`, `project_id`, `created_at`, `updated_at`) VALUES
(1, 'Edificio 2 - Dpto 102', 'edificio-2-dpto-102', 'i-1613758075602ffe7be9e3f.jpg', 1, '500.00', 136.00, 3, 1, 4, '2021-02-19 18:07:55', '2021-02-19 18:07:55'),
(2, 'Edificio A / Duplex Cabecera Central / Piso 1', 'edificio-a-duplex-cabecera-central-piso-1', 'i-16141302656035ac595faed.jpg', 1, '100.00', 91.00, 3, 1, 2, '2021-02-24 01:31:05', '2021-02-24 01:31:05'),
(3, 'Edificio A / Dúplex Cabecera / Piso 1 / Extremo 1', 'edificio-a-duplex-cabecera-piso-1-extremo-1', 'i-16141393366035cfc8b7863.jpg', 2, '500.00', 91.00, 3, 1, 2, '2021-02-24 04:02:16', '2021-02-24 04:02:16'),
(4, 'Departamento piso completo', 'departamento-piso-completo', 'i-16141440606035e23c5dfca.jpg', 1, '100.00', 359.00, 3, 1, 5, '2021-02-24 05:21:00', '2021-02-24 05:21:00'),
(5, 'Departamento Dúplex', 'departamento-duplex', 'i-16141441276035e27fe8358.jpg', 2, '100.00', 224.00, 3, 1, 5, '2021-02-24 05:22:07', '2021-02-24 05:22:07'),
(6, 'Departamento Flat', 'departamento-flat', 'i-16141442326035e2e8ac4f4.jpg', 3, '100.00', 246.00, 3, 1, 5, '2021-02-24 05:23:52', '2021-02-24 05:23:52'),
(7, 'Kampu / Departamento Piso Típico', 'kampu-departamento-piso-tipico', 'i-16141448766035e56c0ab72.jpg', 1, '100.00', 65.00, 3, 1, 6, '2021-02-24 05:34:36', '2021-02-24 05:34:36'),
(8, 'Kampu / Departamento 5 y 6 Piso / Dúplex', 'kampu-departamento-5-y-6-piso-duplex', 'i-16141450046035e5ec7a301.jpg', 2, '100.00', 130.50, 3, 1, 6, '2021-02-24 05:36:44', '2021-02-24 05:36:44'),
(9, 'Kampu / Departamento 1 Piso / 102 Y 103', 'kampu-departamento-1-piso-102-y-103', 'i-16141451166035e65c1b2fc.jpg', 3, '100.00', 77.50, 3, 1, 6, '2021-02-24 05:38:36', '2021-02-24 05:38:36'),
(10, 'Tipo X02', 'tipo-x02', 'i-16141471526035ee5089bb8.jpg', 1, '10.00', 40.10, 2, 1, 3, '2021-02-24 06:12:32', '2021-02-24 06:12:32'),
(11, 'Tipo X03', 'tipo-x03', 'i-16141472176035ee9191f45.jpg', 2, '10.00', 47.46, 2, 1, 3, '2021-02-24 06:13:37', '2021-02-24 06:13:37'),
(12, 'Tipo X04', 'tipo-x04', 'i-16141472526035eeb41fece.jpg', 3, '10.00', 49.59, 2, 1, 3, '2021-02-24 06:14:12', '2021-02-24 06:14:12'),
(13, 'Tipo X05', 'tipo-x05', 'i-16141474586035ef8268dd1.jpg', 4, '10.00', 63.73, 2, 1, 3, '2021-02-24 06:17:38', '2021-02-24 06:17:38'),
(14, 'Tipo X08', 'tipo-x08', 'i-16141475416035efd51f9a0.jpg', 5, '10.00', 53.11, 2, 1, 3, '2021-02-24 06:19:01', '2021-02-24 06:19:01'),
(15, 'Tipo X09', 'tipo-x09', 'i-16141475936035f009678fa.jpg', 6, '100.00', 53.14, 2, 1, 3, '2021-02-24 06:19:53', '2021-02-24 06:19:53'),
(16, 'Tipo X10', 'tipo-x10', 'i-16141476476035f03f53fda.jpg', 7, '10.00', 53.05, 2, 1, 3, '2021-02-24 06:20:47', '2021-02-24 06:20:47'),
(17, 'Flat Cabecera / Edificio B', 'flat-cabecera-edificio-b', 'i-16141512486035fe50f03f8.jpg', 1, '100.00', 52.27, 1, 1, 1, '2021-02-24 07:20:48', '2021-02-24 07:20:48'),
(18, 'Edificio A / Flat / Tipo 1', 'edificio-a-flat-tipo-1', 'i-1614151902603600dee0698.jpg', 1, '10.00', 98.00, 4, 1, 9, '2021-02-24 07:31:42', '2021-02-24 07:31:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_virtual_tour`
--

CREATE TABLE `project_virtual_tour` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci,
  `url_360` tinyint(1) NOT NULL DEFAULT '1',
  `index` bigint(20) NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `project_virtual_tour`
--

INSERT INTO `project_virtual_tour` (`id`, `name`, `image`, `url`, `url_360`, `index`, `project_id`, `created_at`, `updated_at`) VALUES
(1, 'Interior', 'vt-161412562960359a3d4f20d.jpg', 'https://vr.geoinnovacion.com/lider_alegra/', 1, 1, 8, '2021-02-24 00:13:49', '2021-02-24 00:13:49'),
(2, 'Tour', 'vt-161412678660359ec293628.jpg', 'https://www.youtube.com/watch?v=U8QIrmIZUe8', 0, 1, 4, '2021-02-24 00:33:06', '2021-02-24 00:33:06'),
(3, 'Tour 1', 'vt-16141280846035a3d46c46c.jpg', 'https://my.matterport.com/show/?m=5WY6a9gg62P&play=1&lang=es', 1, 1, 6, '2021-02-24 00:54:44', '2021-02-24 00:54:44'),
(4, 'Tour 2', 'vt-16141281056035a3e9e4f88.jpg', 'https://my.matterport.com/show/?m=MuqAy1uSgW8&play=1&lang=es', 1, 2, 6, '2021-02-24 00:55:05', '2021-02-24 00:55:05'),
(5, 'Tour', 'vt-16141281816035a435a706e.jpg', 'https://www.youtube.com/watch?v=wBfj-SEo52M', 0, 1, 5, '2021-02-24 00:56:21', '2021-02-24 00:56:21'),
(6, 'Duplex', 'vt-16141282896035a4a14d30c.jpg', 'https://youtu.be/PLJ27g3wKSI', 0, 1, 2, '2021-02-24 00:58:09', '2021-02-24 00:58:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `slider`
--

CREATE TABLE `slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image_es` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_responsive_es` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_en` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_responsive_en` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` datetime DEFAULT NULL,
  `to` datetime DEFAULT NULL,
  `index` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `slider`
--

INSERT INTO `slider` (`id`, `image_es`, `image_responsive_es`, `image_en`, `image_responsive_en`, `from`, `to`, `index`, `created_at`, `updated_at`) VALUES
(1, 'se-1613681170602ed2123368e.jpg', 'sre-1613681170602ed21233991.jpg', 'sen-1613681170602ed21233a72.jpg', 'sren-1613681170602ed21233b78.jpg', '2021-02-18 15:45:00', '2021-05-31 06:30:00', 1, '2021-02-18 20:46:10', '2021-02-23 17:45:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `social_networks`
--

CREATE TABLE `social_networks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` int(11) NOT NULL,
  `master_social_network_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `social_networks`
--

INSERT INTO `social_networks` (`id`, `url`, `index`, `master_social_network_id`, `created_at`, `updated_at`) VALUES
(1, 'https://www.youtube.com/channel/UCy-1jCc3fMNMbnKWvaERhmA', 2, 3, '2021-02-18 18:30:16', '2021-02-18 18:30:30'),
(2, 'https://www.facebook.com/LiderGrupoConstructor/', 1, 1, '2021-02-18 18:30:24', '2021-02-18 18:30:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscribers`
--

CREATE TABLE `suscribers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tags`
--

INSERT INTO `tags` (`id`, `name_es`, `name_en`, `post_id`, `created_at`, `updated_at`) VALUES
(1, 'decoración', 'decoration', 1, '2021-02-18 22:23:02', '2021-02-18 22:23:02'),
(2, 'department', 'apartment', 1, '2021-02-18 22:23:02', '2021-02-18 22:23:02'),
(3, 'plantas', 'plants', 1, '2021-02-18 22:23:02', '2021-02-18 22:23:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci,
  `description_en` text COLLATE utf8mb4_unicode_ci,
  `title_es` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_video` text COLLATE utf8mb4_unicode_ci,
  `type_video` tinyint(1) NOT NULL,
  `index` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `testimonials`
--

INSERT INTO `testimonials` (`id`, `description_es`, `description_en`, `title_es`, `title_en`, `project`, `image`, `url_video`, `type_video`, `index`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 'Familia Sanchez', 'Family Sanchez', 'DOSS', 't-1613673133602eb2ad7fc4c.jpg', NULL, 1, 1, '2021-02-18 18:32:13', '2021-02-18 18:32:13'),
(2, '<p>Español Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.</p><p>Thank you so much for your help. Thank you for making it painless, pleasant and most of all hassle free!</p>', '<p><strong>Lorem Ipsum es simplemente</strong> el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.</p><p>Thank you so much for your help. Thank you for making it painless, pleasant and most of all hassle free!</p>', 'Familia Perez', 'Family Perez', 'Unno', NULL, NULL, 0, 2, '2021-02-18 18:39:13', '2021-02-18 18:39:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `amount` double(8,2) NOT NULL,
  `transaction_status_id` bigint(20) UNSIGNED NOT NULL,
  `response` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_department_blueprints`
--

CREATE TABLE `type_department_blueprints` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description_es` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `index` bigint(20) NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type_department_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `avatar`, `password`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Anthony Tucto', 'anthony@playgroup.pe', NULL, '$2y$10$tSHr0WcYVTPq6UWJZvDf8.eyap/s/zSic.zvnheWKOiORK1e/fKde', 'RhXO3wXzl202aRi7zQORjExw1ovAQTuVF6ugoui9sTHZo4ie74XR8wXosU19', NULL, NULL, NULL),
(2, 'Javier Leonardo', 'javier@playgroup.pe', NULL, '$2y$10$6e1PqcKT/W9F25D4oZnyGO5qDuDTGAzW5s63OjJ9kSAyDslivcXxq', NULL, NULL, '2021-02-23 17:47:11', '2021-02-23 17:47:11'),
(3, 'Lider Administrador', 'admin@lider.com.pe', NULL, '$2y$10$IBZ9eNYXEzzPgVm42xCRiuHmdcnQuJ/UMQCKOAHSZniu2SgHftGhq', 'agYEjXr9nZkX4erGdhmlkI4KdfyvP2ucBLF39M3kUFo9b8ezsvbZLGh1xNUP', '2021-02-23 17:48:10', '2021-02-23 18:29:48', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `about_customer_support`
--
ALTER TABLE `about_customer_support`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `about_projects_finished`
--
ALTER TABLE `about_projects_finished`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `about_texts`
--
ALTER TABLE `about_texts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `about_warranty_elements`
--
ALTER TABLE `about_warranty_elements`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `advisors`
--
ALTER TABLE `advisors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bonds`
--
ALTER TABLE `bonds`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cami`
--
ALTER TABLE `cami`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cami_elements`
--
ALTER TABLE `cami_elements`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_es_unique` (`slug_es`),
  ADD UNIQUE KEY `categories_slug_en_unique` (`slug_en`);

--
-- Indices de la tabla `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `complaints_book`
--
ALTER TABLE `complaints_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `complaints_book_document_type_id_foreign` (`document_type_id`),
  ADD KEY `complaints_book_code_ubigeo_foreign` (`code_ubigeo`),
  ADD KEY `complaints_book_claim_type_id_foreign` (`claim_type_id`),
  ADD KEY `complaints_book_good_contracted_id_foreign` (`good_contracted_id`);

--
-- Indices de la tabla `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`),
  ADD KEY `content_master_section_id_foreign` (`master_section_id`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `email_destination`
--
ALTER TABLE `email_destination`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `financing_options`
--
ALTER TABLE `financing_options`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `leads_lead_source_id_foreign` (`lead_source_id`);

--
-- Indices de la tabla `leads_sale_land`
--
ALTER TABLE `leads_sale_land`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `leads_videocall`
--
ALTER TABLE `leads_videocall`
  ADD PRIMARY KEY (`id`),
  ADD KEY `leads_videocall_project_id_foreign` (`project_id`),
  ADD KEY `leads_videocall_advisor_id_foreign` (`advisor_id`);

--
-- Indices de la tabla `master_claims_type`
--
ALTER TABLE `master_claims_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_currencies`
--
ALTER TABLE `master_currencies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_documents_type`
--
ALTER TABLE `master_documents_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_fields`
--
ALTER TABLE `master_fields`
  ADD PRIMARY KEY (`id`),
  ADD KEY `master_fields_master_section_id_foreign` (`master_section_id`);

--
-- Indices de la tabla `master_good_contracted_type`
--
ALTER TABLE `master_good_contracted_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_leads_medium`
--
ALTER TABLE `master_leads_medium`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_leads_source`
--
ALTER TABLE `master_leads_source`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_leads_time_day`
--
ALTER TABLE `master_leads_time_day`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_modules`
--
ALTER TABLE `master_modules`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_pages`
--
ALTER TABLE `master_pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `master_pages_slug_es_unique` (`slug_es`),
  ADD UNIQUE KEY `master_pages_slug_en_unique` (`slug_en`);

--
-- Indices de la tabla `master_sections`
--
ALTER TABLE `master_sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `master_sections_master_page_id_foreign` (`master_page_id`);

--
-- Indices de la tabla `master_social_networks`
--
ALTER TABLE `master_social_networks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_transaction_status`
--
ALTER TABLE `master_transaction_status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_type_gallery`
--
ALTER TABLE `master_type_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `master_ubigeo`
--
ALTER TABLE `master_ubigeo`
  ADD PRIMARY KEY (`code_ubigeo`);

--
-- Indices de la tabla `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_customer_id_foreign` (`customer_id`);

--
-- Indices de la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_project_id_foreign` (`project_id`),
  ADD KEY `order_details_project_type_department_id_foreign` (`project_type_department_id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`),
  ADD KEY `posts_category_id_foreign` (`category_id`);

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_project_status_id_foreign` (`project_status_id`),
  ADD KEY `projects_code_ubigeo_foreign` (`code_ubigeo`);

--
-- Indices de la tabla `projects_advisors`
--
ALTER TABLE `projects_advisors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_advisors_advisor_id_foreign` (`advisor_id`),
  ADD KEY `projects_advisors_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `projects_banks`
--
ALTER TABLE `projects_banks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_banks_bank_id_foreign` (`bank_id`),
  ADD KEY `projects_banks_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `projects_bonds`
--
ALTER TABLE `projects_bonds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_bonds_bond_id_foreign` (`bond_id`),
  ADD KEY `projects_bonds_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `projects_project_features`
--
ALTER TABLE `projects_project_features`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_project_features_feature_id_foreign` (`feature_id`),
  ADD KEY `projects_project_features_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `project_features`
--
ALTER TABLE `project_features`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `project_files`
--
ALTER TABLE `project_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_files_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `project_gallery`
--
ALTER TABLE `project_gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_gallery_project_id_foreign` (`project_id`),
  ADD KEY `project_gallery_master_type_gallery_id_foreign` (`master_type_gallery_id`);

--
-- Indices de la tabla `project_quotation`
--
ALTER TABLE `project_quotation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_quotation_project_id_foreign` (`project_id`),
  ADD KEY `project_quotation_project_type_department_id_foreign` (`project_type_department_id`),
  ADD KEY `project_quotation_advisor_id_foreign` (`advisor_id`);

--
-- Indices de la tabla `project_statuses`
--
ALTER TABLE `project_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `project_type_departments`
--
ALTER TABLE `project_type_departments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_type_departments_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `project_virtual_tour`
--
ALTER TABLE `project_virtual_tour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_virtual_tour_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `social_networks`
--
ALTER TABLE `social_networks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `social_networks_master_social_network_id_foreign` (`master_social_network_id`);

--
-- Indices de la tabla `suscribers`
--
ALTER TABLE `suscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tags_post_id_foreign` (`post_id`);

--
-- Indices de la tabla `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_order_id_foreign` (`order_id`),
  ADD KEY `transactions_transaction_status_id_foreign` (`transaction_status_id`);

--
-- Indices de la tabla `type_department_blueprints`
--
ALTER TABLE `type_department_blueprints`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_department_blueprints_type_department_id_foreign` (`type_department_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `about_customer_support`
--
ALTER TABLE `about_customer_support`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `about_projects_finished`
--
ALTER TABLE `about_projects_finished`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `about_texts`
--
ALTER TABLE `about_texts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `about_warranty_elements`
--
ALTER TABLE `about_warranty_elements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `advisors`
--
ALTER TABLE `advisors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `banks`
--
ALTER TABLE `banks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `bonds`
--
ALTER TABLE `bonds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `cami`
--
ALTER TABLE `cami`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `cami_elements`
--
ALTER TABLE `cami_elements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `complaints_book`
--
ALTER TABLE `complaints_book`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `content`
--
ALTER TABLE `content`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
--
-- AUTO_INCREMENT de la tabla `email_destination`
--
ALTER TABLE `email_destination`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `financing_options`
--
ALTER TABLE `financing_options`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `information`
--
ALTER TABLE `information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `leads`
--
ALTER TABLE `leads`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `leads_sale_land`
--
ALTER TABLE `leads_sale_land`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `leads_videocall`
--
ALTER TABLE `leads_videocall`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `master_claims_type`
--
ALTER TABLE `master_claims_type`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `master_currencies`
--
ALTER TABLE `master_currencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `master_documents_type`
--
ALTER TABLE `master_documents_type`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `master_fields`
--
ALTER TABLE `master_fields`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT de la tabla `master_good_contracted_type`
--
ALTER TABLE `master_good_contracted_type`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `master_leads_source`
--
ALTER TABLE `master_leads_source`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `master_leads_time_day`
--
ALTER TABLE `master_leads_time_day`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `master_modules`
--
ALTER TABLE `master_modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT de la tabla `master_pages`
--
ALTER TABLE `master_pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `master_sections`
--
ALTER TABLE `master_sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT de la tabla `master_social_networks`
--
ALTER TABLE `master_social_networks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `master_transaction_status`
--
ALTER TABLE `master_transaction_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `master_type_gallery`
--
ALTER TABLE `master_type_gallery`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000;
--
-- AUTO_INCREMENT de la tabla `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `projects_advisors`
--
ALTER TABLE `projects_advisors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=190;
--
-- AUTO_INCREMENT de la tabla `projects_banks`
--
ALTER TABLE `projects_banks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT de la tabla `projects_bonds`
--
ALTER TABLE `projects_bonds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT de la tabla `projects_project_features`
--
ALTER TABLE `projects_project_features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- AUTO_INCREMENT de la tabla `project_features`
--
ALTER TABLE `project_features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `project_files`
--
ALTER TABLE `project_files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `project_gallery`
--
ALTER TABLE `project_gallery`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
--
-- AUTO_INCREMENT de la tabla `project_quotation`
--
ALTER TABLE `project_quotation`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `project_statuses`
--
ALTER TABLE `project_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `project_type_departments`
--
ALTER TABLE `project_type_departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de la tabla `project_virtual_tour`
--
ALTER TABLE `project_virtual_tour`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `slider`
--
ALTER TABLE `slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `social_networks`
--
ALTER TABLE `social_networks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `suscribers`
--
ALTER TABLE `suscribers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `type_department_blueprints`
--
ALTER TABLE `type_department_blueprints`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `complaints_book`
--
ALTER TABLE `complaints_book`
  ADD CONSTRAINT `complaints_book_claim_type_id_foreign` FOREIGN KEY (`claim_type_id`) REFERENCES `master_documents_type` (`id`),
  ADD CONSTRAINT `complaints_book_code_ubigeo_foreign` FOREIGN KEY (`code_ubigeo`) REFERENCES `master_ubigeo` (`code_ubigeo`),
  ADD CONSTRAINT `complaints_book_document_type_id_foreign` FOREIGN KEY (`document_type_id`) REFERENCES `master_documents_type` (`id`),
  ADD CONSTRAINT `complaints_book_good_contracted_id_foreign` FOREIGN KEY (`good_contracted_id`) REFERENCES `master_good_contracted_type` (`id`);

--
-- Filtros para la tabla `content`
--
ALTER TABLE `content`
  ADD CONSTRAINT `content_master_section_id_foreign` FOREIGN KEY (`master_section_id`) REFERENCES `master_sections` (`id`);

--
-- Filtros para la tabla `leads`
--
ALTER TABLE `leads`
  ADD CONSTRAINT `leads_lead_source_id_foreign` FOREIGN KEY (`lead_source_id`) REFERENCES `master_leads_source` (`id`);

--
-- Filtros para la tabla `leads_videocall`
--
ALTER TABLE `leads_videocall`
  ADD CONSTRAINT `leads_videocall_advisor_id_foreign` FOREIGN KEY (`advisor_id`) REFERENCES `advisors` (`id`),
  ADD CONSTRAINT `leads_videocall_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `master_fields`
--
ALTER TABLE `master_fields`
  ADD CONSTRAINT `master_fields_master_section_id_foreign` FOREIGN KEY (`master_section_id`) REFERENCES `master_sections` (`id`);

--
-- Filtros para la tabla `master_sections`
--
ALTER TABLE `master_sections`
  ADD CONSTRAINT `master_sections_master_page_id_foreign` FOREIGN KEY (`master_page_id`) REFERENCES `master_pages` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Filtros para la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_details_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  ADD CONSTRAINT `order_details_project_type_department_id_foreign` FOREIGN KEY (`project_type_department_id`) REFERENCES `project_type_departments` (`id`);

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_code_ubigeo_foreign` FOREIGN KEY (`code_ubigeo`) REFERENCES `master_ubigeo` (`code_ubigeo`),
  ADD CONSTRAINT `projects_project_status_id_foreign` FOREIGN KEY (`project_status_id`) REFERENCES `project_statuses` (`id`);

--
-- Filtros para la tabla `projects_advisors`
--
ALTER TABLE `projects_advisors`
  ADD CONSTRAINT `projects_advisors_advisor_id_foreign` FOREIGN KEY (`advisor_id`) REFERENCES `advisors` (`id`),
  ADD CONSTRAINT `projects_advisors_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `projects_banks`
--
ALTER TABLE `projects_banks`
  ADD CONSTRAINT `projects_banks_bank_id_foreign` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`id`),
  ADD CONSTRAINT `projects_banks_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `projects_bonds`
--
ALTER TABLE `projects_bonds`
  ADD CONSTRAINT `projects_bonds_bond_id_foreign` FOREIGN KEY (`bond_id`) REFERENCES `bonds` (`id`),
  ADD CONSTRAINT `projects_bonds_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `projects_project_features`
--
ALTER TABLE `projects_project_features`
  ADD CONSTRAINT `projects_project_features_feature_id_foreign` FOREIGN KEY (`feature_id`) REFERENCES `project_features` (`id`),
  ADD CONSTRAINT `projects_project_features_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `project_files`
--
ALTER TABLE `project_files`
  ADD CONSTRAINT `project_files_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `project_gallery`
--
ALTER TABLE `project_gallery`
  ADD CONSTRAINT `project_gallery_master_type_gallery_id_foreign` FOREIGN KEY (`master_type_gallery_id`) REFERENCES `master_type_gallery` (`id`),
  ADD CONSTRAINT `project_gallery_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `project_quotation`
--
ALTER TABLE `project_quotation`
  ADD CONSTRAINT `project_quotation_advisor_id_foreign` FOREIGN KEY (`advisor_id`) REFERENCES `advisors` (`id`),
  ADD CONSTRAINT `project_quotation_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  ADD CONSTRAINT `project_quotation_project_type_department_id_foreign` FOREIGN KEY (`project_type_department_id`) REFERENCES `project_type_departments` (`id`);

--
-- Filtros para la tabla `project_type_departments`
--
ALTER TABLE `project_type_departments`
  ADD CONSTRAINT `project_type_departments_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `project_virtual_tour`
--
ALTER TABLE `project_virtual_tour`
  ADD CONSTRAINT `project_virtual_tour_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Filtros para la tabla `social_networks`
--
ALTER TABLE `social_networks`
  ADD CONSTRAINT `social_networks_master_social_network_id_foreign` FOREIGN KEY (`master_social_network_id`) REFERENCES `master_social_networks` (`id`);

--
-- Filtros para la tabla `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `transactions_transaction_status_id_foreign` FOREIGN KEY (`transaction_status_id`) REFERENCES `master_transaction_status` (`id`);

--
-- Filtros para la tabla `type_department_blueprints`
--
ALTER TABLE `type_department_blueprints`
  ADD CONSTRAINT `type_department_blueprints_type_department_id_foreign` FOREIGN KEY (`type_department_id`) REFERENCES `project_type_departments` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
