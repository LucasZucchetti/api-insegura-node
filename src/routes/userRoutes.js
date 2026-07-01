import express from "express";
import controller from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: user
 *         email:
 *           type: string
 *           example: user@email.com
 *         senha:
 *           type: string
 *           example: 123456
 *
 *     NovoUsuario:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - senha
 *       properties:
 *         nome:
 *           type: string
 *           example: user
 *         email:
 *           type: string
 *           example: user@email.com
 *         senha:
 *           type: string
 *           example: 123456
 */

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: CRUD de usuários
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     tags: [Usuários]
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get("/", controller.listar);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     tags: [Usuários]
 *     summary: Busca um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:id", controller.buscar);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     tags: [Usuários]
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoUsuario'
 *     responses:
 *       201:
 *         description: Usuário criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.post("/", controller.criar);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     tags: [Usuários]
 *     summary: Atualiza um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoUsuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */
router.put("/:id", controller.atualizar);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     tags: [Usuários]
 *     summary: Remove um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuário removido
 */
router.delete("/:id", controller.remover);

export default router;