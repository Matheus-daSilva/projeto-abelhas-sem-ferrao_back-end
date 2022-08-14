import prisma from "../../src/config/database.js"
import supertest from "supertest"
import app from "../../src/app.js"

const publication = {
    url: "https://youtube.com",
    description: "vídeo maneiro"
  }