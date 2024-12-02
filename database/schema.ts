import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
  idUser: text('id').primaryKey(),
  nomeCompleto: text('nome_completo').notNull(),
  cpf: text('cpf').notNull(),
  dataNascimeto: integer('data_nascimento').notNull(),
  time: text('nome_time').notNull(),
  cep: text('cep').notNull(),
  logradouro: text('logradouro').notNull(),
  numero: text('numero').notNull(),
  complemento: text('complemento').notNull(),
  celular: text('celular').notNull(),
  email: text('email').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(CURRENT_DATE)`),
});

export const team = sqliteTable('team', {
  idTime: text('id_time').primaryKey(),
  nomeTime: text('nome_time').notNull(),
  imagemTime: text('imagem_time').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(CURRENT_DATE)`),
});

export const food = sqliteTable('food', {
  idComida: text('id_comida').primaryKey(),
  nomeComida: text('nome_comida').notNull(),
  imagemComida: text('imagem_comida').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(CURRENT_DATE)`),
});

export const bet = sqliteTable('bet', {
  idBet: text('id_bet').primaryKey(),
  usuario1: text('usuario1').notNull(),
  usuario2: text('usuario2').notNull(),
  partida: text('partida').notNull(),
  idComida: text('id_comida').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(CURRENT_DATE)`),
});